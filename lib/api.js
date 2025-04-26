/**
 * API utility functions for vehicle signal schema operations
 */

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
 * @returns {Promise<Array>} Array of metadata documents
 */
export async function fetchMetadata(templateId) {
  try {
    const response = await fetch("/api/action/find", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        collection: "signals",
        filter: { template: templateId },
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
