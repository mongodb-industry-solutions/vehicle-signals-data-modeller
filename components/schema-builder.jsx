"use client"

import { useState, useEffect, useMemo } from "react"
import {
  PlusCircle,
  Save,
  FileUp,
  FileDown,
  ChevronDown,
  ChevronRight,
  Search,
  Trash2,
  Filter,
  X,
  Info,
  Loader2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import MetadataDialog from "./metadataDialog/MetadataDialog"
import AddFieldDialog from "./addFieldDialog/AddFieldDialog"
import styles from "./schema-builder.module.css"
import { signalTypes, typeColors } from "@/lib/const"

export default function SchemaBuilder() {
  const [schemaName, setSchemaName] = useState("Vehicle Signal Schema")
  const [documentStructure, setDocumentStructure] = useState({})
  const [metadataDocuments, setMetadataDocuments] = useState({})
  const [expandedSections, setExpandedSections] = useState({})
  const [showTemplateDialog, setShowTemplateDialog] = useState(false)
  const [showAddFieldDialog, setShowAddFieldDialog] = useState(false)
  const [showMetadataDialog, setShowMetadataDialog] = useState(false)
  const [fieldToAddPath, setFieldToAddPath] = useState("")
  const [metadataField, setMetadataField] = useState("")
  const [selectedFields, setSelectedFields] = useState({})
  const [jsonOutput, setJsonOutput] = useState("")
  const [searchQuery, setSearchQuery] = useState("")
  const [showFilters, setShowFilters] = useState(false)
  const [filters, setFilters] = useState({
    types: [],
    datatypes: [],
    required: null,
  })
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [isSaving, setIsSaving] = useState(false)
  const [saveError, setSaveError] = useState(null)
  const [saveSuccess, setSaveSuccess] = useState(false)
  const [availableTemplates, setAvailableTemplates] = useState([])
  const [loadingTemplates, setLoadingTemplates] = useState(false)
  const [currentTemplate, setCurrentTemplate] = useState("vss")

  // Fetch available schemas from MongoDB
  useEffect(() => {
    const fetchAvailableSchemas = async () => {
      try {
        setLoadingTemplates(true);
        const response = await fetch('/api/action/find', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            collection: 'schemas',
            filter: {},
            projection: { template: 1 }
          }),
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch schemas: ${response.status}`);
        }

        const data = await response.json();
        
        if (data && Array.isArray(data)) {
          setAvailableTemplates(data.map(item => item.template));
        } else {
          setError('Failed to retrieve schema templates');
        }
      } catch (err) {
        console.error('Error fetching schema templates:', err);
        setError(err.message);
      } finally {
        setLoadingTemplates(false);
      }
    };

    fetchAvailableSchemas();
  }, []);

  // Fetch the default vehicle signal schema from MongoDB when component mounts
  useEffect(() => {
    const fetchSchema = async (templateId = "vss") => {
      try {
        setIsLoading(true);
        setError(null);
        
        const response = await fetch('/api/action/findOne', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            collection: 'schemas',
            filter: { template: templateId },
          }),
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch schema: ${response.status}`);
        }

        const data = await response.json();
        
        if (data && data.schema) {
          setDocumentStructure(data.schema);
          setCurrentTemplate(templateId);
          
          // Fetch metadata for this schema
          fetchMetadata(templateId);
          
          // Format the template name for display
          const formattedName = formatTemplateNameForDisplay(templateId);
          setSchemaName(formattedName);
        } else {
          setError('No schema found or schema missing structure');
          // Set a fallback empty structure
          setDocumentStructure({});
        }
      } catch (err) {
        console.error('Error fetching schema:', err);
        setError(err.message);
        // Set a fallback empty structure
        setDocumentStructure({});
      } finally {
        setIsLoading(false);
      }
    };

    fetchSchema();
  }, []);

  // Fetch metadata for the current template
  const fetchMetadata = async (templateId) => {
    try {
      const response = await fetch('/api/action/find', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          collection: 'signals',
          filter: { template: templateId },
        }),
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch metadata: ${response.status}`);
      }

      const data = await response.json();
      
      if (data && Array.isArray(data)) {
        // Create a mapping of field ID to metadata
        const metadataMap = {};
        data.forEach(doc => {
          if (doc._id) {
            metadataMap[doc._id] = doc;
          }
        });
        
        setMetadataDocuments(metadataMap);
      }
    } catch (err) {
      console.error('Error fetching metadata:', err);
    }
  };

  // Format template name for display (convert from stored format to human-readable)
  const formatTemplateNameForDisplay = (templateId) => {
    return templateId
      .split('_')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  // Handle exporting the schema as a JSON file
  const handleExportSchema = () => {
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
  };

  // Format the schema name for use as a template ID
  const formatSchemaName = (name) => {
    return name
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '_')
      .replace(/[^a-z0-9_]/g, '');
  }

  // Handle loading a template from the database
  const handleLoadTemplate = async (templateId) => {
    try {
      setIsLoading(true);
      setError(null);
      setSelectedFields({}); // Reset selected fields
      setExpandedSections({}); // Reset expanded sections
      
      const response = await fetch('/api/action/findOne', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          collection: 'schemas',
          filter: { template: templateId },
        }),
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch schema: ${response.status}`);
      }

      const data = await response.json();
      
      if (data && data.schema) {
        setDocumentStructure(data.schema);
        setCurrentTemplate(templateId);
        
        // Also fetch metadata for this template
        fetchMetadata(templateId);
        
        // Format the template name for display
        const formattedName = formatTemplateNameForDisplay(templateId);
        setSchemaName(formattedName);
      } else {
        throw new Error('No schema found or schema missing structure');
      }
    } catch (err) {
      console.error('Error loading template:', err);
      setError(err.message);
    } finally {
      setIsLoading(false);
      setShowTemplateDialog(false);
    }
  }

  // Handle adding a new field to the document structure
  const handleAddField = (fieldStructure, metadataDoc, parentPath) => {
    // Update the document structure
    const updatedStructure = { ...documentStructure };
    
    if (parentPath) {
      // Add to nested path
      const pathParts = parentPath.split(".");
      let current = updatedStructure;
      
      // Navigate to the correct nesting level
      for (let i = 0; i < pathParts.length; i++) {
        if (i === pathParts.length - 1 && current[pathParts[i]] && current[pathParts[i]].children) {
          current = current[pathParts[i]].children;
        } else if (current[pathParts[i]] && current[pathParts[i]].children) {
          current = current[pathParts[i]].children;
        } else {
          console.error("Path not found:", parentPath);
          return;
        }
      }
      
      // Add the new field to this location
      current[fieldStructure.id.split('.').pop()] = fieldStructure;
    } else {
      // Add to root level
      updatedStructure[fieldStructure.id] = fieldStructure;
    }
    
    setDocumentStructure(updatedStructure);
    
    // Update the metadata documents
    setMetadataDocuments(prev => ({
      ...prev,
      [metadataDoc._id]: metadataDoc
    }));
  };

  // Handle deleting a field from the document structure
  const handleDeleteField = (path) => {
    const updatedStructure = { ...documentStructure };
    const pathParts = path.split(".");
    const fieldName = pathParts[pathParts.length - 1];

    // Navigate to the parent of the field
    let current = updatedStructure;

    for (let i = 0; i < pathParts.length - 1; i++) {
      if (current[pathParts[i]] && current[pathParts[i]].children) {
        current = current[pathParts[i]].children;
      } else if (i === 0) {
        current = current[pathParts[i]];
      } else {
        console.error("Path not found for deletion:", path);
        return;
      }
    }

    // Delete the field
    delete current[fieldName];

    // Also remove from selected fields
    const newSelectedFields = { ...selectedFields };
    delete newSelectedFields[path];

    // Remove any child selections
    Object.keys(newSelectedFields).forEach((key) => {
      if (key.startsWith(path + ".")) {
        delete newSelectedFields[key];
      }
    });

    // Remove from metadata documents
    const updatedMetadata = { ...metadataDocuments };
    delete updatedMetadata[path];

    setSelectedFields(newSelectedFields);
    setDocumentStructure(updatedStructure);
    setMetadataDocuments(updatedMetadata);
  };

  // Open the add field dialog
  const openAddFieldDialog = (parentPath = "") => {
    setFieldToAddPath(parentPath);
    setShowAddFieldDialog(true);
  };

  // Update JSON output whenever selected fields change
  useEffect(() => {
    updateJsonOutput()
  }, [selectedFields, documentStructure])

  const updateJsonOutput = () => {
    const output = {}

    // Helper function to build the output object based on selected fields
    const buildOutputObject = (structure, currentPath = "", outputObj = {}) => {
      Object.entries(structure).forEach(([key, value]) => {
        const fullPath = currentPath ? `${currentPath}.${key}` : key;
        const pathParts = fullPath.split(".");
        let current = outputObj;

        // Navigate to the correct nesting level
        for (let i = 0; i < pathParts.length - 1; i++) {
          if (!current[pathParts[i]]) {
            current[pathParts[i]] = { 
              type: "branch", 
              id: pathParts.slice(0, i + 1).join("."),
              children: {} 
            };
          }
          current = current[pathParts[i]].children;
        }

        const nodeName = pathParts[pathParts.length - 1];

        if (value.children) {
          // It's a branch with children
          const hasSelectedChild = Object.keys(selectedFields).some(
            (path) => path.startsWith(fullPath + ".") && selectedFields[path],
          );

          if (hasSelectedChild || selectedFields[fullPath]) {
            current[nodeName] = { 
              type: value.type, 
              id: value.id || fullPath,
              children: {} 
            };
            buildOutputObject(value.children, fullPath, outputObj);
          }
        } else if (selectedFields[fullPath]) {
          // It's a leaf node (field) and is selected
          current[nodeName] = { 
            type: value.type,
            id: value.id || fullPath
          };
        }
      });

      return outputObj;
    };

    buildOutputObject(documentStructure, "", output);
    setJsonOutput(JSON.stringify(output, null, 2));
  };

  const toggleSection = (path) => {
    setExpandedSections({
      ...expandedSections,
      [path]: !expandedSections[path],
    });
  };

  // Update the toggleFieldSelection function to handle parent selection and child propagation
  const toggleFieldSelection = (path) => {
    const newSelectedFields = { ...selectedFields };
    const isCurrentlySelected = selectedFields[path];

    // Toggle the current field
    newSelectedFields[path] = !isCurrentlySelected;

    // Helper function to find the target node in the document structure
    const findNode = (structure, pathParts) => {
      let current = structure;
      for (const part of pathParts) {
        if (!current[part]) return null;
        current = current[part].children || {};
      }
      return current;
    };

    const pathParts = path.split(".");
    const targetNode = findNode(documentStructure, pathParts);

    // If it's a branch with children, propagate selection to children
    if (targetNode) {
      const propagateSelection = (obj, currentPath) => {
        Object.entries(obj).forEach(([key, value]) => {
          const childPath = `${currentPath}.${key}`;
          newSelectedFields[childPath] = !isCurrentlySelected;

          if (value.children) {
            propagateSelection(value.children, childPath);
          }
        });
      };

      propagateSelection(targetNode, path);
    }

    setSelectedFields(newSelectedFields);
  };

  // Save schema to MongoDB
  const saveSchema = async () => {
    if (!jsonOutput || jsonOutput === '{}') {
      return;
    }

    try {
      setSaveError(null);
      setSaveSuccess(false);
      setIsSaving(true);

      const formattedTemplateName = formatSchemaName(schemaName);
      
      // Save the schema structure
      const schemaResponse = await fetch('/api/action/insertOne', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          collection: 'schemas',
          document: {
            template: formattedTemplateName,
            schema: JSON.parse(jsonOutput)
          }
        }),
      });

      if (!schemaResponse.ok) {
        throw new Error(`Failed to save schema: ${schemaResponse.status}`);
      }
      
      // Save the metadata documents
      const metadataToSave = Object.values(metadataDocuments).map(doc => ({
        ...doc,
        template: formattedTemplateName
      }));
      
      if (metadataToSave.length > 0) {
        const metadataResponse = await fetch('/api/action/insertMany', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            collection: 'signals',
            documents: metadataToSave
          }),
        });
        
        if (!metadataResponse.ok) {
          throw new Error(`Failed to save metadata: ${metadataResponse.status}`);
        }
      }

      setSaveSuccess(true);
      setCurrentTemplate(formattedTemplateName);
      setTimeout(() => setSaveSuccess(false), 3000); // Clear success message after 3 seconds
    } catch (err) {
      console.error('Error saving schema:', err);
      setSaveError(err.message);
    } finally {
      setIsSaving(false);
    }
  };

  // Check if JSON output is empty or invalid
  const isJsonOutputEmpty = () => {
    return !jsonOutput || jsonOutput === '{}' || jsonOutput === 'null';
  };

  // Recursive function to render the document structure
  const renderDocumentStructure = (structure, path = "", level = 0) => {
    return Object.entries(structure).map(([key, value]) => {
      const currentPath = path ? `${path}.${key}` : key;
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
                  onClick={() => openAddFieldDialog(currentPath)}
                >
                  <PlusCircle className="h-3 w-3" />
                </Button>
                <button className={styles.expandButton} onClick={() => toggleSection(currentPath)}>
                  {isExpanded ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                </button>
              </>
            ) : (
              <div className={styles.expandPlaceholder} />
            )}
            <Checkbox
              checked={isSelected}
              onCheckedChange={() => toggleFieldSelection(currentPath)}
              className={styles.fieldCheckbox}
            />

            <span className={styles.fieldName}>{key}</span>

            {/* Display type metadata as a badge */}
            <Badge
              variant="outline"
              className={styles.typeBadge}
              style={{ backgroundColor: typeColor, color: value.type === "sensor" ? "#000" : "#fff" }}
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
                      onClick={() => handleDeleteField(currentPath)}
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
                      onClick={() => {
                        setMetadataField(currentPath);
                        setShowMetadataDialog(true);
                      }}
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
              {renderDocumentStructure(value.children, currentPath, level + 1)}
            </div>
          )}
        </div>
      );
    });
  };

  // Get unique datatypes from the metadata for filtering
  const getUniqueDatatypes = useMemo(() => {
    const datatypes = new Set();
    
    Object.values(metadataDocuments).forEach(doc => {
      if (doc.datatype) {
        datatypes.add(doc.datatype);
      }
    });
    
    return Array.from(datatypes);
  }, [metadataDocuments]);

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
          newFilters.datatypes = newFilters.datatypes.filter((dt) => dt !== value);
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

  // Filter structure based on search and filters
  const filterStructure = (structure, path = "", level = 0, results = []) => {
    if (!searchQuery.trim() && !showFilters) return null; // Return null if no search query or filters

    const hasActiveFilters = filters.types.length > 0 || filters.datatypes.length > 0 || filters.required !== null;

    Object.entries(structure).forEach(([key, value]) => {
      const currentPath = path ? `${path}.${key}` : key;
      const isBranch = value.type === "branch";
      const metadata = metadataDocuments[currentPath];

      // Check if the item matches search query
      const matchesSearch =
        !searchQuery.trim() ||
        key.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (metadata?.description && metadata.description.toLowerCase().includes(searchQuery.toLowerCase()));

      // Check if the item matches filters
      let matchesFilters = true;

      if (hasActiveFilters) {
        // Type filter
        if (filters.types.length > 0 && !filters.types.includes(value.type)) {
          matchesFilters = false;
        }

        // Datatype filter (only for non-branches)
        if (!isBranch && filters.datatypes.length > 0 && metadata && 
            !filters.datatypes.includes(metadata.datatype)) {
          matchesFilters = false;
        }

        // Required filter
        if (filters.required !== null && metadata && metadata.required !== filters.required) {
          matchesFilters = false;
        }
      }

      // Add to results if matches search and filters
      if ((matchesSearch || !searchQuery.trim()) && (matchesFilters || !hasActiveFilters)) {
        results.push({
          path: currentPath,
          level,
          isBranch,
          value,
          metadata
        });
      }

      // If it's a branch, recursively search its children
      if (isBranch && value.children) {
        filterStructure(value.children, currentPath, level + 1, results);
      }
    });

    return results;
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <Input
            value={schemaName}
            onChange={(e) => setSchemaName(e.target.value)}
            className={styles.schemaNameInput}
          />
          <p className={styles.schemaDescription}>
            Build your vehicle signal schema by selecting fields and adding custom attributes
          </p>
        </div>
        <div className={styles.headerButtons}>
          <Dialog open={showTemplateDialog} onOpenChange={setShowTemplateDialog}>
            <DialogTrigger asChild>
              <Button variant="outline" className={styles.templateButton}>
                <FileUp className="mr-2 h-4 w-4" />
                Load Template
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[525px]">
              <DialogHeader>
                <DialogTitle>Load Template</DialogTitle>
                <DialogDescription>Choose a pre-defined template to start with or import your own.</DialogDescription>
              </DialogHeader>
              <div className={styles.templateList}>
                {loadingTemplates ? (
                  <div className={styles.loadingContainer}>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Loading templates...
                  </div>
                ) : availableTemplates.length > 0 ? (
                  availableTemplates.map((template) => (
                    <Card
                      key={template}
                      className={`${styles.templateCard} ${currentTemplate === template ? styles.currentTemplateCard : ''}`}
                    >
                      <CardHeader className="p-4">
                        <CardTitle className="text-lg">{formatTemplateNameForDisplay(template)}</CardTitle>
                        {currentTemplate === template && (
                          <CardDescription>Currently loaded</CardDescription>
                        )}
                      </CardHeader>
                      <CardFooter className="p-4 pt-0 flex justify-between">
                        <Button 
                          variant="ghost" 
                          size="sm"
                          disabled={currentTemplate === template}
                          onClick={() => handleLoadTemplate(template)}
                        >
                          <FileDown className="h-4 w-4 mr-2" />
                          {currentTemplate === template ? 'Current' : 'Load'}
                        </Button>
                      </CardFooter>
                    </Card>
                  ))
                ) : (
                  <div className={styles.noTemplatesMessage}>
                    No templates found. Save a schema to create your first template.
                  </div>
                )}
              </div>
            </DialogContent>
          </Dialog>

          <Button 
            className={styles.saveButton} 
            onClick={saveSchema} 
            disabled={isJsonOutputEmpty() || isSaving}
          >
            {isSaving ? (
              <>Saving...</>
            ) : (
              <>
                <Save className="mr-2 h-4 w-4" />
                Save Schema
              </>
            )}
          </Button>
          {saveSuccess && (
            <span className={styles.saveSuccess}>Schema saved successfully!</span>
          )}
          {saveError && (
            <span className={styles.saveError}>Error: {saveError}</span>
          )}
        </div>
      </div>

      <div className={styles.splitView}>
        <Card className={styles.schemaCard}>
          <CardHeader>
            <CardTitle className={styles.cardTitle}>
              <span>Vehicle Signal Structure</span>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => openAddFieldDialog("")}
              >
                <PlusCircle className="mr-2 h-4 w-4" />
                Add Field
              </Button>
            </CardTitle>
            <CardDescription>Select fields from the vehicle signal hierarchy or add custom fields</CardDescription>
          </CardHeader>
          <CardContent>
            <div className={styles.searchFilterContainer}>
              <div className={styles.searchInputWrapper}>
                <Search className={styles.searchIcon} size={16} />
                <Input
                  placeholder="Search fields..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={styles.searchInput}
                />
              </div>
              <Button
                variant={showFilters ? "default" : "outline"}
                size="sm"
                className={styles.filterButton}
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter className="h-4 w-4 mr-1" />
                Filters{" "}
                {filters.types.length > 0 || filters.datatypes.length > 0 || filters.required !== null
                  ? `(${filters.types.length + filters.datatypes.length + (filters.required !== null ? 1 : 0)})`
                  : ""}
              </Button>
            </div>

            {showFilters && (
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
                        <Label htmlFor={`filter-type-${type}`} className={styles.filterLabel}>
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

                {getUniqueDatatypes.length > 0 && (
                  <div className={styles.filterSection}>
                    <h4 className={styles.filterTitle}>Data Type</h4>
                    <div className={styles.filterOptions}>
                      {getUniqueDatatypes.map((datatype) => (
                        <div key={datatype} className={styles.filterOption}>
                          <Checkbox
                            id={`filter-datatype-${datatype}`}
                            checked={filters.datatypes.includes(datatype)}
                            onCheckedChange={() => toggleFilter("datatypes", datatype)}
                          />
                          <Label htmlFor={`filter-datatype-${datatype}`} className={styles.filterLabel}>
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
                      <Label htmlFor="filter-required-true" className={styles.filterLabel}>
                        Required
                      </Label>
                    </div>
                    <div className={styles.filterOption}>
                      <Checkbox
                        id="filter-required-false"
                        checked={filters.required === false}
                        onCheckedChange={() => toggleFilter("required", false)}
                      />
                      <Label htmlFor="filter-required-false" className={styles.filterLabel}>
                        Optional
                      </Label>
                    </div>
                  </div>
                </div>

                <Button variant="outline" size="sm" className={styles.clearFiltersButton} onClick={clearFilters}>
                  <X className="h-3 w-3 mr-1" />
                  Clear Filters
                </Button>
              </div>
            )}
            <ScrollArea className={styles.structureScrollArea}>
              {searchQuery.trim() ||
              (showFilters &&
                (filters.types.length > 0 || filters.datatypes.length > 0 || filters.required !== null)) ? (
                <div className={styles.searchResults}>
                  {filterStructure(documentStructure)?.length > 0 ? (
                    filterStructure(documentStructure).map((result, index) => (
                      <div
                        key={index}
                        className={styles.searchResultItem}
                        style={{ marginLeft: `${result.level * 20}px` }}
                        onClick={() => {
                          // Expand all parent paths
                          const pathParts = result.path.split(".");
                          let currentPath = "";
                          pathParts.forEach((part) => {
                            currentPath = currentPath ? `${currentPath}.${part}` : part;
                            setExpandedSections((prev) => ({ ...prev, [currentPath]: true }));
                          });
                        }}
                      >
                        <div className={styles.searchResultHeader}>
                          <span className={styles.searchResultPath}>{result.path}</span>
                          <div className={styles.searchResultBadges}>
                            <Badge
                              variant="outline"
                              className={styles.typeBadge}
                              style={{
                                backgroundColor: typeColors[result.value.type],
                                color: result.value.type === "sensor" ? "#000" : "#fff",
                              }}
                            >
                              {result.value.type}
                            </Badge>
                            {result.metadata?.required && (
                              <Badge variant="outline" className={styles.requiredBadge}>
                                Required
                              </Badge>
                            )}
                          </div>
                        </div>
                        <p className={styles.searchResultDescription}>{result.metadata?.description}</p>
                      </div>
                    ))
                  ) : (
                    <div className={styles.noSearchResults}>No fields found matching your criteria</div>
                  )}
                </div>
              ) : (
                isLoading ? (
                  <div className={styles.loadingContainer}>
                    <p>Loading vehicle signal schema...</p>
                  </div>
                ) : (error ? (
                  <div className={styles.errorContainer}>
                    <h3>Error loading schema</h3>
                    <p>{error}</p>
                    <Button onClick={() => window.location.reload()}>Retry</Button>
                  </div>
                ) : (
                  <div className={styles.documentStructure}>{renderDocumentStructure(documentStructure)}</div>
                ))
              )}
            </ScrollArea>
          </CardContent>
          <CardFooter className={styles.cardFooter}>
            <div className={styles.selectedCount}>
              {Object.values(selectedFields).filter(Boolean).length} fields selected
            </div>
            <Button variant="outline" className={styles.exportButton} onClick={handleExportSchema}>
              <FileDown className="mr-2 h-4 w-4" />
              Export Schema
            </Button>
          </CardFooter>
        </Card>

        <Card className={styles.jsonCard}>
          <CardHeader>
            <CardTitle>JSON Schema Output</CardTitle>
            <CardDescription>The resulting JSON schema based on your selected fields</CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className={styles.jsonScrollArea}>
              <pre className={styles.jsonPreview}>
                <code>{jsonOutput || "Select fields to generate JSON schema"}</code>
              </pre>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>

      {/* Add Field Dialog */}
      <AddFieldDialog
        open={showAddFieldDialog}
        onOpenChange={setShowAddFieldDialog}
        parentPath={fieldToAddPath}
        onSave={handleAddField}
        currentTemplate={currentTemplate}
      />

      {/* Metadata Dialog */}
      <MetadataDialog
        open={showMetadataDialog}
        onOpenChange={setShowMetadataDialog}
        fieldId={metadataField}
        metadata={metadataDocuments[metadataField]}
      />
    </div>
  );
}
