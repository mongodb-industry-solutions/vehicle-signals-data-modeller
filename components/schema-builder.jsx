"use client"

import { useState, useEffect, useMemo } from "react"
import {
  PlusCircle,
  Save,
  FileUp,
  FileDown,
  ChevronDown,
  ChevronRight,
  Search,
  Edit,
  Trash2,
  Filter,
  X,
  Plus,
  Info,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
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
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import styles from "./schema-builder.module.css"

// Vehicle Signal Data schema with enhanced metadata
const vehicleSignalSchema = {
  Vehicle: {
    type: "branch",
    description: "High-level vehicle data.",
    children: {
      VehicleIdentification: {
        type: "branch",
        description: "Vehicle identification information.",
        children: {
          VIN: {
            type: "attribute",
            datatype: "string",
            description: "Vehicle Identification Number",
            required: true,
          },
        },
      },
      Speed: {
        type: "sensor",
        datatype: "float",
        description: "Vehicle speed.",
        unit: "km/h",
        required: true,
      },
      TraveledDistance: {
        type: "sensor",
        datatype: "float",
        description: "Total distance traveled",
        unit: "km",
        required: true,
      },
      CurrentLocation: {
        type: "branch",
        description: "The current latitude and longitude of the vehicle.",
        children: {
          Timestamp: {
            type: "sensor",
            datatype: "string",
            description:
              "Timestamp from GNSS system for current location, formatted according to ISO 8601 with UTC time zone.",
            unit: "iso8601",
            required: true,
          },
          Latitude: {
            type: "sensor",
            datatype: "double",
            description:
              "Current latitude of vehicle in WGS 84 geodetic coordinates, as measured at the position of GNSS receiver antenna.",
            min: -90,
            max: 90,
            unit: "degrees",
            required: true,
          },
          Longitude: {
            type: "sensor",
            datatype: "double",
            description:
              "Current longitude of vehicle in WGS 84 geodetic coordinates, as measured at the position of GNSS receiver antenna.",
            min: -180,
            max: 180,
            unit: "degrees",
            required: true,
          },
          Altitude: {
            type: "sensor",
            datatype: "double",
            description:
              "Current altitude relative to WGS 84 reference ellipsoid, as measured at the position of GNSS receiver antenna.",
            unit: "m",
            required: true,
          },
          Heading: {
            type: "sensor",
            datatype: "double",
            description: "Current heading relative to geographic north. 0 = North, 90 = East, 180 = South, 270 = West.",
            min: 0,
            max: 360,
            unit: "degrees",
            required: false,
          },
          HorizontalAccuracy: {
            type: "sensor",
            datatype: "double",
            description: "Accuracy of the latitude and longitude coordinates.",
            unit: "m",
            required: false,
          },
          VerticalAccuracy: {
            type: "sensor",
            datatype: "double",
            description: "Accuracy of altitude.",
            unit: "m",
            required: false,
          },
          GNSSReceiver: {
            type: "branch",
            description: "Information on the GNSS receiver used for determining current location.",
            children: {
              FixType: {
                type: "sensor",
                datatype: "string",
                description: "Fix status of GNSS receiver.",
                allowed: [
                  "NONE",
                  "TWO_D",
                  "TWO_D_SATELLITE_BASED_AUGMENTATION",
                  "TWO_D_GROUND_BASED_AUGMENTATION",
                  "TWO_D_SATELLITE_AND_GROUND_BASED_AUGMENTATION",
                  "THREE_D",
                  "THREE_D_SATELLITE_BASED_AUGMENTATION",
                  "THREE_D_GROUND_BASED_AUGMENTATION",
                  "THREE_D_SATELLITE_AND_GROUND_BASED_AUGMENTATION",
                ],
                required: false,
              },
              MountingPosition: {
                type: "branch",
                description:
                  "Mounting position of GNSS receiver antenna relative to vehicle coordinate system. Axis definitions according to ISO 8855. Origin at center of (first) rear axle.",
                children: {
                  X: {
                    type: "attribute",
                    datatype: "int16",
                    description:
                      "Mounting position of GNSS receiver antenna relative to vehicle coordinate system. Axis definitions according to ISO 8855. Origin at center of (first) rear axle. Positive values = forward of rear axle. Negative values = backward of rear axle.",
                    unit: "mm",
                    required: false,
                  },
                  Y: {
                    type: "attribute",
                    datatype: "int16",
                    description:
                      "Mounting position of GNSS receiver antenna relative to vehicle coordinate system. Axis definitions according to ISO 8855. Origin at center of (first) rear axle. Positive values = left of origin. Negative values = right of origin. Left/Right is as seen from driver perspective, i.e. by a person looking forward.",
                    unit: "mm",
                    required: false,
                  },
                  Z: {
                    type: "attribute",
                    datatype: "int16",
                    description:
                      "Mounting position of GNSS receiver on Z-axis. Axis definitions according to ISO 8855. Origin at center of (first) rear axle. Positive values = above center of rear axle. Negative values = below center of rear axle.",
                    unit: "mm",
                    required: false,
                  },
                },
              },
            },
          },
        },
      },
      Acceleration: {
        type: "branch",
        description: "Acceleration signals for the vehicle.",
        children: {
          Lateral: {
            type: "sensor",
            datatype: "float",
            description: "Lateral acceleration",
            unit: "m/s²",
            required: true,
          },
          Longitudinal: {
            type: "sensor",
            datatype: "float",
            description: "Longitudinal acceleration",
            unit: "m/s²",
            required: true,
          },
          Vertical: {
            type: "sensor",
            datatype: "float",
            description: "Vertical acceleration",
            unit: "m/s²",
            required: true,
          },
        },
      },
      Diagnostics: {
        type: "branch",
        description: "Diagnostics data.",
        children: {
          DTCCount: {
            type: "sensor",
            datatype: "uint8",
            description: "Diagnostic trouble code count",
            required: true,
          },
          DTCList: {
            type: "sensor",
            datatype: "string[]",
            description:
              "List of currently active DTCs formatted according OBD II (SAE-J2012DA_201812) standard ([P|C|B|U]XXXXX )",
            required: true,
          },
        },
      },
    },
  },
}

// Sample templates
const sampleTemplates = [
  {
    id: 1,
    name: "Fleet Management",
    description: "Basic vehicle tracking and management",
    structure: vehicleSignalSchema,
  },
  { id: 2, name: "Predictive Maintenance", description: "Vehicle diagnostics and maintenance", structure: {} },
  { id: 3, name: "Insurance Telematics", description: "Driver behavior and risk assessment", structure: {} },
]

// Available field types
const fieldTypes = [
  "string",
  "uint8",
  "uint16",
  "uint32",
  "uint64",
  "int8",
  "int16",
  "int32",
  "int64",
  "float",
  "double",
  "boolean",
  "string[]",
]

// Available signal types
const signalTypes = ["branch", "attribute", "actuator", "sensor"]

// Type to color mapping
const typeColors = {
  branch: "rgb(38, 84, 124)",
  actuator: "rgb(239, 71, 111)",
  attribute: "rgb(6, 214, 160)",
  sensor: "rgb(255, 209, 102)",
}

// Standard metadata fields
const standardMetadataFields = [
  { key: "datatype", label: "Data Type", type: "select", options: fieldTypes },
  { key: "description", label: "Description", type: "textarea" },
  { key: "unit", label: "Unit", type: "text" },
  { key: "min", label: "Min Value", type: "number" },
  { key: "max", label: "Max Value", type: "number" },
  { key: "allowed", label: "Allowed Values", type: "array" },
  { key: "required", label: "Required", type: "boolean" },
]

export default function SchemaBuilder() {
  const [schemaName, setSchemaName] = useState("Vehicle Signal Schema")
  const [documentStructure, setDocumentStructure] = useState(vehicleSignalSchema)
  const [expandedSections, setExpandedSections] = useState({})
  const [showTemplateDialog, setShowTemplateDialog] = useState(false)
  const [showFieldDialog, setShowFieldDialog] = useState(false)
  const [showEditFieldDialog, setShowEditFieldDialog] = useState(false)
  const [editingField, setEditingField] = useState(null)
  const [newField, setNewField] = useState({
    name: "",
    type: "sensor",
    datatype: "string",
    description: "",
    unit: "",
    min: "",
    max: "",
    allowed: [],
    required: false,
    parentPath: "", // To track where to add the field in the hierarchy
    customMetadata: [], // Array of custom metadata {key, value}
  })
  const [selectedFields, setSelectedFields] = useState({})
  const [jsonOutput, setJsonOutput] = useState("")
  const [searchQuery, setSearchQuery] = useState("")
  const [showFilters, setShowFilters] = useState(false)
  const [filters, setFilters] = useState({
    types: [],
    datatypes: [],
    required: null,
  })
  const [newAllowedValue, setNewAllowedValue] = useState("")
  const [newCustomMetadataKey, setNewCustomMetadataKey] = useState("")
  const [newCustomMetadataValue, setNewCustomMetadataValue] = useState("")
  const [selectedStandardMetadata, setSelectedStandardMetadata] = useState(["datatype", "description", "required"])

  // Update JSON output whenever selected fields change
  useEffect(() => {
    updateJsonOutput()
  }, [selectedFields, documentStructure])

  const updateJsonOutput = () => {
    const output = {}

    // Helper function to build the output object based on selected fields
    const buildOutputObject = (structure, currentPath = "", outputObj = {}) => {
      Object.entries(structure).forEach(([key, value]) => {
        const fullPath = currentPath ? `${currentPath}.${key}` : key

        if (value.type && !value.children) {
          // It's a leaf node (field)
          if (selectedFields[fullPath]) {
            // Field is selected, add it to output
            const pathParts = fullPath.split(".")
            let current = outputObj

            // Navigate to the correct nesting level
            for (let i = 0; i < pathParts.length - 1; i++) {
              if (!current[pathParts[i]]) {
                current[pathParts[i]] = {}
              }
              current = current[pathParts[i]]
            }

            // Add the field with its metadata
            const fieldName = pathParts[pathParts.length - 1]

            // Start with type which is always included
            current[fieldName] = {
              type: value.type,
            }

            // Add all other metadata
            Object.entries(value).forEach(([metaKey, metaValue]) => {
              if (metaKey !== "type" && metaKey !== "children") {
                current[fieldName][metaKey] = metaValue
              }
            })
          }
        } else if (value.children) {
          // It's a branch with children
          // Check if any child is selected
          const hasSelectedChild = Object.keys(selectedFields).some(
            (path) => path.startsWith(fullPath + ".") && selectedFields[path],
          )

          if (hasSelectedChild || selectedFields[fullPath]) {
            // Create the branch with its metadata
            const pathParts = fullPath.split(".")
            let current = outputObj

            // Navigate to the correct nesting level
            for (let i = 0; i < pathParts.length - 1; i++) {
              if (!current[pathParts[i]]) {
                current[pathParts[i]] = {}
              }
              current = current[pathParts[i]]
            }

            // Add the branch with all metadata
            const branchName = pathParts[pathParts.length - 1]
            current[branchName] = {
              type: value.type,
              children: {},
            }

            // Add other metadata (except children which we handle specially)
            Object.entries(value).forEach(([metaKey, metaValue]) => {
              if (metaKey !== "type" && metaKey !== "children") {
                current[branchName][metaKey] = metaValue
              }
            })

            // Recursively build for children
            buildOutputObject(value.children, fullPath, outputObj)
          }
        }
      })

      return outputObj
    }

    buildOutputObject(documentStructure, "", output)
    setJsonOutput(JSON.stringify(output, null, 2))
  }

  const toggleSection = (path) => {
    setExpandedSections({
      ...expandedSections,
      [path]: !expandedSections[path],
    })
  }

  // Update the toggleFieldSelection function to handle parent selection and child propagation
  const toggleFieldSelection = (path) => {
    const newSelectedFields = { ...selectedFields }
    const isCurrentlySelected = selectedFields[path]

    // Toggle the current field
    newSelectedFields[path] = !isCurrentlySelected

    // If this is a branch, propagate selection to all children
    const pathParts = path.split(".")
    let current = documentStructure

    // Navigate to the current object in the structure
    for (let i = 0; i < pathParts.length; i++) {
      if (!current[pathParts[i]]) break
      current = current[pathParts[i]]
    }

    // If it's a branch with children, propagate selection to children
    if (current.children) {
      // Function to recursively select/deselect all children
      const propagateSelection = (obj, currentPath) => {
        Object.entries(obj).forEach(([key, value]) => {
          const childPath = currentPath ? `${currentPath}.${key}` : key

          // Set the same selection state as the parent
          newSelectedFields[childPath] = !isCurrentlySelected

          // If this is also a branch, recurse
          if (value.children) {
            propagateSelection(value.children, childPath)
          }
        })
      }

      propagateSelection(current.children, path)
    }

    setSelectedFields(newSelectedFields)
  }

  const handleAddField = () => {
    if (!newField.name) return

    const updatedStructure = { ...documentStructure }

    if (newField.parentPath) {
      // Add to nested path
      const pathParts = newField.parentPath.split(".")
      let current = updatedStructure

      // Navigate to the correct nesting level
      for (let i = 0; i < pathParts.length; i++) {
        if (i === pathParts.length - 1 && current[pathParts[i]].children) {
          current = current[pathParts[i]].children
        } else if (current[pathParts[i]].children) {
          current = current[pathParts[i]].children
        } else {
          console.error("Path not found:", newField.parentPath)
          return
        }
      }

      // Add the new field with type
      const fieldData = {
        type: newField.type,
      }

      // Add standard metadata fields if they are selected
      if (selectedStandardMetadata.includes("datatype") && newField.type !== "branch") {
        fieldData.datatype = newField.datatype
      }

      if (selectedStandardMetadata.includes("description")) {
        fieldData.description = newField.description
      }

      if (selectedStandardMetadata.includes("unit") && newField.unit) {
        fieldData.unit = newField.unit
      }

      if (selectedStandardMetadata.includes("min") && newField.min !== "" && newField.min !== undefined) {
        fieldData.min = Number.parseFloat(newField.min)
      }

      if (selectedStandardMetadata.includes("max") && newField.max !== "" && newField.max !== undefined) {
        fieldData.max = Number.parseFloat(newField.max)
      }

      if (selectedStandardMetadata.includes("allowed") && newField.allowed && newField.allowed.length > 0) {
        fieldData.allowed = newField.allowed
      }

      if (selectedStandardMetadata.includes("required")) {
        fieldData.required = newField.required
      }

      // Add custom metadata fields
      if (newField.customMetadata && newField.customMetadata.length > 0) {
        newField.customMetadata.forEach((meta) => {
          if (meta.key && meta.value !== undefined) {
            fieldData[meta.key] = meta.value
          }
        })
      }

      // If it's a branch, add children object
      if (newField.type === "branch") {
        fieldData.children = {}
      }

      current[newField.name] = fieldData
    } else {
      // Add to root level (rare case)
      const fieldData = {
        type: newField.type,
      }

      // Add standard metadata fields if they are selected
      if (selectedStandardMetadata.includes("datatype") && newField.type !== "branch") {
        fieldData.datatype = newField.datatype
      }

      if (selectedStandardMetadata.includes("description")) {
        fieldData.description = newField.description
      }

      if (selectedStandardMetadata.includes("unit") && newField.unit) {
        fieldData.unit = newField.unit
      }

      if (selectedStandardMetadata.includes("min") && newField.min !== "" && newField.min !== undefined) {
        fieldData.min = Number.parseFloat(newField.min)
      }

      if (selectedStandardMetadata.includes("max") && newField.max !== "" && newField.max !== undefined) {
        fieldData.max = Number.parseFloat(newField.max)
      }

      if (selectedStandardMetadata.includes("allowed") && newField.allowed && newField.allowed.length > 0) {
        fieldData.allowed = newField.allowed
      }

      if (selectedStandardMetadata.includes("required")) {
        fieldData.required = newField.required
      }

      // Add custom metadata fields
      if (newField.customMetadata && newField.customMetadata.length > 0) {
        newField.customMetadata.forEach((meta) => {
          if (meta.key && meta.value !== undefined) {
            fieldData[meta.key] = meta.value
          }
        })
      }

      // If it's a branch, add children object
      if (newField.type === "branch") {
        fieldData.children = {}
      }

      updatedStructure[newField.name] = fieldData
    }

    setDocumentStructure(updatedStructure)
    resetNewField()
    setShowFieldDialog(false)
  }

  const handleEditField = () => {
    if (!editingField || !editingField.path) return

    const updatedStructure = { ...documentStructure }
    const pathParts = editingField.path.split(".")
    const fieldName = pathParts[pathParts.length - 1]

    // Navigate to the parent of the field
    let current = updatedStructure
    let parent = null

    for (let i = 0; i < pathParts.length - 1; i++) {
      if (i === pathParts.length - 2) {
        parent = current
      }

      if (current[pathParts[i]] && current[pathParts[i]].children) {
        current = current[pathParts[i]].children
      } else if (i === 0) {
        current = current[pathParts[i]]
      } else {
        console.error("Path not found for editing:", editingField.path)
        return
      }
    }

    // Create updated field data
    const fieldData = {
      type: editingField.type,
    }

    // Add standard metadata fields if they are included in selectedMetadata
    editingField.selectedMetadata.forEach((metaKey) => {
      switch (metaKey) {
        case "datatype":
          if (editingField.type !== "branch") {
            fieldData.datatype = editingField.datatype
          }
          break
        case "description":
          fieldData.description = editingField.description
          break
        case "unit":
          if (editingField.unit) fieldData.unit = editingField.unit
          break
        case "min":
          if (editingField.min !== "" && editingField.min !== undefined)
            fieldData.min = Number.parseFloat(editingField.min)
          break
        case "max":
          if (editingField.max !== "" && editingField.max !== undefined)
            fieldData.max = Number.parseFloat(editingField.max)
          break
        case "allowed":
          if (editingField.allowed && editingField.allowed.length > 0) fieldData.allowed = editingField.allowed
          break
        case "required":
          fieldData.required = editingField.required
          break
      }
    })

    // Add custom metadata fields
    if (editingField.customMetadata && editingField.customMetadata.length > 0) {
      editingField.customMetadata.forEach((meta) => {
        if (meta.key && meta.value !== undefined) {
          fieldData[meta.key] = meta.value
        }
      })
    }

    // If it's a branch, preserve or create children object
    if (editingField.type === "branch") {
      fieldData.children = current[fieldName].children || {}
    }

    // Update the field
    current[fieldName] = fieldData

    setDocumentStructure(updatedStructure)
    setShowEditFieldDialog(false)
  }

  const handleDeleteField = (path) => {
    const updatedStructure = { ...documentStructure }
    const pathParts = path.split(".")
    const fieldName = pathParts[pathParts.length - 1]

    // Navigate to the parent of the field
    let current = updatedStructure

    for (let i = 0; i < pathParts.length - 1; i++) {
      if (current[pathParts[i]] && current[pathParts[i]].children) {
        current = current[pathParts[i]].children
      } else if (i === 0) {
        current = current[pathParts[i]]
      } else {
        console.error("Path not found for deletion:", path)
        return
      }
    }

    // Delete the field
    delete current[fieldName]

    // Also remove from selected fields
    const newSelectedFields = { ...selectedFields }
    delete newSelectedFields[path]

    // Remove any child selections
    Object.keys(newSelectedFields).forEach((key) => {
      if (key.startsWith(path + ".")) {
        delete newSelectedFields[key]
      }
    })

    setSelectedFields(newSelectedFields)
    setDocumentStructure(updatedStructure)
  }

  const handleLoadTemplate = (templateId) => {
    const template = sampleTemplates.find((t) => t.id === templateId)
    if (template) {
      setSchemaName(template.name)
      setDocumentStructure(template.structure)
      setExpandedSections({})
      setSelectedFields({})
    }
    setShowTemplateDialog(false)
  }

  const openAddFieldDialog = (parentPath = "") => {
    resetNewField()
    setNewField((prev) => ({ ...prev, parentPath }))
    setShowFieldDialog(true)
  }

  const openEditFieldDialog = (path) => {
    const pathParts = path.split(".")
    let current = documentStructure

    // Navigate to the field
    for (let i = 0; i < pathParts.length; i++) {
      if (i === pathParts.length - 1) {
        if (current[pathParts[i]]) {
          const field = current[pathParts[i]]

          // Extract standard metadata
          const standardMetadata = standardMetadataFields.map((meta) => meta.key)
          const selectedMeta = []

          // Determine which standard metadata fields are present
          Object.keys(field).forEach((key) => {
            if (standardMetadata.includes(key)) {
              selectedMeta.push(key)
            }
          })

          // Extract custom metadata (any keys not in standard metadata and not 'type' or 'children')
          const customMeta = []
          Object.entries(field).forEach(([key, value]) => {
            if (!standardMetadata.includes(key) && key !== "type" && key !== "children") {
              customMeta.push({ key, value })
            }
          })

          setEditingField({
            path,
            name: pathParts[i],
            type: field.type || "sensor",
            datatype: field.datatype || "string",
            description: field.description || "",
            unit: field.unit || "",
            min: field.min !== undefined ? field.min.toString() : "",
            max: field.max !== undefined ? field.max.toString() : "",
            allowed: field.allowed || [],
            required: field.required !== undefined ? field.required : false,
            selectedMetadata: selectedMeta,
            customMetadata: customMeta,
          })

          setShowEditFieldDialog(true)
        }
      } else if (current[pathParts[i]] && current[pathParts[i]].children) {
        current = current[pathParts[i]].children
      } else {
        current = current[pathParts[i]]
      }
    }
  }

  const resetNewField = () => {
    setNewField({
      name: "",
      type: "sensor",
      datatype: "string",
      description: "",
      unit: "",
      min: "",
      max: "",
      allowed: [],
      required: false,
      parentPath: "",
      customMetadata: [],
    })
    setNewAllowedValue("")
    setNewCustomMetadataKey("")
    setNewCustomMetadataValue("")
    setSelectedStandardMetadata(["datatype", "description", "required"])
  }

  const addAllowedValue = (target) => {
    if (!newAllowedValue.trim()) return

    if (target === "new") {
      setNewField((prev) => ({
        ...prev,
        allowed: [...(prev.allowed || []), newAllowedValue.trim()],
      }))
    } else if (target === "edit") {
      setEditingField((prev) => ({
        ...prev,
        allowed: [...(prev.allowed || []), newAllowedValue.trim()],
      }))
    }

    setNewAllowedValue("")
  }

  const removeAllowedValue = (index, target) => {
    if (target === "new") {
      setNewField((prev) => ({
        ...prev,
        allowed: prev.allowed.filter((_, i) => i !== index),
      }))
    } else if (target === "edit") {
      setEditingField((prev) => ({
        ...prev,
        allowed: prev.allowed.filter((_, i) => i !== index),
      }))
    }
  }

  const addCustomMetadata = (target) => {
    if (!newCustomMetadataKey.trim()) return

    const newMeta = {
      key: newCustomMetadataKey.trim(),
      value: newCustomMetadataValue.trim() || "",
    }

    if (target === "new") {
      setNewField((prev) => ({
        ...prev,
        customMetadata: [...prev.customMetadata, newMeta],
      }))
    } else if (target === "edit") {
      setEditingField((prev) => ({
        ...prev,
        customMetadata: [...prev.customMetadata, newMeta],
      }))
    }

    setNewCustomMetadataKey("")
    setNewCustomMetadataValue("")
  }

  const removeCustomMetadata = (index, target) => {
    if (target === "new") {
      setNewField((prev) => ({
        ...prev,
        customMetadata: prev.customMetadata.filter((_, i) => i !== index),
      }))
    } else if (target === "edit") {
      setEditingField((prev) => ({
        ...prev,
        customMetadata: prev.customMetadata.filter((_, i) => i !== index),
      }))
    }
  }

  const toggleStandardMetadata = (metaKey) => {
    setSelectedStandardMetadata((prev) => {
      if (prev.includes(metaKey)) {
        return prev.filter((key) => key !== metaKey)
      } else {
        return [...prev, metaKey]
      }
    })
  }

  const toggleEditingMetadata = (metaKey) => {
    setEditingField((prev) => {
      const newSelected = [...prev.selectedMetadata]
      if (newSelected.includes(metaKey)) {
        return {
          ...prev,
          selectedMetadata: newSelected.filter((key) => key !== metaKey),
        }
      } else {
        return {
          ...prev,
          selectedMetadata: [...newSelected, metaKey],
        }
      }
    })
  }

  const toggleFilter = (type, value) => {
    setFilters((prev) => {
      const newFilters = { ...prev }

      if (type === "types") {
        if (newFilters.types.includes(value)) {
          newFilters.types = newFilters.types.filter((t) => t !== value)
        } else {
          newFilters.types = [...newFilters.types, value]
        }
      } else if (type === "datatypes") {
        if (newFilters.datatypes.includes(value)) {
          newFilters.datatypes = newFilters.datatypes.filter((dt) => dt !== value)
        } else {
          newFilters.datatypes = [...newFilters.datatypes, value]
        }
      } else if (type === "required") {
        if (newFilters.required === value) {
          newFilters.required = null
        } else {
          newFilters.required = value
        }
      }

      return newFilters
    })
  }

  const clearFilters = () => {
    setFilters({
      types: [],
      datatypes: [],
      required: null,
    })
  }

  const filterStructure = (structure, path = "", level = 0, results = []) => {
    if (!searchQuery.trim() && !showFilters) return null // Return null if no search query or filters

    const hasActiveFilters = filters.types.length > 0 || filters.datatypes.length > 0 || filters.required !== null

    Object.entries(structure).forEach(([key, value]) => {
      const currentPath = path ? `${path}.${key}` : key
      const isBranch = value.type === "branch"

      // Check if the item matches search query
      const matchesSearch =
        !searchQuery.trim() ||
        key.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (value.description && value.description.toLowerCase().includes(searchQuery.toLowerCase()))

      // Check if the item matches filters
      let matchesFilters = true

      if (hasActiveFilters) {
        // Type filter
        if (filters.types.length > 0 && !filters.types.includes(value.type)) {
          matchesFilters = false
        }

        // Datatype filter (only for non-branches)
        if (!isBranch && filters.datatypes.length > 0 && !filters.datatypes.includes(value.datatype)) {
          matchesFilters = false
        }

        // Required filter
        if (filters.required !== null && value.required !== filters.required) {
          matchesFilters = false
        }
      }

      // Add to results if matches search and filters
      if ((matchesSearch || !searchQuery.trim()) && (matchesFilters || !hasActiveFilters)) {
        results.push({
          path: currentPath,
          level,
          isBranch,
          value,
        })
      }

      // If it's a branch, recursively search its children
      if (isBranch && value.children) {
        filterStructure(value.children, currentPath, level + 1, results)
      }
    })

    return results
  }

  // Get unique datatypes from the schema for filtering
  const getUniqueDatatypes = useMemo(() => {
    const datatypes = new Set()

    const traverseStructure = (structure) => {
      Object.values(structure).forEach((value) => {
        if (value.datatype) {
          datatypes.add(value.datatype)
        }
        if (value.children) {
          traverseStructure(value.children)
        }
      })
    }

    traverseStructure(documentStructure)
    return Array.from(datatypes)
  }, [documentStructure])

  // Recursive function to render the document structure
  const renderDocumentStructure = (structure, path = "", level = 0) => {
    return Object.entries(structure).map(([key, value]) => {
      const currentPath = path ? `${path}.${key}` : key
      const isBranch = value.type === "branch"
      const isExpanded = expandedSections[currentPath]
      const isSelected = selectedFields[currentPath]
      const typeColor = typeColors[value.type] || "#888"

      return (
        <div key={currentPath} className={styles.fieldItem} style={{ marginLeft: `${level * 20}px` }}>
          <div className={styles.fieldHeader}>
            {isBranch ? (
              <>
                <button className={styles.expandButton} onClick={() => toggleSection(currentPath)}>
                  {isExpanded ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                </button>
                <Checkbox
                  checked={isSelected}
                  onCheckedChange={() => toggleFieldSelection(currentPath)}
                  className={styles.fieldCheckbox}
                />
              </>
            ) : (
              <Checkbox
                checked={isSelected}
                onCheckedChange={() => toggleFieldSelection(currentPath)}
                className={styles.fieldCheckbox}
              />
            )}

            <span className={styles.fieldName}>{key}</span>

            {/* Only display the type metadata as a badge */}
            <Badge
              variant="outline"
              className={styles.typeBadge}
              style={{ backgroundColor: typeColor, color: value.type === "sensor" ? "#000" : "#fff" }}
            >
              {value.type}
            </Badge>

            <div className={styles.fieldActions}>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className={styles.actionButton}
                      onClick={() => openEditFieldDialog(currentPath)}
                    >
                      <Edit className="h-3.5 w-3.5" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Edit field</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className={styles.actionButton}
                      onClick={() => handleDeleteField(currentPath)}
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Delete field</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="ghost" size="icon" className={styles.actionButton}>
                          <Info className="h-3.5 w-3.5" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className={styles.metadataPopover}>
                        <h4 className={styles.metadataTitle}>Field Metadata</h4>
                        <div className={styles.metadataContent}>
                          <div className={styles.metadataItem}>
                            <span className={styles.metadataLabel}>Type:</span>
                            <span className={styles.metadataValue}>{value.type}</span>
                          </div>

                          {/* Display all metadata properties */}
                          {Object.entries(value).map(([metaKey, metaValue]) => {
                            if (metaKey !== "type" && metaKey !== "children") {
                              return (
                                <div key={metaKey} className={styles.metadataItem}>
                                  <span className={styles.metadataLabel}>{metaKey}:</span>
                                  <span className={styles.metadataValue}>
                                    {metaKey === "allowed" && Array.isArray(metaValue) ? (
                                      <div className={styles.allowedValues}>
                                        {metaValue.map((val, idx) => (
                                          <Badge key={idx} variant="outline" className={styles.allowedBadge}>
                                            {val}
                                          </Badge>
                                        ))}
                                      </div>
                                    ) : (
                                      metaValue.toString()
                                    )}
                                  </span>
                                </div>
                              )
                            }
                            return null
                          })}
                        </div>
                      </PopoverContent>
                    </Popover>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>View metadata</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>

            {isBranch && (
              <Button
                variant="ghost"
                size="sm"
                className={styles.addNestedButton}
                onClick={() => openAddFieldDialog(currentPath)}
              >
                <PlusCircle className="h-3 w-3 mr-1" />
                Add Field
              </Button>
            )}
          </div>

          {isBranch && isExpanded && value.children && (
            <div className={styles.nestedFields}>{renderDocumentStructure(value.children, currentPath, level + 1)}</div>
          )}
        </div>
      )
    })
  }

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
            Build your vehicle signal schema by selecting fields and adding custom attributes
          </p>
        </div>
        <div className={styles.headerButtons}>
          <Dialog open={showTemplateDialog} onOpenChange={setShowTemplateDialog}>
            <DialogTrigger asChild>
              <Button variant="outline" className={styles.templateButton}>
                <FileUp className="mr-2 h-4 w-4" />
                Load Template
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[525px]">
              <DialogHeader>
                <DialogTitle>Load Template</DialogTitle>
                <DialogDescription>Choose a pre-defined template to start with or import your own.</DialogDescription>
              </DialogHeader>
              <div className={styles.templateList}>
                {sampleTemplates.map((template) => (
                  <Card
                    key={template.id}
                    className={styles.templateCard}
                    onClick={() => handleLoadTemplate(template.id)}
                  >
                    <CardHeader className="p-4">
                      <CardTitle className="text-lg">{template.name}</CardTitle>
                      <CardDescription>{template.description}</CardDescription>
                    </CardHeader>
                    <CardFooter className="p-4 pt-0 flex justify-between">
                      <Button variant="ghost" size="sm">
                        <FileDown className="h-4 w-4 mr-2" />
                        Load
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </DialogContent>
          </Dialog>

          <Button className={styles.saveButton}>
            <Save className="mr-2 h-4 w-4" />
            Save Schema
          </Button>
        </div>
      </div>

      <div className={styles.splitView}>
        <Card className={styles.schemaCard}>
          <CardHeader>
            <CardTitle className={styles.cardTitle}>
              <span>Vehicle Signal Structure</span>
              <Button onClick={() => openAddFieldDialog()}>
                <PlusCircle className="mr-2 h-4 w-4" />
                Add Root Field
              </Button>
            </CardTitle>
            <CardDescription>Select fields from the vehicle signal hierarchy or add custom fields</CardDescription>
          </CardHeader>
          <CardContent>
            <div className={styles.searchFilterContainer}>
              <div className={styles.searchInputWrapper}>
                <Search className={styles.searchIcon} size={16} />
                <Input
                  placeholder="Search fields..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={styles.searchInput}
                />
              </div>
              <Button
                variant={showFilters ? "default" : "outline"}
                size="sm"
                className={styles.filterButton}
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter className="h-4 w-4 mr-1" />
                Filters{" "}
                {filters.types.length > 0 || filters.datatypes.length > 0 || filters.required !== null
                  ? `(${filters.types.length + filters.datatypes.length + (filters.required !== null ? 1 : 0)})`
                  : ""}
              </Button>
            </div>

            {showFilters && (
              <div className={styles.filtersPanel}>
                <div className={styles.filterSection}>
                  <h4 className={styles.filterTitle}>Signal Type</h4>
                  <div className={styles.filterOptions}>
                    {signalTypes.map((type) => (
                      <div key={type} className={styles.filterOption}>
                        <Checkbox
                          id={`filter-type-${type}`}
                          checked={filters.types.includes(type)}
                          onCheckedChange={() => toggleFilter("types", type)}
                        />
                        <Label htmlFor={`filter-type-${type}`} className={styles.filterLabel}>
                          <Badge
                            variant="outline"
                            className={styles.filterBadge}
                            style={{
                              backgroundColor: typeColors[type],
                              color: type === "sensor" ? "#000" : "#fff",
                            }}
                          >
                            {type}
                          </Badge>
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={styles.filterSection}>
                  <h4 className={styles.filterTitle}>Data Type</h4>
                  <div className={styles.filterOptions}>
                    {getUniqueDatatypes.map((datatype) => (
                      <div key={datatype} className={styles.filterOption}>
                        <Checkbox
                          id={`filter-datatype-${datatype}`}
                          checked={filters.datatypes.includes(datatype)}
                          onCheckedChange={() => toggleFilter("datatypes", datatype)}
                        />
                        <Label htmlFor={`filter-datatype-${datatype}`} className={styles.filterLabel}>
                          {datatype}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={styles.filterSection}>
                  <h4 className={styles.filterTitle}>Required</h4>
                  <div className={styles.filterOptions}>
                    <div className={styles.filterOption}>
                      <Checkbox
                        id="filter-required-true"
                        checked={filters.required === true}
                        onCheckedChange={() => toggleFilter("required", true)}
                      />
                      <Label htmlFor="filter-required-true" className={styles.filterLabel}>
                        Required
                      </Label>
                    </div>
                    <div className={styles.filterOption}>
                      <Checkbox
                        id="filter-required-false"
                        checked={filters.required === false}
                        onCheckedChange={() => toggleFilter("required", false)}
                      />
                      <Label htmlFor="filter-required-false" className={styles.filterLabel}>
                        Optional
                      </Label>
                    </div>
                  </div>
                </div>

                <Button variant="outline" size="sm" className={styles.clearFiltersButton} onClick={clearFilters}>
                  <X className="h-3 w-3 mr-1" />
                  Clear Filters
                </Button>
              </div>
            )}

            <ScrollArea className={styles.structureScrollArea}>
              {searchQuery.trim() ||
              (showFilters &&
                (filters.types.length > 0 || filters.datatypes.length > 0 || filters.required !== null)) ? (
                <div className={styles.searchResults}>
                  {filterStructure(documentStructure)?.length > 0 ? (
                    filterStructure(documentStructure).map((result, index) => (
                      <div
                        key={index}
                        className={styles.searchResultItem}
                        style={{ marginLeft: `${result.level * 20}px` }}
                        onClick={() => {
                          // Expand all parent paths
                          const pathParts = result.path.split(".")
                          let currentPath = ""
                          pathParts.forEach((part) => {
                            currentPath = currentPath ? `${currentPath}.${part}` : part
                            setExpandedSections((prev) => ({ ...prev, [currentPath]: true }))
                          })
                        }}
                      >
                        <div className={styles.searchResultHeader}>
                          <span className={styles.searchResultPath}>{result.path}</span>
                          <div className={styles.searchResultBadges}>
                            <Badge
                              variant="outline"
                              className={styles.typeBadge}
                              style={{
                                backgroundColor: typeColors[result.value.type],
                                color: result.value.type === "sensor" ? "#000" : "#fff",
                              }}
                            >
                              {result.value.type}
                            </Badge>
                          </div>
                        </div>
                        <p className={styles.searchResultDescription}>{result.value.description}</p>
                      </div>
                    ))
                  ) : (
                    <div className={styles.noSearchResults}>No fields found matching your criteria</div>
                  )}
                </div>
              ) : (
                <div className={styles.documentStructure}>{renderDocumentStructure(documentStructure)}</div>
              )}
            </ScrollArea>
          </CardContent>
          <CardFooter className={styles.cardFooter}>
            <div className={styles.selectedCount}>
              {Object.values(selectedFields).filter(Boolean).length} fields selected
            </div>
          </CardFooter>
        </Card>

        <Card className={styles.jsonCard}>
          <CardHeader>
            <CardTitle>JSON Schema Output</CardTitle>
            <CardDescription>The resulting JSON schema based on your selected fields</CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className={styles.jsonScrollArea}>
              <pre className={styles.jsonPreview}>
                <code>{jsonOutput || "Select fields to generate JSON schema"}</code>
              </pre>
            </ScrollArea>
          </CardContent>
          <CardFooter className={styles.cardFooter}>
            <Button variant="outline" className={styles.exportButton}>
              <FileDown className="mr-2 h-4 w-4" />
              Export Schema
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* Add Field Dialog */}
      <Dialog open={showFieldDialog} onOpenChange={setShowFieldDialog}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Add New Field</DialogTitle>
            <DialogDescription>
              {newField.parentPath ? `Adding field to ${newField.parentPath}` : "Adding field to root level"}
            </DialogDescription>
          </DialogHeader>

          <Tabs defaultValue="basic" className={styles.metadataTabs}>
            <TabsList className="mb-4">
              <TabsTrigger value="basic">Basic Info</TabsTrigger>
              <TabsTrigger value="metadata">Metadata Fields</TabsTrigger>
              <TabsTrigger value="custom">Custom Fields</TabsTrigger>
            </TabsList>

            <TabsContent value="basic">
              <div className={styles.fieldForm}>
                <div className={styles.formGroup}>
                  <Label htmlFor="name" className={styles.formLabel}>
                    Field Name
                  </Label>
                  <Input
                    id="name"
                    value={newField.name}
                    onChange={(e) => setNewField({ ...newField, name: e.target.value })}
                    className={styles.formInput}
                  />
                </div>

                <div className={styles.formGroup}>
                  <Label htmlFor="type" className={styles.formLabel}>
                    Signal Type
                  </Label>
                  <Select value={newField.type} onValueChange={(value) => setNewField({ ...newField, type: value })}>
                    <SelectTrigger className={styles.formSelect}>
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
                            <span className={styles.signalTypeDescription}>
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

                <div className={styles.formGroup}>
                  <Label htmlFor="description" className={styles.formLabel}>
                    Description
                  </Label>
                  <Textarea
                    id="description"
                    value={newField.description}
                    onChange={(e) => setNewField({ ...newField, description: e.target.value })}
                    className={styles.formTextarea}
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="metadata">
              <div className={styles.metadataSelectionContainer}>
                <h3 className={styles.metadataSelectionTitle}>Select Metadata Fields to Include</h3>

                <div className={styles.metadataSelectionList}>
                  {standardMetadataFields.map(
                    (field) =>
                      field.key !== "description" && (
                        <div key={field.key} className={styles.metadataCheckboxItem}>
                          <Checkbox
                            id={`std-meta-${field.key}`}
                            checked={selectedStandardMetadata.includes(field.key)}
                            onCheckedChange={() => toggleStandardMetadata(field.key)}
                          />
                          <Label htmlFor={`std-meta-${field.key}`} className={styles.metadataCheckboxLabel}>
                            {field.label}
                          </Label>
                        </div>
                      ),
                  )}
                </div>

                <div className={styles.selectedMetadataFields}>
                  {selectedStandardMetadata.includes("datatype") && newField.type !== "branch" && (
                    <div className={styles.formGroup}>
                      <Label htmlFor="datatype" className={styles.formLabel}>
                        Data Type
                      </Label>
                      <Select
                        value={newField.datatype}
                        onValueChange={(value) => setNewField({ ...newField, datatype: value })}
                      >
                        <SelectTrigger className={styles.formSelect}>
                          <SelectValue placeholder="Select a data type" />
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
                  )}

                  {selectedStandardMetadata.includes("unit") && (
                    <div className={styles.formGroup}>
                      <Label htmlFor="unit" className={styles.formLabel}>
                        Unit
                      </Label>
                      <Input
                        id="unit"
                        value={newField.unit}
                        onChange={(e) => setNewField({ ...newField, unit: e.target.value })}
                        className={styles.formInput}
                        placeholder="e.g., km/h, m, °C"
                      />
                    </div>
                  )}

                  {selectedStandardMetadata.includes("min") && (
                    <div className={styles.formGroup}>
                      <Label htmlFor="min" className={styles.formLabel}>
                        Min Value
                      </Label>
                      <Input
                        id="min"
                        type="number"
                        value={newField.min}
                        onChange={(e) => setNewField({ ...newField, min: e.target.value })}
                        className={styles.formInput}
                      />
                    </div>
                  )}

                  {selectedStandardMetadata.includes("max") && (
                    <div className={styles.formGroup}>
                      <Label htmlFor="max" className={styles.formLabel}>
                        Max Value
                      </Label>
                      <Input
                        id="max"
                        type="number"
                        value={newField.max}
                        onChange={(e) => setNewField({ ...newField, max: e.target.value })}
                        className={styles.formInput}
                      />
                    </div>
                  )}

                  {selectedStandardMetadata.includes("allowed") && newField.datatype === "string" && (
                    <div className={styles.formGroup}>
                      <Label className={styles.formLabel}>Allowed Values</Label>
                      <div className={styles.allowedValuesContainer}>
                        <div className={styles.allowedValuesInput}>
                          <Input
                            value={newAllowedValue}
                            onChange={(e) => setNewAllowedValue(e.target.value)}
                            className={styles.formInput}
                            placeholder="Add allowed value"
                          />
                          <Button
                            type="button"
                            size="sm"
                            onClick={() => addAllowedValue("new")}
                            disabled={!newAllowedValue.trim()}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>

                        <div className={styles.allowedValuesList}>
                          {newField.allowed && newField.allowed.length > 0 ? (
                            newField.allowed.map((value, index) => (
                              <Badge key={index} variant="secondary" className={styles.allowedValueBadge}>
                                {value}
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className={styles.removeAllowedButton}
                                  onClick={() => removeAllowedValue(index, "new")}
                                >
                                  <X className="h-3 w-3" />
                                </Button>
                              </Badge>
                            ))
                          ) : (
                            <p className={styles.noAllowedValues}>No allowed values defined</p>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  {selectedStandardMetadata.includes("required") && (
                    <div className={styles.formGroup}>
                      <Label htmlFor="required" className={styles.formLabel}>
                        Required
                      </Label>
                      <div className={styles.switchContainer}>
                        <Switch
                          id="required"
                          checked={newField.required}
                          onCheckedChange={(checked) => setNewField({ ...newField, required: checked })}
                        />
                        <Label htmlFor="required">This field is required</Label>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="custom">
              <div className={styles.customMetadataContainer}>
                <h3 className={styles.customMetadataTitle}>Custom Metadata Fields</h3>

                <div className={styles.customMetadataInput}>
                  <div className={styles.customMetadataInputRow}>
                    <Input
                      value={newCustomMetadataKey}
                      onChange={(e) => setNewCustomMetadataKey(e.target.value)}
                      placeholder="Field Name"
                      className={styles.customMetadataKeyInput}
                    />
                    <Input
                      value={newCustomMetadataValue}
                      onChange={(e) => setNewCustomMetadataValue(e.target.value)}
                      placeholder="Value"
                      className={styles.customMetadataValueInput}
                    />
                    <Button
                      type="button"
                      size="sm"
                      onClick={() => addCustomMetadata("new")}
                      disabled={!newCustomMetadataKey.trim()}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className={styles.customMetadataList}>
                  {newField.customMetadata && newField.customMetadata.length > 0 ? (
                    <div className={styles.customMetadataTable}>
                      <div className={styles.customMetadataHeader}>
                        <div className={styles.customMetadataHeaderCell}>Field Name</div>
                        <div className={styles.customMetadataHeaderCell}>Value</div>
                        <div className={styles.customMetadataHeaderCell}>Action</div>
                      </div>
                      {newField.customMetadata.map((meta, index) => (
                        <div key={index} className={styles.customMetadataRow}>
                          <div className={styles.customMetadataCell}>{meta.key}</div>
                          <div className={styles.customMetadataCell}>{meta.value}</div>
                          <div className={styles.customMetadataCell}>
                            <Button
                              variant="ghost"
                              size="sm"
                              className={styles.removeCustomMetaButton}
                              onClick={() => removeCustomMetadata(index, "new")}
                            >
                              <X className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className={styles.noCustomMetadata}>No custom metadata fields defined</p>
                  )}
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <DialogFooter>
            <Button type="submit" onClick={handleAddField}>
              Add Field
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Field Dialog */}
      <Dialog open={showEditFieldDialog} onOpenChange={setShowEditFieldDialog}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Edit Field</DialogTitle>
            <DialogDescription>{editingField?.path}</DialogDescription>
          </DialogHeader>
          {editingField && (
            <Tabs defaultValue="basic" className={styles.metadataTabs}>
              <TabsList className="mb-4">
                <TabsTrigger value="basic">Basic Info</TabsTrigger>
                <TabsTrigger value="metadata">Metadata Fields</TabsTrigger>
                <TabsTrigger value="custom">Custom Fields</TabsTrigger>
              </TabsList>

              <TabsContent value="basic">
                <div className={styles.fieldForm}>
                  <div className={styles.formGroup}>
                    <Label htmlFor="edit-type" className={styles.formLabel}>
                      Signal Type
                    </Label>
                    <Select
                      value={editingField.type}
                      onValueChange={(value) => setEditingField({ ...editingField, type: value })}
                    >
                      <SelectTrigger className={styles.formSelect}>
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
                              <span className={styles.signalTypeDescription}>
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

                  <div className={styles.formGroup}>
                    <Label htmlFor="edit-description" className={styles.formLabel}>
                      Description
                    </Label>
                    <Textarea
                      id="edit-description"
                      value={editingField.description}
                      onChange={(e) => setEditingField({ ...editingField, description: e.target.value })}
                      className={styles.formTextarea}
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="metadata">
                <div className={styles.metadataSelectionContainer}>
                  <h3 className={styles.metadataSelectionTitle}>Select Metadata Fields to Include</h3>

                  <div className={styles.metadataSelectionList}>
                    {standardMetadataFields.map(
                      (field) =>
                        field.key !== "description" && (
                          <div key={field.key} className={styles.metadataCheckboxItem}>
                            <Checkbox
                              id={`edit-std-meta-${field.key}`}
                              checked={editingField.selectedMetadata.includes(field.key)}
                              onCheckedChange={() => toggleEditingMetadata(field.key)}
                            />
                            <Label htmlFor={`edit-std-meta-${field.key}`} className={styles.metadataCheckboxLabel}>
                              {field.label}
                            </Label>
                          </div>
                        ),
                    )}
                  </div>

                  <div className={styles.selectedMetadataFields}>
                    {editingField.selectedMetadata.includes("datatype") && editingField.type !== "branch" && (
                      <div className={styles.formGroup}>
                        <Label htmlFor="edit-datatype" className={styles.formLabel}>
                          Data Type
                        </Label>
                        <Select
                          value={editingField.datatype}
                          onValueChange={(value) => setEditingField({ ...editingField, datatype: value })}
                        >
                          <SelectTrigger className={styles.formSelect}>
                            <SelectValue placeholder="Select a data type" />
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
                    )}

                    {editingField.selectedMetadata.includes("unit") && (
                      <div className={styles.formGroup}>
                        <Label htmlFor="edit-unit" className={styles.formLabel}>
                          Unit
                        </Label>
                        <Input
                          id="edit-unit"
                          value={editingField.unit}
                          onChange={(e) => setEditingField({ ...editingField, unit: e.target.value })}
                          className={styles.formInput}
                          placeholder="e.g., km/h, m, °C"
                        />
                      </div>
                    )}

                    {editingField.selectedMetadata.includes("min") && (
                      <div className={styles.formGroup}>
                        <Label htmlFor="edit-min" className={styles.formLabel}>
                          Min Value
                        </Label>
                        <Input
                          id="edit-min"
                          type="number"
                          value={editingField.min}
                          onChange={(e) => setEditingField({ ...editingField, min: e.target.value })}
                          className={styles.formInput}
                        />
                      </div>
                    )}

                    {editingField.selectedMetadata.includes("max") && (
                      <div className={styles.formGroup}>
                        <Label htmlFor="edit-max" className={styles.formLabel}>
                          Max Value
                        </Label>
                        <Input
                          id="edit-max"
                          type="number"
                          value={editingField.max}
                          onChange={(e) => setEditingField({ ...editingField, max: e.target.value })}
                          className={styles.formInput}
                        />
                      </div>
                    )}

                    {editingField.selectedMetadata.includes("allowed") && editingField.datatype === "string" && (
                      <div className={styles.formGroup}>
                        <Label className={styles.formLabel}>Allowed Values</Label>
                        <div className={styles.allowedValuesContainer}>
                          <div className={styles.allowedValuesInput}>
                            <Input
                              value={newAllowedValue}
                              onChange={(e) => setNewAllowedValue(e.target.value)}
                              className={styles.formInput}
                              placeholder="Add allowed value"
                            />
                            <Button
                              type="button"
                              size="sm"
                              onClick={() => addAllowedValue("edit")}
                              disabled={!newAllowedValue.trim()}
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>

                          <div className={styles.allowedValuesList}>
                            {editingField.allowed && editingField.allowed.length > 0 ? (
                              editingField.allowed.map((value, index) => (
                                <Badge key={index} variant="secondary" className={styles.allowedValueBadge}>
                                  {value}
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    className={styles.removeAllowedButton}
                                    onClick={() => removeAllowedValue(index, "edit")}
                                  >
                                    <X className="h-3 w-3" />
                                  </Button>
                                </Badge>
                              ))
                            ) : (
                              <p className={styles.noAllowedValues}>No allowed values defined</p>
                            )}
                          </div>
                        </div>
                      </div>
                    )}

                    {editingField.selectedMetadata.includes("required") && (
                      <div className={styles.formGroup}>
                        <Label htmlFor="edit-required" className={styles.formLabel}>
                          Required
                        </Label>
                        <div className={styles.switchContainer}>
                          <Switch
                            id="edit-required"
                            checked={editingField.required}
                            onCheckedChange={(checked) => setEditingField({ ...editingField, required: checked })}
                          />
                          <Label htmlFor="edit-required">This field is required</Label>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="custom">
                <div className={styles.customMetadataContainer}>
                  <h3 className={styles.customMetadataTitle}>Custom Metadata Fields</h3>

                  <div className={styles.customMetadataInput}>
                    <div className={styles.customMetadataInputRow}>
                      <Input
                        value={newCustomMetadataKey}
                        onChange={(e) => setNewCustomMetadataKey(e.target.value)}
                        placeholder="Field Name"
                        className={styles.customMetadataKeyInput}
                      />
                      <Input
                        value={newCustomMetadataValue}
                        onChange={(e) => setNewCustomMetadataValue(e.target.value)}
                        placeholder="Value"
                        className={styles.customMetadataValueInput}
                      />
                      <Button
                        type="button"
                        size="sm"
                        onClick={() => addCustomMetadata("edit")}
                        disabled={!newCustomMetadataKey.trim()}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className={styles.customMetadataList}>
                    {editingField.customMetadata && editingField.customMetadata.length > 0 ? (
                      <div className={styles.customMetadataTable}>
                        <div className={styles.customMetadataHeader}>
                          <div className={styles.customMetadataHeaderCell}>Field Name</div>
                          <div className={styles.customMetadataHeaderCell}>Value</div>
                          <div className={styles.customMetadataHeaderCell}>Action</div>
                        </div>
                        {editingField.customMetadata.map((meta, index) => (
                          <div key={index} className={styles.customMetadataRow}>
                            <div className={styles.customMetadataCell}>{meta.key}</div>
                            <div className={styles.customMetadataCell}>{meta.value}</div>
                            <div className={styles.customMetadataCell}>
                              <Button
                                variant="ghost"
                                size="sm"
                                className={styles.removeCustomMetaButton}
                                onClick={() => removeCustomMetadata(index, "edit")}
                              >
                                <X className="h-3 w-3" />
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className={styles.noCustomMetadata}>No custom metadata fields defined</p>
                    )}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          )}
          <DialogFooter>
            <Button type="submit" onClick={handleEditField}>
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
