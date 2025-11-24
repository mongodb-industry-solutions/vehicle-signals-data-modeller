"use client";

import { useState, useEffect, useMemo } from "react";
import dynamic from "next/dynamic";
import { Save, FileUp, FileDown, Trash2 } from "lucide-react";
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
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import MetadataDialog from "./metadataDialog/MetadataDialog";
import AddFieldDialog from "./addFieldDialog/AddFieldDialog";
import SearchBar from "./searchBar/SearchBar";
import FilterPanel from "./filterPanel/FilterPanel";
import DocumentTree from "./DocumentTree";
import styles from "./schemaBuilder.module.css";
import { signalTypes, typeColors } from "@/lib/const";
import { BASE_TEMPLATE, BASE_METADATA } from "@/lib/base";
import {
  formatTemplateNameForDisplay,
  formatSchemaName,
  handleExportSchema,
} from "@/lib/schemaUtils";
import {
  fetchAvailableSchemas,
  fetchMetadata,
  loadTemplate,
  saveSchema as apiSaveSchema,
  deleteTemplate,
} from "@/lib/api";
import { filterDocumentStructure } from "@/lib/filterUtils";
import { isProtectedSchema } from "@/lib/protected";

const ReactJsonView = dynamic(() => import("@microlink/react-json-view"), {
  ssr: false,
});

