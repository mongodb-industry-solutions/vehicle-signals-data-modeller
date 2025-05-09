import React, { useState, useEffect } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import styles from "./FilterPanel.module.css";

export default function FilterPanel({
  onFiltersChange,
  initialFilters,
  signalTypes,
  typeColors,
  uniqueDatatypes,
  showFilters,
}) {
  // Initialize local state with the initial filters
  const [filters, setFilters] = useState(initialFilters);

  // When initialFilters prop changes, update local state
  useEffect(() => {
    setFilters(initialFilters);
  }, [initialFilters]);

  // When local filters change, notify parent component
  useEffect(() => {
    onFiltersChange(filters);
  }, [filters, onFiltersChange]);

  if (!showFilters) return null;

  // Local filter handling functions
  const toggleFilter = (type, value) => {
    setFilters((prev) => {
      const newFilters = { ...prev };

      if (type === "types") {
        if (newFilters.types.includes(value)) {
          newFilters.types = newFilters.types.filter((t) => t !== value);
        } else {
          newFilters.types = [...newFilters.types, value];
        }
      } else if (type === "datatypes") {
        if (newFilters.datatypes.includes(value)) {
          newFilters.datatypes = newFilters.datatypes.filter(
            (dt) => dt !== value
          );
        } else {
          newFilters.datatypes = [...newFilters.datatypes, value];
        }
      } else if (type === "required") {
        if (newFilters.required === value) {
          newFilters.required = null;
        } else {
          newFilters.required = value;
        }
      }

      return newFilters;
    });
  };

  const clearFilters = () => {
    setFilters({
      types: [],
      datatypes: [],
      required: null,
    });
  };

  return (
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
              <Label
                htmlFor={`filter-type-${type}`}
                className={styles.filterLabel}
              >
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

      {uniqueDatatypes.length > 0 && (
        <div className={styles.filterSection}>
          <h4 className={styles.filterTitle}>Data Type</h4>
          <div className={styles.filterOptions}>
            {uniqueDatatypes.map((datatype) => (
              <div key={datatype} className={styles.filterOption}>
                <Checkbox
                  id={`filter-datatype-${datatype}`}
                  checked={filters.datatypes.includes(datatype)}
                  onCheckedChange={() => toggleFilter("datatypes", datatype)}
                />
                <Label
                  htmlFor={`filter-datatype-${datatype}`}
                  className={styles.filterLabel}
                >
                  {datatype}
                </Label>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className={styles.filterSection}>
        <h4 className={styles.filterTitle}>Required</h4>
        <div className={styles.filterOptions}>
          <div className={styles.filterOption}>
            <Checkbox
              id="filter-required-true"
              checked={filters.required === true}
              onCheckedChange={() => toggleFilter("required", true)}
            />
            <Label
              htmlFor="filter-required-true"
              className={styles.filterLabel}
            >
              Required
            </Label>
          </div>
          <div className={styles.filterOption}>
            <Checkbox
              id="filter-required-false"
              checked={filters.required === false}
              onCheckedChange={() => toggleFilter("required", false)}
            />
            <Label
              htmlFor="filter-required-false"
              className={styles.filterLabel}
            >
              Optional
            </Label>
          </div>
        </div>
      </div>

      <Button
        variant="outline"
        size="sm"
        className={styles.clearFiltersButton}
        onClick={clearFilters}
      >
        <X className="h-3 w-3 mr-1" />
        Clear Filters
      </Button>
    </div>
  );
}
