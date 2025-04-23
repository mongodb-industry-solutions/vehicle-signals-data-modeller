"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Trash2 } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import styles from "./MetadataDialog.module.css"
import { typeColors, signalTypes, fieldTypes } from "@/lib/const"

export default function MetadataDialog({ open, onOpenChange, fieldId, onUpdate }) {
  const [metadata, setMetadata] = useState(null)
  const [editableMetadata, setEditableMetadata] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [isEditing, setIsEditing] = useState(false)
  const [newField, setNewField] = useState({ key: "", type: "string", value: "" })

  useEffect(() => {
    async function fetchFieldMetadata() {
      if (!open || !fieldId) return
      
      setIsLoading(true)
      setError(null)
      setIsEditing(false)
      
      try {
        const response = await fetch('/api/action/findOne', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            collection: 'signals',
            filter: { _id: fieldId },
            projection: {template: 0}
          }),
        })

        if (!response.ok) {
          throw new Error(`Failed to fetch field metadata: ${response.status}`)
        }

        const data = await response.json()
        setMetadata(data)
        setEditableMetadata(null) // Reset editable data
      } catch (err) {
        console.error('Error fetching field metadata:', err)
        setError(err.message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchFieldMetadata()
  }, [open, fieldId])

  const handleEditToggle = () => {
    if (isEditing) {
      // Cancel edit - reset to original data
      setIsEditing(false)
      setEditableMetadata(null)
    } else {
      // Start editing - create a deep copy of metadata for editing
      setIsEditing(true)
      
      // Create editable version without internal fields
      const editableMeta = { ...metadata }
      // Don't expose these fields for editing
      delete editableMeta._id
      delete editableMeta.id
      delete editableMeta.children

      setEditableMetadata(editableMeta)
    }
  }

  const handleSaveChanges = async () => {
    if (!editableMetadata) return
    
    setIsLoading(true)
    setError(null)
    
    try {
      // Create update object with the editable metadata
      const updateData = { ...editableMetadata }
      
      // Always keep the id (important for update)
      updateData.id = fieldId
      
      // Preserve children if it exists
      if (metadata.children) {
        updateData.children = metadata.children
      }
      
      const response = await fetch('/api/action/updateOne', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          collection: 'signals',
          filter: { id: fieldId },
          update: { $set: updateData },
        }),
      })

      if (!response.ok) {
        throw new Error(`Failed to update field: ${response.status}`)
      }

      // Update was successful
      setMetadata(updateData)
      setIsEditing(false)
      setEditableMetadata(null)
      
      // Notify parent component about the update
      if (onUpdate) {
        onUpdate(updateData)
      }
    } catch (err) {
      console.error('Error updating field metadata:', err)
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  const handleFieldChange = (key, value) => {
    if (!editableMetadata) return
    
    setEditableMetadata({
      ...editableMetadata,
      [key]: value
    })
  }

  const handleFieldTypeChange = (key, newType) => {
    if (!editableMetadata) return
    
    // Convert value to the appropriate type
    let convertedValue = editableMetadata[key]
    
    switch (newType) {
      case 'string':
        convertedValue = String(convertedValue)
        break
      case 'integer':
        convertedValue = parseInt(convertedValue, 10)
        break
      case 'number':
        convertedValue = parseFloat(convertedValue)
        break
      case 'boolean':
        convertedValue = Boolean(convertedValue)
        break
      case 'array':
        convertedValue = Array.isArray(convertedValue) ? convertedValue : [convertedValue]
        break
    }
    
    // Update both the value and the datatype if it's the datatype field
    if (key === 'datatype') {
      setEditableMetadata({
        ...editableMetadata,
        datatype: newType
      })
    } else {
      setEditableMetadata({
        ...editableMetadata,
        [key]: convertedValue
      })
    }
  }

  const handleAddNewField = () => {
    if (!newField.key.trim() || !editableMetadata) return
    
    // Convert value to the appropriate type
    let typedValue = newField.value
    
    switch (newField.type) {
      case 'string':
        typedValue = String(typedValue)
        break
      case 'integer':
        typedValue = parseInt(typedValue, 10) || 0
        break
      case 'number':
        typedValue = parseFloat(typedValue) || 0
        break
      case 'boolean':
        typedValue = Boolean(typedValue)
        break
      case 'array':
        typedValue = typedValue ? [typedValue] : []
        break
    }
    
    setEditableMetadata({
      ...editableMetadata,
      [newField.key]: typedValue
    })
    
    // Reset the new field form
    setNewField({ key: "", type: "string", value: "" })
  }

  const handleRemoveField = (key) => {
    if (!editableMetadata) return
    
    const updatedMetadata = { ...editableMetadata }
    delete updatedMetadata[key]
    
    setEditableMetadata(updatedMetadata)
  }

  // Helper function to format field values for display
  const formatValue = (key, value) => {
    if (value === null || value === undefined) return "—"
    
    if (key === "type") {
      return (
        <Badge
          variant="outline"
          className={styles.typeBadge}
          style={{
            backgroundColor: typeColors[value],
            color: value === "sensor" ? "#000" : "#fff",
          }}
        >
          {value}
        </Badge>
      )
    }
    
    if (key === "allowed" && Array.isArray(value)) {
      return (
        <div className={styles.badgeContainer}>
          {value.map((val, idx) => (
            <Badge key={idx} variant="outline">
              {val}
            </Badge>
          ))}
        </div>
      )
    }
    
    if (typeof value === "boolean") {
      return value ? "Yes" : "No"
    }
    
    return value.toString()
  }

  // Helper function to render editable field based on inferred type
  const renderEditableField = (key, value) => {
    if (key === "type") {
      return (
        <Select 
          value={value}
          onValueChange={(newValue) => handleFieldChange(key, newValue)}
        >
          <SelectTrigger className={styles.selectField}>
            <SelectValue placeholder="Select type" />
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
      )
    }

    if (key === "datatype") {
      return (
        <Select 
          value={value}
          onValueChange={(newValue) => handleFieldChange(key, newValue)}
        >
          <SelectTrigger className={styles.selectField}>
            <SelectValue placeholder="Select data type" />
          </SelectTrigger>
          <SelectContent>
            {fieldTypes.map((type) => (
              <SelectItem key={type} value={type}>
                {type}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      )
    }

    if (key === "description") {
      return (
        <Textarea 
          value={value || ""}
          onChange={(e) => handleFieldChange(key, e.target.value)}
          className={styles.textareaField}
        />
      )
    }

    if (typeof value === "boolean") {
      return (
        <Select 
          value={value ? "true" : "false"}
          onValueChange={(newValue) => handleFieldChange(key, newValue === "true")}
        >
          <SelectTrigger className={styles.selectField}>
            <SelectValue placeholder="Select value" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="true">Yes</SelectItem>
            <SelectItem value="false">No</SelectItem>
          </SelectContent>
        </Select>
      )
    }

    if (Array.isArray(value)) {
      return (
        <Textarea 
          value={value.join(", ")}
          onChange={(e) => handleFieldChange(key, e.target.value.split(",").map(item => item.trim()))}
          className={styles.textareaField}
          placeholder="Enter comma-separated values"
        />
      )
    }

    return (
      <Input 
        type={typeof value === "number" ? "number" : "text"}
        value={value === null ? "" : value}
        onChange={(e) => {
          const newValue = typeof value === "number" 
            ? (key === "min" || key === "max" ? parseFloat(e.target.value) : parseInt(e.target.value, 10))
            : e.target.value;
          handleFieldChange(key, newValue);
        }}
        className={styles.inputField}
      />
    )
  }

  // Determine the data type for a field
  const getFieldType = (value) => {
    if (value === null || value === undefined) return "string";
    if (typeof value === "string") return "string";
    if (Number.isInteger(value)) return "integer";
    if (typeof value === "number") return "number";
    if (typeof value === "boolean") return "boolean";
    if (Array.isArray(value)) return "array";
    return "string";
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[550px]">
        <DialogHeader>
          <DialogTitle>{isEditing ? "Edit Field Metadata" : "Field Metadata"}</DialogTitle>
          <DialogDescription>{fieldId}</DialogDescription>
        </DialogHeader>
        
        {isLoading ? (
          <div className={styles.loadingContainer}>
            Loading metadata...
          </div>
        ) : error ? (
          <div className={styles.errorContainer}>
            <p>Error: {error}</p>
          </div>
        ) : !metadata ? (
          <div className={styles.noMetadata}>No metadata available</div>
        ) : (
          <>
            <div className={styles.metadataContent}>
              {isEditing ? (
                // Edit mode
                <>
                  {Object.entries(editableMetadata || {}).map(([key, value]) => {
                    // Skip if it's a hidden field
                    if (key === "_id" || key === "id" || key === "children") {
                      return null;
                    }
                    
                    return (
                      <div key={key} className={styles.metadataItemEdit}>
                        <div className={styles.fieldHeader}>
                          <Label className={styles.metadataLabel}>{key}</Label>
                          <Select 
                            value={getFieldType(value)}
                            onValueChange={(newType) => handleFieldTypeChange(key, newType)}
                            disabled={key === "type" || key === "datatype"}
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
                            onClick={() => handleRemoveField(key)}
                            disabled={key === "type"} // Don't allow removing type
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className={styles.fieldValue}>
                          {renderEditableField(key, value)}
                        </div>
                      </div>
                    );
                  })}
                  
                  {/* Add new field form */}
                  <div className={styles.addNewFieldSection}>
                    <h4 className={styles.addNewFieldTitle}>Add New Field</h4>
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
                      </div>
                      <div className={styles.addNewFieldRow}>
                        <Input 
                          placeholder="Field value"
                          value={newField.value}
                          onChange={(e) => setNewField({...newField, value: e.target.value})}
                          className={styles.newFieldValueInput}
                        />
                        <Button 
                          onClick={handleAddNewField}
                          disabled={!newField.key.trim()}
                          className={styles.addFieldButton}
                        >
                          <Plus className="h-4 w-4 mr-1" /> Add Field
                        </Button>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                // View mode
                Object.entries(metadata).map(([key, value]) => {
                  // Skip internal fields or empty values
                  if (key === "_id" || key === "id" || value === undefined || value === null) {
                    return null;
                  }
                  
                  // Skip children object if it exists
                  if (key === "children" && typeof value === "object") {
                    return null;
                  }
                  
                  return (
                    <div key={key} className={styles.metadataItem}>
                      <div className={styles.metadataLabel}>{key}</div>
                      <div className={styles.metadataValue}>
                        {formatValue(key, value)}
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            <DialogFooter>
              {isEditing ? (
                <>
                  <Button variant="outline" onClick={handleEditToggle}>
                    Cancel
                  </Button>
                  <Button onClick={handleSaveChanges} disabled={isLoading}>
                    Save Changes
                  </Button>
                </>
              ) : (
                <Button onClick={handleEditToggle} disabled={isLoading}>
                  Edit Metadata
                </Button>
              )}
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}