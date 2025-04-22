"use client"

import { useState } from "react"
import { PlusCircle, Trash2, Edit, Plus, FileUp, Save } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import styles from "./use-case-manager.module.css"

// Sample schemas
const availableSchemas = [
  {
    id: 1,
    name: "Fleet Management Schema",
    fields: [
      { id: "Vehicle.VehicleIdentification.VIN", name: "VIN", type: "String", entity: "Vehicle" },
      { id: "Vehicle.Speed", name: "Speed", type: "Number", entity: "Vehicle" },
      { id: "Vehicle.TraveledDistance", name: "Traveled Distance", type: "Number", entity: "Vehicle" },
      { id: "Vehicle.CurrentLocation.Timestamp", name: "Location Timestamp", type: "Date", entity: "Vehicle" },
      { id: "Vehicle.CurrentLocation.Latitude", name: "Latitude", type: "Number", entity: "Vehicle" },
      { id: "Vehicle.CurrentLocation.Longitude", name: "Longitude", type: "Number", entity: "Vehicle" },
      { id: "Vehicle.CurrentLocation.Altitude", name: "Altitude", type: "Number", entity: "Vehicle" },
      { id: "Vehicle.Acceleration.Lateral", name: "Lateral Acceleration", type: "Number", entity: "Vehicle" },
      { id: "Vehicle.Acceleration.Longitudinal", name: "Longitudinal Acceleration", type: "Number", entity: "Vehicle" },
      { id: "Vehicle.Acceleration.Vertical", name: "Vertical Acceleration", type: "Number", entity: "Vehicle" },
      { id: "Vehicle.Diagnostics.DTCCount", name: "DTC Count", type: "Number", entity: "Vehicle" },
      { id: "Vehicle.Diagnostics.DTCList", name: "DTC List", type: "Array", entity: "Vehicle" },
    ],
  },
  { id: 2, name: "Predictive Maintenance Schema", fields: [] },
  { id: 3, name: "Insurance Telematics Schema", fields: [] },
]

// Sample access patterns
const accessPatterns = ["Read", "Write", "Update", "Delete", "Filter", "Sort", "Aggregate"]

// Custom entities
const initialCustomEntities = [
  {
    id: "driver",
    name: "Driver",
    fields: [
      { id: "driver.id", name: "Driver ID", type: "String" },
      { id: "driver.name", name: "Name", type: "String" },
      { id: "driver.license", name: "License Number", type: "String" },
      { id: "driver.phoneNumber", name: "Phone Number", type: "String" },
      { id: "driver.email", name: "Email", type: "String" },
    ],
  },
  {
    id: "trip",
    name: "Trip",
    fields: [
      { id: "trip.id", name: "Trip ID", type: "String" },
      { id: "trip.startTime", name: "Start Time", type: "Date" },
      { id: "trip.endTime", name: "End Time", type: "Date" },
      { id: "trip.startLocation", name: "Start Location", type: "Object" },
      { id: "trip.endLocation", name: "End Location", type: "Object" },
      { id: "trip.distance", name: "Distance", type: "Number" },
      { id: "trip.fuelConsumption", name: "Fuel Consumption", type: "Number" },
    ],
  },
]

const fieldTypes = ["String", "Number", "Date", "Boolean", "Object", "Array"]

