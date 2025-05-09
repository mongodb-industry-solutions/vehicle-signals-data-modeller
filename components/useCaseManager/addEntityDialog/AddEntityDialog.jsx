import { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import styles from "./AddEntityDialog.module.css";

const fieldTypes = ["String", "Number", "Date", "Boolean", "Object", "Array"];

export default function AddEntityDialog({
  open,
  onOpenChange,
  onAddEntity,
  onAddFieldToEntity,
}) {
  const [newEntity, setNewEntity] = useState({ name: "", fields: [] });
  const [showFieldDialog, setShowFieldDialog] = useState(false);
  const [newField, setNewField] = useState({
    name: "",
    type: "String",
    description: "",
  });
  const [currentEntity, setCurrentEntity] = useState(null);

  const handleAddEntity = () => {
    if (!newEntity.name) return;

    onAddEntity(newEntity);
    setNewEntity({ name: "", fields: [] });
  };

  const handleAddFieldToNewEntity = () => {
    if (!newField.name) return;

    const entityId = newEntity.name.toLowerCase().replace(/\s+/g, "_");
    const fieldId = `${entityId}.${newField.name
      .toLowerCase()
      .replace(/\s+/g, "_")}`;

    const field = {
      id: fieldId,
      name: newField.name,
      type: newField.type,
      description: newField.description,
    };

    setNewEntity({
      ...newEntity,
      fields: [...newEntity.fields, field],
    });

    setNewField({ name: "", type: "String", description: "" });
    setShowFieldDialog(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Custom Entity</DialogTitle>
          <DialogDescription>
            Create a new entity to use in your use cases
          </DialogDescription>
        </DialogHeader>
        <div className={styles.entityForm}>
          <div className={styles.formGroup}>
            <Label htmlFor="entityName">Entity Name</Label>
            <Input
              id="entityName"
              value={newEntity.name}
              onChange={(e) =>
                setNewEntity({ ...newEntity, name: e.target.value })
              }
              placeholder="e.g., Maintenance"
            />
          </div>

          <div className={styles.entityFieldsContainer}>
            <Label>Entity Fields</Label>
            <div className={styles.entityFieldsList}>
              {newEntity.fields.length === 0 ? (
                <p className={styles.noFieldsMessage}>No fields added yet</p>
              ) : (
                <div className={styles.entityFieldsGrid}>
                  {newEntity.fields.map((field, index) => (
                    <div key={index} className={styles.entityField}>
                      <span className={styles.entityFieldName}>
                        {field.name}
                      </span>
                      <Badge variant="outline">{field.type}</Badge>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Button
              variant="outline"
              size="sm"
              className={styles.addFieldButton}
              onClick={() => {
                setCurrentEntity({
                  id: newEntity.name.toLowerCase().replace(/\s+/g, "_"),
                  name: newEntity.name,
                  fields: newEntity.fields,
                });
                setShowFieldDialog(true);
              }}
            >
              <Plus className="h-3 w-3 mr-1" />
              Add Field
            </Button>
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleAddEntity}>Add Entity</Button>
        </DialogFooter>
      </DialogContent>

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
            <Button onClick={handleAddFieldToNewEntity}>Add Field</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Dialog>
  );
}
