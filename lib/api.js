/**
 * API utility functions for vehicle signal schema operations
 */
import { isProtectedSchema, isProtectedApp } from "./protected";

/**
 * Fetches all available schemas from the database
 * @param {Object} options - Optional parameters
 * @param {string} options.excludeTemplate - Template ID to exclude from results
 * @returns {Promise<Array<string>>} Array of template IDs
 */
export async function fetchAvailableSchemas({ excludeTemplate = null } = {}) {
  try {
    const response = await fetch("/api/action/find", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        collection: "schemas",
        filter: {},
        projection: { template: 1 },
      }),
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch schemas: ${response.status}`);
    }

    const data = await response.json();

    if (data && Array.isArray(data)) {
      // Filter out the excluded template if specified
      const templates = data
        .map((item) => item.template)
        .filter((template) => !excludeTemplate || template !== excludeTemplate);

      return templates;
    }

    throw new Error("Failed to retrieve schema templates");
  } catch (error) {
    console.error("Error fetching schema templates:", error);
    throw error;
  }
}

/**
 * Fetches metadata for a specific template
 * @param {string} templateId - The template ID to fetch metadata for
 * @param {string} type - Optional type to exclude from results (e.g., "branch")
 * @returns {Promise<Array>} Array of metadata documents
 */
export async function fetchMetadata(templateId, type = null) {
  try {
    const filter = { template: templateId };

    // Add type filter if specified
    if (type) {
      filter.type = { $ne: type };
    }

    const response = await fetch("/api/action/find", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        collection: "signals",
        filter: filter,
        projection: { _id: 0 },
      }),
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch metadata: ${response.status}`);
    }

    const data = await response.json();

    // Return the array of metadata documents directly
    if (data && Array.isArray(data)) {
      return data;
    }

    return [];
  } catch (error) {
    console.error("Error fetching metadata:", error);
    throw error;
  }
}

/**
 * Loads a template schema from the database
 * @param {string} templateId - The template ID to load
 * @returns {Promise<Object>} Object containing the schema and template ID
 */
export async function loadTemplate(templateId) {
  try {
    const response = await fetch("/api/action/findOne", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        collection: "schemas",
        filter: { template: templateId },
      }),
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch schema: ${response.status}`);
    }

    const data = await response.json();

    if (data && data.schema) {
      return {
        schema: data.schema,
        template: templateId,
      };
    }

    throw new Error("No schema found or schema missing structure");
  } catch (error) {
    console.error("Error loading template:", error);
    throw error;
  }
}

/**
 * Saves a schema and its metadata to the database
 * @param {Object} options - Save options
 * @param {string} options.templateName - The template name to save under
 * @param {Object} options.schema - The schema structure to save
 * @param {Array} options.metadata - The metadata documents array to save
 * @returns {Promise<Object>} Success status
 */
export async function saveSchema({ templateName, schema, metadata }) {
  if (!schema || schema === "{}" || schema === "null") {
    throw new Error("Cannot save empty schema");
  }

  try {
    // Ensure schema is an object, not a string
    const schemaToSave =
      typeof schema === "string" ? JSON.parse(schema) : schema;

    // Save the schema structure
    const schemaResponse = await fetch("/api/action/updateOne", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        collection: "schemas",
        filter: { template: templateName },
        update: {
          $set: {
            template: templateName,
            schema: schemaToSave,
          },
        },
        upsert: true,
      }),
    });

    if (!schemaResponse.ok) {
      throw new Error(`Failed to save schema: ${schemaResponse.status}`);
    }

    // Save the metadata documents if provided
    if (metadata && Array.isArray(metadata) && metadata.length > 0) {
      console.log(`Preparing to save ${metadata.length} metadata documents`);

      const metadataToSave = metadata.map((doc) => ({
        updateOne: {
          filter: { id: doc.id, template: templateName },
          update: { $set: { ...doc, template: templateName } },
          upsert: true,
        },
      }));

      const metadataResponse = await fetch("/api/action/bulkWrite", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          collection: "signals",
          operations: metadataToSave,
          options: { ordered: false },
        }),
      });

      if (!metadataResponse.ok) {
        throw new Error(`Failed to save metadata: ${metadataResponse.status}`);
      }
    }

    return { success: true, template: templateName };
  } catch (error) {
    console.error("Error saving schema:", error);
    throw error;
  }
}

/**
 * Updates a metadata document in the database
 * @param {Object} options - Update options
 * @param {string} options.id - The ID of the metadata document
 * @param {string} options.template - The template ID the metadata belongs to
 * @param {Object} options.data - The metadata data to update
 * @returns {Promise<Object>} Updated metadata
 */
export async function updateMetadata({ id, template, data }) {
  try {
    const response = await fetch("/api/action/replaceOne", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        collection: "signals",
        filter: { id, template },
        document: data,
      }),
    });

    if (!response.ok) {
      throw new Error(`Failed to update metadata: ${response.status}`);
    }

    return { success: true, data };
  } catch (error) {
    console.error("Error updating metadata:", error);
    throw error;
  }
}

/**
 * Deletes a template and all associated metadata from the database
 * @param {string} templateId - The template ID to delete
 * @returns {Promise<Object>} Success status
 */
export async function deleteTemplate(templateId) {
  if (!templateId) {
    throw new Error("Template ID is required for deletion");
  }

  // Check if the template is protected
  if (isProtectedSchema(templateId)) {
    throw new Error(`Cannot delete the protected schema "${templateId}".`);
  }

  try {
    // Delete the schema template first
    const schemaResponse = await fetch("/api/action/deleteOne", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        collection: "schemas",
        filter: { template: templateId },
      }),
    });

    if (!schemaResponse.ok) {
      throw new Error(`Failed to delete schema: ${schemaResponse.status}`);
    }

    // Delete all metadata documents associated with this template
    const metadataResponse = await fetch("/api/action/deleteMany", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        collection: "signals",
        filter: { template: templateId },
      }),
    });

    if (!metadataResponse.ok) {
      throw new Error(`Failed to delete metadata: ${metadataResponse.status}`);
    }

    return { success: true };
  } catch (error) {
    console.error("Error deleting template:", error);
    throw error;
  }
}

/**
 * Fetches all available app definitions from the database
 * @returns {Promise<Array>} Array of app summaries with id, name, description and useCaseCount
 */
export async function fetchAvailableApps() {
  try {
    const response = await fetch("/api/action/find", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        collection: "apps",
        filter: {},
        projection: {
          id: 1,
          name: 1,
          description: 1,
          useCaseCount: { $size: { $ifNull: ["$useCases", []] } },
        },
      }),
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch apps: ${response.status}`);
    }

    const data = await response.json();

    if (data && Array.isArray(data)) {
      return data;
    }

    return [];
  } catch (error) {
    console.error("Error fetching available apps:", error);
    throw error;
  }
}

