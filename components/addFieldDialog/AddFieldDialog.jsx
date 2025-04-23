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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, Trash2 } from "lucide-react";
import { signalTypes, typeColors, fieldTypes } from "@/lib/const";
import styles from "./AddFieldDialog.module.css";

export default function AddFieldDialog({ 
  open, 
  onOpenChange, 
  parentPath = "", 
  onSave, 
  currentTemplate
}) {
  const [fieldName, setFieldName] = useState("");
  const [fieldType, setFieldType] = useState("sensor");
  const [metadata, setMetadata] = useState({});
  const [newField, setNewField] = useState({ key: "", type: "string", value: "" });

  // Reset form when dialog opens
  useEffect(() => {
    if (open) {
      resetForm();
    }
  }, [open]);

  const resetForm = () => {
    setFieldName("");
    setFieldType("sensor");
    setMetadata({});
    setNewField({ key: "", type: "string", value: "" });
  };

  const handleSave = () => {
    if (!fieldName) return;

    // Build the full path for the field
    const fullPath = parentPath 
      ? `${parentPath}.${fieldName}` 
      : fieldName;

    // Create the structure to save
    const fieldStructure = {
      type: fieldType,
      id: fullPath,
    };

    // Add children object if this is a branch
    if (fieldType === "branch") {
      fieldStructure.children = {};
    }

    // Create the metadata document
    const metadataDoc = {
      _id: fullPath,
      template: currentTemplate,
      ...metadata
    };

    // Pass both the structure and metadata back to parent component
    onSave(fieldStructure, metadataDoc, parentPath);

    // Close the dialog
    onOpenChange(false);
  };

  const handleAddMetadataField = () => {
    if (!newField.key.trim()) return;
    
    // Convert value to the appropriate type
    let typedValue = newField.value;
    
    switch (newField.type) {
      case 'string':
        typedValue = String(typedValue);
        break;
      case 'integer':
        typedValue = parseInt(typedValue, 10) || 0;
        break;
      case 'number':
        typedValue = parseFloat(typedValue) || 0;
        break;
      case 'boolean':
        typedValue = Boolean(typedValue);
        break;
      case 'array':
        typedValue = typedValue ? typedValue.split(',').map(item => item.trim()) : [];
        break;
    }
    
    setMetadata(prev => ({
      ...prev,
      [newField.key]: typedValue
    }));
    
    // Reset the new field form
    setNewField({ key: "", type: "string", value: "" });
  };

  const removeMetadataField = (key) => {
    const updatedMetadata = { ...metadata };
    delete updatedMetadata[key];
    setMetadata(updatedMetadata);
  };

  // Render the appropriate input based on field type
  const renderFieldInput = (type, value, onChange) => {
    switch (type) {
      case 'string':
        return (
          <Input
            value={value || ""}
            onChange={onChange}
            className={styles.fieldInput}
          />
        );
      case 'integer':
      case 'number':
        return (
          <Input
            type="number"
            value={value || ""}
            onChange={onChange}
            className={styles.fieldInput}
          />
        );
      case 'boolean':
        return (
          <Select 
            value={value ? "true" : "false"}
            onValueChange={(val) => onChange({ target: { value: val === "true" } })}
          >
            <SelectTrigger className={styles.fieldSelect}>
              <SelectValue placeholder="Select value" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="true">Yes</SelectItem>
              <SelectItem value="false">No</SelectItem>
            </SelectContent>
          </Select>
        );
      case 'array':
        return (
          <Textarea 
            value={Array.isArray(value) ? value.join(", ") : value || ""}
            onChange={onChange}
            className={styles.fieldTextarea}
            placeholder="Enter comma-separated values"
          />
        );
      default:
        return (
          <Input
            value={value || ""}
            onChange={onChange}
            className={styles.fieldInput}
          />
        );
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className={styles.dialogContent}>
        <DialogHeader>
          <DialogTitle>Add New Field</DialogTitle>
          <DialogDescription>
            {parentPath ? `Adding field to ${parentPath}` : "Adding field to root level"}
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className={styles.scrollArea}>
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
                  value={fieldName}
                  onChange={(e) => setFieldName(e.target.value)}
                  className={styles.fieldInput}
                />
              </div>

              <div className={styles.fieldItem}>
                <Label htmlFor="fieldType" className={styles.fieldLabel}>
                  Signal Type
                </Label>
                <Select value={fieldType} onValueChange={setFieldType}>
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
                  {!metadata.description && (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => setMetadata(prev => ({ ...prev, description: "" }))}
                      className={styles.suggestionButton}
                    >
                      <Plus className="h-3 w-3 mr-1" /> Description
                    </Button>
                  )}
                  
                  {fieldType !== "branch" && !metadata.datatype && (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => setMetadata(prev => ({ ...prev, datatype: "string" }))}
                      className={styles.suggestionButton}
                    >
                      <Plus className="h-3 w-3 mr-1" /> Data Type
                    </Button>
                  )}
                  
                  {!metadata.required && (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => setMetadata(prev => ({ ...prev, required: false }))}
                      className={styles.suggestionButton}
                    >
                      <Plus className="h-3 w-3 mr-1" /> Required
                    </Button>
                  )}
                </div>
              </div>
              
              <div className={styles.metadataList}>
                {Object.entries(metadata).map(([key, value]) => (
                  <div key={key} className={styles.metadataItem}>
                    <div className={styles.fieldHeader}>
                      <Label className={styles.metadataKey}>{key}</Label>
                      <div className={styles.fieldActions}>
                        <Select 
                          value={typeof value === 'boolean' 
                            ? 'boolean' 
                            : Array.isArray(value) 
                              ? 'array' 
                              : typeof value}
                          onValueChange={(newType) => {
                            // Convert the value to the new type
                            let convertedValue = value;
                            
                            switch (newType) {
                              case 'string':
                                convertedValue = String(value);
                                break;
                              case 'integer':
                                convertedValue = parseInt(value, 10) || 0;
                                break;
                              case 'number':
                                convertedValue = parseFloat(value) || 0;
                                break;
                              case 'boolean':
                                convertedValue = Boolean(value);
                                break;
                              case 'array':
                                convertedValue = Array.isArray(value) ? value : [String(value)];
                                break;
                            }
                            
                            setMetadata(prev => ({
                              ...prev,
                              [key]: convertedValue
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
                    <div className={styles.fieldValue}>
                      {renderFieldInput(
                        typeof value === 'boolean' 
                          ? 'boolean' 
                          : Array.isArray(value) 
                            ? 'array' 
                            : typeof value,
                        value,
                        (e) => {
                          const newValue = typeof value === 'number'
                            ? parseFloat(e.target.value)
                            : Array.isArray(value) 
                              ? e.target.value.split(',').map(item => item.trim()) 
                              : e.target.value;
                          
                          setMetadata(prev => ({
                            ...prev,
                            [key]: newValue
                          }));
                        }
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Add new metadata field form */}
              <div className={styles.addNewFieldSection}>
                <h4 className={styles.addNewFieldTitle}>Add Custom Field</h4>
                <div className={styles.addNewFieldForm}>
                  <div className={styles.addNewFieldRow}>
                    <Input 
                      placeholder="Field name"
                      value={newField.key}
                      onChange={(e) => setNewField({...newField, key: e.target.value})}
                      className={styles.newFieldInput}
                    />
                    <Select 
                      value={newField.type}
                      onValueChange={(value) => setNewField({...newField, type: value})}
                    >
                      <SelectTrigger className={styles.newFieldTypeSelect}>
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
                    <Button 
                      onClick={handleAddMetadataField}
                      disabled={!newField.key.trim()}
                      className={styles.addFieldButton}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className={styles.addNewFieldValue}>
                    {renderFieldInput(
                      newField.type,
                      newField.value,
                      (e) => setNewField({
                        ...newField, 
                        value: e.target.value
                      })
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollArea>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button type="submit" onClick={handleSave} disabled={!fieldName}>
            Add Field
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}