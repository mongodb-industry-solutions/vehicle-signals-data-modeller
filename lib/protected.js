/**
 * Protected schemas and apps that cannot be deleted or overwritten
 */

// Protected schema template IDs (snake_case format as stored in database)
export const PROTECTED_SCHEMA_IDS = [
  "my_custom_schema",
  "vss",
  "fleet_management_schema",
  "zod",
];

// Protected app names (exact match as stored in database)
export const PROTECTED_APP_NAMES = ["Fleet Management App"];

/**
 * Check if a schema template ID is protected
 * @param {string} templateId - The template ID to check
 * @returns {boolean} True if the schema is protected
 */
export function isProtectedSchema(templateId) {
  if (!templateId) return false;
  return PROTECTED_SCHEMA_IDS.includes(templateId);
}

/**
 * Check if an app name is protected
 * @param {string} appName - The app name to check
 * @returns {boolean} True if the app is protected
 */
export function isProtectedApp(appName) {
  if (!appName) return false;
  return PROTECTED_APP_NAMES.includes(appName);
}