export default function UseCaseManager() {
  // Add a new state to track the currently selected entity
  const [selectedEntity, setSelectedEntity] = useState("vehicle")

  // Add app definition saving and loading functionality
  const [appDefinitions, setAppDefinitions] = useState([
    { id: 1, name: "Fleet Management App", description: "Real-time vehicle tracking and management", useCases: [] },
  ])
  const [currentAppDefinition, setCurrentAppDefinition] = useState({
    id: 0,
    name: "New App Definition",
    description: "",
  })
  const [showAppDialog, setShowAppDialog] = useState(false)
  const [showEntityDetailsDialog, setShowEntityDetailsDialog] = useState(false)
  const [entityToView, setEntityToView] = useState(null)

  const [selectedSchemaId, setSelectedSchemaId] = useState(1)
  const [customEntities, setCustomEntities] = useState(initialCustomEntities)
  const [showEntityDialog, setShowEntityDialog] = useState(false)
  const [showFieldDialog, setShowFieldDialog] = useState(false)
  const [currentEntity, setCurrentEntity] = useState(null)
  const [newEntity, setNewEntity] = useState({ name: "", fields: [] })
  const [newField, setNewField] = useState({ name: "", type: "String", description: "" })

  const [useCases, setUseCases] = useState([
    {
      id: 1,
      name: "PRODUCTIVITY01",
      description: "Real-time asset tracking",
      fields: [
        "Vehicle.VehicleIdentification.VIN",
        "Vehicle.CurrentLocation.Latitude",
        "Vehicle.CurrentLocation.Longitude",
        "Vehicle.CurrentLocation.Timestamp",
        "Vehicle.CurrentLocation.Altitude",
      ],
      accessPatterns: ["Read"],
      frequency: "High",
    },
  ])
  const [showUseCaseDialog, setShowUseCaseDialog] = useState(false)
  const [activeUseCase, setActiveUseCase] = useState(null)
  const [newUseCase, setNewUseCase] = useState({
    name: "",
    description: "",
    fields: [],
    accessPatterns: [],
    frequency: "Medium",
  })

  const selectedSchema = availableSchemas.find((schema) => schema.id === selectedSchemaId) || availableSchemas[0]

  // Get all available fields from schema and custom entities
  const getAllFields = () => {
    const schemaFields = selectedSchema.fields || []
    const entityFields = customEntities.flatMap((entity) =>
      entity.fields.map((field) => ({ ...field, entity: entity.name })),
    )

    return [...schemaFields, ...entityFields]
  }

  const handleAddUseCase = () => {
    if (activeUseCase) {
      setUseCases(useCases.map((uc) => (uc.id === activeUseCase.id ? { ...newUseCase, id: activeUseCase.id } : uc)))
    } else {
      setUseCases([...useCases, { ...newUseCase, id: Date.now() }])
    }
    setNewUseCase({
      name: "",
      description: "",
      fields: [],
      accessPatterns: [],
      frequency: "Medium",
    })
    setActiveUseCase(null)
    setShowUseCaseDialog(false)
  }

  const handleEditUseCase = (useCase) => {
    setActiveUseCase(useCase)
    setNewUseCase({
      name: useCase.name,
      description: useCase.description,
      fields: useCase.fields,
      accessPatterns: useCase.accessPatterns,
      frequency: useCase.frequency,
    })
    setShowUseCaseDialog(true)
  }

  const handleRemoveUseCase = (id) => {
    setUseCases(useCases.filter((uc) => uc.id !== id))
  }

  const toggleField = (fieldId) => {
    if (newUseCase.fields.includes(fieldId)) {
      setNewUseCase({
        ...newUseCase,
        fields: newUseCase.fields.filter((id) => id !== fieldId),
      })
    } else {
      setNewUseCase({
        ...newUseCase,
        fields: [...newUseCase.fields, fieldId],
      })
    }
  }

  const toggleAccessPattern = (pattern) => {
    if (newUseCase.accessPatterns.includes(pattern)) {
      setNewUseCase({
        ...newUseCase,
        accessPatterns: newUseCase.accessPatterns.filter((p) => p !== pattern),
      })
    } else {
      setNewUseCase({
        ...newUseCase,
        accessPatterns: [...newUseCase.accessPatterns, pattern],
      })
    }
  }

  const handleAddEntity = () => {
    if (!newEntity.name) return

    const entityId = newEntity.name.toLowerCase().replace(/\s+/g, "_")
    setCustomEntities([
      ...customEntities,
      {
        id: entityId,
        name: newEntity.name,
        fields: newEntity.fields,
      },
    ])
    setNewEntity({ name: "", fields: [] })
    setShowEntityDialog(false)
  }

  const handleAddFieldToEntity = () => {
    if (!newField.name || !currentEntity) return

    const fieldId = `${currentEntity.id}.${newField.name.toLowerCase().replace(/\s+/g, "_")}`
    const updatedField = {
      id: fieldId,
      name: newField.name,
      type: newField.type,
      description: newField.description,
    }

    const updatedEntity = {
      ...currentEntity,
      fields: [...currentEntity.fields, updatedField],
    }

    setCustomEntities(customEntities.map((entity) => (entity.id === currentEntity.id ? updatedEntity : entity)))

    setNewField({ name: "", type: "String", description: "" })
    setShowFieldDialog(false)
  }

  const openAddFieldDialog = (entity) => {
    setCurrentEntity(entity)
    setShowFieldDialog(true)
  }

  const handleSaveAppDefinition = () => {
    const appDef = {
      id: currentAppDefinition.id || Date.now(),
      name: currentAppDefinition.name,
      description: currentAppDefinition.description,
      useCases: [...useCases],
      schemaId: selectedSchemaId,
    }

    if (currentAppDefinition.id) {
      // Update existing
      setAppDefinitions(appDefinitions.map((app) => (app.id === currentAppDefinition.id ? appDef : app)))
    } else {
      // Add new
      setAppDefinitions([...appDefinitions, appDef])
    }

    setCurrentAppDefinition(appDef)
    setShowAppDialog(false)
  }

  const handleLoadAppDefinition = (appDef) => {
    setCurrentAppDefinition(appDef)
    setUseCases(appDef.useCases || [])
    setSelectedSchemaId(appDef.schemaId || 1)
    setShowAppDialog(false)
  }

  const viewEntityDetails = (entity) => {
    setEntityToView(entity)
    setShowEntityDetailsDialog(true)
  }

  return (
    <div className={styles.container}>
      {/* Update the header section to include app definition controls */}
      <div className={styles.header}>
        <div>
          <h2 className={styles.title}>App Builder</h2>
          <p className={styles.description}>Define applications that use your vehicle signal schema</p>
        </div>
        <div className={styles.appControls}>
          <div className={styles.appInfo}>
            <h3 className={styles.appName}>{currentAppDefinition.name}</h3>
            {currentAppDefinition.description && (
              <p className={styles.appDescription}>{currentAppDefinition.description}</p>
            )}
          </div>
          <div className={styles.appButtons}>
            <div className={styles.schemaSelector}>
              <Label htmlFor="schema-select" className={styles.schemaLabel}>
                Schema:
              </Label>
              <Select
                value={selectedSchemaId.toString()}
                onValueChange={(value) => setSelectedSchemaId(Number.parseInt(value))}
              >
                <SelectTrigger className={styles.schemaTrigger}>
                  <SelectValue placeholder="Select schema" />
                </SelectTrigger>
                <SelectContent>
                  {availableSchemas.map((schema) => (
                    <SelectItem key={schema.id} value={schema.id.toString()}>
                      {schema.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Dialog open={showAppDialog} onOpenChange={setShowAppDialog}>
              <DialogTrigger asChild>
                <Button variant="outline" className={styles.appButton}>
                  <FileUp className="mr-2 h-4 w-4" />
                  Load App
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>App Definitions</DialogTitle>
                  <DialogDescription>Load an existing app definition or create a new one</DialogDescription>
                </DialogHeader>
                <div className={styles.appList}>
                  {appDefinitions.map((app) => (
                    <Card key={app.id} className={styles.appCard} onClick={() => handleLoadAppDefinition(app)}>
                      <CardHeader className="p-4">
                        <CardTitle className="text-lg">{app.name}</CardTitle>
                        <CardDescription>{app.description}</CardDescription>
                      </CardHeader>
                      <CardFooter className="p-4 pt-0">
                        <Badge>{app.useCases?.length || 0} use cases</Badge>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <Button className={styles.appButton}>
                  <Save className="mr-2 h-4 w-4" />
                  Save App
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Save App Definition</DialogTitle>
                  <DialogDescription>Save your current app definition for future use</DialogDescription>
                </DialogHeader>
                <div className={styles.appForm}>
                  <div className={styles.formGroup}>
                    <Label htmlFor="appName">App Name</Label>
                    <Input
                      id="appName"
                      value={currentAppDefinition.name}
                      onChange={(e) => setCurrentAppDefinition({ ...currentAppDefinition, name: e.target.value })}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <Label htmlFor="appDescription">Description</Label>
                    <Textarea
                      id="appDescription"
                      value={currentAppDefinition.description}
                      onChange={(e) =>
                        setCurrentAppDefinition({ ...currentAppDefinition, description: e.target.value })
                      }
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button onClick={handleSaveAppDefinition}>Save App Definition</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>

      {/* Update the entities section to simplify display and add view details button */}
      <div className={styles.entitiesSection}>
        <div className={styles.entitiesHeader}>
          <h3 className={styles.entitiesTitle}>Custom Entities</h3>
          <Dialog open={showEntityDialog} onOpenChange={setShowEntityDialog}>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm">
                <Plus className="h-4 w-4 mr-1" />
                Add Entity
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add Custom Entity</DialogTitle>
                <DialogDescription>Create a new entity to use in your use cases</DialogDescription>
              </DialogHeader>
              <div className={styles.entityForm}>
                <div className={styles.formGroup}>
                  <Label htmlFor="entityName">Entity Name</Label>
                  <Input
                    id="entityName"
                    value={newEntity.name}
                    onChange={(e) => setNewEntity({ ...newEntity, name: e.target.value })}
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
                            <span className={styles.entityFieldName}>{field.name}</span>
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
                      })
                      setShowFieldDialog(true)
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
          </Dialog>
        </div>

        <div className={styles.entitiesList}>
          {customEntities.map((entity) => (
            <Card key={entity.id} className={styles.entityCard}>
              <CardHeader className={styles.entityCardHeader}>
                <CardTitle className={styles.entityCardTitle}>
                  {entity.name}
                  <div className={styles.entityActions}>
                    <Button variant="ghost" size="sm" onClick={() => viewEntityDetails(entity)}>
                      <Edit className="h-3 w-3 mr-1" />
                      View Details
                    </Button>
                  </div>
                </CardTitle>
                <CardDescription>{entity.fields.length} fields defined</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>

      <Card className={styles.useCasesCard}>
        <CardHeader>
          <div className={styles.useCasesHeader}>
            <CardTitle>Defined Use Cases</CardTitle>
            <Dialog open={showUseCaseDialog} onOpenChange={setShowUseCaseDialog}>
              <DialogTrigger asChild>
                <Button className={styles.addButton}>
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Add Use Case
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[700px]">
                <DialogHeader>
                  <DialogTitle>{activeUseCase ? "Edit" : "Add"} Use Case</DialogTitle>
                  <DialogDescription>
                    Define how your vehicle signal schema will be used in a specific application.
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
                      onChange={(e) => setNewUseCase({ ...newUseCase, name: e.target.value })}
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
                      onChange={(e) => setNewUseCase({ ...newUseCase, description: e.target.value })}
                      className={styles.formTextarea}
                      placeholder="Describe how this use case will be used"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <Label className={styles.formLabel}>Select Fields</Label>
                    <div className={styles.fieldSelectionWrapper}>
                      <div className={styles.entitySelector}>
                        <Label className={styles.entitySelectorLabel}>Entity</Label>
                        <Select value={selectedEntity} onValueChange={setSelectedEntity}>
                          <SelectTrigger className={styles.entitySelectorTrigger}>
                            <SelectValue placeholder="Select entity" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="vehicle">Vehicle</SelectItem>
                            <SelectItem value="driver">Driver</SelectItem>
                            <SelectItem value="trip">Trip</SelectItem>
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
                              <Input placeholder="Search fields..." className={styles.fieldSearchInput} />
                            </div>

                            <ScrollArea className={styles.fieldScrollArea}>
                              <div className={styles.fieldGroups}>
                                {selectedEntity === "vehicle" && (
                                  <>
                                    <div className={styles.fieldGroup}>
                                      <div className={styles.fieldGroupHeader}>Vehicle Identification</div>
                                      <div className={styles.fieldGroupItems}>
                                        <div
                                          className={styles.fieldItem}
                                          onClick={() => toggleField("Vehicle.VehicleIdentification.VIN")}
                                        >
                                          <span className={styles.fieldItemName}>VIN</span>
                                          <Badge variant="outline" className={styles.fieldItemType}>
                                            String
                                          </Badge>
                                        </div>
                                      </div>
                                    </div>

                                    <div className={styles.fieldGroup}>
                                      <div className={styles.fieldGroupHeader}>Current Location</div>
                                      <div className={styles.fieldGroupItems}>
                                        <div
                                          className={styles.fieldItem}
                                          onClick={() => toggleField("Vehicle.CurrentLocation.Timestamp")}
                                        >
                                          <span className={styles.fieldItemName}>Timestamp</span>
                                          <Badge variant="outline" className={styles.fieldItemType}>
                                            Date
                                          </Badge>
                                        </div>
                                        <div
                                          className={styles.fieldItem}
                                          onClick={() => toggleField("Vehicle.CurrentLocation.Latitude")}
                                        >
                                          <span className={styles.fieldItemName}>Latitude</span>
                                          <Badge variant="outline" className={styles.fieldItemType}>
                                            Number
                                          </Badge>
                                        </div>
                                        <div
                                          className={styles.fieldItem}
                                          onClick={() => toggleField("Vehicle.CurrentLocation.Longitude")}
                                        >
                                          <span className={styles.fieldItemName}>Longitude</span>
                                          <Badge variant="outline" className={styles.fieldItemType}>
                                            Number
                                          </Badge>
                                        </div>
                                        <div
                                          className={styles.fieldItem}
                                          onClick={() => toggleField("Vehicle.CurrentLocation.Altitude")}
                                        >
                                          <span className={styles.fieldItemName}>Altitude</span>
                                          <Badge variant="outline" className={styles.fieldItemType}>
                                            Number
                                          </Badge>
                                        </div>
                                      </div>
                                    </div>

                                    <div className={styles.fieldGroup}>
                                      <div className={styles.fieldGroupHeader}>Acceleration</div>
                                      <div className={styles.fieldGroupItems}>
                                        <div
                                          className={styles.fieldItem}
                                          onClick={() => toggleField("Vehicle.Acceleration.Lateral")}
                                        >
                                          <span className={styles.fieldItemName}>Lateral</span>
                                          <Badge variant="outline" className={styles.fieldItemType}>
                                            Number
                                          </Badge>
                                        </div>
                                        <div
                                          className={styles.fieldItem}
                                          onClick={() => toggleField("Vehicle.Acceleration.Longitudinal")}
                                        >
                                          <span className={styles.fieldItemName}>Longitudinal</span>
                                          <Badge variant="outline" className={styles.fieldItemType}>
                                            Number
                                          </Badge>
                                        </div>
                                        <div
                                          className={styles.fieldItem}
                                          onClick={() => toggleField("Vehicle.Acceleration.Vertical")}
                                        >
                                          <span className={styles.fieldItemName}>Vertical</span>
                                          <Badge variant="outline" className={styles.fieldItemType}>
                                            Number
                                          </Badge>
                                        </div>
                                      </div>
                                    </div>
                                  </>
                                )}

                                {selectedEntity === "driver" && (
                                  <div className={styles.fieldGroup}>
                                    <div className={styles.fieldGroupHeader}>Driver Information</div>
                                    <div className={styles.fieldGroupItems}>
                                      <div className={styles.fieldItem} onClick={() => toggleField("driver.id")}>
                                        <span className={styles.fieldItemName}>Driver ID</span>
                                        <Badge variant="outline" className={styles.fieldItemType}>
                                          String
                                        </Badge>
                                      </div>
                                      <div className={styles.fieldItem} onClick={() => toggleField("driver.name")}>
                                        <span className={styles.fieldItemName}>Name</span>
                                        <Badge variant="outline" className={styles.fieldItemType}>
                                          String
                                        </Badge>
                                      </div>
                                      <div className={styles.fieldItem} onClick={() => toggleField("driver.license")}>
                                        <span className={styles.fieldItemName}>License Number</span>
                                        <Badge variant="outline" className={styles.fieldItemType}>
                                          String
                                        </Badge>
                                      </div>
                                      <div
                                        className={styles.fieldItem}
                                        onClick={() => toggleField("driver.phoneNumber")}
                                      >
                                        <span className={styles.fieldItemName}>Phone Number</span>
                                        <Badge variant="outline" className={styles.fieldItemType}>
                                          String
                                        </Badge>
                                      </div>
                                      <div className={styles.fieldItem} onClick={() => toggleField("driver.email")}>
                                        <span className={styles.fieldItemName}>Email</span>
                                        <Badge variant="outline" className={styles.fieldItemType}>
                                          String
                                        </Badge>
                                      </div>
                                    </div>
                                  </div>
                                )}

                                {selectedEntity === "trip" && (
                                  <div className={styles.fieldGroup}>
                                    <div className={styles.fieldGroupHeader}>Trip Information</div>
                                    <div className={styles.fieldGroupItems}>
                                      <div className={styles.fieldItem} onClick={() => toggleField("trip.id")}>
                                        <span className={styles.fieldItemName}>Trip ID</span>
                                        <Badge variant="outline" className={styles.fieldItemType}>
                                          String
                                        </Badge>
                                      </div>
                                      <div className={styles.fieldItem} onClick={() => toggleField("trip.startTime")}>
                                        <span className={styles.fieldItemName}>Start Time</span>
                                        <Badge variant="outline" className={styles.fieldItemType}>
                                          Date
                                        </Badge>
                                      </div>
                                      <div className={styles.fieldItem} onClick={() => toggleField("trip.endTime")}>
                                        <span className={styles.fieldItemName}>End Time</span>
                                        <Badge variant="outline" className={styles.fieldItemType}>
                                          Date
                                        </Badge>
                                      </div>
                                      <div className={styles.fieldItem} onClick={() => toggleField("trip.distance")}>
                                        <span className={styles.fieldItemName}>Distance</span>
                                        <Badge variant="outline" className={styles.fieldItemType}>
                                          Number
                                        </Badge>
                                      </div>
                                      <div
                                        className={styles.fieldItem}
                                        onClick={() => toggleField("trip.fuelConsumption")}
                                      >
                                        <span className={styles.fieldItemName}>Fuel Consumption</span>
                                        <Badge variant="outline" className={styles.fieldItemType}>
                                          Number
                                        </Badge>
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </ScrollArea>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  <div className={styles.selectedFieldsSection}>
                    <Label className={styles.selectedFieldsLabel}>Selected Fields</Label>
                    <div className={styles.selectedFieldsContainer}>
                      {newUseCase.fields.length === 0 ? (
                        <div className={styles.noFieldsSelected}>No fields selected</div>
                      ) : (
                        <div className={styles.selectedFieldBadges}>
                          {newUseCase.fields.map((fieldId) => {
                            // Find field in all available fields
                            const allFields = getAllFields()
                            const field = allFields.find((f) => f.id === fieldId)

                            return field ? (
                              <Badge key={field.id} className={styles.selectedFieldBadge}>
                                {field.entity && <span className={styles.entityTag}>{field.entity}</span>}
                                {field.name}
                                <span className={styles.fieldTypeSmall}>({field.type})</span>
                                <button className={styles.removeFieldButton} onClick={() => toggleField(field.id)}>
                                  ×
                                </button>
                              </Badge>
                            ) : null
                          })}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <Label className={styles.formLabel}>Access Type</Label>
                    <div className={styles.accessTypeContainer}>
                      <div className={styles.accessTypeOptions}>
                        <div className={styles.accessTypeOption}>
                          <Checkbox
                            id="access-read"
                            checked={newUseCase.accessPatterns.includes("Read")}
                            onCheckedChange={() => toggleAccessPattern("Read")}
                          />
                          <Label htmlFor="access-read" className={styles.accessTypeLabel}>
                            Read
                          </Label>
                        </div>
                        <div className={styles.accessTypeOption}>
                          <Checkbox
                            id="access-write"
                            checked={newUseCase.accessPatterns.includes("Write")}
                            onCheckedChange={() => toggleAccessPattern("Write")}
                          />
                          <Label htmlFor="access-write" className={styles.accessTypeLabel}>
                            Write
                          </Label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <Label htmlFor="frequency" className={styles.formLabel}>
                      Frequency
                    </Label>
                    <Select
                      value={newUseCase.frequency}
                      onValueChange={(value) => setNewUseCase({ ...newUseCase, frequency: value })}
                    >
                      <SelectTrigger className={styles.formSelect}>
                        <SelectValue placeholder="Select frequency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Low">Low</SelectItem>
                        <SelectItem value="Medium">Medium</SelectItem>
                        <SelectItem value="High">High</SelectItem>
                        <SelectItem value="Very High">Very High</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit" onClick={handleAddUseCase}>
                    {activeUseCase ? "Update" : "Add"} Use Case
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
          <CardDescription>These use cases will be analyzed to generate an optimized MongoDB schema</CardDescription>
        </CardHeader>
        <CardContent>
          {useCases.length === 0 ? (
            <div className={styles.emptyState}>
              <p>No use cases defined yet.</p>
              <p>Click "Add Use Case" to start defining how your schema will be used.</p>
            </div>
          ) : (
            <ScrollArea className={styles.useCasesScrollArea}>
              <Accordion type="single" collapsible className={styles.useCasesAccordion}>
                {useCases.map((useCase) => (
                  <AccordionItem key={useCase.id} value={`item-${useCase.id}`}>
                    <AccordionTrigger className={styles.accordionTrigger}>
                      <div className={styles.useCaseHeader}>
                        <div>
                          <p className={styles.useCaseName}>{useCase.name}</p>
                          <p className={styles.useCaseDescription}>{useCase.description}</p>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className={styles.accordionContent}>
                      <div className={styles.useCaseDetails}>
                        <div className={styles.detailSection}>
                          <h4 className={styles.detailTitle}>Selected Fields:</h4>
                          <div className={styles.badgeContainer}>
                            {useCase.fields.map((fieldId) => {
                              // Find field in all available fields
                              const allFields = getAllFields()
                              const field = allFields.find((f) => f.id === fieldId)

                              return field ? (
                                <Badge key={field.id} variant="outline" className={styles.fieldBadge}>
                                  {field.entity && <span className={styles.entityTag}>{field.entity}</span>}
                                  {field.name}
                                  <span className={styles.fieldTypeSmall}>({field.type})</span>
                                </Badge>
                              ) : null
                            })}
                          </div>
                        </div>
                        <div className={styles.detailSection}>
                          <h4 className={styles.detailTitle}>Access Patterns:</h4>
                          <div className={styles.badgeContainer}>
                            {useCase.accessPatterns.map((pattern) => (
                              <Badge key={pattern} className={styles.patternBadge}>
                                {pattern}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className={styles.detailSection}>
                          <h4 className={styles.detailTitle}>Usage Frequency:</h4>
                          <Badge
                            variant={
                              useCase.frequency === "High" || useCase.frequency === "Very High" ? "default" : "outline"
                            }
                            className={styles.frequencyBadge}
                          >
                            {useCase.frequency}
                          </Badge>
                        </div>
                        <div className={styles.useCaseActions}>
                          <Button variant="outline" size="sm" onClick={() => handleEditUseCase(useCase)}>
                            <Edit className="h-4 w-4 mr-1" />
                            Edit
                          </Button>
                          <Button variant="outline" size="sm" onClick={() => handleRemoveUseCase(useCase.id)}>
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
          <div className={styles.useCaseCount}>{useCases.length} use cases defined</div>
        </CardFooter>
      </Card>

      <Dialog open={showFieldDialog} onOpenChange={setShowFieldDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Field to {currentEntity?.name}</DialogTitle>
            <DialogDescription>Define a new field for this entity</DialogDescription>
          </DialogHeader>
          <div className={styles.fieldForm}>
            <div className={styles.formGroup}>
              <Label htmlFor="fieldName">Field Name</Label>
              <Input
                id="fieldName"
                value={newField.name}
                onChange={(e) => setNewField({ ...newField, name: e.target.value })}
                placeholder="e.g., Status"
              />
            </div>
            <div className={styles.formGroup}>
              <Label htmlFor="fieldType">Field Type</Label>
              <Select value={newField.type} onValueChange={(value) => setNewField({ ...newField, type: value })}>
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
                onChange={(e) => setNewField({ ...newField, description: e.target.value })}
                placeholder="Field description"
              />
            </div>
          </div>
          <DialogFooter>
            <Button onClick={handleAddFieldToEntity}>Add Field</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Add entity details dialog */}
      <Dialog open={showEntityDetailsDialog} onOpenChange={setShowEntityDetailsDialog}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>{entityToView?.name} Entity Details</DialogTitle>
            <DialogDescription>Fields defined for this entity</DialogDescription>
          </DialogHeader>
          {entityToView && (
            <div className={styles.entityDetailsContainer}>
              <div className={styles.entityFieldsTable}>
                <div className={styles.entityFieldsHeader}>
                  <div>Field Name</div>
                  <div>Type</div>
                  <div>Description</div>
                </div>
                <ScrollArea className={styles.entityFieldsScrollArea}>
                  {entityToView.fields.map((field) => (
                    <div key={field.id} className={styles.entityFieldRow}>
                      <div className={styles.entityFieldName}>{field.name}</div>
                      <div className={styles.entityFieldType}>
                        <Badge variant="outline">{field.type}</Badge>
                      </div>
                      <div className={styles.entityFieldDescription}>{field.description || "-"}</div>
                    </div>
                  ))}
                </ScrollArea>
              </div>
              <Button
                onClick={() => {
                  openAddFieldDialog(entityToView)
                  setShowEntityDetailsDialog(false)
                }}
              >
                <Plus className="h-4 w-4 mr-1" />
                Add Field
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
