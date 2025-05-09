import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";
import styles from "./SearchBar.module.css";
import { getActiveFiltersCount } from "@/lib/filterUtils";

export default function SearchBar({
  onSearchChange,
  initialQuery = "",
  showFilters,
  onToggleFilters,
  filters,
}) {
  // Local state for the search input (allows for debouncing)
  const [searchInput, setSearchInput] = useState(initialQuery);

  // Debounce search to avoid excessive updates
  useEffect(() => {
    const timer = setTimeout(() => {
      onSearchChange(searchInput);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchInput, onSearchChange]);

  return (
    <div className={styles.searchFilterContainer}>
      <div className={styles.searchInputWrapper}>
        <Search className={styles.searchIcon} size={16} />
        <Input
          placeholder="Search fields..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className={styles.searchInput}
        />
      </div>
      <Button
        variant={showFilters ? "default" : "outline"}
        size="sm"
        className={styles.filterButton}
        onClick={onToggleFilters}
      >
        <Filter className="h-4 w-4 mr-1" />
        Filters{" "}
        {getActiveFiltersCount(filters) > 0
          ? `(${getActiveFiltersCount(filters)})`
          : ""}
      </Button>
    </div>
  );
}