/**
 * Loads a complete app definition from the database
 * @param {string} appId - The app ID to load
 * @returns {Promise<Object>} Complete app definition
 */
export async function loadApp(appId) {
  try {
    const response = await fetch("/api/action/findOne", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        collection: "apps",
        filter: { id: appId },
        projection: { _id: 0 },
      }),
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch app: ${response.status}`);
    }

    const data = await response.json();

    if (data) {
      return data;
    }

    throw new Error("No app found with the specified ID");
  } catch (error) {
    console.error("Error loading app:", error);
    throw error;
  }
}

/**
 * Saves an app definition to the database
 * @param {Object} appDefinition - The complete app definition to save
 * @returns {Promise<Object>} Success status
 */
export async function saveApp(appDefinition) {
  if (!appDefinition || !appDefinition.id || !appDefinition.name) {
    throw new Error("Cannot save app without id and name");
  }

  try {
    const response = await fetch("/api/action/updateOne", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        collection: "apps",
        filter: { id: appDefinition.id },
        update: {
          $set: appDefinition,
        },
        upsert: true,
      }),
    });

    if (!response.ok) {
      throw new Error(`Failed to save app: ${response.status}`);
    }

    const data = await response.json();
    return { success: true, appId: appDefinition.id };
  } catch (error) {
    console.error("Error saving app:", error);
    throw error;
  }
}

/**
 * Deletes an app definition from the database
 * @param {string} appId - The app ID to delete
 * @returns {Promise<Object>} Success status
 */
export async function deleteApp(appId) {
  if (!appId) {
    throw new Error("App ID is required for deletion");
  }

  try {
    // First, fetch the app to check if it's protected
    const app = await loadApp(appId);
    if (app && isProtectedApp(app.name)) {
      throw new Error(`Cannot delete the protected app "${app.name}".`);
    }

    const response = await fetch("/api/action/deleteOne", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        collection: "apps",
        filter: { id: appId },
      }),
    });

    if (!response.ok) {
      throw new Error(`Failed to delete app: ${response.status}`);
    }

    return { success: true };
  } catch (error) {
    console.error("Error deleting app:", error);
    throw error;
  }
}

/**
 * Exports sample documents to the "samples" collection in MongoDB
 * @param {Array} documents - Array of sample documents to export
 * @param {string} appId - The ID of the application these samples belong to
 * @returns {Promise<Object>} Result of the export operation
 */
export async function exportSampleDocuments(documents, appId) {
  if (!documents || !Array.isArray(documents) || documents.length === 0) {
    throw new Error("Cannot export empty or invalid documents array");
  }

  if (!appId) {
    throw new Error("App ID is required for sample document export");
  }

  try {
    // First, delete any existing samples with this appId to avoid duplicates
    const deleteResponse = await fetch("/api/action/deleteMany", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        collection: "samples",
        filter: { appId: appId },
      }),
    });

    if (!deleteResponse.ok) {
      throw new Error(
        `Failed to clear existing samples: ${deleteResponse.status}`
      );
    }

    // Add metadata to each document to track which app it belongs to
    // and ensure createdAt is a proper Date object
    const documentsWithMetadata = documents.map((doc) => ({
      ...doc,
      appId: appId,
      createdAt: {
        $date: new Date().toISOString(), // Use MongoDB extended JSON for Date objects
      },
    }));

    // Use the insertMany action to save all documents at once
    const response = await fetch("/api/action/insertMany", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        collection: "samples",
        documents: documentsWithMetadata,
      }),
    });

    if (!response.ok) {
      throw new Error(`Failed to export samples: ${response.status}`);
    }

    const result = await response.json();
    return {
      success: true,
      count: result.insertedCount || documentsWithMetadata.length,
      message: `Successfully exported ${documentsWithMetadata.length} sample documents to MongoDB`,
    };
  } catch (error) {
    console.error("Error exporting sample documents:", error);
    throw error;
  }
}

/**
 * Checks if sample data exists for a specific app
 * @param {string} appId - The app ID to check for sample data
 * @returns {Promise<boolean>} True if sample data exists, false otherwise
 */
export async function checkSampleDataExists(appId) {
  if (!appId) {
    throw new Error("App ID is required to check for sample data");
  }

  try {
    const response = await fetch("/api/action/find", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        collection: "samples",
        filter: { appId: appId },
        limit: 1,
      }),
    });

    if (!response.ok) {
      throw new Error(`Failed to check sample data: ${response.status}`);
    }

    const data = await response.json();
    return data && Array.isArray(data) && data.length > 0;
  } catch (error) {
    console.error("Error checking sample data:", error);
    throw error;
  }
}

/**
 * Executes an aggregation pipeline on a collection
 * @param {Object} options - Aggregation options
 * @param {string} options.collection - The collection to query
 * @param {Array} options.pipeline - The aggregation pipeline to execute
 * @returns {Promise<Array>} Results of the aggregation
 */
export async function executeAggregation({ collection, pipeline }) {
  if (!collection) {
    throw new Error("Collection name is required");
  }

  if (!pipeline || !Array.isArray(pipeline)) {
    throw new Error("Pipeline must be a valid array");
  }

  try {
    const response = await fetch("/api/action/aggregate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        collection: collection,
        pipeline: pipeline,
      }),
    });

    if (!response.ok) {
      throw new Error(`Failed to execute aggregation: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error executing aggregation:", error);
    throw error;
  }
}

