import React from "react";
import {
  PlusCircle,
  ChevronDown,
  ChevronRight,
  Trash2,
  Info,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import styles from "./schemaBuilder.module.css";

/**
 * DocumentTree component for rendering hierarchical document structure
 */
export default function DocumentTree({
  structure,
  metadataDocuments,
  expandedSections,
  selectedFields,
  typeColors,
  onToggleSection,
  onToggleFieldSelection,
  onDeleteField,
  onOpenAddFieldDialog,
  onViewMetadata,
  rootPath = "",
  level = 0,
}) {
  return (
    <>
      {Object.entries(structure).map(([key, value]) => {
        const currentPath = rootPath ? `${rootPath}.${key}` : key;
        const isBranch = value.type === "branch";
        const isExpanded = expandedSections[currentPath];
        const isSelected = selectedFields[currentPath];
        const typeColor = typeColors[value.type] || "#888";

        return (
          <div key={currentPath} className={styles.fieldItem}>
            <div className={styles.fieldHeader}>
              {isBranch ? (
                <>
                  <Button
                    variant="ghost"
                    size="sm"
                    className={styles.addNestedButton}
                    onClick={() => onOpenAddFieldDialog(currentPath)}
                  >
                    <PlusCircle className="h-3 w-3" />
                  </Button>
                  <button
                    className={styles.expandButton}
                    onClick={() => onToggleSection(currentPath)}
                  >
                    {isExpanded ? (
                      <ChevronDown className="h-4 w-4" />
                    ) : (
                      <ChevronRight className="h-4 w-4" />
                    )}
                  </button>
                </>
              ) : (
                <div className={styles.expandPlaceholder} />
              )}
              <Checkbox
                checked={isSelected}
                onCheckedChange={() => onToggleFieldSelection(currentPath)}
                className={styles.fieldCheckbox}
              />

              <span className={styles.fieldName}>{key}</span>

              {/* Display type metadata as a badge */}
              <Badge
                variant="outline"
                className={styles.typeBadge}
                style={{
                  backgroundColor: typeColor,
                  color: value.type === "sensor" ? "#000" : "#fff",
                }}
              >
                {value.type}
              </Badge>

              <div className={styles.fieldActions}>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className={styles.actionButton}
                        onClick={() => onDeleteField(currentPath)}
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Delete field</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className={styles.actionButton}
                        onClick={() => onViewMetadata(currentPath)}
                      >
                        <Info className="h-3.5 w-3.5" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>View metadata</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>

            {isBranch && isExpanded && value.children && (
              <div className={styles.nestedFields}>
                <DocumentTree
                  structure={value.children}
                  metadataDocuments={metadataDocuments}
                  expandedSections={expandedSections}
                  selectedFields={selectedFields}
                  typeColors={typeColors}
                  onToggleSection={onToggleSection}
                  onToggleFieldSelection={onToggleFieldSelection}
                  onDeleteField={onDeleteField}
                  onOpenAddFieldDialog={onOpenAddFieldDialog}
                  onViewMetadata={onViewMetadata}
                  rootPath={currentPath}
                  level={level + 1}
                />
              </div>
            )}
          </div>
        );
      })}
    </>
  );
}
