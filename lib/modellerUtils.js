/**
 * Utility functions for the vehicle signals data modeller
 * Used to generate schema recommendations based on app definitions
 */

import { loadApp, fetchMetadata } from "@/lib/api";

/**
 * Main function to generate a schema recommendation
 * @param {string} appId - The ID of the application
 * @param {string} databaseType - The type of database (e.g. "mongodb")
 * @returns {Promise<Object>} The generated schema recommendation
 */
export async function generateSchemaRecommendation(appId, databaseType) {
  try {
    // Load app definition
    const appDefinition = await loadApp(appId);
    if (!appDefinition) {
      throw new Error(`App with ID ${appId} not found`);
    }

    // Generate schema for each entity type
    const schema = {
      appId,
      databaseType,
      collections: [],
      name: `${appDefinition.name} Schema`,
      description: `Optimized schema for ${appDefinition.name} on ${databaseType}`,
      createdAt: new Date().toISOString(),
    };

    // Generate vehicle schema if needed
    if (appDefinition.schemaId) {
      const vehicleCollection = generateVehicleCollection(appDefinition);
      schema.collections.push(vehicleCollection);
    }

    // Generate custom entity schemas
    if (
      appDefinition.customEntities &&
      appDefinition.customEntities.length > 0
    ) {
      const customEntityCollections = generateCustomEntityCollections(
        appDefinition.customEntities
      );
      schema.collections.push(...customEntityCollections);
    }

    return schema;
  } catch (error) {
    console.error("Error generating schema recommendation:", error);
    throw error;
  }
}

/**
 * Generates a vehicleData collection with simplified schema representations
 * @param {Object} appDefinition - The application definition
 * @returns {Object} Vehicle data collection with component schemas
 */
function generateVehicleCollection(appDefinition) {
  // Create the vehicleData collection with simplified schemas
  const vehicleCollection = {
    name: "vehicleData",
    schemas: [
      {
        name: "Inventory",
        schema: {
          _id: "componentUUID@2100-01-01T12:00:00.000",
          path: "/vehicleId/path/component/Inventory",
          data: {},
          createdAt: "2100-01-01T12:00:00.000",
        },
      },
      {
        name: "Metrics",
        schema: {
          _id: "componentUUID@2024-03-14T21:00:28.858Z",
          path: "/vehicleId/path/component/Metrics",
          data: {},
          createdAt: "2024-03-14T21:00:28.858Z",
        },
      },
    ],
    indexes: [
      {
        name: "path_createdAt_idx",
        fields: ["path", "createdAt"],
        unique: false,
        description:
          "Optimized compound index for querying by path and timestamp",
      },
    ],
  };

  return vehicleCollection;
}

/**
 * Generates collections for custom entities
 * @param {Array} customEntities - Array of custom entity definitions
 * @returns {Array} Array of custom entity collections
 */
function generateCustomEntityCollections(customEntities) {
  return customEntities.map((entity) => {
    // Create a sample document schema based on the entity fields
    const sampleSchema = {
      _id: "customId",
      createdAt: new Date().toISOString(),
    };

    // Add fields from entity definition
    entity.fields.forEach((field) => {
      const fieldName = field.id.split(".").pop();
      sampleSchema[fieldName] = getPlaceholderValueForType(field.type);
    });

    // Create collection definition
    return {
      name: entity.id,
      schemas: [
        {
          name: entity.name,
          schema: sampleSchema,
        },
      ],
      indexes: [],
    };
  });
}

/**
 * Gets a placeholder value for a specific type
 * @param {string} type - The field type
 * @returns {any} A placeholder value for the type
 */
function getPlaceholderValueForType(type) {
  switch (type?.toLowerCase()) {
    case "string":
      return "string value";
    case "number":
    case "integer":
    case "float":
    case "double":
      return 123.45;
    case "boolean":
      return true;
    case "date":
      return new Date().toISOString();
    case "object":
      return { key: "value" };
    case "array":
      return ["item1", "item2"];
    default:
      return "value";
  }
}