export default function SchemaBuilder() {
  const [schemaName, setSchemaName] = useState("Vehicle Signal Schema");
  const [documentStructure, setDocumentStructure] = useState({});
  const [metadataDocuments, setMetadataDocuments] = useState([]);
  const [expandedSections, setExpandedSections] = useState({});
  const [showTemplateDialog, setShowTemplateDialog] = useState(false);
  const [showAddFieldDialog, setShowAddFieldDialog] = useState(false);
  const [showMetadataDialog, setShowMetadataDialog] = useState(false);
  const [fieldToAddPath, setFieldToAddPath] = useState("");
  const [currentMetadata, setCurrentMetadata] = useState("");
  const [selectedFields, setSelectedFields] = useState({});
  const [jsonOutput, setJsonOutput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    types: [],
    datatypes: [],
    required: null,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isSaving, setIsSaving] = useState(false);
  const [saveError, setSaveError] = useState(null);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [availableTemplates, setAvailableTemplates] = useState([]);
  const [currentTemplate, setCurrentTemplate] = useState("vss");
  const [originalTemplateId, setOriginalTemplateId] = useState(null);

  // Initialize with base template when component mounts
  useEffect(() => {
    // Use the BASE_TEMPLATE from lib/base.js as the default
    setDocumentStructure(BASE_TEMPLATE.schema);
    setMetadataDocuments(BASE_METADATA);
    setCurrentTemplate(BASE_TEMPLATE.template);
    setOriginalTemplateId(BASE_TEMPLATE.template);

    // Format the template name for display
    const formattedName = formatTemplateNameForDisplay(BASE_TEMPLATE.template);
    setSchemaName(formattedName);
  }, []);

  // Fetch available schemas from MongoDB
  useEffect(() => {
    const loadAvailableSchemas = async () => {
      try {
        // Use the imported API function instead of local implementation
        const templates = await fetchAvailableSchemas({
          excludeTemplate: null, // Don't exclude any templates
        });

        // Always include the base template at the beginning
        if (!templates.includes(BASE_TEMPLATE.template)) {
          setAvailableTemplates([BASE_TEMPLATE.template, ...templates]);
        } else {
          setAvailableTemplates(templates);
        }
      } catch (err) {
        console.error("Error fetching schema templates:", err);
        setError(err.message);
        // Always include the base template even if DB fetch fails
        setAvailableTemplates([BASE_TEMPLATE.template]);
      }
    };

    loadAvailableSchemas();
  }, []);

  // Fetch metadata for the current template
  const loadMetadataForTemplate = async (templateId) => {
    try {
      // Use the imported API function
      const metadataMap = await fetchMetadata(templateId);
      setMetadataDocuments(metadataMap);
    } catch (err) {
      console.error("Error fetching metadata:", err);
    }
  };

  // Handle exporting the schema as a JSON file
  const handleExportSchemaClick = () => {
    handleExportSchema(jsonOutput, schemaName);
  };

  // Handle loading a template from the database
  const handleLoadTemplate = async (templateId) => {
    try {
      setIsLoading(true);
      setError(null);
      setSelectedFields({}); // Reset selected fields
      setExpandedSections({}); // Reset expanded sections

      // Use the imported API function
      const result = await loadTemplate(templateId);

      setDocumentStructure(result.schema);
      setCurrentTemplate(templateId);
      setOriginalTemplateId(templateId); // Track the original template ID

      // Also fetch metadata for this template
      await loadMetadataForTemplate(templateId);

      // Format the template name for display
      const formattedName = formatTemplateNameForDisplay(templateId);
      setSchemaName(formattedName);
    } catch (err) {
      console.error("Error loading template:", err);
      setError(err.message);
    } finally {
      setIsLoading(false);
      setShowTemplateDialog(false);
    }
  };

  // Handle adding a new field to the document structure
  const handleAddField = (fieldStructure, metadataDoc, parentPath) => {
    // Update the document structure
    const updatedStructure = { ...documentStructure };

    if (parentPath) {
      // Add to nested path
      const pathParts = parentPath.split(".");
      let current = updatedStructure;

      // Navigate to the correct nesting level
      for (let i = 0; i < pathParts.length; i++) {
        if (
          i === pathParts.length - 1 &&
          current[pathParts[i]] &&
          current[pathParts[i]].children
        ) {
          current = current[pathParts[i]].children;
        } else if (current[pathParts[i]] && current[pathParts[i]].children) {
          current = current[pathParts[i]].children;
        } else {
          console.error("Path not found:", parentPath);
          return;
        }
      }

      // Add the new field to this location
      current[fieldStructure.id.split(".").pop()] = fieldStructure;
    } else {
      // Add to root level
      updatedStructure[fieldStructure.id] = fieldStructure;
    }

    setDocumentStructure(updatedStructure);

    // Update the metadata documents array
    setMetadataDocuments((prev) => {
      // Add the new metadata document to the array
      return [...prev, metadataDoc];
    });
  };

  // Handle deleting a field from the document structure
  const handleDeleteField = (path) => {
    const updatedStructure = { ...documentStructure };
    const pathParts = path.split(".");
    const fieldName = pathParts[pathParts.length - 1];

    // Navigate to the parent of the field
    let current = updatedStructure;

    for (let i = 0; i < pathParts.length - 1; i++) {
      if (current[pathParts[i]] && current[pathParts[i]].children) {
        current = current[pathParts[i]].children;
      } else if (i === 0) {
        current = current[pathParts[i]];
      } else {
        console.error("Path not found for deletion:", path);
        return;
      }
    }

    // Delete the field
    delete current[fieldName];

    // Also remove from selected fields
    const newSelectedFields = { ...selectedFields };
    delete newSelectedFields[path];

    // Remove any child selections
    Object.keys(newSelectedFields).forEach((key) => {
      if (key.startsWith(path + ".")) {
        delete newSelectedFields[key];
      }
    });

    // Remove from metadata documents
    setMetadataDocuments((prev) => {
      return prev.filter((meta) => meta.id !== path);
    });

    setSelectedFields(newSelectedFields);
    setDocumentStructure(updatedStructure);
  };

  // Open the add field dialog
  const openAddFieldDialog = (parentPath = "") => {
    setFieldToAddPath(parentPath);
    setShowAddFieldDialog(true);
  };

  // Get unique datatypes from the metadata for filtering
  const getUniqueDatatypes = useMemo(() => {
    const datatypes = new Set();

    Object.values(metadataDocuments).forEach((doc) => {
      if (doc.datatype) {
        datatypes.add(doc.datatype);
      }
    });

    return Array.from(datatypes);
  }, [metadataDocuments]);

  // Update JSON output whenever selected fields change
  useEffect(() => {
    updateJsonOutput();
  }, [selectedFields, documentStructure, metadataDocuments]);

  const updateJsonOutput = () => {
    const output = {};

    // Helper function to build the output object based on selected fields
    const buildOutputObject = (structure, currentPath = "", outputObj = {}) => {
      Object.entries(structure).forEach(([key, value]) => {
        const fullPath = currentPath ? `${currentPath}.${key}` : key;
        if (
          !selectedFields[fullPath] &&
          (!value.children ||
            !Object.keys(value.children).some(
              (childKey) => selectedFields[`${fullPath}.${childKey}`]
            ))
        ) {
          return; // Skip unselected fields and their children
        }

        const node = { type: value.type };

        // Add metadata if available - use array find method
        const metadataDoc = metadataDocuments.find(
          (doc) => doc.id === fullPath
        );
        if (metadataDoc) {
          Object.entries(metadataDoc).forEach(([metaKey, metaValue]) => {
            if (!["id", "type", "template", "name"].includes(metaKey)) {
              node[metaKey] = metaValue;
            }
          });
        }

        // Recursively process children if they exist
        if (value.children) {
          node.children = {};
          buildOutputObject(value.children, fullPath, node.children);
        }

        outputObj[key] = node;
      });

      return outputObj;
    };

    buildOutputObject(documentStructure, "", output);
    setJsonOutput(JSON.stringify(output, null, 2));
  };

  const toggleSection = (path) => {
    setExpandedSections({
      ...expandedSections,
      [path]: !expandedSections[path],
    });
  };

  // Update the toggleFieldSelection function to handle parent selection and child propagation
  const toggleFieldSelection = (path) => {
    const newSelectedFields = { ...selectedFields };
    const isCurrentlySelected = selectedFields[path];

    // Toggle the current field
    newSelectedFields[path] = !isCurrentlySelected;

    // Helper function to find the target node in the document structure
    const findNode = (structure, pathParts) => {
      let current = structure;
      for (const part of pathParts) {
        if (!current[part]) return null;
        current = current[part].children || {};
      }
      return current;
    };

    const pathParts = path.split(".");
    const targetNode = findNode(documentStructure, pathParts);

    // If it's a branch with children, propagate selection to children
    if (targetNode) {
      const propagateSelection = (obj, currentPath) => {
        Object.entries(obj).forEach(([key, value]) => {
          const childPath = `${currentPath}.${key}`;
          newSelectedFields[childPath] = !isCurrentlySelected;

          if (value.children) {
            propagateSelection(value.children, childPath);
          }
        });
      };

      propagateSelection(targetNode, path);
    }

    // Select all parent nodes leading to the current node
    const selectParents = (pathParts) => {
      let currentPath = "";
      pathParts.forEach((part) => {
        currentPath = currentPath ? `${currentPath}.${part}` : part;
        newSelectedFields[currentPath] = true; // Ensure parent is selected
      });
    };

    if (!isCurrentlySelected) {
      selectParents(pathParts.slice(0, -1)); // Exclude the current node itself
    }

    setSelectedFields(newSelectedFields);
  };

  // Save schema to MongoDB
  const saveSchema = async () => {
    try {
      setSaveError(null);
      setSaveSuccess(false);
      setIsSaving(true);

      const formattedTemplateName = formatSchemaName(schemaName);

      // Check if trying to save over a protected schema with the same name
      if (
        originalTemplateId &&
        isProtectedSchema(originalTemplateId) &&
        formattedTemplateName === originalTemplateId
      ) {
        setSaveError(
          "Duplicate name. Please change the schema name before saving."
        );
        setIsSaving(false);
        return;
      }

      // Filter metadata documents to only include selected fields
      const selectedMetadataDocuments = metadataDocuments.filter(
        (doc) => selectedFields[doc.id] === true
      );

      // Filter the documentStructure to only include selected fields
      const filterSelectedFields = (structure, parentPath = "") => {
        const result = {};

        Object.entries(structure).forEach(([key, value]) => {
          const currentPath = parentPath ? `${parentPath}.${key}` : key;

          // Only include this node if it's selected
          if (selectedFields[currentPath]) {
            // Create a copy of the current node
            const nodeCopy = { ...value };

            // If it has children, recursively filter them
            if (
              nodeCopy.children &&
              Object.keys(nodeCopy.children).length > 0
            ) {
              nodeCopy.children = filterSelectedFields(
                nodeCopy.children,
                currentPath
              );
            }

            // Add the filtered node to the result
            result[key] = nodeCopy;
          }
        });

        return result;
      };

      // Create a filtered version of the document structure with only selected fields
      const filteredDocumentStructure = filterSelectedFields(documentStructure);

      console.log(
        `Saving ${selectedMetadataDocuments.length} selected metadata documents out of ${metadataDocuments.length} total`
      );
      console.log(`Saving filtered schema structure with selected fields only`);

      // Call the API function to save both schema and metadata
      await apiSaveSchema({
        templateName: formattedTemplateName,
        schema: filteredDocumentStructure,
        metadata: selectedMetadataDocuments,
      });

      setSaveSuccess(true);
      setCurrentTemplate(formattedTemplateName);
      setOriginalTemplateId(formattedTemplateName); // Update original template ID after saving

      // Refresh available templates after saving
      try {
        const templates = await fetchAvailableSchemas({
          excludeTemplate: null,
        });
        if (!templates.includes(BASE_TEMPLATE.template)) {
          setAvailableTemplates([BASE_TEMPLATE.template, ...templates]);
        } else {
          setAvailableTemplates(templates);
        }
      } catch (error) {
        console.error("Error refreshing templates:", error);
      }

      setTimeout(() => setSaveSuccess(false), 3000); // Clear success message after 3 seconds
    } catch (err) {
      console.error("Error saving schema:", err);
      setSaveError(err.message);
    } finally {
      setIsSaving(false);
    }
  };

  // Check if JSON output is empty or invalid
  const isJsonOutputEmpty = () => {
    return !jsonOutput || jsonOutput === "{}" || jsonOutput === "null";
  };

  // Open metadata dialog for a field
  const handleViewMetadata = (path) => {
    // Find the metadata document in the array
    const metadataDoc = metadataDocuments.find((item) => item.id === path);
    setCurrentMetadata(metadataDoc);
    setShowMetadataDialog(true);
  };

  // Update a metadata document in the metadataDocuments array
  const handleUpdateMetadata = (updatedMetadata) => {
    setMetadataDocuments((prevMetadataDocuments) => {
      // Find the index of the document to update
      const index = prevMetadataDocuments.findIndex(
        (doc) => doc.id === updatedMetadata.id
      );

      // Create a new array with the updated metadata
      const newMetadataDocuments = [...prevMetadataDocuments];

      if (index !== -1) {
        // Update existing document
        newMetadataDocuments[index] = updatedMetadata;
      } else {
        // Add new document if not found
        newMetadataDocuments.push(updatedMetadata);
      }

      // Update the current metadata reference for the dialog
      setCurrentMetadata(updatedMetadata);

      return newMetadataDocuments;
    });
  };

  // Handle deleting a template
  const handleDeleteTemplate = async (templateId) => {
    try {
      // Check if the template is protected
      if (isProtectedSchema(templateId)) {
        alert(
          `Cannot delete the protected schema "${formatTemplateNameForDisplay(
            templateId
          )}".`
        );
        return;
      }

      if (currentTemplate === templateId) {
        // Don't allow deleting the currently active template
        alert(
          "Cannot delete the currently active template. Please load a different template first."
        );
        return;
      }

      const confirmDelete = confirm(
        `Are you sure you want to delete the template "${formatTemplateNameForDisplay(
          templateId
        )}"? This action cannot be undone.`
      );

      if (!confirmDelete) {
        return;
      }

      setIsLoading(true);
      setError(null);

      // Call the API function to delete the template
      await deleteTemplate(templateId);

      // Refresh the available templates list
      const templates = await fetchAvailableSchemas({
        excludeTemplate: null,
      });

      if (!templates.includes(BASE_TEMPLATE.template)) {
        setAvailableTemplates([BASE_TEMPLATE.template, ...templates]);
      } else {
        setAvailableTemplates(templates);
      }

      alert(
        `Template "${formatTemplateNameForDisplay(
          templateId
        )}" has been deleted.`
      );
    } catch (err) {
      console.error("Error deleting template:", err);
      setError(err.message);
      alert(`Error deleting template: ${err.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <Input
            value={schemaName}
            onChange={(e) => setSchemaName(e.target.value)}
            className={styles.schemaNameInput}
          />
          <p className={styles.schemaDescription}>
            Build your vehicle signal schema by selecting fields and adding
            custom attributes
          </p>
        </div>
        <div className={styles.headerButtons}>
          <Dialog
            open={showTemplateDialog}
            onOpenChange={setShowTemplateDialog}
          >
            <DialogTrigger asChild>
              <Button variant="outline" className={styles.templateButton}>
                <FileUp className="mr-2 h-4 w-4" />
                Load Template
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[525px]">
              <DialogHeader>
                <DialogTitle>Load Template</DialogTitle>
                <DialogDescription>
                  Choose a pre-defined template to start with or import your
                  own.
                </DialogDescription>
              </DialogHeader>
              <div className={styles.templateList}>
                {availableTemplates.length > 0 ? (
                  availableTemplates.map((template) => (
                    <Card
                      key={template}
                      className={`${styles.templateCard} ${
                        currentTemplate === template
                          ? styles.currentTemplateCard
                          : ""
                      }`}
                    >
                      <CardHeader className="p-4">
                        <CardTitle className="text-lg">
                          {formatTemplateNameForDisplay(template)}
                        </CardTitle>
                        {currentTemplate === template && (
                          <CardDescription>Currently loaded</CardDescription>
                        )}
                      </CardHeader>
                      <CardFooter className="p-4 pt-0 flex justify-between">
                        {!isProtectedSchema(template) && (
                          <Button
                            variant="secondary"
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDeleteTemplate(template);
                            }}
                          >
                            <Trash2 className="h-4 w-4 mr-2" />
                            Delete
                          </Button>
                        )}
                        {!isProtectedSchema(template) ? (
                          <div className="flex-1"></div>
                        ) : null}
                        <Button
                          variant={
                            currentTemplate === template ? "ghost" : "default"
                          }
                          size="sm"
                          disabled={currentTemplate === template}
                          onClick={() => handleLoadTemplate(template)}
                        >
                          <FileDown className="h-4 w-4 mr-2" />
                          {currentTemplate === template ? "Current" : "Load"}
                        </Button>
                      </CardFooter>
                    </Card>
                  ))
                ) : (
                  <div className={styles.noTemplatesMessage}>
                    No templates found. Save a schema to create your first
                    template.
                  </div>
                )}
              </div>
            </DialogContent>
          </Dialog>

          <div className={styles.saveButtonContainer}>
            <Button
              className={styles.saveButton}
              onClick={saveSchema}
              disabled={isJsonOutputEmpty() || isSaving}
            >
              {isSaving ? (
                <>Saving...</>
              ) : (
                <>
                  <Save className="mr-2 h-4 w-4" />
                  Save Schema
                </>
              )}
            </Button>
            {saveSuccess && (
              <span className={styles.saveSuccess}>
                Schema saved successfully!
              </span>
            )}
            {saveError && (
              <span className={styles.saveError}>Error: {saveError}</span>
            )}
          </div>
        </div>
      </div>

      <div className={styles.splitView}>
        <Card className={styles.schemaCard}>
          <CardHeader>
            <CardTitle className={styles.cardTitle}>
              <span>Vehicle Signal Structure</span>
            </CardTitle>
          </CardHeader>
          <CardContent
            style={{
              flex: "1 1 auto",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
            }}
          >
            <div className={styles.searchFilterContainer}>
              <SearchBar
                onSearchChange={setSearchQuery}
                initialQuery={searchQuery}
                showFilters={showFilters}
                onToggleFilters={() => setShowFilters(!showFilters)}
                filters={filters}
              />
            </div>

            <FilterPanel
              onFiltersChange={setFilters}
              initialFilters={filters}
              signalTypes={signalTypes}
              typeColors={typeColors}
              uniqueDatatypes={getUniqueDatatypes}
              showFilters={showFilters}
            />
            <ScrollArea
              className={styles.structureScrollArea}
              style={{ height: "calc(100vh - 400px)", minHeight: "250px" }}
            >
              {/* Check if there are active filters or search query regardless of filter panel visibility */}
              {searchQuery.trim() ||
              filters.types.length > 0 ||
              filters.datatypes.length > 0 ||
              filters.required !== null ? (
                <div className={styles.searchResults}>
                  {(() => {
                    // Use the utility function instead of local implementation
                    const filteredResults = filterDocumentStructure(
                      documentStructure,
                      {
                        searchQuery,
                        filters,
                        metadataDocuments,
                      }
                    );

                    return filteredResults.length > 0 ? (
                      filteredResults.map((result, index) => (
                        <div key={index} className={styles.searchResultItem}>
                          <div className={styles.searchResultNodeCheckbox}>
                            <Checkbox
                              id={`search-result-${index}`}
                              checked={!!selectedFields[result.path]}
                              onCheckedChange={() =>
                                toggleFieldSelection(result.path)
                              }
                            />
                          </div>
                          <div className={styles.searchResultNodeLabel}>
                            <span className={styles.searchResultPath}>
                              {result.path}
                            </span>
                          </div>
                          <div className={styles.searchResultBadges}>
                            <Badge
                              variant="outline"
                              className={styles.typeBadge}
                              style={{
                                backgroundColor: typeColors[result.value.type],
                                color:
                                  result.value.type === "sensor"
                                    ? "#000"
                                    : "#fff",
                              }}
                            >
                              {result.value.type}
                            </Badge>
                            {result.metadata?.required && (
                              <Badge
                                variant="outline"
                                className={styles.requiredBadge}
                              >
                                Required
                              </Badge>
                            )}
                          </div>
                          <div className={styles.searchResultActions}>
                            <Button
                              variant="ghost"
                              size="sm"
                              className={styles.nodeActionButton}
                              onClick={(e) => {
                                e.stopPropagation();
                                handleViewMetadata(result.path);
                              }}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <circle cx="12" cy="12" r="10" />
                                <path d="M12 16v-4" />
                                <path d="M12 8h.01" />
                              </svg>
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              className={styles.nodeActionButton}
                              onClick={(e) => {
                                e.stopPropagation();
                                handleDeleteField(result.path);
                              }}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M3 6h18" />
                                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                              </svg>
                            </Button>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className={styles.noSearchResults}>
                        No fields found matching your criteria
                      </div>
                    );
                  })()}
                </div>
              ) : isLoading ? (
                <div className={styles.loadingContainer}>
                  <p>Loading vehicle signal schema...</p>
                </div>
              ) : error ? (
                <div className={styles.errorContainer}>
                  <h3>Error loading schema</h3>
                  <p>{error}</p>
                  <Button onClick={() => window.location.reload()}>
                    Retry
                  </Button>
                </div>
              ) : (
                <div className={styles.documentStructure}>
                  <DocumentTree
                    structure={documentStructure}
                    metadataDocuments={metadataDocuments}
                    expandedSections={expandedSections}
                    selectedFields={selectedFields}
                    typeColors={typeColors}
                    onToggleSection={toggleSection}
                    onToggleFieldSelection={toggleFieldSelection}
                    onDeleteField={handleDeleteField}
                    onOpenAddFieldDialog={openAddFieldDialog}
                    onViewMetadata={handleViewMetadata}
                  />
                </div>
              )}
            </ScrollArea>
          </CardContent>
          <CardFooter className={styles.cardFooter}>
            <div className={styles.selectedCount}>
              {Object.values(selectedFields).filter(Boolean).length} fields
              selected
            </div>
            <Button
              variant="outline"
              className={styles.exportButton}
              onClick={handleExportSchemaClick}
            >
              <FileDown className="mr-2 h-4 w-4" />
              Export Schema
            </Button>
          </CardFooter>
        </Card>

        <Card className={styles.jsonCard}>
          <CardHeader>
            <CardTitle>JSON Schema Output</CardTitle>
          </CardHeader>
          <CardContent
            style={{
              flex: "1 1 auto",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
            }}
          >
            <ScrollArea
              className={styles.jsonScrollArea}
              style={{ height: "calc(100vh - 400px)", minHeight: "250px" }}
            >
              <ReactJsonView
                src={JSON.parse(jsonOutput || "{}")}
                theme="grayscale:inverted"
                collapsed={true}
                groupArraysAfterLength={100}
                displayObjectSize={false}
                displayDataTypes={false}
                enableClipboard={false}
                quotesOnKeys={false}
                displayArrayKey={false}
                name={null}
              />
            </ScrollArea>
          </CardContent>
        </Card>
      </div>

      {/* Add Field Dialog */}
      <AddFieldDialog
        open={showAddFieldDialog}
        onOpenChange={setShowAddFieldDialog}
        parentPath={fieldToAddPath}
        onSave={handleAddField}
        currentTemplate={currentTemplate}
      />

      {/* Metadata Dialog */}
      <MetadataDialog
        open={showMetadataDialog}
        onOpenChange={setShowMetadataDialog}
        metadata={currentMetadata}
        setMetadata={handleUpdateMetadata}
      />
    </div>
  );
}
