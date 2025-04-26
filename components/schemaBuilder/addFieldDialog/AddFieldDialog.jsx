import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus, Trash2 } from "lucide-react";
import { signalTypes, typeColors, fieldTypes } from "@/lib/const";
import styles from "./AddFieldDialog.module.css";

export default function AddFieldDialog({
  open,
  onOpenChange,
  parentPath = "",
  onSave,
  currentTemplate,
}) {
  const [field, setField] = useState({
    name: "",
    type: "sensor",
    value: "",
    key: "",
    datatype: "string",
    description: "",
    enum: "",
    unit: "",
    min: "",
    max: "",
    required: false,
  });
  // Initialize metadata as an empty object, not undefined
  const [additionalMetadata, setAdditionalMetadata] = useState({});
  const [newField, setNewField] = useState({
    key: "",
    type: "string",
    value: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  // Reset form when dialog opens
  useEffect(() => {
    if (open) {
      resetForm();
    }
  }, [open]);

  const resetForm = () => {
    setField({
      name: "",
      type: "sensor",
      value: "",
      key: "",
      datatype: "string",
      description: "",
      enum: "",
      unit: "",
      min: "",
      max: "",
      required: false,
    });
    // Reset additional metadata
    setAdditionalMetadata({});
    setNewField({
      key: "",
      type: "string",
      value: "",
    });
    setError(null);
  };

  // Add a new metadata field
  const handleAddMetadataField = () => {
    if (!newField.key.trim()) return;

    // Convert value to the appropriate type
    let typedValue = newField.value;

    switch (newField.type) {
      case "string":
        typedValue = String(typedValue);
        break;
      case "integer":
        typedValue = parseInt(typedValue, 10) || 0;
        break;
      case "number":
        typedValue = parseFloat(typedValue) || 0;
        break;
      case "boolean":
        typedValue = Boolean(typedValue);
        break;
      case "array":
        typedValue = typedValue ? [typedValue] : [];
        break;
    }

    setAdditionalMetadata({
      ...additionalMetadata,
      [newField.key]: typedValue,
    });

    // Reset the new field form
    setNewField({ key: "", type: "string", value: "" });
  };

  // Remove a metadata field
  const removeMetadataField = (key) => {
    const updatedMetadata = { ...additionalMetadata };
    delete updatedMetadata[key];
    setAdditionalMetadata(updatedMetadata);
  };

  // Render input field based on type
  const renderFieldInput = (type, value, onChange) => {
    if (type === "boolean") {
      return (
        <Select
          value={value ? "true" : "false"}
          onValueChange={(newValue) => {
            const boolValue = newValue === "true";
            onChange({ target: { value: boolValue } });
          }}
        >
          <SelectTrigger className={styles.fieldValue}>
            <SelectValue placeholder="Select value" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="true">Yes</SelectItem>
            <SelectItem value="false">No</SelectItem>
          </SelectContent>
        </Select>
      );
    }

    if (type === "array") {
      return (
        <Textarea
          value={Array.isArray(value) ? value.join(", ") : ""}
          onChange={onChange}
          className={styles.fieldValue}
          placeholder="Enter comma-separated values"
        />
      );
    }

    return (
      <Input
        type={type === "number" || type === "integer" ? "number" : "text"}
        value={value || ""}
        onChange={onChange}
        className={styles.fieldValue}
      />
    );
  };

  // Check if a field with the given ID already exists in the metadata
  const checkIfFieldExists = (id) => {
    // Logic to check if the field exists
    // In a real implementation, you would check against metadataDocuments
    return false;
  };

  // Handle form submission for saving new field
  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setError(null);

    try {
      if (!field.name.trim()) {
        throw new Error("Field name cannot be empty");
      }

      // Build the ID for the new field
      const fieldId = parentPath
        ? `${parentPath}.${field.name.trim()}`
        : field.name.trim();

      // Check if the field already exists at this location
      const doesExist = checkIfFieldExists(fieldId);
      if (doesExist) {
        throw new Error(
          `A field named "${field.name}" already exists at this location`
        );
      }

      // Create field structure object
      const fieldStructure = {
        type: field.type,
        id: fieldId,
        children: field.type === "branch" ? {} : undefined,
      };

      // Create metadata object with all the fields
      const metadataDoc = {
        id: fieldId,
        type: field.type,
        template: currentTemplate,
      };

      // Add datatype if not a branch
      if (field.type !== "branch" && field.datatype) {
        metadataDoc.datatype = field.datatype;
      }

      // Add description if provided
      if (field.description) {
        metadataDoc.description = field.description.trim();
      }

      // If unit is provided, add it to metadata
      if (field.unit && field.unit.trim()) {
        metadataDoc.unit = field.unit.trim();
      }

      // Add min/max for numeric types
      if (field.datatype === "number" || field.datatype === "integer") {
        if (field.min !== undefined && field.min !== "" && !isNaN(field.min)) {
          metadataDoc.min = Number(field.min);
        }
        if (field.max !== undefined && field.max !== "" && !isNaN(field.max)) {
          metadataDoc.max = Number(field.max);
        }
      }

      // Add enum values if provided
      if (field.enum && field.enum.trim()) {
        metadataDoc.allowed = field.enum
          .split(",")
          .map((item) => item.trim())
          .filter((item) => item);
      }

      // Mark as required if checked
      if (field.required) {
        metadataDoc.required = true;
      }

      // Add any additional custom metadata fields
      Object.entries(additionalMetadata).forEach(([key, value]) => {
        metadataDoc[key] = value;
      });

      // Call the onSave callback with the new field structure and metadata document
      onSave(fieldStructure, metadataDoc, parentPath);

      // Reset form and close dialog
      resetForm();
      onOpenChange(false);
    } catch (err) {
      console.error("Error adding field:", err);
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className={`sm:max-w-[750px] max-h-[80vh] overflow-hidden flex flex-col ${styles.dialogContent}`}
      >
        <DialogHeader className="sticky top-0 z-2 bg-background pb-4 border-b">
          <DialogTitle>Add New Field</DialogTitle>
          <DialogDescription>
            {parentPath
              ? `Adding field to ${parentPath}`
              : "Adding field to root level"}
          </DialogDescription>
        </DialogHeader>

        <ScrollArea
          className={`${styles.scrollArea} overflow-y-auto flex-grow`}
        >
          <div className={styles.formContent}>
            {/* Basic field information */}
            <div className={styles.formSection}>
              <h3 className={styles.sectionTitle}>Basic Information</h3>

              <div className={styles.fieldItem}>
                <Label htmlFor="fieldName" className={styles.fieldLabel}>
                  Field Name
                </Label>
                <Input
                  id="fieldName"
                  value={field.name}
                  onChange={(e) => setField({ ...field, name: e.target.value })}
                  className={styles.fieldInput}
                />
              </div>

              <div className={styles.fieldItem}>
                <Label htmlFor="fieldType" className={styles.fieldLabel}>
                  Signal Type
                </Label>
                <Select
                  value={field.type}
                  onValueChange={(value) => setField({ ...field, type: value })}
                >
                  <SelectTrigger className={styles.fieldSelect}>
                    <SelectValue placeholder="Select a type" />
                  </SelectTrigger>
                  <SelectContent>
                    {signalTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        <div className={styles.signalTypeOption}>
                          <Badge
                            variant="outline"
                            className={styles.typeBadge}
                            style={{
                              backgroundColor: typeColors[type],
                              color: type === "sensor" ? "#000" : "#fff",
                            }}
                          >
                            {type}
                          </Badge>
                          <span className={styles.typeDescription}>
                            {type === "branch"
                              ? "Container for other signals"
                              : type === "attribute"
                              ? "Static vehicle property"
                              : type === "actuator"
                              ? "Controllable vehicle element"
                              : "Vehicle data measurement"}
                          </span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Metadata fields */}
            <div className={styles.formSection}>
              <div className={styles.metadataHeader}>
                <h3 className={styles.sectionTitle}>Metadata Fields</h3>

                <div className={styles.quickAddButtons}>
                  {!field.description && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        setField((prev) => ({ ...prev, description: "" }))
                      }
                      className={styles.suggestionButton}
                    >
                      <Plus className="h-3 w-3 mr-1" /> Description
                    </Button>
                  )}

                  {field.type !== "branch" && !field.datatype && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        setField((prev) => ({ ...prev, datatype: "string" }))
                      }
                      className={styles.suggestionButton}
                    >
                      <Plus className="h-3 w-3 mr-1" /> Data Type
                    </Button>
                  )}

                  {!field.required && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        setField((prev) => ({ ...prev, required: false }))
                      }
                      className={styles.suggestionButton}
                    >
                      <Plus className="h-3 w-3 mr-1" /> Required
                    </Button>
                  )}
                </div>
              </div>

              <div className={styles.metadataList}>
                {Object.entries(additionalMetadata).map(([key, value]) => (
                  <div key={key} className={styles.metadataItem}>
                    <div className={styles.fieldRow}>
                      <Input
                        value={key}
                        onChange={(e) => {
                          const newKey = e.target.value;
                          if (newKey && newKey !== key) {
                            const updatedMetadata = { ...additionalMetadata };
                            delete updatedMetadata[key];
                            updatedMetadata[newKey] = value;
                            setAdditionalMetadata(updatedMetadata);
                          }
                        }}
                        className={styles.fieldNameInput}
                        placeholder="Field name"
                      />

                      <Select
                        value={
                          typeof value === "boolean"
                            ? "boolean"
                            : Array.isArray(value)
                            ? "array"
                            : typeof value
                        }
                        onValueChange={(newType) => {
                          // Convert the value to the new type
                          let convertedValue = value;

                          switch (newType) {
                            case "string":
                              convertedValue = String(value);
                              break;
                            case "integer":
                              convertedValue = parseInt(value, 10) || 0;
                              break;
                            case "number":
                              convertedValue = parseFloat(value) || 0;
                              break;
                            case "boolean":
                              convertedValue = Boolean(value);
                              break;
                            case "array":
                              convertedValue = Array.isArray(value)
                                ? value
                                : [String(value)];
                              break;
                          }

                          setAdditionalMetadata((prev) => ({
                            ...prev,
                            [key]: convertedValue,
                          }));
                        }}
                      >
                        <SelectTrigger className={styles.typeSelect}>
                          <SelectValue placeholder="Type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="string">String</SelectItem>
                          <SelectItem value="integer">Integer</SelectItem>
                          <SelectItem value="number">Number</SelectItem>
                          <SelectItem value="boolean">Boolean</SelectItem>
                          <SelectItem value="array">Array</SelectItem>
                        </SelectContent>
                      </Select>

                      {renderFieldInput(
                        typeof value === "boolean"
                          ? "boolean"
                          : Array.isArray(value)
                          ? "array"
                          : typeof value,
                        value,
                        (e) => {
                          const newValue =
                            typeof value === "number"
                              ? parseFloat(e.target.value)
                              : Array.isArray(value)
                              ? e.target.value
                                  .split(",")
                                  .map((item) => item.trim())
                              : e.target.value;

                          setAdditionalMetadata((prev) => ({
                            ...prev,
                            [key]: newValue,
                          }));
                        }
                      )}

                      <Button
                        variant="ghost"
                        size="icon"
                        className={styles.deleteButton}
                        onClick={() => removeMetadataField(key)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollArea>

        <div className="sticky bottom-0 bg-background pt-4 border-t mt-auto">
          {/* Add Custom Field Section in the footer */}
          <div className={styles.addCustomFieldFooter}>
            <h4 className={styles.addNewFieldTitle}>Add Custom Field</h4>
            <div className={styles.metadataRow}>
              <Input
                placeholder="Field name"
                value={newField.key}
                onChange={(e) =>
                  setNewField({ ...newField, key: e.target.value })
                }
                className={styles.fieldNameInput}
              />
              <Select
                value={newField.type}
                onValueChange={(value) =>
                  setNewField({ ...newField, type: value })
                }
              >
                <SelectTrigger className={styles.typeSelect}>
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="string">String</SelectItem>
                  <SelectItem value="integer">Integer</SelectItem>
                  <SelectItem value="number">Number</SelectItem>
                  <SelectItem value="boolean">Boolean</SelectItem>
                  <SelectItem value="array">Array</SelectItem>
                </SelectContent>
              </Select>

              <Input
                placeholder="Field value"
                value={newField.value}
                onChange={(e) =>
                  setNewField({ ...newField, value: e.target.value })
                }
                className={styles.fieldValue}
              />

              <Button
                onClick={handleAddMetadataField}
                disabled={!newField.key.trim()}
                className={styles.addFieldButton}
                size="icon"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <DialogFooter className="mt-4">
            <Button variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit" onClick={handleSubmit} disabled={!field.name}>
              Add Field
            </Button>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
}
