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

export const defaultSchema = {
  vehicles: `{
  "_id": ObjectId,
  "vin": String,                // Vehicle Identification Number
  "currentLocation": {
    "timestamp": Date,          // Timestamp of location data
    "latitude": Number,         // Current latitude
    "longitude": Number,        // Current longitude
    "altitude": Number          // Current altitude
  },
  "telemetry": {
    "speed": Number,            // Current vehicle speed
    "traveledDistance": Number, // Total distance traveled
    "acceleration": {
      "lateral": Number,        // Lateral acceleration
      "longitudinal": Number,   // Longitudinal acceleration
      "vertical": Number        // Vertical acceleration
    }
  },
  "diagnostics": {
    "dtcCount": Number,         // Diagnostic trouble code count
    "dtcList": Array            // List of diagnostic trouble codes
  },
  "lastUpdated": Date           // Last update timestamp
}`,
  drivers: `{
  "_id": ObjectId,
  "driverId": String,           // Driver ID
  "name": String,               // Driver name
  "license": String,            // License number
  "phoneNumber": String,        // Contact phone number
  "email": String,              // Contact email
  "activeVehicle": ObjectId,    // Reference to current vehicle
  "status": String,             // Active, Inactive, On Leave
  "created": Date,              // Creation timestamp
  "updated": Date               // Last update timestamp
}`,
  trips: `{
  "_id": ObjectId,
  "vehicleId": ObjectId,        // Reference to vehicle
  "driverId": ObjectId,         // Reference to driver
  "startTime": Date,            // Trip start time
  "endTime": Date,              // Trip end time
  "startLocation": {
    "latitude": Number,         // Start latitude
    "longitude": Number,        // Start longitude
    "address": String           // Start address
  },
  "endLocation": {
    "latitude": Number,         // End latitude
    "longitude": Number,        // End longitude
    "address": String           // End address
  },
  "distance": Number,           // Trip distance
  "fuelConsumption": Number,    // Fuel used during trip
  "telemetrySnapshots": [       // Array of telemetry snapshots during trip
    {
      "timestamp": Date,
      "location": {
        "latitude": Number,
        "longitude": Number,
        "altitude": Number
      },
      "speed": Number,
      "acceleration": {
        "lateral": Number,
        "longitudinal": Number
      }
    }
  ]
}`,
};

// Sample data for the selected collection
export const sampleData = `[
  {
    "_id": ObjectId("6078f3a5e4c3a1d8c9f0b1c2"),
    "vin": "1HGCM82633A123456",
    "currentLocation": {
      "timestamp": ISODate("2023-04-12T09:15:32Z"),
      "latitude": 37.7749,
      "longitude": -122.4194,
      "altitude": 16.5
    },
    "telemetry": {
      "speed": 65.3,
      "traveledDistance": 12543.8,
      "acceleration": {
        "lateral": 0.02,
        "longitudinal": 0.1,
        "vertical": 0.0
      }
    },
    "diagnostics": {
      "dtcCount": 0,
      "dtcList": []
    },
    "lastUpdated": ISODate("2023-04-12T09:15:32Z")
  },
  {
    "_id": ObjectId("6078f3a5e4c3a1d8c9f0b1c3"),
    "vin": "5YJSA1E47MF123789",
    "currentLocation": {
      "timestamp": ISODate("2023-04-12T09:14:28Z"),
      "latitude": 37.3861,
      "longitude": -122.0839,
      "altitude": 22.1
    },
    "telemetry": {
      "speed": 42.8,
      "traveledDistance": 8732.5,
      "acceleration": {
        "lateral": -0.01,
        "longitudinal": 0.05,
        "vertical": 0.01
      }
    },
    "diagnostics": {
      "dtcCount": 1,
      "dtcList": ["P0300"]
    },
    "lastUpdated": ISODate("2023-04-12T09:14:28Z")
  },
  {
    "_id": ObjectId("6078f3a5e4c3a1d8c9f0b1c4"),
    "vin": "JH4DA9470MS012345",
    "currentLocation": {
      "timestamp": ISODate("2023-04-12T09:13:15Z"),
      "latitude": 37.4275,
      "longitude": -122.1697,
      "altitude": 18.3
    },
    "telemetry": {
      "speed": 0.0,
      "traveledDistance": 15432.2,
      "acceleration": {
        "lateral": 0.0,
        "longitudinal": 0.0,
        "vertical": 0.0
      }
    },
    "diagnostics": {
      "dtcCount": 0,
      "dtcList": []
    },
    "lastUpdated": ISODate("2023-04-12T09:13:15Z")
  }
]`;
