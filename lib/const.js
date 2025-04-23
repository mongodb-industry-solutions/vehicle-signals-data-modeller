// Available field types
export const fieldTypes = [
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
];

// Available signal types
export const signalTypes = ["branch", "attribute", "actuator", "sensor"];

// Type to color mapping
export const typeColors = {
  branch: "rgb(38, 84, 124)",
  actuator: "rgb(239, 71, 111)",
  attribute: "rgb(6, 214, 160)",
  sensor: "rgb(255, 209, 102)",
};

// Standard metadata fields
export const standardMetadataFields = [
  { key: "datatype", label: "Data Type", type: "select", options: fieldTypes },
  { key: "description", label: "Description", type: "textarea" },
  { key: "unit", label: "Unit", type: "text" },
  { key: "min", label: "Min Value", type: "number" },
  { key: "max", label: "Max Value", type: "number" },
  { key: "allowed", label: "Allowed Values", type: "array" },
  { key: "required", label: "Required", type: "boolean" },
];
