"use client";

import { useState, useEffect } from "react";
import { PlusCircle, Trash2, Edit, Plus, FileUp, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  fetchAvailableSchemas,
  loadTemplate,
  fetchAvailableApps,
  loadApp,
  saveApp,
  deleteApp,
} from "@/lib/api";
import { formatTemplateNameForDisplay } from "@/lib/schemaUtils";
import { BASE_TEMPLATE, BASE_METADATA } from "@/lib/base";
import styles from "./useCaseManager.module.css";
import AddEntityDialog from "./addEntityDialog/AddEntityDialog";
import AddUseCaseDialog from "./addUseCaseDialog/AddUseCaseDialog";

// Field types used in the UI
const fieldTypes = ["String", "Number", "Date", "Boolean", "Object", "Array"];
const DEFAULT_TEMPLATE = "my_custom_schema";

export default function UseCaseManager() {
  // State for entity selection in AddUseCaseDialog
  const [selectedEntity, setSelectedEntity] = useState("vehicle");

  // UI states
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Draft state tracks all changes before saving
  const [draftAppDef, setDraftAppDef] = useState({
    id: "",
    name: "New App Definition",
    description: "",
    schemaId: DEFAULT_TEMPLATE,
    useCases: [],
    customEntities: [],
  });

  // Original app definition from database (for comparison)
  const [originalAppDef, setOriginalAppDef] = useState(null);

  // UI states
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const [appDefinitions, setAppDefinitions] = useState([]);
  const [loadingApps, setLoadingApps] = useState(false);
  const [deletingAppId, setDeletingAppId] = useState(null);
  const [showAppDialog, setShowAppDialog] = useState(false);
  const [showEntityDetailsDialog, setShowEntityDetailsDialog] = useState(false);
  const [entityToView, setEntityToView] = useState(null);

  // Schema related state
  const [availableSchemas, setAvailableSchemas] = useState([]);
  const [schemasLoading, setSchemasLoading] = useState(true);
  const [selectedSchema, setSelectedSchema] = useState(BASE_TEMPLATE.schema);

  // Custom entities state
  const [showEntityDialog, setShowEntityDialog] = useState(false);
  const [showFieldDialog, setShowFieldDialog] = useState(false);
  const [currentEntity, setCurrentEntity] = useState(null);
  const [newField, setNewField] = useState({
    name: "",
    type: "String",
    description: "",
  });

  // Use cases state
  const [showUseCaseDialog, setShowUseCaseDialog] = useState(false);
  const [activeUseCase, setActiveUseCase] = useState(null);
  const [newUseCase, setNewUseCase] = useState({
    name: "",
    description: "",
    fields: [],
    accessPatterns: [],
    frequency: "Medium",
    operation: "read",
  });

  // Update hasUnsavedChanges whenever draftAppDef changes
  useEffect(() => {
    if (!originalAppDef) return;

    // Simple deep comparison to detect changes
    const hasChanges =
      JSON.stringify(draftAppDef) !== JSON.stringify(originalAppDef);
    setHasUnsavedChanges(hasChanges);
  }, [draftAppDef, originalAppDef]);

  // Load available schemas on component mount
  useEffect(() => {
    async function loadSchemas() {
      setSchemasLoading(true);
      try {
        const templates = await fetchAvailableSchemas();
        setAvailableSchemas(templates);

        if (templates.length > 0 && !draftAppDef.schemaId) {
          // Update draft with default schema
          setDraftAppDef((prev) => ({
            ...prev,
            schemaId: DEFAULT_TEMPLATE,
          }));
        }
      } catch (e) {
        console.error("Error loading schemas:", e);
        setAvailableSchemas([]);
      } finally {
        setSchemasLoading(false);
      }
    }
    loadSchemas();
  }, []);

  // Load schema details when selected schema changes
  useEffect(() => {
    async function fetchSchemaDetails() {
      if (draftAppDef.schemaId === DEFAULT_TEMPLATE) {
        setSelectedSchema(BASE_TEMPLATE.schema);
      } else if (draftAppDef.schemaId) {
        try {
          const result = await loadTemplate(draftAppDef.schemaId);
          setSelectedSchema(result.schema);
        } catch (e) {
          console.error("Error loading template:", e);
          setSelectedSchema({});
        }
      }
    }
    fetchSchemaDetails();
  }, [draftAppDef.schemaId]);

  // Function to load available apps
  const loadAvailableApps = async () => {
    setLoadingApps(true);
    try {
      const apps = await fetchAvailableApps();
      setAppDefinitions(apps);
    } catch (e) {
      console.error("Error fetching apps:", e);
      setAppDefinitions([]);
    } finally {
      setLoadingApps(false);
    }
  };

  // Handle deleting an app definition
  const handleDeleteApp = async (appId, e) => {
    e.stopPropagation(); // Prevent the card click event from firing

    if (
      !window.confirm(
        "Are you sure you want to delete this app? This action cannot be undone."
      )
    ) {
      return;
    }

    setDeletingAppId(appId);

    try {
      await deleteApp(appId);

      // Refresh the app definitions list
      await loadAvailableApps();
    } catch (error) {
      console.error("Error deleting app:", error);
      // Could show an error notification here
    } finally {
      setDeletingAppId(null);
    }
  };

  // Effect to load apps when dialog is opened
  useEffect(() => {
    if (showAppDialog) {
      loadAvailableApps();
    }
  }, [showAppDialog]);

  // Get all available fields from schema and custom entities
  const getAllFields = () => {
    // Get custom entity fields with entity name added
    const entityFields = draftAppDef.customEntities.flatMap((entity) =>
      entity.fields.map((field) => ({
        ...field,
        entity: entity.name,
        type: field.type || "String",
      }))
    );

    // Get vehicle fields from BASE_METADATA (filtering out branches)
    const vehicleFields = BASE_METADATA.filter(
      (signal) => signal.type !== "branch"
    ).map((signal) => ({
      ...signal,
      entity: "Vehicle",
      type: signal.type || "attribute",
    }));

    return [...vehicleFields, ...entityFields];
  };

  // Normalize use case data to ensure consistent format
  const normalizeUseCase = (useCase) => {
    // Ensure accessPatterns is always an array
    let accessPatterns = useCase.accessPatterns || [];
    if (typeof accessPatterns === "string") {
      accessPatterns = [accessPatterns];
    }

    // Ensure other required fields have defaults
    return {
      id: useCase.id || Date.now(),
      name: useCase.name || "",
      description: useCase.description || "",
      fields: useCase.fields || [],
      accessPatterns,
      frequency: useCase.frequency || "Medium",
      operation: useCase.operation || "read",
    };
  };

  // Handle adding a new use case
  const handleAddUseCase = () => {
    const normalizedUseCase = normalizeUseCase(newUseCase);
    let updatedUseCases;

    if (activeUseCase) {
      // Edit existing use case
      updatedUseCases = draftAppDef.useCases.map((uc) =>
        uc.id === activeUseCase.id
          ? { ...normalizedUseCase, id: activeUseCase.id }
          : uc
      );
    } else {
      // Add new use case
      updatedUseCases = [...draftAppDef.useCases, normalizedUseCase];
    }

    // Update the draft definition
    setDraftAppDef({
      ...draftAppDef,
      useCases: updatedUseCases,
    });

    // Reset form state
    setNewUseCase({
      name: "",
      description: "",
      fields: [],
      accessPatterns: [],
      frequency: "Medium",
      operation: "read",
    });
    setActiveUseCase(null);
    setShowUseCaseDialog(false);
  };

  // Handle editing an existing use case
  const handleEditUseCase = (useCase) => {
    setActiveUseCase(useCase);

    // Normalize the use case before setting it for editing
    const normalizedUseCase = normalizeUseCase(useCase);

    setNewUseCase({
      name: normalizedUseCase.name,
      description: normalizedUseCase.description,
      fields: normalizedUseCase.fields,
      accessPatterns: normalizedUseCase.accessPatterns,
      frequency: normalizedUseCase.frequency,
      operation: normalizedUseCase.operation || "read",
    });
    setShowUseCaseDialog(true);
  };

  // Handle removing a use case
  const handleRemoveUseCase = (id) => {
    const updatedUseCases = draftAppDef.useCases.filter((uc) => uc.id !== id);

    // Update the draft definition
    setDraftAppDef({
      ...draftAppDef,
      useCases: updatedUseCases,
    });
  };

  // Handle adding a new entity
  const handleAddEntity = (newEntityData) => {
    if (!newEntityData.name) return;

    const entityId = newEntityData.name.toLowerCase().replace(/\s+/g, "_");
    const newEntity = {
      id: entityId,
      name: newEntityData.name,
      fields: newEntityData.fields || [],
    };

    // Check if we're updating an existing entity
    const existingEntityIndex = draftAppDef.customEntities.findIndex(
      (entity) => entity.id === entityId
    );

    let updatedEntities;
    if (existingEntityIndex >= 0) {
      // Update existing entity
      updatedEntities = [...draftAppDef.customEntities];
      updatedEntities[existingEntityIndex] = newEntity;
    } else {
      // Add new entity
      updatedEntities = [...draftAppDef.customEntities, newEntity];
    }

    // Update the draft definition
    setDraftAppDef({
      ...draftAppDef,
      customEntities: updatedEntities,
    });
  };

  // Handle removing an entity
  const handleRemoveEntity = (entityId) => {
    // Filter out the entity to be removed
    const updatedEntities = draftAppDef.customEntities.filter(
      (entity) => entity.id !== entityId
    );

    // Update the draft definition
    setDraftAppDef({
      ...draftAppDef,
      customEntities: updatedEntities,
    });

    // Close the dialog
    setShowEntityDetailsDialog(false);
  };

  // Handle adding a field to an entity
  const handleAddFieldToEntity = () => {
    if (!newField.name || !currentEntity) return;

    const fieldId = `${currentEntity.id}.${newField.name
      .toLowerCase()
      .replace(/\s+/g, "_")}`;
    const updatedField = {
      id: fieldId,
      name: newField.name,
      type: newField.type,
      description: newField.description,
    };

    // Find the entity in the draft app definition
    const entityIndex = draftAppDef.customEntities.findIndex(
      (entity) => entity.id === currentEntity.id
    );

    if (entityIndex >= 0) {
      // Create updated entity with new field
      const updatedEntity = {
        ...draftAppDef.customEntities[entityIndex],
        fields: [
          ...draftAppDef.customEntities[entityIndex].fields,
          updatedField,
        ],
      };

      // Create updated entities array with modified entity
      const updatedEntities = [...draftAppDef.customEntities];
      updatedEntities[entityIndex] = updatedEntity;

      // Update the draft definition
      setDraftAppDef({
        ...draftAppDef,
        customEntities: updatedEntities,
      });

      // Update the current entity for the UI
      setCurrentEntity(updatedEntity);
    }

    // Reset field form
    setNewField({ name: "", type: "String", description: "" });
    setShowFieldDialog(false);
  };

  // Handle removing a field from an entity
  const handleRemoveFieldFromEntity = (entityId, fieldId) => {
    // Find the entity index
    const entityIndex = draftAppDef.customEntities.findIndex(
      (entity) => entity.id === entityId
    );

    if (entityIndex >= 0) {
      // Create updated entity with field removed
      const updatedEntity = {
        ...draftAppDef.customEntities[entityIndex],
        fields: draftAppDef.customEntities[entityIndex].fields.filter(
          (field) => field.id !== fieldId
        ),
      };

      // Create updated entities array
      const updatedEntities = [...draftAppDef.customEntities];
      updatedEntities[entityIndex] = updatedEntity;

      // Update the draft definition
      setDraftAppDef({
        ...draftAppDef,
        customEntities: updatedEntities,
      });

      // Update current entity if it's being viewed
      if (currentEntity && currentEntity.id === entityId) {
        setCurrentEntity(updatedEntity);
      }

      // Update entity to view if it's being displayed
      if (entityToView && entityToView.id === entityId) {
        setEntityToView(updatedEntity);
      }
    }
  };

  // Handle opening add field dialog
  const openAddFieldDialog = (entity) => {
    setCurrentEntity(entity);
    setShowFieldDialog(true);
  };

  // Handle saving the current app definition
  const handleSaveAppDefinition = async () => {
    try {
      const appId = draftAppDef.id || `app_${Date.now()}`;

      // Ensure the app has an ID
      const appDefToSave = {
        ...draftAppDef,
        id: appId,
      };

      // If this is a new app, add the ID to the draft
      if (!draftAppDef.id) {
        setDraftAppDef((prev) => ({
          ...prev,
          id: appId,
        }));
      }

      await saveApp(appDefToSave);

      // Create a deep copy to avoid reference issues
      const savedAppDef = JSON.parse(JSON.stringify(appDefToSave));

      // Update original app definition to match saved state
      setOriginalAppDef(savedAppDef);

      // Update draft to exactly match what was saved
      setDraftAppDef(savedAppDef);

      // Show success indicator
      setSaveSuccess(true);
      // Hide success indicator after 3 seconds
      setTimeout(() => setSaveSuccess(false), 3000);

      // Reset unsaved changes flag
      setHasUnsavedChanges(false);

      // Refresh the app definitions list
      await loadAvailableApps();

      setShowAppDialog(false);
    } catch (error) {
      console.error("Error saving app definition:", error);
      // Handle error - could show an error notification here
    }
  };

  // Handle loading an app definition
  const handleLoadAppDefinition = async (appId) => {
    try {
      const appDef = await loadApp(appId);

      // Normalize the use cases in the loaded app
      const normalizedUseCases = (appDef.useCases || []).map(normalizeUseCase);

      // Set schema ID from loaded app (with fallback)
      const schemaId = appDef.schemaId || appDef.schema || DEFAULT_TEMPLATE;

      // Create normalized app definition
      const normalizedAppDef = {
        ...appDef,
        schemaId,
        useCases: normalizedUseCases,
        customEntities: appDef.customEntities || [],
      };

      // Update both draft and original app definitions
      setDraftAppDef(normalizedAppDef);
      setOriginalAppDef(normalizedAppDef);

      // Reset unsaved changes flag
      setHasUnsavedChanges(false);

      setShowAppDialog(false);
    } catch (error) {
      console.error("Error loading app definition:", error);
      // Handle error - could show an error notification here
    }
  };

  // Handle viewing entity details
  const viewEntityDetails = (entity) => {
    setEntityToView(entity);
    setShowEntityDetailsDialog(true);
  };

  // Get access patterns as an array
  const getAccessPatternsArray = (useCase) => {
    if (!useCase.accessPatterns) return [];
    if (Array.isArray(useCase.accessPatterns)) return useCase.accessPatterns;
    return [useCase.accessPatterns];
  };

  // Handle schema selection change
  const handleSchemaChange = (schemaId) => {
    setDraftAppDef({
      ...draftAppDef,
      schemaId,
    });
  };

  // Handle app name and description change
  const handleAppInfoChange = (field, value) => {
    setDraftAppDef({
      ...draftAppDef,
      [field]: value,
    });
  };

  // Reset app builder to create a new app
  const handleNewApp = () => {
    // Confirm if there are unsaved changes
    if (hasUnsavedChanges) {
      // In a real app, we'd show a confirmation dialog here
      if (
        !window.confirm("You have unsaved changes. Create a new app anyway?")
      ) {
        return;
      }
    }

    // Reset to default empty state
    setDraftAppDef({
      id: "",
      name: "New App Definition",
      description: "",
      schemaId: DEFAULT_TEMPLATE,
      useCases: [],
      customEntities: [],
    });
    setOriginalAppDef(null);
    setHasUnsavedChanges(false);
  };

  return (
    <div className={styles.container}>
      {/* Header section */}
      <div className={styles.header}>
        <div>
          <h2 className={styles.title}>App Builder</h2>
          <p className={styles.description}>
            Define applications that use your vehicle signal schema
          </p>
        </div>
        <div className={styles.appButtons}>
          <Button
            variant="outline"
            onClick={handleNewApp}
            className={styles.appButton}
          >
            <Plus className="mr-2 h-4 w-4" />
            New App
          </Button>

          <Dialog open={showAppDialog} onOpenChange={setShowAppDialog}>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                className={styles.appButton}
                onClick={() => setShowAppDialog(true)}
              >
                <FileUp className="mr-2 h-4 w-4" />
                Load App
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>App Definitions</DialogTitle>
                <DialogDescription>
                  Load an existing app definition or create a new one
                </DialogDescription>
              </DialogHeader>
              {loadingApps ? (
                <div className={styles.loadingState}>Loading apps...</div>
              ) : appDefinitions.length === 0 ? (
                <div className={styles.emptyState}>
                  <p>No app definitions found.</p>
                  <p>Save your current work to create a new app definition.</p>
                </div>
              ) : (
                <div className={styles.appList}>
                  {appDefinitions.map((app) => (
                    <Card key={app.id} className={styles.appCard}>
                      <CardHeader className="p-4">
                        <CardTitle className="text-lg">{app.name}</CardTitle>
                        <CardDescription>{app.description}</CardDescription>
                      </CardHeader>
                      <CardFooter className="p-4 pt-0 flex justify-between">
                        <div>
                          <Badge>{app.useCaseCount || 0} use cases</Badge>
                        </div>
                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={(e) => handleDeleteApp(app.id, e)}
                            isLoading={deletingAppId === app.id}
                          >
                            <Trash2 className="h-4 w-4 mr-1" />
                            Delete
                          </Button>
                          <Button
                            variant="default"
                            size="sm"
                            onClick={() => handleLoadAppDefinition(app.id)}
                          >
                            <FileUp className="h-4 w-4 mr-1" />
                            Load
                          </Button>
                        </div>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              )}
            </DialogContent>
          </Dialog>

          <Button
            className={styles.appButton}
            onClick={handleSaveAppDefinition}
            disabled={!hasUnsavedChanges && originalAppDef !== null}
          >
            <Save className="mr-2 h-4 w-4" />
            Save App
          </Button>
          {hasUnsavedChanges && (
            <div className={styles.unsavedBadgeContainer}>
              <Badge className={styles.unsavedBadge}>Unsaved changes</Badge>
            </div>
          )}
          {saveSuccess && (
            <div className={styles.unsavedBadgeContainer}>
              <Badge className={styles.savedBadge}>Saved successfully</Badge>
            </div>
          )}
        </div>
      </div>

      {/* Main content with collapsible sections */}
      <div className={styles.sectionsContainer}>
        <Accordion type="single" collapsible defaultValue="app-details">
          {/* App Details Section */}
          <AccordionItem value="app-details">
            <AccordionTrigger className={styles.sectionTitle}>
              App Details
            </AccordionTrigger>
            <AccordionContent>
              <div className={styles.appDetailsContainer}>
                <div className={styles.appDetailsLeft}>
                  <div className={styles.appFormGroup}>
                    <Label htmlFor="app-name" className={styles.appFormLabel}>
                      App Name
                    </Label>
                    <Input
                      id="app-name"
                      value={draftAppDef.name}
                      onChange={(e) =>
                        handleAppInfoChange("name", e.target.value)
                      }
                      className={styles.appNameInput}
                    />
                  </div>

                  <div className={styles.appFormGroup}>
                    <Label
                      htmlFor="schema-select"
                      className={styles.appFormLabel}
                    >
                      Schema
                    </Label>
                    <Select
                      value={draftAppDef.schemaId}
                      onValueChange={handleSchemaChange}
                      disabled={schemasLoading}
                    >
                      <SelectTrigger className={styles.schemaTrigger}>
                        <SelectValue
                          placeholder={
                            schemasLoading
                              ? "Loading schemas..."
                              : "Select schema"
                          }
                        />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value={DEFAULT_TEMPLATE}>
                          {formatTemplateNameForDisplay(DEFAULT_TEMPLATE)}
                        </SelectItem>
                        {availableSchemas
                          .filter((t) => t !== DEFAULT_TEMPLATE)
                          .map((template) => (
                            <SelectItem key={template} value={template}>
                              {formatTemplateNameForDisplay(template)}
                            </SelectItem>
                          ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className={styles.appDetailsRight}>
                  <div className={styles.appDescriptionGroup}>
                    <Label
                      htmlFor="app-description"
                      className={styles.appFormLabel}
                    >
                      App Description
                    </Label>
                    <Textarea
                      id="app-description"
                      value={draftAppDef.description}
                      onChange={(e) =>
                        handleAppInfoChange("description", e.target.value)
                      }
                      placeholder="Describe the purpose of this app"
                      className={styles.appDescriptionTextarea}
                    />
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Custom Entities Section */}
          <AccordionItem value="custom-entities">
            <AccordionTrigger className={styles.sectionTitle}>
              Custom Entities
            </AccordionTrigger>
            <AccordionContent>
              <div className={styles.entitiesSection}>
                <div className={styles.entitiesHeader}>
                  {draftAppDef.customEntities.length === 0 ? (
                    <div className={styles.entitiesEmptyState}>
                      <p>No custom entities defined yet.</p>
                      <p>
                        Click "Add Entity" to create custom data structures for
                        your application.
                      </p>
                    </div>
                  ) : (
                    <div className={styles.entitiesEmptySpace}></div>
                  )}
                  <Dialog
                    open={showEntityDialog}
                    onOpenChange={setShowEntityDialog}
                  >
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm">
                        <Plus className="h-4 w-4 mr-1" />
                        Add Entity
                      </Button>
                    </DialogTrigger>
                  </Dialog>
                  <AddEntityDialog
                    open={showEntityDialog}
                    onOpenChange={setShowEntityDialog}
                    onAddEntity={handleAddEntity}
                  />
                </div>

                <div className={styles.entitiesList}>
                  {draftAppDef.customEntities.length > 0 &&
                    draftAppDef.customEntities.map((entity) => (
                      <Card key={entity.id} className={styles.entityCard}>
                        <CardHeader className={styles.entityCardHeader}>
                          <CardTitle className={styles.entityCardTitle}>
                            {entity.name}
                            <div className={styles.entityActions}>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => viewEntityDetails(entity)}
                              >
                                <Edit className="h-3 w-3 mr-1" />
                                View Details
                              </Button>
                            </div>
                          </CardTitle>
                          <CardDescription>
                            {entity.fields.length} fields defined
                          </CardDescription>
                        </CardHeader>
                      </Card>
                    ))}
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Defined Use Cases Section */}
          <AccordionItem value="defined-use-cases">
            <AccordionTrigger className={styles.sectionTitle}>
              Defined Use Cases
            </AccordionTrigger>
            <AccordionContent>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginBottom: "0.75rem",
                }}
              >
                <Dialog
                  open={showUseCaseDialog}
                  onOpenChange={setShowUseCaseDialog}
                >
                  <DialogTrigger asChild>
                    <Button variant="outline" size="sm">
                      <Plus className="h-4 w-4 mr-1" />
                      Add Use Case
                    </Button>
                  </DialogTrigger>
                </Dialog>
                <AddUseCaseDialog
                  open={showUseCaseDialog}
                  onOpenChange={setShowUseCaseDialog}
                  activeUseCase={activeUseCase}
                  newUseCase={newUseCase}
                  setNewUseCase={setNewUseCase}
                  handleAddUseCase={handleAddUseCase}
                  getAllFields={getAllFields}
                  selectedEntity={selectedEntity}
                  setSelectedEntity={setSelectedEntity}
                  draftAppDef={draftAppDef}
                />
              </div>

              <Card
                className={`${styles.useCasesCard} ${styles.accordionCard}`}
              >
                <CardContent>
                  {draftAppDef.useCases.length === 0 ? (
                    <div className={styles.emptyState}>
                      <p>No use cases defined yet.</p>
                      <p>
                        Click "Add Use Case" to start defining how your schema
                        will be used.
                      </p>
                    </div>
                  ) : (
                    <ScrollArea className={styles.useCasesScrollArea}>
                      <Accordion
                        type="single"
                        collapsible
                        className={styles.useCasesAccordion}
                      >
                        {draftAppDef.useCases.map((useCase) => (
                          <AccordionItem
                            key={useCase.id}
                            value={`item-${useCase.id}`}
                          >
                            <AccordionTrigger
                              className={styles.accordionTrigger}
                            >
                              <div className={styles.useCaseHeader}>
                                <div>
                                  <p className={styles.useCaseName}>
                                    {useCase.name}
                                  </p>
                                  <p className={styles.useCaseDescription}>
                                    {useCase.description}
                                  </p>
                                </div>
                              </div>
                            </AccordionTrigger>
                            <AccordionContent
                              className={styles.accordionContent}
                            >
                              <div className={styles.useCaseDetails}>
                                {/* Fields section */}
                                <div className={styles.detailSection}>
                                  <h4 className={styles.detailTitle}>
                                    Selected Fields:
                                  </h4>
                                  <div className={styles.badgeContainer}>
                                    {useCase.fields.map((fieldId) => {
                                      // Find field in all available fields
                                      const allFields = getAllFields();
                                      const field = allFields.find(
                                        (f) => f.id === fieldId
                                      );

                                      return field ? (
                                        <Badge
                                          key={field.id}
                                          variant="outline"
                                          className={styles.fieldBadge}
                                        >
                                          {field.entity && (
                                            <span className={styles.entityTag}>
                                              {field.entity}
                                            </span>
                                          )}
                                          {field.name}
                                          <span
                                            className={styles.fieldTypeSmall}
                                          >
                                            ({field.type})
                                          </span>
                                        </Badge>
                                      ) : (
                                        <Badge
                                          key={fieldId}
                                          variant="outline"
                                          className={styles.fieldBadge}
                                        >
                                          {fieldId}
                                        </Badge>
                                      );
                                    })}
                                  </div>
                                </div>

                                {/* All attributes in a single row */}
                                <div className={styles.detailsRow}>
                                  <div className={styles.detailItem}>
                                    <span className={styles.detailTitle}>
                                      Access Patterns:
                                    </span>
                                    <div className={styles.badgeContainer}>
                                      {getAccessPatternsArray(useCase).map(
                                        (pattern) => (
                                          <Badge
                                            key={pattern}
                                            className={styles.patternBadge}
                                          >
                                            {pattern}
                                          </Badge>
                                        )
                                      )}
                                    </div>
                                  </div>

                                  {useCase.operation && (
                                    <div className={styles.detailItem}>
                                      <span className={styles.detailTitle}>
                                        Operation:
                                      </span>
                                      <Badge className={styles.operationBadge}>
                                        {useCase.operation}
                                      </Badge>
                                    </div>
                                  )}

                                  <div className={styles.detailItem}>
                                    <span className={styles.detailTitle}>
                                      Usage Frequency:
                                    </span>
                                    <Badge
                                      variant={
                                        useCase.frequency === "High" ||
                                        useCase.frequency === "Very High" ||
                                        useCase.frequency === "high"
                                          ? "default"
                                          : "outline"
                                      }
                                      className={styles.frequencyBadge}
                                    >
                                      {useCase.frequency}
                                    </Badge>
                                  </div>
                                </div>

                                {/* Actions */}
                                <div className={styles.useCaseActions}>
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => handleEditUseCase(useCase)}
                                  >
                                    <Edit className="h-4 w-4 mr-1" />
                                    Edit
                                  </Button>
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() =>
                                      handleRemoveUseCase(useCase.id)
                                    }
                                  >
                                    <Trash2 className="h-4 w-4 mr-1" />
                                    Remove
                                  </Button>
                                </div>
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </ScrollArea>
                  )}
                </CardContent>
                <CardFooter className={styles.cardFooter}>
                  <div className={styles.useCaseCount}>
                    {draftAppDef.useCases.length} use cases defined
                  </div>
                </CardFooter>
              </Card>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* Add Field Dialog */}
      <Dialog open={showFieldDialog} onOpenChange={setShowFieldDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Field to {currentEntity?.name}</DialogTitle>
            <DialogDescription>
              Define a new field for this entity
            </DialogDescription>
          </DialogHeader>
          <div className={styles.fieldForm}>
            <div className={styles.formGroup}>
              <Label htmlFor="fieldName">Field Name</Label>
              <Input
                id="fieldName"
                value={newField.name}
                onChange={(e) =>
                  setNewField({ ...newField, name: e.target.value })
                }
                placeholder="e.g., Status"
              />
            </div>
            <div className={styles.formGroup}>
              <Label htmlFor="fieldType">Field Type</Label>
              <Select
                value={newField.type}
                onValueChange={(value) =>
                  setNewField({ ...newField, type: value })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  {fieldTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className={styles.formGroup}>
              <Label htmlFor="fieldDescription">Description</Label>
              <Input
                id="fieldDescription"
                value={newField.description}
                onChange={(e) =>
                  setNewField({ ...newField, description: e.target.value })
                }
                placeholder="Field description"
              />
            </div>
          </div>
          <DialogFooter>
            <Button onClick={handleAddFieldToEntity}>Add Field</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Entity Details Dialog */}
      <Dialog
        open={showEntityDetailsDialog}
        onOpenChange={setShowEntityDetailsDialog}
      >
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>{entityToView?.name} Entity Details</DialogTitle>
            <DialogDescription>
              Fields defined for this entity
            </DialogDescription>
          </DialogHeader>
          {entityToView && (
            <div className={styles.entityDetailsContainer}>
              <div className={styles.entityFieldsTable}>
                <div className={styles.entityFieldsHeader}>
                  <div>Field Name</div>
                  <div>Type</div>
                  <div>Description</div>
                  <div>Actions</div>
                </div>
                <ScrollArea className={styles.entityFieldsScrollArea}>
                  {entityToView.fields.map((field) => (
                    <div key={field.id} className={styles.entityFieldRow}>
                      <div className={styles.entityFieldName}>{field.name}</div>
                      <div className={styles.entityFieldType}>
                        <Badge variant="outline">{field.type}</Badge>
                      </div>
                      <div className={styles.entityFieldDescription}>
                        {field.description || "-"}
                      </div>
                      <div className={styles.entityFieldActions}>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() =>
                            handleRemoveFieldFromEntity(
                              entityToView.id,
                              field.id
                            )
                          }
                          className={styles.removeFieldButton}
                        >
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </ScrollArea>
              </div>
              <div className={styles.entityDetailsActions}>
                <Button
                  variant="outline"
                  className={styles.removeEntityButton}
                  onClick={() => handleRemoveEntity(entityToView.id)}
                >
                  <Trash2 className="h-4 w-4 mr-1" />
                  Remove Entity
                </Button>
                <Button
                  onClick={() => {
                    openAddFieldDialog(entityToView);
                    setShowEntityDetailsDialog(false);
                  }}
                >
                  <Plus className="h-4 w-4 mr-1" />
                  Add Field
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
