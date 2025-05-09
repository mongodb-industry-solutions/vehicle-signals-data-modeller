import { useState, useEffect } from "react";
import { PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BASE_METADATA } from "@/lib/base";
import { fetchMetadata } from "@/lib/api";
import styles from "./AddUseCaseDialog.module.css";

export default function AddUseCaseDialog({
  open,
  onOpenChange,
  activeUseCase,
  newUseCase,
  setNewUseCase,
  handleAddUseCase,
  getAllFields,
  selectedEntity,
  setSelectedEntity,
  draftAppDef,
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [vehicleSignals, setVehicleSignals] = useState([]);
  const [groupedVehicleSignals, setGroupedVehicleSignals] = useState({});
  const [groupedCustomEntityFields, setGroupedCustomEntityFields] = useState(
    {}
  );
  const [loadingSignals, setLoadingSignals] = useState(false);

  // Fetch vehicle signals when the dialog opens
  useEffect(() => {
    if (open) {
      fetchVehicleSignals();
      organizeCustomEntityFields();
    }
  }, [open, draftAppDef.customEntities]);

  // Re-group signals when vehicle signals or selectedEntity changes
  useEffect(() => {
    if (selectedEntity === "vehicle" && vehicleSignals.length > 0) {
      groupVehicleSignalsByPath();
    }
  }, [vehicleSignals, selectedEntity]);

  // Organize custom entity fields into groups by entity
  const organizeCustomEntityFields = () => {
    const groups = {};

    if (draftAppDef && draftAppDef.customEntities) {
      draftAppDef.customEntities.forEach((entity) => {
        if (!groups[entity.name]) {
          groups[entity.name] = [];
        }

        entity.fields.forEach((field) => {
          groups[entity.name].push({
            ...field,
            entity: entity.name,
          });
        });
      });
    }

    setGroupedCustomEntityFields(groups);
  };

  // Fetch vehicle signals data based on schema
  const fetchVehicleSignals = async () => {
    setLoadingSignals(true);
    try {
      let signalsData;

      // If using my_custom_schema, use BASE_METADATA
      if (draftAppDef.schemaId === "my_custom_schema") {
        signalsData = BASE_METADATA.filter(
          (signal) => signal.type !== "branch"
        );
      } else {
        // Otherwise fetch from database, filtering out branch-type signals
        signalsData = await fetchMetadata(draftAppDef.schemaId, "branch");
      }

      // Add 'Vehicle' entity to all signals
      const processedSignals = signalsData.map((signal) => ({
        ...signal,
        entity: "Vehicle",
      }));

      setVehicleSignals(processedSignals);
    } catch (error) {
      console.error("Error fetching vehicle signals:", error);
    } finally {
      setLoadingSignals(false);
    }
  };

  // Group vehicle signals by their paths for better dropdown organization
  const groupVehicleSignalsByPath = () => {
    const groups = {};

    vehicleSignals.forEach((signal) => {
      if (!signal.id) return;

      const pathParts = signal.id.split(".");
      // Skip if there are not enough parts to form a group
      if (pathParts.length < 3) return;

      // Group by parent path (everything except the last part)
      const groupPath = pathParts.slice(0, -1).join(".");
      const signalName = pathParts[pathParts.length - 1];

      if (!groups[groupPath]) {
        groups[groupPath] = [];
      }

      groups[groupPath].push({
        ...signal,
        displayName: signalName,
      });
    });

    setGroupedVehicleSignals(groups);
  };

  // Get the appropriate groups based on selected entity and search term
  const getFilteredGroups = () => {
    if (selectedEntity === "vehicle") {
      return filterSignalGroups(groupedVehicleSignals);
    } else {
      // For custom entities, filter the appropriate entity's fields
      const entityGroups = {};

      // Find the matching entity by name (case-insensitive)
      Object.keys(groupedCustomEntityFields).forEach((entityName) => {
        if (entityName.toLowerCase() === selectedEntity.toLowerCase()) {
          const filteredFields = groupedCustomEntityFields[entityName].filter(
            (field) =>
              field.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
              field.id.toLowerCase().includes(searchTerm.toLowerCase())
          );

          if (filteredFields.length > 0) {
            entityGroups[entityName] = filteredFields;
          }
        }
      });

      return entityGroups;
    }
  };

  // Filter signal groups based on search term
  const filterSignalGroups = (groups) => {
    if (!searchTerm) return groups;

    const filteredGroups = {};

    Object.keys(groups).forEach((groupPath) => {
      const filteredSignals = groups[groupPath].filter(
        (signal) =>
          signal.displayName
            ?.toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          signal.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          signal.id?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          groupPath.toLowerCase().includes(searchTerm.toLowerCase())
      );

      if (filteredSignals.length > 0) {
        filteredGroups[groupPath] = filteredSignals;
      }
    });

    return filteredGroups;
  };

  // Toggle field selection
  const toggleField = (fieldId) => {
    if (newUseCase.fields.includes(fieldId)) {
      setNewUseCase({
        ...newUseCase,
        fields: newUseCase.fields.filter((id) => id !== fieldId),
      });
    } else {
      setNewUseCase({
        ...newUseCase,
        fields: [...newUseCase.fields, fieldId],
      });
    }
  };

  // Toggle access pattern
  const toggleAccessPattern = (pattern) => {
    if (newUseCase.accessPatterns.includes(pattern)) {
      setNewUseCase({
        ...newUseCase,
        accessPatterns: newUseCase.accessPatterns.filter((p) => p !== pattern),
      });
    } else {
      setNewUseCase({
        ...newUseCase,
        accessPatterns: [...newUseCase.accessPatterns, pattern],
      });
    }
  };

  // Get all available entities for the dropdown
  const getAvailableEntities = () => {
    const entities = [{ id: "vehicle", name: "Vehicle" }];

    if (draftAppDef && draftAppDef.customEntities) {
      draftAppDef.customEntities.forEach((entity) => {
        entities.push({
          id: entity.id.toLowerCase(),
          name: entity.name,
        });
      });
    }

    return entities;
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[700px]">
        <DialogHeader>
          <DialogTitle>{activeUseCase ? "Edit" : "Add"} Use Case</DialogTitle>
          <DialogDescription>
            Define how your vehicle signal schema will be used in a specific
            application.
          </DialogDescription>
        </DialogHeader>
        <div className={styles.useCaseForm}>
          <div className={styles.formGroup}>
            <Label htmlFor="name" className={styles.formLabel}>
              Name
            </Label>
            <Input
              id="name"
              value={newUseCase.name}
              onChange={(e) =>
                setNewUseCase({ ...newUseCase, name: e.target.value })
              }
              className={styles.formInput}
              placeholder="e.g., PRODUCTIVITY01"
            />
          </div>
          <div className={styles.formGroup}>
            <Label htmlFor="description" className={styles.formLabel}>
              Description
            </Label>
            <Textarea
              id="description"
              value={newUseCase.description}
              onChange={(e) =>
                setNewUseCase({
                  ...newUseCase,
                  description: e.target.value,
                })
              }
              className={styles.formTextarea}
              placeholder="Describe how this use case will be used"
            />
          </div>

          <div className={styles.formGroup}>
            <Label className={styles.formLabel}>Select Fields</Label>
            <div className={styles.fieldSelectionWrapper}>
              <div className={styles.entitySelector}>
                <Label className={styles.entitySelectorLabel}>Entity</Label>
                <Select
                  value={selectedEntity}
                  onValueChange={setSelectedEntity}
                >
                  <SelectTrigger className={styles.entitySelectorTrigger}>
                    <SelectValue placeholder="Select entity" />
                  </SelectTrigger>
                  <SelectContent>
                    {getAvailableEntities().map((entity) => (
                      <SelectItem key={entity.id} value={entity.id}>
                        {entity.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className={styles.fieldComboboxWrapper}>
                <Label className={styles.fieldComboboxLabel}>Fields</Label>
                <Select>
                  <SelectTrigger className={styles.fieldCombobox}>
                    <SelectValue placeholder="Search and select fields..." />
                  </SelectTrigger>
                  <SelectContent className={styles.fieldDropdownContent}>
                    <div className={styles.fieldSearchContainer}>
                      <Input
                        placeholder="Search fields..."
                        className={styles.fieldSearchInput}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>

                    <ScrollArea className={styles.fieldScrollArea}>
                      <div className={styles.fieldGroups}>
                        {loadingSignals ? (
                          <div className={styles.loadingContainer}>
                            Loading signals...
                          </div>
                        ) : (
                          Object.entries(getFilteredGroups()).map(
                            ([groupPath, signals]) => (
                              <div
                                key={groupPath}
                                className={styles.fieldGroup}
                              >
                                <div className={styles.fieldGroupHeader}>
                                  {
                                    selectedEntity === "vehicle"
                                      ? groupPath.split(".").pop() // For vehicle signals, show last part of path
                                      : groupPath // For custom entities, show entity name
                                  }
                                </div>
                                <div className={styles.fieldGroupItems}>
                                  {signals.map((signal) => (
                                    <div
                                      key={signal.id}
                                      className={styles.fieldItem}
                                      onClick={() => toggleField(signal.id)}
                                    >
                                      <span className={styles.fieldItemName}>
                                        {selectedEntity === "vehicle"
                                          ? signal.displayName || signal.name
                                          : signal.name}
                                      </span>
                                      <Badge
                                        variant="outline"
                                        className={styles.fieldItemType}
                                      >
                                        {signal.type}
                                      </Badge>
                                      {newUseCase.fields.includes(
                                        signal.id
                                      ) && (
                                        <span
                                          className={
                                            styles.fieldItemSelectedMark
                                          }
                                        >
                                          ✓
                                        </span>
                                      )}
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )
                          )
                        )}
                      </div>
                    </ScrollArea>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div className={styles.selectedFieldsSection}>
            <Label className={styles.selectedFieldsLabel}>
              Selected Fields
            </Label>
            <div className={styles.selectedFieldsContainer}>
              {newUseCase.fields.length === 0 ? (
                <div className={styles.noFieldsSelected}>
                  No fields selected
                </div>
              ) : (
                <div className={styles.selectedFieldBadges}>
                  {newUseCase.fields.map((fieldId) => {
                    // Find field in all available signals and custom entities
                    let field = null;

                    // Check in vehicle signals
                    if (!field) {
                      field = vehicleSignals.find((s) => s.id === fieldId);
                    }

                    // Check in custom entities
                    if (!field && draftAppDef.customEntities) {
                      for (const entity of draftAppDef.customEntities) {
                        const foundField = entity.fields.find(
                          (f) => f.id === fieldId
                        );
                        if (foundField) {
                          field = { ...foundField, entity: entity.name };
                          break;
                        }
                      }
                    }

                    return field ? (
                      <Badge
                        key={field.id}
                        className={styles.selectedFieldBadge}
                      >
                        {field.entity && (
                          <span className={styles.entityTag}>
                            {field.entity}
                          </span>
                        )}
                        {field.name || field.displayName}
                        <span className={styles.fieldTypeSmall}>
                          ({field.type})
                        </span>
                        <button
                          className={styles.removeFieldButton}
                          onClick={() => toggleField(field.id)}
                        >
                          ×
                        </button>
                      </Badge>
                    ) : (
                      <Badge
                        key={fieldId}
                        className={styles.selectedFieldBadge}
                      >
                        {fieldId}
                        <button
                          className={styles.removeFieldButton}
                          onClick={() => toggleField(fieldId)}
                        >
                          ×
                        </button>
                      </Badge>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          <div className={styles.formBottomRow}>
            <div className={styles.formBottomItem}>
              <Label htmlFor="accessPattern" className={styles.formLabel}>
                Access Type
              </Label>
              <Select
                value={newUseCase.accessPatterns[0] || "last"}
                onValueChange={(value) =>
                  setNewUseCase({ ...newUseCase, accessPatterns: [value] })
                }
              >
                <SelectTrigger className={styles.formSelect}>
                  <SelectValue placeholder="Select access type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="last">Last</SelectItem>
                  <SelectItem value="history">History</SelectItem>
                  <SelectItem value="range">Range</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className={styles.formBottomItem}>
              <Label htmlFor="operation" className={styles.formLabel}>
                Operation
              </Label>
              <Select
                value={newUseCase.operation}
                onValueChange={(value) =>
                  setNewUseCase({ ...newUseCase, operation: value })
                }
              >
                <SelectTrigger className={styles.formSelect}>
                  <SelectValue placeholder="Select operation" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="read">Read</SelectItem>
                  <SelectItem value="write">Write</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className={styles.formBottomItem}>
              <Label htmlFor="frequency" className={styles.formLabel}>
                Frequency
              </Label>
              <Select
                value={newUseCase.frequency}
                onValueChange={(value) =>
                  setNewUseCase({
                    ...newUseCase,
                    frequency: value.toLowerCase(),
                  })
                }
              >
                <SelectTrigger className={styles.formSelect}>
                  <SelectValue placeholder="Select frequency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="low">Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleAddUseCase}>
            {activeUseCase ? "Update" : "Add"} Use Case
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
