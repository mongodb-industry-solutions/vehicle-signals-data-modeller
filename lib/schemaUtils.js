/**
 * Utility functions for working with vehicle signal schemas
 */

/**
 * Formats a template name from storage format (snake_case) to display format (Title Case)
 * @param {string} templateId - The template ID in snake_case
 * @returns {string} The formatted template name
 */
export function formatTemplateNameForDisplay(templateId) {
  return templateId
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

/**
 * Formats a schema name for use as a template ID (converts to snake_case)
 * @param {string} name - The human-readable schema name
 * @returns {string} The formatted name as a template ID
 */
export function formatSchemaName(name) {
  return name
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "_")
    .replace(/[^a-z0-9_]/g, "");
}

/**
 * Exports a schema as a JSON file for download
 * @param {string} jsonOutput - The JSON string to export
 * @param {string} schemaName - The name of the schema (used for filename)
 */
export function handleExportSchema(jsonOutput, schemaName) {
  if (!jsonOutput || jsonOutput === "{}") return;

  // Create a blob with the JSON data
  const blob = new Blob([jsonOutput], { type: "application/json" });

  // Create a URL for the blob
  const url = URL.createObjectURL(blob);

  // Create a temporary anchor element
  const a = document.createElement("a");
  a.href = url;

  // Set the file name using the schema name
  const fileName = `${formatSchemaName(schemaName)}.json`;
  a.download = fileName;

  // Append to the body, click to download, and remove
  document.body.appendChild(a);
  a.click();

  // Clean up
  setTimeout(() => {
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, 0);
}