/**
 * Fetches saved queries for a specific app
 * @param {string} appId - The app ID to fetch queries for
 * @returns {Promise<Array>} Array of saved queries
 */
export async function fetchSavedQueries(appId) {
  if (!appId) {
    throw new Error("App ID is required to fetch saved queries");
  }

  try {
    const response = await fetch("/api/action/findOne", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        collection: "queries",
        filter: { appId: appId },
      }),
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch saved queries: ${response.status}`);
    }

    const data = await response.json();

    if (data && data.queries) {
      return data.queries;
    }

    return [];
  } catch (error) {
    console.error("Error fetching saved queries:", error);
    return []; // Return empty array on error
  }
}

/**
 * Saves a query for a specific app
 * @param {Object} options - Save options
 * @param {string} options.appId - The app ID to save the query for
 * @param {string} options.name - The name of the query
 * @param {string|Array} options.pipeline - The aggregation pipeline to save (as string or array)
 * @returns {Promise<Object>} Success status
 */
export async function saveQuery({ appId, name, pipeline }) {
  if (!appId) {
    throw new Error("App ID is required");
  }

  if (!name) {
    throw new Error("Query name is required");
  }

  if (!pipeline) {
    throw new Error("Pipeline is required");
  }

  try {
    const newQuery = {
      id: Date.now().toString(),
      name,
      pipeline,
      createdAt: new Date().toISOString(),
    };

    // Use updateOne with upsert option to simplify the operation
    const response = await fetch("/api/action/updateOne", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        collection: "queries",
        filter: { appId: appId },
        update: {
          $push: { queries: newQuery },
        },
        upsert: true,
      }),
    });

    if (!response.ok) {
      throw new Error(`Failed to save query: ${response.status}`);
    }

    return { success: true, query: newQuery };
  } catch (error) {
    console.error("Error saving query:", error);
    throw error;
  }
}

/**
 * Deletes a saved query for a specific app
 * @param {Object} options - Delete options
 * @param {string} options.appId - The app ID the query belongs to
 * @param {string} options.queryId - The ID of the query to delete
 * @returns {Promise<Object>} Success status
 */
export async function deleteQuery({ appId, queryId }) {
  if (!appId) {
    throw new Error("App ID is required");
  }

  if (!queryId) {
    throw new Error("Query ID is required");
  }

  try {
    const response = await fetch("/api/action/updateOne", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        collection: "queries",
        filter: { appId: appId },
        update: {
          $pull: { queries: { id: queryId } },
        },
      }),
    });

    if (!response.ok) {
      throw new Error(`Failed to delete query: ${response.status}`);
    }

    return { success: true };
  } catch (error) {
    console.error("Error deleting query:", error);
    throw error;
  }
}
