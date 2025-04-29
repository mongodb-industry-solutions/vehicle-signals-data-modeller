"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Database,
  File,
  Filter,
  AlertTriangle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";
import dynamic from "next/dynamic";
import { generateSampleDocuments } from "@/lib/modellerUtils";
import { exportSampleDocuments } from "@/lib/api";
import styles from "./sampleDocument.module.css";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

// Dynamic import of ReactJsonView to avoid SSR issues
const ReactJsonView = dynamic(() => import("@microlink/react-json-view"), {
  ssr: false,
});

// Define frequency options
const FREQUENCY_OPTIONS = [
  { value: "1", label: "Every Second", seconds: 1 },
  { value: "30", label: "Every 30 Seconds", seconds: 30 },
  { value: "60", label: "Every Minute", seconds: 60 },
  { value: "3600", label: "Every Hour", seconds: 3600 },
];

// Define range options
const RANGE_OPTIONS = [
  { value: "1", label: "1 Minute", minutes: 1 },
  { value: "5", label: "5 Minutes", minutes: 5 },
  { value: "60", label: "1 Hour", minutes: 60 },
  { value: "1440", label: "1 Day", minutes: 1440 },
];

export default function SampleDocument({ app, schema }) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [generatedDocuments, setGeneratedDocuments] = useState([]);
  const [vehicleCount, setVehicleCount] = useState(1);
  const [documentCount, setDocumentCount] = useState(0);
  const [activeCollection, setActiveCollection] = useState("vehicleData");
  const [pathFilter, setPathFilter] = useState("");
  const [expandedPaths, setExpandedPaths] = useState(new Set());
  const [uniqueVehicleIds, setUniqueVehicleIds] = useState([]);
  const [selectedVehicleId, setSelectedVehicleId] = useState("");
  const [selectedFrequency, setSelectedFrequency] = useState("60"); // Default: Every minute
  const [selectedRange, setSelectedRange] = useState("5"); // Default: 5 minutes
  const [signalsPerPath, setSignalsPerPath] = useState(0);
  const [isValidCombination, setIsValidCombination] = useState(true);
  const [documentIndices, setDocumentIndices] = useState({}); // Store current document index for each path
  const { toast } = useToast();

  // Track the current document index for each path
  const getCurrentDocumentIndex = (path) => {
    return documentIndices[path] || 0;
  };

  // Navigate to previous document in a path
  const goToPreviousDocument = (path) => {
    setDocumentIndices({
      ...documentIndices,
      [path]: Math.max(0, (documentIndices[path] || 0) - 1),
    });
  };

  // Navigate to next document in a path
  const goToNextDocument = (path, maxIndex) => {
    setDocumentIndices({
      ...documentIndices,
      [path]: Math.min(maxIndex, (documentIndices[path] || 0) + 1),
    });
  };

  // Check if app is valid
  const isAppValid = Boolean(app && app.id);

  // Validate the frequency and range combination
  useEffect(() => {
    const frequencyInSeconds = Number(selectedFrequency);
    const rangeInMinutes = Number(selectedRange);

    // Calculate number of signals per path
    const totalSeconds = rangeInMinutes * 60;
    const calculatedSignals = Math.ceil(totalSeconds / frequencyInSeconds);

    setSignalsPerPath(calculatedSignals);
    setIsValidCombination(calculatedSignals <= 100);
  }, [selectedFrequency, selectedRange]);

  // Group documents by collection
  const documentsByCollection = generatedDocuments.reduce((acc, doc) => {
    // Extract collection name from the document path (for vehicle data)
    // or use the _id format to determine if it's a custom entity
    let collectionName = "vehicleData"; // Default collection

    // Check if it's a vehicle data document by examining its path format
    if (doc.path && doc.path.startsWith("/")) {
      collectionName = "vehicleData";
    } else {
      // For custom entities, derive collection from _id format or other properties
      // This would need enhancement for real custom entity documents
      collectionName = doc.collectionName || "vehicleData";
    }

    if (!acc[collectionName]) {
      acc[collectionName] = [];
    }

    acc[collectionName].push(doc);
    return acc;
  }, {});

  // Extract unique vehicle IDs from vehicle data documents
  useEffect(() => {
    if (generatedDocuments.length > 0) {
      const vehicleIds = new Set();

      generatedDocuments.forEach((doc) => {
        if (doc.path) {
          const parts = doc.path.split("/");
          if (parts.length >= 2 && parts[1]) {
            vehicleIds.add(parts[1]);
          }
        }
      });

      const uniqueIds = Array.from(vehicleIds);
      setUniqueVehicleIds(uniqueIds);

      if (uniqueIds.length > 0 && !selectedVehicleId) {
        setSelectedVehicleId(uniqueIds[0]);
      }
    }
  }, [generatedDocuments]);

  // Group vehicle documents by path component
  const groupDocumentsByPath = (documents) => {
    if (!documents) return {};

    return documents.reduce((groups, doc) => {
      if (!doc.path) return groups;

      // Extract the document type (Inventory or Metrics)
      const pathParts = doc.path.split("/");
      const docType = pathParts[pathParts.length - 1]; // Last part is Inventory or Metrics

      // Extract the component path without the type
      const componentPath = pathParts.slice(0, -1).join("/");

      // Only include documents from the selected vehicle
      if (selectedVehicleId && !doc.path.includes(`/${selectedVehicleId}/`)) {
        return groups;
      }

      // Apply path filter if specified
      if (
        pathFilter &&
        !doc.path.toLowerCase().includes(pathFilter.toLowerCase())
      ) {
        return groups;
      }

      // Create a key for the group
      const key = componentPath;

      if (!groups[key]) {
        groups[key] = [];
      }

      groups[key].push(doc);
      return groups;
    }, {});
  };

  // Generate sample documents
  const handleGenerateDocuments = async () => {
    if (!app || !app.id) {
      console.error("No app definition provided");
      return;
    }

    setIsGenerating(true);
    // Reset selected vehicle ID to ensure auto-selection of first vehicle after generation
    setSelectedVehicleId("");

    try {
      // Get frequency in seconds and range in minutes from the selected options
      const frequencyInSeconds =
        FREQUENCY_OPTIONS.find((option) => option.value === selectedFrequency)
          ?.seconds || 60;

      const rangeInMinutes =
        RANGE_OPTIONS.find((option) => option.value === selectedRange)
          ?.minutes || 5;

      const documents = await generateSampleDocuments(
        app.id,
        parseInt(vehicleCount) || 1,
        frequencyInSeconds,
        rangeInMinutes
      );

      setGeneratedDocuments(documents);
      setDocumentCount(documents.length);

      // Automatically expand the first few paths - REMOVED to keep all collapsed by default
      const newExpandedPaths = new Set();

      setExpandedPaths(newExpandedPaths);
    } catch (error) {
      console.error("Error generating sample documents:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  // Export sample documents to MongoDB
  const handleExportToMongoDB = async () => {
    if (generatedDocuments.length === 0) {
      toast({
        title: "No documents to export",
        description: "Please generate sample documents first.",
        variant: "destructive",
      });
      return;
    }

    if (!app || !app.id) {
      toast({
        title: "Export failed",
        description: "No app definition available",
        variant: "destructive",
      });
      return;
    }

    setIsExporting(true);

    try {
      const result = await exportSampleDocuments(generatedDocuments, app.id);

      toast({
        title: "Export successful",
        description: `${result.count} documents exported to MongoDB samples collection`,
        variant: "default",
      });
    } catch (error) {
      console.error("Error exporting sample documents:", error);
      toast({
        title: "Export failed",
        description:
          error.message || "An error occurred while exporting documents",
        variant: "destructive",
      });
    } finally {
      setIsExporting(false);
    }
  };

  // Toggle a path's expanded state
  const togglePathExpanded = (path) => {
    const newExpandedPaths = new Set(expandedPaths);
    if (newExpandedPaths.has(path)) {
      newExpandedPaths.delete(path);
    } else {
      newExpandedPaths.add(path);
    }
    setExpandedPaths(newExpandedPaths);
  };

  // Helper function to extract document type (Inventory/Metrics) from path
  const getDocumentType = (path) => {
    if (!path) return "";
    const parts = path.split("/");
    return parts[parts.length - 1] || "";
  };

  // Helper function to get component name from path
  const getComponentName = (path) => {
    if (!path) return "";
    const parts = path.split("/");
    if (parts.length >= 3) {
      return parts[parts.length - 2] || "";
    }
    return "";
  };

  // Get all documents for the active collection
  const activeCollectionDocuments =
    documentsByCollection[activeCollection] || [];

  // Group the documents by path
  const documentGroups = groupDocumentsByPath(activeCollectionDocuments);

  return (
    <Card>
      <CardHeader>
        <CardTitle className={styles.cardTitleWithIcon}>
          Sample Documents
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className={styles.controlBar}>
          <div className={styles.timeControlsRow}>
            <div className={styles.inputGroup}>
              <label htmlFor="vehicleCount" className={styles.inputLabel}>
                Number of Vehicles:
              </label>
              <Input
                id="vehicleCount"
                type="number"
                min="1"
                max="10"
                value={vehicleCount}
                onChange={(e) => setVehicleCount(e.target.value)}
                className={styles.numberInput}
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="frequency" className={styles.inputLabel}>
                Data Frequency:
              </label>
              <Select
                id="frequency"
                value={selectedFrequency}
                onValueChange={setSelectedFrequency}
              >
                <SelectTrigger className={styles.selector}>
                  <SelectValue placeholder="Select Frequency" />
                </SelectTrigger>
                <SelectContent>
                  {FREQUENCY_OPTIONS.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="range" className={styles.inputLabel}>
                Time Range:
              </label>
              <Select
                id="range"
                value={selectedRange}
                onValueChange={setSelectedRange}
              >
                <SelectTrigger className={styles.selector}>
                  <SelectValue placeholder="Select Range" />
                </SelectTrigger>
                <SelectContent>
                  {RANGE_OPTIONS.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button
            onClick={handleGenerateDocuments}
            disabled={isGenerating || !isAppValid || !isValidCombination}
          >
            {isGenerating ? "Generating..." : "Generate"}
          </Button>
        </div>

        {documentCount > 0 && (
          <>
            <div className={styles.statsBar}>
              <span className={styles.documentCount}>
                {documentCount} documents generated
              </span>

              <div className={styles.filterContainer}>
                <Filter className="h-4 w-4 mr-1" />
                <Input
                  placeholder="Filter by path"
                  value={pathFilter}
                  onChange={(e) => setPathFilter(e.target.value)}
                  className={styles.filterInput}
                />
              </div>
            </div>

            <Tabs
              value={activeCollection}
              onValueChange={setActiveCollection}
              className={styles.collectionTabs}
            >
              <div className={styles.tabHeader}>
                <TabsList>
                  {Object.keys(documentsByCollection).map((collection) => (
                    <TabsTrigger key={collection} value={collection}>
                      {collection}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {uniqueVehicleIds.length > 1 &&
                  activeCollection === "vehicleData" && (
                    <Select
                      value={selectedVehicleId}
                      onValueChange={setSelectedVehicleId}
                    >
                      <SelectTrigger className={styles.vehicleSelector}>
                        <SelectValue placeholder="Select Vehicle" />
                      </SelectTrigger>
                      <SelectContent>
                        {uniqueVehicleIds.map((vehicleId, index) => (
                          <SelectItem key={vehicleId} value={vehicleId}>
                            Vehicle {index + 1} ({vehicleId.substring(0, 8)}...)
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
              </div>

              {Object.keys(documentsByCollection).map((collection) => (
                <TabsContent
                  key={collection}
                  value={collection}
                  className={styles.tabContent}
                >
                  <div className={styles.documentsContainer}>
                    {Object.keys(documentGroups).length === 0 ? (
                      <div className={styles.noDocuments}>
                        No documents found for the selected filters.
                      </div>
                    ) : (
                      <Accordion
                        type="multiple"
                        className={styles.documentAccordion}
                        value={Array.from(expandedPaths)}
                        onValueChange={(value) =>
                          setExpandedPaths(new Set(value))
                        }
                      >
                        {Object.entries(documentGroups).map(([path, docs]) => (
                          <AccordionItem
                            key={path}
                            value={path}
                            className={styles.documentGroup}
                          >
                            <AccordionTrigger className={styles.pathHeader}>
                              <div className={styles.pathInfo}>
                                <span className={styles.pathValue}>{path}</span>
                              </div>
                              <div className={styles.documentCount}>
                                {docs.length} document
                                {docs.length !== 1 ? "s" : ""}
                              </div>
                            </AccordionTrigger>
                            <AccordionContent>
                              <div className={styles.documentList}>
                                {(() => {
                                  // Group documents by type (Metrics/Inventory)
                                  const groupedByType = docs.reduce(
                                    (acc, doc) => {
                                      const type = getDocumentType(doc.path);
                                      if (!acc[type]) acc[type] = [];
                                      acc[type].push(doc);
                                      return acc;
                                    },
                                    {}
                                  );

                                  // Get available types
                                  const types = Object.keys(groupedByType);

                                  return types.map((type, typeIndex) => {
                                    const typeDocs = groupedByType[type];
                                    const currentIndex =
                                      getCurrentDocumentIndex(
                                        `${path}-${type}`
                                      ) || 0;
                                    const currentDoc = typeDocs[currentIndex];

                                    return (
                                      <div
                                        key={type}
                                        className={`${styles.documentItem} ${
                                          types.length === 1
                                            ? styles.singleType
                                            : ""
                                        }`}
                                      >
                                        <div className={styles.documentHeader}>
                                          {typeDocs.length > 1 ? (
                                            <>
                                              <div
                                                className={
                                                  styles.documentNavigation
                                                }
                                              >
                                                <Badge
                                                  className={
                                                    styles.documentTypeBadge
                                                  }
                                                >
                                                  {type}
                                                </Badge>
                                                <span
                                                  className={
                                                    styles.documentPagination
                                                  }
                                                >
                                                  {currentIndex + 1} of{" "}
                                                  {typeDocs.length}
                                                </span>
                                              </div>
                                              <div
                                                className={
                                                  styles.navigationButtons
                                                }
                                              >
                                                <Button
                                                  variant="outline"
                                                  size="sm"
                                                  onClick={(e) => {
                                                    e.stopPropagation();
                                                    setDocumentIndices({
                                                      ...documentIndices,
                                                      [`${path}-${type}`]:
                                                        Math.max(
                                                          0,
                                                          currentIndex - 1
                                                        ),
                                                    });
                                                  }}
                                                  disabled={currentIndex === 0}
                                                >
                                                  <ChevronLeft className="h-4 w-4" />
                                                </Button>
                                                <Button
                                                  variant="outline"
                                                  size="sm"
                                                  onClick={(e) => {
                                                    e.stopPropagation();
                                                    setDocumentIndices({
                                                      ...documentIndices,
                                                      [`${path}-${type}`]:
                                                        Math.min(
                                                          typeDocs.length - 1,
                                                          currentIndex + 1
                                                        ),
                                                    });
                                                  }}
                                                  disabled={
                                                    currentIndex ===
                                                    typeDocs.length - 1
                                                  }
                                                >
                                                  <ChevronRight className="h-4 w-4" />
                                                </Button>
                                              </div>
                                            </>
                                          ) : (
                                            <Badge
                                              className={
                                                styles.documentTypeBadge
                                              }
                                            >
                                              {type}
                                            </Badge>
                                          )}
                                        </div>
                                        <div className={styles.documentContent}>
                                          <ReactJsonView
                                            src={currentDoc}
                                            style={{ fontSize: "0.7rem" }}
                                            theme="grayscale:inverted"
                                            collapsed={2}
                                            displayDataTypes={false}
                                            enableClipboard={false}
                                            name={null}
                                            displayObjectSize={false}
                                            quotesOnKeys={false}
                                            displayArrayKey={false}
                                          />
                                        </div>
                                      </div>
                                    );
                                  });
                                })()}
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    )}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </>
        )}
      </CardContent>
      <CardFooter className={styles.cardFooter}>
        <div className={styles.footerButtonGroup}>
          <Button
            variant="default"
            onClick={handleExportToMongoDB}
            disabled={generatedDocuments.length === 0 || isExporting}
          >
            {isExporting ? (
              "Exporting..."
            ) : (
              <>
                <Database className="mr-2 h-4 w-4" />
                Export to MongoDB
              </>
            )}
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