/**
 * Generates sample documents for a given app ID
 * @param {string} appId - The ID of the application
 * @param {number} vehicleCount - Number of vehicles to generate data for (default: 1)
 * @param {number} frequencySeconds - Frequency of data points in seconds (default: 60)
 * @param {number} rangeMinutes - Time range to generate data for in minutes (default: 5)
 * @returns {Promise<Array>} Array of sample documents
 */
export async function generateSampleDocuments(
  appId,
  vehicleCount = 1,
  frequencySeconds = 60,
  rangeMinutes = 5
) {
  try {
    // Load app definition to get schema ID and use cases
    const appDefinition = await loadApp(appId);
    if (!appDefinition) {
      throw new Error(`App with ID ${appId} not found`);
    }

    const schemaId = appDefinition.schemaId;

    // Create list of all relevant signals from use cases
    const relevantSignalPaths = new Set();
    if (appDefinition.useCases && appDefinition.useCases.length > 0) {
      appDefinition.useCases.forEach((useCase) => {
        if (useCase.fields && useCase.fields.length > 0) {
          useCase.fields.forEach((field) => {
            relevantSignalPaths.add(field);
          });
        }
      });
    }

    // Fetch all signal metadata (exclude branch type)
    const signals = await fetchMetadata(schemaId, "branch");

    // Filter signals to only include ones referenced in use cases
    const relevantSignals = signals.filter((signal) =>
      Array.from(relevantSignalPaths).some(
        (path) => signal.id === path || signal.id.startsWith(path + ".")
      )
    );

    // Group signals by parent path (component)
    const componentGroups = groupSignalsByParentPath(relevantSignals);

    // Generate sample documents for each vehicle
    const sampleDocuments = [];

    // Calculate number of data points based on frequency and range
    const totalTimeSeconds = rangeMinutes * 60;
    const numberOfDataPoints = Math.ceil(totalTimeSeconds / frequencySeconds);

    // Base time for time-series data (current time minus the total duration)
    const baseTime = new Date();
    baseTime.setMinutes(baseTime.getMinutes() - rangeMinutes);

    for (let vehicleIndex = 0; vehicleIndex < vehicleCount; vehicleIndex++) {
      const vehicleId = generateUUID();

      // Generate documents for each component group
      Object.entries(componentGroups).forEach(([parentPath, signals]) => {
        // Extract component path parts
        const pathParts = parentPath.split(".");

        // Skip the "Vehicle" part and join the rest for the path
        const pathElements = pathParts.slice(1, -1);
        const pathString =
          pathElements.length > 0 ? `/${pathElements.join("/")}` : "";

        // Get the component name (last part of the path)
        const componentName = pathParts[pathParts.length - 1];

        // Generate a UUID for this component
        const componentUUID = generateUUID();

        // Separate inventory and metrics signals
        const inventorySignals = signals.filter(
          (signal) => signal.type === "attribute"
        );
        const metricsSignals = signals.filter(
          (signal) => signal.type !== "attribute" && signal.type !== "branch"
        );

        // Create inventory document if there are inventory signals
        if (inventorySignals.length > 0) {
          const inventoryData = {};

          // Add signal data to the document
          inventorySignals.forEach((signal) => {
            const fieldName = signal.id.split(".").pop();
            inventoryData[fieldName] = generateValueForSignal(signal);
          });

          // Create the inventory document
          const inventoryDocument = {
            _id: `${componentUUID}@2100-01-01T00:00:00.000`,
            path: `/${vehicleId}${pathString}/${componentName}/Inventory`,
            data: inventoryData,
            createdAt: new Date("2100-01-01T00:00:00.000"),
          };

          sampleDocuments.push(inventoryDocument);
        }

        // Create time-series metrics documents if there are metrics signals
        if (metricsSignals.length > 0) {
          // Generate time-series data for the metrics signals
          for (let i = 0; i < numberOfDataPoints; i++) {
            const metricsData = {};

            // Calculate timestamp for this data point
            const timestamp = new Date(baseTime);
            timestamp.setSeconds(timestamp.getSeconds() + i * frequencySeconds);

            // Add signal data to the document
            metricsSignals.forEach((signal) => {
              const fieldName = signal.id.split(".").pop();
              metricsData[fieldName] = generateValueForSignal(signal);
            });

            // Create the metrics document with calculated timestamp
            const metricsDocument = {
              _id: `${componentUUID}@${timestamp.toISOString()}`,
              path: `/${vehicleId}${pathString}/${componentName}/Metrics`,
              data: metricsData,
              createdAt: timestamp,
            };

            sampleDocuments.push(metricsDocument);
          }
        }
      });
    }

    return sampleDocuments;
  } catch (error) {
    console.error("Error generating sample documents:", error);
    throw error;
  }
}

