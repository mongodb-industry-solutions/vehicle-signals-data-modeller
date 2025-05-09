/**
 * Utility functions for filtering schema data
 */

/**
 * Check if there are any active filters
 * @param {Object} filters - The filter criteria
 * @returns {boolean} - True if any filters are active
 */
export function hasActiveFilters(filters) {
  return (
    (filters.types && filters.types.length > 0) ||
    (filters.datatypes && filters.datatypes.length > 0) ||
    filters.required !== null
  );
}

/**
 * Get the total count of active filters
 * @param {Object} filters - The filter criteria
 * @returns {number} - The number of active filters
 */
export function getActiveFiltersCount(filters) {
  if (!filters) return 0;

  return (
    (filters.types?.length || 0) +
    (filters.datatypes?.length || 0) +
    (filters.required !== null ? 1 : 0)
  );
}

/**
 * Filter document structure based on search query and filters
 * @param {Object} structure - The document structure to filter
 * @param {Object} options - Filter options
 * @param {string} options.searchQuery - The search query
 * @param {Object} options.filters - Filter criteria
 * @param {Object} options.metadataDocuments - Metadata for the fields
 * @returns {Array} - Array of filtered results with path, level, and data
 */
export function filterDocumentStructure(
  structure,
  { searchQuery = "", filters = {}, metadataDocuments = {} }
) {
  const results = [];

  // Return empty array if no search criteria or filters
  if (!searchQuery.trim() && !hasActiveFilters(filters)) {
    return results;
  }

  // Recursive function to traverse the structure
  const traverse = (obj, path = "", level = 0) => {
    Object.entries(obj).forEach(([key, value]) => {
      const currentPath = path ? `${path}.${key}` : key;
      const isBranch = value.type === "branch";
      const metadata = metadataDocuments[currentPath];

      // Check if the item matches search query
      const matchesSearch =
        !searchQuery.trim() ||
        key.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (metadata?.description &&
          metadata.description
            .toLowerCase()
            .includes(searchQuery.toLowerCase()));

      // Check if the item matches filters
      let matchesFilters = true;

      if (hasActiveFilters(filters)) {
        // Type filter
        if (filters.types.length > 0 && !filters.types.includes(value.type)) {
          matchesFilters = false;
        }

        // Datatype filter (only for non-branches)
        if (
          !isBranch &&
          filters.datatypes.length > 0 &&
          metadata &&
          !filters.datatypes.includes(metadata.datatype)
        ) {
          matchesFilters = false;
        }

        // Required filter
        if (
          filters.required !== null &&
          metadata &&
          metadata.required !== filters.required
        ) {
          matchesFilters = false;
        }
      }

      // Add to results if matches search and filters
      if (
        (matchesSearch || !searchQuery.trim()) &&
        (matchesFilters || !hasActiveFilters(filters))
      ) {
        results.push({
          path: currentPath,
          level,
          isBranch,
          value,
          metadata,
        });
      }

      // If it's a branch, recursively search its children
      if (isBranch && value.children) {
        traverse(value.children, currentPath, level + 1);
      }
    });
  };

  traverse(structure);
  return results;
}
