"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import {
  Copy,
  Code,
  Check,
  Save,
  FolderOpen,
  Play,
  Search,
  Server,
  Trash2,
  AlertTriangle,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import styles from "./querySandbox.module.css";
import {
  executeAggregation,
  fetchSavedQueries,
  saveQuery,
  deleteQuery,
  checkSampleDataExists,
} from "@/lib/api";

// Dynamically import ReactJsonView to avoid SSR issues
const ReactJsonView = dynamic(() => import("@microlink/react-json-view"), {
  ssr: false,
});

export default function QuerySandbox({
  hasSampleData: initialHasSampleData,
  setActiveTab,
  currentQuery: initialQuery,
  setCurrentQuery: parentSetCurrentQuery,
  showSaveQueryDialog: initialShowSaveDialog,
  setShowSaveQueryDialog: parentSetShowSaveQueryDialog,
  showLoadQueryDialog: initialShowLoadDialog,
  setShowLoadQueryDialog: parentSetShowLoadDialog,
  queryName: initialQueryName,
  setQueryName: parentSetQueryName,
  handleSaveQuery: parentHandleSaveQuery,
  handleLoadQuery: parentHandleLoadQuery,
  savedQueries: initialSavedQueries,
  appId: selectedAppId,
}) {
  // State for component
  const [appId, setAppId] = useState(selectedAppId);
  const [hasSampleData, setHasSampleData] = useState(initialHasSampleData);
  const [currentQuery, setCurrentQuery] = useState(initialQuery);

  // Initialize userQuery properly from initialQuery or as empty array string
  const [userQuery, setUserQuery] = useState(() => {
    try {
      // If initialQuery is provided, parse it and remove the appId filter
      if (initialQuery) {
        const parsed = JSON.parse(initialQuery);
        // Remove the first element (appId filter) and stringify the rest
        if (Array.isArray(parsed) && parsed.length > 0) {
          return JSON.stringify(parsed.slice(1), null, 2);
        }
      }
      // Default empty pipeline
      return JSON.stringify([], null, 2);
    } catch (error) {
      console.error("Error parsing initial query:", error);
      return JSON.stringify([], null, 2);
    }
  });
  const [queryName, setQueryName] = useState(initialQueryName);
  const [showSaveQueryDialog, setShowSaveQueryDialog] = useState(
    initialShowSaveDialog
  );
  const [showLoadQueryDialog, setShowLoadQueryDialog] = useState(
    initialShowLoadDialog
  );
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [queryToDelete, setQueryToDelete] = useState(null);
  const [savedQueries, setSavedQueries] = useState([]);
  const [queryResults, setQueryResults] = useState([]);
  const [isRunningQuery, setIsRunningQuery] = useState(false);
  const [isLoadingQueries, setIsLoadingQueries] = useState(false);
  const [error, setError] = useState(null);
  const [validationError, setValidationError] = useState(null);
  const [isValidQuery, setIsValidQuery] = useState(true);

  // Update appId when selectedAppId changes
  useEffect(() => {
    if (selectedAppId) {
      setAppId(selectedAppId);
    }
  }, [selectedAppId]);

  // Check if sample data exists when appId changes
  useEffect(() => {
    const checkSampleData = async () => {
      if (!appId) return;

      try {
        const exists = await checkSampleDataExists(appId);
        setHasSampleData(exists);
      } catch (error) {
        console.error("Error checking sample data:", error);
        setError("Failed to check if sample data exists");
      }
    };

    checkSampleData();
  }, [appId]);

  // Load saved queries when appId changes
  useEffect(() => {
    const loadSavedQueries = async () => {
      if (!appId) return;

      setIsLoadingQueries(true);
      try {
        const queries = await fetchSavedQueries(appId);
        setSavedQueries(queries);
      } catch (error) {
        console.error("Error loading saved queries:", error);
        setError("Failed to load saved queries");
      } finally {
        setIsLoadingQueries(false);
      }
    };

    loadSavedQueries();
  }, [appId]);

  // Parse the query string to get a valid MongoDB aggregation pipeline
  const parsePipeline = (queryString) => {
    try {
      // Handle both plain array and db.collection.aggregate([...]) formats
      let pipelineStr = queryString.trim();

      // Extract the pipeline array if it's in db.collection.aggregate([...]) format
      const aggregateMatch = pipelineStr.match(/db\.\w+\.aggregate\((.*)\)/s);
      if (aggregateMatch && aggregateMatch[1]) {
        pipelineStr = aggregateMatch[1];
      }

      // Parse the JSON array
      const pipeline = JSON.parse(pipelineStr);

      if (!Array.isArray(pipeline)) {
        throw new Error("Pipeline must be an array");
      }

      return pipeline;
    } catch (error) {
      throw new Error(`Invalid pipeline format: ${error.message}`);
    }
  };

  // Validate query input
  const validateQuery = (input) => {
    try {
      setValidationError(null);

      // First try to parse as standard JSON
      try {
        const parsed = JSON.parse(input);
        if (!Array.isArray(parsed)) {
          setValidationError("Pipeline must be an array");
          setIsValidQuery(false);
          return false;
        }
        setIsValidQuery(true);
        return true;
      } catch (jsonError) {
        // If JSON parsing fails, it might be using MongoDB's extended syntax with unquoted field names
        // Try to evaluate using a function constructor (with safety measures)
        try {
          // Replace MongoDB operator patterns to make them valid for evaluation
          const preparedCode = input
            .replace(/\$\w+\s*:/g, (match) => `"${match.slice(0, -1)}":`) // Replace $match: with "$match":
            .replace(/\/\/.*$/gm, "") // Remove comments
            .replace(/\/\*[\s\S]*?\*\//g, ""); // Remove multiline comments

          // Don't use eval directly - use Function constructor with controlled context
          const result = new Function(`return ${preparedCode}`)();

          if (!Array.isArray(result)) {
            setValidationError("Pipeline must be an array");
            setIsValidQuery(false);
            return false;
          }

          setIsValidQuery(true);
          return true;
        } catch (evalError) {
          // If both parsing methods fail, it's likely an invalid pipeline
          setValidationError(`Invalid pipeline format: ${jsonError.message}`);
          setIsValidQuery(false);
          return false;
        }
      }
    } catch (error) {
      setValidationError(`Validation error: ${error.message}`);
      setIsValidQuery(false);
      return false;
    }
  };

  // Update the query with appId filter
  const getFullPipeline = () => {
    try {
      // Parse the user-entered pipeline
      let userPipeline = [];

      if (userQuery && typeof userQuery === "string") {
        try {
          // First try standard JSON parse
          userPipeline = JSON.parse(userQuery);
        } catch (jsonError) {
          // If JSON parsing fails, try evaluating with MongoDB syntax support
          try {
            // Replace MongoDB operator patterns to make them valid for evaluation
            const preparedCode = userQuery
              .replace(/\$\w+\s*:/g, (match) => `"${match.slice(0, -1)}":`) // Replace $match: with "$match":
              .replace(/\/\/.*$/gm, "") // Remove comments
              .replace(/\/\*[\s\S]*?\*\//g, ""); // Remove multiline comments

            // Use Function constructor with controlled context
            userPipeline = new Function(`return ${preparedCode}`)();
          } catch (evalError) {
            throw new Error(`Invalid pipeline format: ${jsonError.message}`);
          }
        }
      } else if (Array.isArray(userQuery)) {
        userPipeline = userQuery;
      }

      if (!Array.isArray(userPipeline)) {
        throw new Error("Pipeline must be an array");
      }

      // Prepend the appId filter and append the projection to remove appId
      return [
        { $match: { appId } },
        ...userPipeline,
        { $project: { appId: 0 } },
      ];
    } catch (error) {
      throw new Error(`Invalid pipeline: ${error.message}`);
    }
  };

  // Execute the query
  const handleRunQuery = async () => {
    setError(null);
    setQueryResults([]);

    if (!isValidQuery) {
      return;
    }

    setIsRunningQuery(true);

    try {
      const fullPipeline = getFullPipeline();

      const results = await executeAggregation({
        collection: "samples", // Always query the samples collection
        pipeline: fullPipeline,
      });

      setQueryResults(results);
    } catch (error) {
      console.error("Error executing query:", error);
      setError(error.message);
    } finally {
      setIsRunningQuery(false);
    }
  };

  // Handle save query
  const handleSaveQuery = async () => {
    if (!queryName.trim()) {
      setError("Query name is required");
      return;
    }

    if (!isValidQuery) {
      setError("Cannot save invalid query");
      return;
    }

    try {
      // Save the raw text of the query instead of parsing it
      await saveQuery({
        appId,
        name: queryName,
        pipeline: userQuery, // Store as raw string instead of parsed JSON
      });

      // Reload queries after saving
      const updatedQueries = await fetchSavedQueries(appId);
      setSavedQueries(updatedQueries);

      setShowSaveQueryDialog(false);
      setQueryName("");
    } catch (error) {
      console.error("Error saving query:", error);
      setError(error.message);
    }
  };

  // Handle load query
  const handleLoadQuery = (query) => {
    try {
      // Check if we have a pipeline
      if (!query.pipeline) {
        throw new Error("Invalid query format");
      }

      // If the pipeline is stored as a string, use it directly
      if (typeof query.pipeline === "string") {
        setUserQuery(query.pipeline);
        validateQuery(query.pipeline);
      }
      // Handle backward compatibility - if stored as an object array, convert to string
      else if (Array.isArray(query.pipeline)) {
        const pipelineString = JSON.stringify(query.pipeline, null, 2);
        setUserQuery(pipelineString);
        validateQuery(pipelineString);
      } else {
        throw new Error("Invalid pipeline format");
      }

      setShowLoadQueryDialog(false);
    } catch (error) {
      console.error("Error loading query:", error);
      setError(error.message);
    }
  };

  // Handle delete query
  const handleDeleteQuery = async () => {
    if (!queryToDelete) return;

    try {
      await deleteQuery({
        appId,
        queryId: queryToDelete.id,
      });

      // Reload queries after deleting
      const updatedQueries = await fetchSavedQueries(appId);
      setSavedQueries(updatedQueries);

      setShowDeleteConfirmation(false);
      setQueryToDelete(null);
    } catch (error) {
      console.error("Error deleting query:", error);
      setError(error.message);
    }
  };

  // Handle query input change
  const handleQueryChange = (value) => {
    setUserQuery(value);
    validateQuery(value);
  };

  return (
    <>
      {!hasSampleData ? (
        <Card className={styles.noSampleDataCard}>
          <CardContent className={styles.noSampleDataContent}>
            <Search className={styles.noSampleDataIcon} />
            <h3 className={styles.noSampleDataTitle}>Sample Data Required</h3>
            <p className={styles.noSampleDataDescription}>
              Generate sample data adn esport it to a database before using the
              query sandbox.
            </p>
            <Button
              className={styles.generateSampleDataButton}
              onClick={() => {
                setActiveTab("sample-data");
              }}
            >
              <Server className="mr-2 h-4 w-4" />
              Generate Sample Data
            </Button>
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle className={styles.cardTitleWithIcon}>
              <div className={styles.cardTitleContent}>Query Sandbox</div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className={styles.queryBuilderTwoColumn}>
              <div className={styles.queryEditorColumn}>
                <div className={styles.queryEditorHeader}>
                  <h3 className={styles.sectionTitle}>Aggregation Pipeline</h3>
                  <div className={styles.querySaveLoadButtons}>
                    <Dialog
                      open={showLoadQueryDialog}
                      onOpenChange={setShowLoadQueryDialog}
                    >
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm">
                          <FolderOpen className="h-4 w-4 mr-2" />
                          Load Query
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[600px]">
                        <DialogHeader>
                          <DialogTitle>Saved Queries</DialogTitle>
                          <DialogDescription>
                            Select a previously saved query to load
                          </DialogDescription>
                        </DialogHeader>
                        <div className={styles.savedQueriesList}>
                          {isLoadingQueries ? (
                            <p className={styles.loadingMessage}>
                              Loading saved queries...
                            </p>
                          ) : savedQueries.length === 0 ? (
                            <p className={styles.noQueriesMessage}>
                              No saved queries yet
                            </p>
                          ) : (
                            savedQueries.map((query) => (
                              <div
                                key={query.id}
                                className={styles.savedQueryItem}
                              >
                                <div
                                  className={styles.savedQueryInfo}
                                  onClick={() => handleLoadQuery(query)}
                                >
                                  <h4 className={styles.savedQueryName}>
                                    {query.name}
                                  </h4>
                                  <div className={styles.savedQueryMeta}>
                                    <span className={styles.savedQueryDate}>
                                      {new Date(
                                        query.createdAt
                                      ).toLocaleDateString()}
                                    </span>
                                  </div>
                                </div>
                                <div className={styles.savedQueryActions}>
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => handleLoadQuery(query)}
                                  >
                                    <FolderOpen className="h-4 w-4" />
                                  </Button>
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => {
                                      setQueryToDelete(query);
                                      setShowDeleteConfirmation(true);
                                    }}
                                  >
                                    <Trash2 className="h-4 w-4" />
                                  </Button>
                                </div>
                              </div>
                            ))
                          )}
                        </div>
                      </DialogContent>
                    </Dialog>

                    <Dialog
                      open={showSaveQueryDialog}
                      onOpenChange={setShowSaveQueryDialog}
                    >
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm">
                          <Save className="h-4 w-4 mr-2" />
                          Save Query
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Save Query</DialogTitle>
                          <DialogDescription>
                            Give your query a name to save it for future use
                          </DialogDescription>
                        </DialogHeader>
                        <div className={styles.saveQueryForm}>
                          <Label htmlFor="queryName">Query Name</Label>
                          <Input
                            id="queryName"
                            value={queryName}
                            onChange={(e) => setQueryName(e.target.value)}
                            placeholder="e.g., Aggregate Vehicle Telemetry"
                          />
                        </div>
                        <DialogFooter>
                          <Button
                            onClick={handleSaveQuery}
                            disabled={!isValidQuery}
                          >
                            Save Query
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>

                {validationError && (
                  <Alert
                    variant="destructive"
                    className={styles.validationAlert}
                  >
                    <AlertTriangle className="h-4 w-4" />
                    <AlertDescription>{validationError}</AlertDescription>
                  </Alert>
                )}

                <div className={styles.queryEditor}>
                  <textarea
                    className={styles.pipelineEditor}
                    value={userQuery}
                    onChange={(e) => handleQueryChange(e.target.value)}
                    placeholder={`[
  { 
    "$project": { 
      "_id": 0,
      "name": 1,
      "value": 1 
    } 
  },
  { "$limit": 10 }
]`}
                  />
                </div>

                <div className={styles.queryActions}>
                  <Button
                    className={styles.runQueryButton}
                    onClick={handleRunQuery}
                    disabled={isRunningQuery || !isValidQuery}
                  >
                    {isRunningQuery ? (
                      <div className={styles.loadingSpinner} />
                    ) : (
                      <Play className="h-4 w-4 mr-2" />
                    )}
                    {isRunningQuery ? "Running..." : "Run Query"}
                  </Button>
                </div>
              </div>

              <div className={styles.queryResultsColumn}>
                <h3 className={styles.sectionTitle}>
                  Results{" "}
                  {queryResults.length > 0 &&
                    `(${queryResults.length} documents)`}
                </h3>

                {error && (
                  <Alert variant="destructive" className={styles.errorAlert}>
                    <AlertTriangle className="h-4 w-4" />
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}

                <ScrollArea className={styles.queryResultsScrollArea}>
                  {isRunningQuery ? (
                    <div className={styles.loadingResults}>
                      <div className={styles.loadingSpinner} />
                      <p>Running query...</p>
                    </div>
                  ) : queryResults.length > 0 ? (
                    <div className={styles.resultsCardContainer}>
                      {queryResults.map((doc, index) => (
                        <Card key={index} className={styles.resultCard}>
                          <CardContent className={styles.resultCardContent}>
                            <ReactJsonView
                              src={doc}
                              style={{ fontSize: "0.7rem" }}
                              theme="grayscale:inverted"
                              collapsed={false}
                              displayDataTypes={false}
                              enableClipboard={false}
                              name={null}
                              displayObjectSize={false}
                              quotesOnKeys={false}
                              displayArrayKey={false}
                            />
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  ) : (
                    <div className={styles.noResults}>
                      <p>
                        No results to display. Run a query to see results here.
                      </p>
                    </div>
                  )}
                </ScrollArea>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Delete Confirmation Dialog */}
      <Dialog
        open={showDeleteConfirmation}
        onOpenChange={setShowDeleteConfirmation}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Query</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this query? This action cannot be
              undone.
            </DialogDescription>
          </DialogHeader>
          <div className={styles.deleteQueryDetails}>
            <p className={styles.deleteQueryName}>{queryToDelete?.name}</p>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setShowDeleteConfirmation(false)}
            >
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleDeleteQuery}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