/**
 * Groups signals by their parent path (component)
 * @param {Array} signals - Array of signal metadata
 * @returns {Object} Object with parent paths as keys and signal arrays as values
 */
function groupSignalsByParentPath(signals) {
  const groups = {};

  signals.forEach((signal) => {
    const path = signal.id;
    const pathParts = path.split(".");

    // Remove the last part to get the parent path
    // For paths like Vehicle.Acceleration.Lateral, parent is Vehicle.Acceleration
    if (pathParts.length > 2) {
      pathParts.pop();
      const parentPath = pathParts.join(".");

      if (!groups[parentPath]) {
        groups[parentPath] = [];
      }

      groups[parentPath].push(signal);
    } else if (pathParts.length === 2) {
      // For paths like Vehicle.VIN, parent is Vehicle
      const parentPath = pathParts[0];

      if (!groups[parentPath]) {
        groups[parentPath] = [];
      }

      groups[parentPath].push(signal);
    }
  });

  return groups;
}

/**
 * Generates a UUID
 * @returns {string} A UUID string
 */
function generateUUID() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

/**
 * Generates a value for a signal based on its metadata
 * @param {Object} signal - The signal metadata
 * @returns {any} A generated value appropriate for the signal type
 */
function generateValueForSignal(signal) {
  const dataType = signal.datatype || "string";

  // Check for array types
  const isArray = dataType.endsWith("[]");
  const baseType = isArray ? dataType.slice(0, -2) : dataType;

  // Generate a single value or array based on the data type
  if (isArray) {
    // Generate an array with 2-4 elements
    const arrayLength = Math.floor(Math.random() * 3) + 2;
    const result = [];

    for (let i = 0; i < arrayLength; i++) {
      result.push(generateValue(baseType, signal));
    }

    return result;
  } else {
    return generateValue(baseType, signal);
  }
}

/**
 * Generates a value of a specific type based on signal metadata
 * @param {string} type - The data type
 * @param {Object} signal - The signal metadata
 * @returns {any} A generated value of the specified type
 */
