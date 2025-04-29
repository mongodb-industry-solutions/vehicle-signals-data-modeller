"use client";

import { useState, useEffect } from "react";
import { Database, ChevronRight, Settings, Server, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import styles from "./resultsView.module.css";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { fetchAvailableApps, loadApp } from "@/lib/api"; // Import API functions
import { defaultSchema, sampleData } from "@/lib/const";
import { generateSchemaRecommendation } from "@/lib/modellerUtils"; // Import modeller utilities

// Import subcomponents
import Schema from "./schema/Schema";
import SampleDocument from "./sampleDocument/SampleDocument";
import QuerySandbox from "./querySandbox/QuerySandbox";

export default function ResultsView() {
  // Check if we're in COVESA version
  const isCovesaVersion = process.env.NEXT_PUBLIC_VERSION === "covesa";

  // App and database selection
  const [selectedAppDefinition, setSelectedAppDefinition] = useState(null);
  const [databaseType, setDatabaseType] = useState("mongodb");
  const [appDefinitions, setAppDefinitions] = useState([]); // State to store fetched apps
  const [isLoadingApps, setIsLoadingApps] = useState(true); // Loading state
  const [isGeneratingSchema, setIsGeneratingSchema] = useState(false); // Loading state for schema generation

  // Process state tracking
  const [hasRecommendation, setHasRecommendation] = useState(false);
  const [hasConnection, setHasConnection] = useState(false);
  const [hasSampleData, setHasSampleData] = useState(false);

  // Schema management
  const [schemaRecommendations, setSchemaRecommendations] = useState([
    {
      id: 1,
      appId: 1,
      dbType: "mongodb",
      name: "Fleet Management Schema",
      createdAt: "2023-04-12T09:15:32Z",
    },
    {
      id: 2,
      appId: 2,
      dbType: "mongodb",
      name: "Predictive Maintenance Schema",
      createdAt: "2023-04-10T14:22:18Z",
    },
  ]);
  const [selectedSchemaId, setSelectedSchemaId] = useState(null);
  const [generatedSchema, setGeneratedSchema] = useState(null); // Store the generated schema
  const [generatedSampleData, setGeneratedSampleData] = useState(null); // Store generated sample data

  // Connection management
  const [connections, setConnections] = useState([
    {
      id: 1,
      name: "Local MongoDB",
      connectionString: "mongodb://localhost:27017/",
      databaseName: "vehicle_signals",
    },
    {
      id: 2,
      name: "Atlas Cluster",
      connectionString: "mongodb+srv://user:password@cluster.mongodb.net/",
      databaseName: "fleet_management",
    },
  ]);
  const [selectedConnectionId, setSelectedConnectionId] = useState(null);
  const [connectionString, setConnectionString] = useState("");
  const [databaseName, setDatabaseName] = useState("");
  const [connectionName, setConnectionName] = useState("");

  // Sample data generation
  const [collectionName, setCollectionName] = useState("vehicles");
  const [recordCount, setRecordCount] = useState(10);

  // UI state
  const [copied, setCopied] = useState(false);
  const [showConnectionDialog, setShowConnectionDialog] = useState(false);
  const [showSchemaDialog, setShowSchemaDialog] = useState(false);
  const [activeTab, setActiveTab] = useState("schema");

  // Handle app definition change
  const handleAppChange = async (appId) => {
    try {
      // Load the complete app definition using the loadApp API function
      const appDefinition = await loadApp(appId);
      setSelectedAppDefinition(appDefinition);

      // Check if we have a recommendation for this app
      const existingRecommendation = schemaRecommendations.find(
        (rec) =>
          rec.appId.toString() === appId.toString() &&
          rec.dbType === databaseType
      );

      if (existingRecommendation) {
        setSelectedSchemaId(existingRecommendation.id);
        setHasRecommendation(true);
      } else {
        setSelectedSchemaId(null);
        setHasRecommendation(false);
      }
    } catch (error) {
      console.error("Error loading app definition:", error);
      // You could add error handling UI here
    }
  };

  // Handle database type change
  const handleDatabaseChange = (dbType) => {
    setDatabaseType(dbType);

    // Check if we have a recommendation for this app and database
    if (selectedAppDefinition) {
      const existingRecommendation = schemaRecommendations.find(
        (rec) =>
          rec.appId.toString() === selectedAppDefinition.id.toString() &&
          rec.dbType === dbType
      );

      if (existingRecommendation) {
        setSelectedSchemaId(existingRecommendation.id);
        setHasRecommendation(true);
      } else {
        setSelectedSchemaId(null);
        setHasRecommendation(false);
      }
    }
  };

  // Generate schema recommendations
  const handleGenerateRecommendations = async () => {
    if (!selectedAppDefinition) {
      return;
    }

    setIsGeneratingSchema(true); // Start loading

    try {
      // Use our utility to generate schema recommendations
      const generatedSchemaData = await generateSchemaRecommendation(
        selectedAppDefinition.id, // Pass just the ID, not the entire object
        databaseType
      );

      // Store the generated schema
      setGeneratedSchema(generatedSchemaData);

      // The sample documents are now included in the schema
      setGeneratedSampleData(
        generatedSchemaData.sampleDocuments
          ? generatedSchemaData.sampleDocuments.reduce((acc, doc) => {
              // Group documents by collection/type
              const collectionName = doc.path
                ? doc.path.split("/").slice(2).join("_") // For vehicle docs
                : doc._id.split("_")[0]; // For custom entity docs

              if (!acc[collectionName]) acc[collectionName] = [];
              acc[collectionName].push(doc);
              return acc;
            }, {})
          : {}
      );

      // Create a record of this recommendation
      const newRecommendation = {
        id: Date.now(),
        appId: selectedAppDefinition.id, // Use just the ID, not the entire object
        dbType: databaseType,
        name:
          generatedSchemaData.name || `${selectedAppDefinition.name} Schema`, // Use the name directly from selectedAppDefinition
        createdAt: new Date().toISOString(),
        schema: generatedSchemaData, // Store the full schema
      };

      setSchemaRecommendations([...schemaRecommendations, newRecommendation]);
      setSelectedSchemaId(newRecommendation.id);
      setHasRecommendation(true);
      setActiveTab("schema");
    } catch (error) {
      console.error("Error generating schema:", error);
      // You could add error handling UI here
    } finally {
      setIsGeneratingSchema(false); // Stop loading
    }
  };

  // Handle connection selection
  const handleConnectionSelect = (connectionId) => {
    const connection = connections.find(
      (conn) => conn.id === Number.parseInt(connectionId)
    );
    if (connection) {
      setSelectedConnectionId(connection.id);
      setConnectionString(connection.connectionString);
      setDatabaseName(connection.databaseName);
      setConnectionName(connection.name);
      setHasConnection(true);
      setShowConnectionDialog(false);
    }
  };

  // Save connection
  const handleSaveConnection = () => {
    if (!connectionString || !databaseName || !connectionName) return;

    const newConnection = {
      id: Date.now(),
      name: connectionName,
      connectionString,
      databaseName,
    };

    setConnections([...connections, newConnection]);
    setSelectedConnectionId(newConnection.id);
    setHasConnection(true);
    setShowConnectionDialog(false);
  };

  // Generate sample data
  const handleGenerateSampleData = () => {
    // In a real app, this would call an API to generate sample data
    setHasSampleData(true);
    setActiveTab("sample-data");
  };

  // Copy to clipboard
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    // Fetch available apps on component mount
    const fetchApps = async () => {
      const apps = await fetchAvailableApps();
      setAppDefinitions(apps);
      setIsLoadingApps(false);
    };

    fetchApps();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <h2 className={styles.title}>Results & Export</h2>
          <p className={styles.description}>
            View recommended schema and generate sample data
          </p>
        </div>
        <div className={styles.headerControls}>
          <div className={styles.selectGroup}>
            <Label htmlFor="app-select" className={styles.selectLabel}>
              App:
            </Label>
            <Select
              value={selectedAppDefinition?.id || ""}
              onValueChange={handleAppChange}
              disabled={isLoadingApps}
            >
              <SelectTrigger className={styles.appSelect}>
                <SelectValue
                  placeholder={
                    isLoadingApps
                      ? "Loading apps..."
                      : "Select vehicle application"
                  }
                />
              </SelectTrigger>
              <SelectContent>
                {appDefinitions.map((app) => (
                  <SelectItem key={app.id} value={app.id}>
                    {app.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {isCovesaVersion && (
            <div className={styles.selectGroup}>
              <Label htmlFor="db-select" className={styles.selectLabel}>
                Database:
              </Label>
              <Select value={databaseType} onValueChange={handleDatabaseChange}>
                <SelectTrigger className={styles.dbSelect}>
                  <SelectValue placeholder="Select database" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mongodb">MongoDB</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}

          <Dialog
            open={showConnectionDialog}
            onOpenChange={setShowConnectionDialog}
          >
            <DialogTrigger asChild>
              <Button className={styles.connectionButton}>
                <Settings className="mr-2 h-4 w-4" />
                Set Connection
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Database Connection</DialogTitle>
                <DialogDescription>
                  Configure your database connection or select a saved one
                </DialogDescription>
              </DialogHeader>

              {connections.length > 0 && (
                <div className={styles.savedConnectionsSection}>
                  <Label>Saved Connections</Label>
                  <div className={styles.savedConnectionsList}>
                    {connections.map((connection) => (
                      <div
                        key={connection.id}
                        className={styles.savedConnectionItem}
                        onClick={() => handleConnectionSelect(connection.id)}
                      >
                        <div className={styles.connectionInfo}>
                          <h4 className={styles.connectionName}>
                            {connection.name}
                          </h4>
                          <p className={styles.connectionDetails}>
                            {connection.databaseName} on{" "}
                            {connection.connectionString}
                          </p>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Server className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className={styles.connectionForm}>
                <div className={styles.formGroup}>
                  <Label htmlFor="connectionName">Connection Name</Label>
                  <Input
                    id="connectionName"
                    value={connectionName}
                    onChange={(e) => setConnectionName(e.target.value)}
                    placeholder="My MongoDB Connection"
                  />
                </div>
                <div className={styles.formGroup}>
                  <Label htmlFor="connectionString">Connection String</Label>
                  <Input
                    id="connectionString"
                    value={connectionString}
                    onChange={(e) => setConnectionString(e.target.value)}
                    placeholder={
                      databaseType === "mongodb"
                        ? "mongodb://username:password@host:port/"
                        : "host:port/database"
                    }
                  />
                </div>
                <div className={styles.formGroup}>
                  <Label htmlFor="databaseName">Database Name</Label>
                  <Input
                    id="databaseName"
                    value={databaseName}
                    onChange={(e) => setDatabaseName(e.target.value)}
                    placeholder="vehicle_signals"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button onClick={handleSaveConnection}>Save Connection</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          {hasRecommendation && (
            <Dialog open={showSchemaDialog} onOpenChange={setShowSchemaDialog}>
              <DialogTrigger asChild></DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Schema Recommendations</DialogTitle>
                  <DialogDescription>
                    View and select previously generated schema recommendations
                  </DialogDescription>
                </DialogHeader>
                <div className={styles.schemaList}>
                  {schemaRecommendations.map((schema) => (
                    <div
                      key={schema.id}
                      className={styles.schemaItem}
                      onClick={() => {
                        setSelectedSchemaId(schema.id);
                        setHasRecommendation(true);
                        setActiveTab("schema");
                        setShowSchemaDialog(false);
                      }}
                    >
                      <div className={styles.schemaInfo}>
                        <h4 className={styles.schemaName}>{schema.name}</h4>
                        <div className={styles.schemaMeta}>
                          <Badge variant="outline">
                            {
                              appDefinitions.find(
                                (app) => app.id === schema.appId
                              )?.name
                            }
                          </Badge>
                          <Badge variant="outline">{schema.dbType}</Badge>
                          <span className={styles.schemaDate}>
                            {new Date(schema.createdAt).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Database className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </DialogContent>
            </Dialog>
          )}
        </div>
      </div>

      {!hasRecommendation && (
        <Card className={styles.noRecommendationsCard}>
          <CardContent className={styles.noRecommendationsContent}>
            <Database className={styles.noRecommendationsIcon} />
            <h3 className={styles.noRecommendationsTitle}>
              No Schema Recommendations Yet
            </h3>
            <p className={styles.noRecommendationsDescription}>
              Select your app definition and target database type, then generate
              recommendations to create an optimized schema.
            </p>
            <Button
              className={styles.generateRecommendationsButton}
              onClick={handleGenerateRecommendations}
            >
              <ChevronRight className="mr-2 h-4 w-4" />
              Generate Recommendations
            </Button>
          </CardContent>
        </Card>
      )}

      {hasRecommendation && (
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className={styles.actionTabs}
        >
          <TabsList className={styles.actionTabsList}>
            <TabsTrigger value="schema" className={styles.actionTabsTrigger}>
              <Database className="mr-2 h-4 w-4" />
              Schema
            </TabsTrigger>
            <TabsTrigger
              value="sample-data"
              className={styles.actionTabsTrigger}
            >
              <Server className="mr-2 h-4 w-4" />
              Sample Documents
            </TabsTrigger>
            <TabsTrigger
              value="query-sandbox"
              className={styles.actionTabsTrigger}
            >
              <Search className="mr-2 h-4 w-4" />
              Query Sandbox
            </TabsTrigger>
          </TabsList>

          <TabsContent value="schema">
            <Schema
              databaseType={databaseType}
              defaultSchema={defaultSchema}
              appDefinition={appDefinitions.find(
                (app) => app.id === selectedAppDefinition
              )}
              handleCopy={handleCopy}
              copied={copied}
              generatedSchema={generatedSchema}
            />
          </TabsContent>

          <TabsContent value="sample-data">
            <SampleDocument app={selectedAppDefinition} />
          </TabsContent>

          <TabsContent value="query-sandbox">
            <QuerySandbox
              hasSampleData={hasSampleData}
              setActiveTab={setActiveTab}
              selectedCollection="samples"
              setSelectedCollection={() => {}}
              selectedQueryType="aggregate"
              setSelectedQueryType={() => {}}
              currentQuery={JSON.stringify(
                [
                  { $match: { appId: selectedAppDefinition?.id } },
                  { $limit: 10 },
                ],
                null,
                2
              )}
              setCurrentQuery={() => {}}
              showSaveQueryDialog={false}
              setShowSaveQueryDialog={() => {}}
              showLoadQueryDialog={false}
              setShowLoadQueryDialog={() => {}}
              queryName=""
              setQueryName={() => {}}
              handleSaveQuery={() => {}}
              handleLoadQuery={() => {}}
              savedQueries={[]}
              appId={selectedAppDefinition?.id}
            />
          </TabsContent>
        </Tabs>
      )}
    </div>
  );
}