function generateValue(type, signal) {
  const lowerType = type.toLowerCase();

  // Check for allowed values (enumeration)
  if (
    signal.allowed &&
    Array.isArray(signal.allowed) &&
    signal.allowed.length > 0
  ) {
    // Randomly select one of the allowed values
    const index = Math.floor(Math.random() * signal.allowed.length);
    return signal.allowed[index];
  }

  // Generate based on type
  switch (lowerType) {
    case "string":
      // Handle string fields with "Timestamp" in their name - special case for ISO 8601 UTC timestamps
      const name = signal.name ? signal.name.toLowerCase() : "";
      const id = signal.id ? signal.id.toLowerCase() : "";

      if (
        (name.includes("timestamp") || id.includes("timestamp")) &&
        type.toLowerCase() === "string"
      ) {
        return new Date().toISOString(); // Current timestamp in ISO 8601 format with UTC timezone
      }

      // Generate contextually appropriate string values based on signal name
      if (id.includes("vin")) {
        return "1HGCM82633A123456"; // Sample VIN
      } else if (id.includes("license") || id.includes("plate")) {
        return "ABC-1234";
      } else if (id.includes("color")) {
        return ["Red", "Blue", "Black", "White", "Silver"][
          Math.floor(Math.random() * 5)
        ];
      } else if (id.includes("model")) {
        return ["Model X", "Model Y", "Model 3", "Cybertruck", "Roadster"][
          Math.floor(Math.random() * 5)
        ];
      } else if (id.includes("make") || id.includes("manufacturer")) {
        return ["Tesla", "Ford", "Toyota", "BMW", "Audi"][
          Math.floor(Math.random() * 5)
        ];
      } else if (id.includes("name")) {
        return ["Driver 1", "Passenger", "User", "Owner", "Guest"][
          Math.floor(Math.random() * 5)
        ];
      } else if (id.includes("unit")) {
        return ["km/h", "m/s", "celsius", "kPa", "degrees"][
          Math.floor(Math.random() * 5)
        ];
      } else if (id.includes("id") || id.includes("identifier")) {
        return (
          "ID-" +
          Math.floor(Math.random() * 10000)
            .toString()
            .padStart(4, "0")
        );
      } else {
        // Default to signal name if available, otherwise use ID or a placeholder
        return signal.name || signal.id.split(".").pop() || "sample_value";
      }

    case "uint8":
    case "uint16":
    case "uint32":
      return generateNumericValue(signal, 0);

    case "int8":
    case "int16":
    case "int32":
      return generateNumericValue(signal);

    case "float":
    case "double":
      return generateNumericValue(signal, null, true);

    case "boolean":
      return Math.random() > 0.5;

    case "timestamp":
      return new Date().toISOString();

    case "object":
      // For location objects only
      if (signal.id.toLowerCase().includes("location")) {
        return {
          latitude: (Math.random() * 180 - 90).toFixed(6) * 1,
          longitude: (Math.random() * 360 - 180).toFixed(6) * 1,
          altitude: Math.floor(Math.random() * 1000),
        };
      }
      return {
        value: signal.name || signal.id.split(".").pop() || "object_value",
      };

    default:
      return signal.name || signal.id.split(".").pop() || "default_value";
  }
}

/**
 * Generates a numeric value based on signal constraints
 * @param {Object} signal - The signal metadata
 * @param {number|null} minDefault - Default minimum value if not specified
 * @param {boolean} isFloat - Whether to generate a floating point number
 * @returns {number} A generated numeric value
 */
function generateNumericValue(signal, minDefault = -100, isFloat = false) {
  // Default values that make sense for the type
  let min, max;

  if (signal.min !== undefined) {
    min = signal.min;
  } else if (minDefault !== null) {
    min = minDefault;
  } else if (signal.datatype && signal.datatype.startsWith("uint")) {
    min = 0;
  } else {
    min = -100;
  }

  if (signal.max !== undefined) {
    max = signal.max;
  } else if (signal.datatype) {
    // Set reasonable max defaults based on data type
    if (signal.datatype === "uint8") {
      max = 255;
    } else if (signal.datatype === "int8") {
      max = 127;
    } else if (signal.datatype === "uint16") {
      max = 65535;
    } else if (signal.datatype === "int16") {
      max = 32767;
    } else if (signal.datatype === "uint32") {
      max = 100000; // Practical limit, not the actual uint32 max
    } else if (signal.datatype === "int32") {
      max = 10000; // Practical limit, not the actual int32 max
    } else {
      max = 100;
    }
  } else {
    max = 100;
  }

  // Ensure min is less than max
  if (min > max) {
    [min, max] = [max, min];
  }

  const range = max - min;

  if (isFloat) {
    // Generate a floating point number with precision
    const value = min + Math.random() * range;
    return parseFloat(value.toFixed(2));
  } else {
    // Generate an integer
    return Math.floor(min + Math.random() * range);
  }
}
