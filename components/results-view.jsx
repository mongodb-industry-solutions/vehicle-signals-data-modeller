"use client"

import { useState, useEffect } from "react"
import {
  Copy,
  Database,
  Code,
  Check,
  Save,
  FolderOpen,
  Play,
  Edit,
  ChevronRight,
  Settings,
  Server,
  Search,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import styles from "./results-view.module.css"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function ResultsView() {
  // App and database selection
  const [selectedAppDefinition, setSelectedAppDefinition] = useState(1)
  const [databaseType, setDatabaseType] = useState("mongodb")

  // Process state tracking
  const [hasRecommendation, setHasRecommendation] = useState(false)
  const [hasConnection, setHasConnection] = useState(false)
  const [hasSampleData, setHasSampleData] = useState(false)

  // Schema management
  const [schemaRecommendations, setSchemaRecommendations] = useState([
    { id: 1, appId: 1, dbType: "mongodb", name: "Fleet Management Schema", createdAt: "2023-04-12T09:15:32Z" },
    { id: 2, appId: 2, dbType: "mongodb", name: "Predictive Maintenance Schema", createdAt: "2023-04-10T14:22:18Z" },
  ])
  const [selectedSchemaId, setSelectedSchemaId] = useState(null)
  const [schemaContent, setSchemaContent] = useState("")
  const [isEditingSchema, setIsEditingSchema] = useState(false)

  // Connection management
  const [connections, setConnections] = useState([
    { id: 1, name: "Local MongoDB", connectionString: "mongodb://localhost:27017/", databaseName: "vehicle_signals" },
    {
      id: 2,
      name: "Atlas Cluster",
      connectionString: "mongodb+srv://user:password@cluster.mongodb.net/",
      databaseName: "fleet_management",
    },
  ])
  const [selectedConnectionId, setSelectedConnectionId] = useState(null)
  const [connectionString, setConnectionString] = useState("")
  const [databaseName, setDatabaseName] = useState("")
  const [connectionName, setConnectionName] = useState("")

  // Sample data generation
  const [collectionName, setCollectionName] = useState("vehicles")
  const [recordCount, setRecordCount] = useState(10)

  // Query management
  const [savedQueries, setSavedQueries] = useState([
    {
      id: 1,
      name: "Find Vehicles by Location",
      collection: "vehicles",
      queryType: "find",
      query: `db.vehicles.find({
  "currentLocation.latitude": { $gt: 37.0 },
  "currentLocation.longitude": { $lt: -120.0 }
}).limit(10)`,
    },
    {
      id: 2,
      name: "Count Vehicles with DTCs",
      collection: "vehicles",
      queryType: "count",
      query: `db.vehicles.countDocuments({
  "diagnostics.dtcCount": { $gt: 0 }
})`,
    },
    {
      id: 3,
      name: "Aggregate Trip Distances",
      collection: "trips",
      queryType: "aggregate",
      query: `db.trips.aggregate([
  { $group: { _id: "$vehicleId", totalDistance: { $sum: "$distance" } } },
  { $sort: { totalDistance: -1 } },
  { $limit: 5 }
])`,
    },
  ])
  const [currentQuery, setCurrentQuery] = useState(`db.vehicles.find({
  "currentLocation.latitude": { $gt: 37.0 },
  "currentLocation.longitude": { $lt: -120.0 }
}).limit(10)`)
  const [queryName, setQueryName] = useState("")
  const [selectedCollection, setSelectedCollection] = useState("vehicles")
  const [selectedQueryType, setSelectedQueryType] = useState("find")

  // UI state
  const [copied, setCopied] = useState(false)
  const [showConnectionDialog, setShowConnectionDialog] = useState(false)
  const [showSaveQueryDialog, setShowSaveQueryDialog] = useState(false)
  const [showLoadQueryDialog, setShowLoadQueryDialog] = useState(false)
  const [showSchemaDialog, setShowSchemaDialog] = useState(false)
  const [activeTab, setActiveTab] = useState("schema")

  // Sample app definitions (in a real app, these would be passed from the parent or fetched)
  const appDefinitions = [
    { id: 1, name: "Fleet Management App", description: "Real-time vehicle tracking and management" },
    { id: 2, name: "Predictive Maintenance App", description: "Vehicle diagnostics and maintenance alerts" },
    { id: 3, name: "Insurance Telematics App", description: "Driver behavior and risk assessment" },
  ]

  // Default MongoDB schema for the selected app
  const defaultSchema = {
    vehicles: `{
  "_id": ObjectId,
  "vin": String,                // Vehicle Identification Number
  "currentLocation": {
    "timestamp": Date,          // Timestamp of location data
    "latitude": Number,         // Current latitude
    "longitude": Number,        // Current longitude
    "altitude": Number          // Current altitude
  },
  "telemetry": {
    "speed": Number,            // Current vehicle speed
    "traveledDistance": Number, // Total distance traveled
    "acceleration": {
      "lateral": Number,        // Lateral acceleration
      "longitudinal": Number,   // Longitudinal acceleration
      "vertical": Number        // Vertical acceleration
    }
  },
  "diagnostics": {
    "dtcCount": Number,         // Diagnostic trouble code count
    "dtcList": Array            // List of diagnostic trouble codes
  },
  "lastUpdated": Date           // Last update timestamp
}`,
    drivers: `{
  "_id": ObjectId,
  "driverId": String,           // Driver ID
  "name": String,               // Driver name
  "license": String,            // License number
  "phoneNumber": String,        // Contact phone number
  "email": String,              // Contact email
  "activeVehicle": ObjectId,    // Reference to current vehicle
  "status": String,             // Active, Inactive, On Leave
  "created": Date,              // Creation timestamp
  "updated": Date               // Last update timestamp
}`,
    trips: `{
  "_id": ObjectId,
  "vehicleId": ObjectId,        // Reference to vehicle
  "driverId": ObjectId,         // Reference to driver
  "startTime": Date,            // Trip start time
  "endTime": Date,              // Trip end time
  "startLocation": {
    "latitude": Number,         // Start latitude
    "longitude": Number,        // Start longitude
    "address": String           // Start address
  },
  "endLocation": {
    "latitude": Number,         // End latitude
    "longitude": Number,        // End longitude
    "address": String           // End address
  },
  "distance": Number,           // Trip distance
  "fuelConsumption": Number,    // Fuel used during trip
  "telemetrySnapshots": [       // Array of telemetry snapshots during trip
    {
      "timestamp": Date,
      "location": {
        "latitude": Number,
        "longitude": Number,
        "altitude": Number
      },
      "speed": Number,
      "acceleration": {
        "lateral": Number,
        "longitudinal": Number
      }
    }
  ]
}`,
  }

  // Sample data for the selected collection
  const sampleData = `[
  {
    "_id": ObjectId("6078f3a5e4c3a1d8c9f0b1c2"),
    "vin": "1HGCM82633A123456",
    "currentLocation": {
      "timestamp": ISODate("2023-04-12T09:15:32Z"),
      "latitude": 37.7749,
      "longitude": -122.4194,
      "altitude": 16.5
    },
    "telemetry": {
      "speed": 65.3,
      "traveledDistance": 12543.8,
      "acceleration": {
        "lateral": 0.02,
        "longitudinal": 0.1,
        "vertical": 0.0
      }
    },
    "diagnostics": {
      "dtcCount": 0,
      "dtcList": []
    },
    "lastUpdated": ISODate("2023-04-12T09:15:32Z")
  },
  {
    "_id": ObjectId("6078f3a5e4c3a1d8c9f0b1c3"),
    "vin": "5YJSA1E47MF123789",
    "currentLocation": {
      "timestamp": ISODate("2023-04-12T09:14:28Z"),
      "latitude": 37.3861,
      "longitude": -122.0839,
      "altitude": 22.1
    },
    "telemetry": {
      "speed": 42.8,
      "traveledDistance": 8732.5,
      "acceleration": {
        "lateral": -0.01,
        "longitudinal": 0.05,
        "vertical": 0.01
      }
    },
    "diagnostics": {
      "dtcCount": 1,
      "dtcList": ["P0300"]
    },
    "lastUpdated": ISODate("2023-04-12T09:14:28Z")
  },
  {
    "_id": ObjectId("6078f3a5e4c3a1d8c9f0b1c4"),
    "vin": "JH4DA9470MS012345",
    "currentLocation": {
      "timestamp": ISODate("2023-04-12T09:13:15Z"),
      "latitude": 37.4275,
      "longitude": -122.1697,
      "altitude": 18.3
    },
    "telemetry": {
      "speed": 0.0,
      "traveledDistance": 15432.2,
      "acceleration": {
        "lateral": 0.0,
        "longitudinal": 0.0,
        "vertical": 0.0
      }
    },
    "diagnostics": {
      "dtcCount": 0,
      "dtcList": []
    },
    "lastUpdated": ISODate("2023-04-12T09:13:15Z")
  }
]`

  // Initialize schema content when component mounts
  useEffect(() => {
    setSchemaContent(defaultSchema.vehicles)
  }, [])

  // Handle app definition change
  const handleAppChange = (appId) => {
    setSelectedAppDefinition(Number.parseInt(appId))

    // Check if we have a recommendation for this app
    const existingRecommendation = schemaRecommendations.find(
      (rec) => rec.appId === Number.parseInt(appId) && rec.dbType === databaseType,
    )

    if (existingRecommendation) {
      setSelectedSchemaId(existingRecommendation.id)
      setHasRecommendation(true)
    } else {
      setSelectedSchemaId(null)
      setHasRecommendation(false)
    }
  }

  // Handle database type change
  const handleDatabaseChange = (dbType) => {
    setDatabaseType(dbType)

    // Check if we have a recommendation for this app and database
    const existingRecommendation = schemaRecommendations.find(
      (rec) => rec.appId === selectedAppDefinition && rec.dbType === dbType,
    )

    if (existingRecommendation) {
      setSelectedSchemaId(existingRecommendation.id)
      setHasRecommendation(true)
    } else {
      setSelectedSchemaId(null)
      setHasRecommendation(false)
    }
  }

  // Generate schema recommendations
  const handleGenerateRecommendations = () => {
    // In a real app, this would call an API to generate recommendations
    const newRecommendation = {
      id: Date.now(),
      appId: selectedAppDefinition,
      dbType: databaseType,
      name: `${appDefinitions.find((app) => app.id === selectedAppDefinition)?.name} Schema`,
      createdAt: new Date().toISOString(),
    }

    setSchemaRecommendations([...schemaRecommendations, newRecommendation])
    setSelectedSchemaId(newRecommendation.id)
    setHasRecommendation(true)
    setActiveTab("schema")
  }

  // Handle connection selection
  const handleConnectionSelect = (connectionId) => {
    const connection = connections.find((conn) => conn.id === Number.parseInt(connectionId))
    if (connection) {
      setSelectedConnectionId(connection.id)
      setConnectionString(connection.connectionString)
      setDatabaseName(connection.databaseName)
      setConnectionName(connection.name)
      setHasConnection(true)
      setShowConnectionDialog(false)
    }
  }

  // Save connection
  const handleSaveConnection = () => {
    if (!connectionString || !databaseName || !connectionName) return

    const newConnection = {
      id: Date.now(),
      name: connectionName,
      connectionString,
      databaseName,
    }

    setConnections([...connections, newConnection])
    setSelectedConnectionId(newConnection.id)
    setHasConnection(true)
    setShowConnectionDialog(false)
  }

  // Generate sample data
  const handleGenerateSampleData = () => {
    // In a real app, this would call an API to generate sample data
    setHasSampleData(true)
    setActiveTab("sample-data")
  }

  // Save query
  const handleSaveQuery = () => {
    if (!queryName.trim()) return

    const newQuery = {
      id: Date.now(),
      name: queryName,
      collection: selectedCollection,
      queryType: selectedQueryType,
      query: currentQuery,
    }

    setSavedQueries([...savedQueries, newQuery])
    setShowSaveQueryDialog(false)
    setQueryName("")
  }

  // Load query
  const handleLoadQuery = (query) => {
    setCurrentQuery(query.query)
    setSelectedCollection(query.collection)
    setSelectedQueryType(query.queryType)
    setShowLoadQueryDialog(false)
  }

  // Copy to clipboard
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // Save schema edits
  const handleSaveSchemaEdits = () => {
    // In a real app, this would update the schema in the database
    setIsEditingSchema(false)
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <h2 className={styles.title}>Results & Export</h2>
          <p className={styles.description}>View recommended schema and generate sample data</p>
        </div>
        <div className={styles.headerControls}>
          <div className={styles.selectGroup}>
            <Label htmlFor="app-select" className={styles.selectLabel}>
              App:
            </Label>
            <Select value={selectedAppDefinition.toString()} onValueChange={handleAppChange}>
              <SelectTrigger className={styles.appSelect}>
                <SelectValue placeholder="Select app" />
              </SelectTrigger>
              <SelectContent>
                {appDefinitions.map((app) => (
                  <SelectItem key={app.id} value={app.id.toString()}>
                    {app.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

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
                <SelectItem value="postgresql">PostgreSQL</SelectItem>
                <SelectItem value="mysql">MySQL</SelectItem>
                <SelectItem value="dynamodb">DynamoDB</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Generate Recommendations button moved to the empty state card */}

          {hasRecommendation && !hasConnection && (
            <Dialog open={showConnectionDialog} onOpenChange={setShowConnectionDialog}>
              <DialogTrigger asChild>
                <Button className={styles.connectionButton}>
                  <Settings className="mr-2 h-4 w-4" />
                  Set Connection
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Database Connection</DialogTitle>
                  <DialogDescription>Configure your database connection or select a saved one</DialogDescription>
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
                            <h4 className={styles.connectionName}>{connection.name}</h4>
                            <p className={styles.connectionDetails}>
                              {connection.databaseName} on {connection.connectionString}
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
                        databaseType === "mongodb" ? "mongodb://username:password@host:port/" : "host:port/database"
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
          )}

          {hasRecommendation && hasConnection && !hasSampleData && (
            <Button className={styles.generateDataButton} onClick={handleGenerateSampleData}>
              <Server className="mr-2 h-4 w-4" />
              Generate Sample Data
            </Button>
          )}

          {hasRecommendation && (
            <Dialog open={showSchemaDialog} onOpenChange={setShowSchemaDialog}>
              <DialogTrigger asChild>
                <Button variant="outline" className={styles.schemaButton}>
                  <Database className="mr-2 h-4 w-4" />
                  Schema History
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Schema Recommendations</DialogTitle>
                  <DialogDescription>View and select previously generated schema recommendations</DialogDescription>
                </DialogHeader>
                <div className={styles.schemaList}>
                  {schemaRecommendations.map((schema) => (
                    <div
                      key={schema.id}
                      className={styles.schemaItem}
                      onClick={() => {
                        setSelectedSchemaId(schema.id)
                        setHasRecommendation(true)
                        setActiveTab("schema")
                        setShowSchemaDialog(false)
                      }}
                    >
                      <div className={styles.schemaInfo}>
                        <h4 className={styles.schemaName}>{schema.name}</h4>
                        <div className={styles.schemaMeta}>
                          <Badge variant="outline">{appDefinitions.find((app) => app.id === schema.appId)?.name}</Badge>
                          <Badge variant="outline">{schema.dbType}</Badge>
                          <span className={styles.schemaDate}>{new Date(schema.createdAt).toLocaleDateString()}</span>
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
            <h3 className={styles.noRecommendationsTitle}>No Schema Recommendations Yet</h3>
            <p className={styles.noRecommendationsDescription}>
              Select your app definition and target database type, then generate recommendations to create an optimized
              schema.
            </p>
            <Button className={styles.generateRecommendationsButton} onClick={handleGenerateRecommendations}>
              <ChevronRight className="mr-2 h-4 w-4" />
              Generate Recommendations
            </Button>
          </CardContent>
        </Card>
      )}

      {hasRecommendation && (
        <Tabs value={activeTab} onValueChange={setActiveTab} className={styles.actionTabs}>
          <TabsList className={styles.actionTabsList}>
            <TabsTrigger value="schema" className={styles.actionTabsTrigger}>
              <Database className="mr-2 h-4 w-4" />
              Schema
            </TabsTrigger>
            <TabsTrigger value="sample-data" className={styles.actionTabsTrigger}>
              <Server className="mr-2 h-4 w-4" />
              Sample Documents
            </TabsTrigger>
            <TabsTrigger value="query-sandbox" className={styles.actionTabsTrigger}>
              <Search className="mr-2 h-4 w-4" />
              Query Sandbox
            </TabsTrigger>
          </TabsList>

          <TabsContent value="schema">
            <Card>
              <CardHeader>
                <CardTitle className={styles.cardTitleWithIcon}>
                  <Database className="mr-2 h-5 w-5" />
                  Recommended {databaseType.charAt(0).toUpperCase() + databaseType.slice(1)} Schema
                  {!isEditingSchema ? (
                    <Button variant="outline" size="sm" onClick={() => setIsEditingSchema(true)}>
                      <Edit className="mr-2 h-4 w-4" />
                      Edit Schema
                    </Button>
                  ) : (
                    <Button variant="outline" size="sm" onClick={handleSaveSchemaEdits}>
                      <Save className="mr-2 h-4 w-4" />
                      Save Changes
                    </Button>
                  )}
                </CardTitle>
                <CardDescription>
                  Optimized document structure based on your defined use cases for{" "}
                  {appDefinitions.find((app) => app.id === selectedAppDefinition)?.name}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className={styles.schemaTabsContainer}>
                  <Tabs defaultValue="vehicles" className={styles.schemaTabs}>
                    <TabsList className={styles.schemaTabsList}>
                      <TabsTrigger value="vehicles">vehicles</TabsTrigger>
                      <TabsTrigger value="drivers">drivers</TabsTrigger>
                      <TabsTrigger value="trips">trips</TabsTrigger>
                    </TabsList>

                    <TabsContent value="vehicles">
                      <div className={styles.schemaContainer}>
                        <div className={styles.collectionSection}>
                          <div className={styles.collectionHeader}>
                            <h3 className={styles.collectionName}>vehicles</h3>
                            <Badge className={styles.collectionBadge}>Collection</Badge>
                          </div>
                          {isEditingSchema ? (
                            <Textarea
                              className={styles.schemaEditor}
                              value={schemaContent}
                              onChange={(e) => setSchemaContent(e.target.value)}
                            />
                          ) : (
                            <pre className={styles.codeBlock}>
                              <code>{defaultSchema.vehicles}</code>
                            </pre>
                          )}
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="drivers">
                      <div className={styles.schemaContainer}>
                        <div className={styles.collectionSection}>
                          <div className={styles.collectionHeader}>
                            <h3 className={styles.collectionName}>drivers</h3>
                            <Badge className={styles.collectionBadge}>Collection</Badge>
                          </div>
                          {isEditingSchema ? (
                            <Textarea
                              className={styles.schemaEditor}
                              value={defaultSchema.drivers}
                              onChange={(e) => {
                                const updated = { ...defaultSchema }
                                updated.drivers = e.target.value
                              }}
                            />
                          ) : (
                            <pre className={styles.codeBlock}>
                              <code>{defaultSchema.drivers}</code>
                            </pre>
                          )}
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="trips">
                      <div className={styles.schemaContainer}>
                        <div className={styles.collectionSection}>
                          <div className={styles.collectionHeader}>
                            <h3 className={styles.collectionName}>trips</h3>
                            <Badge className={styles.collectionBadge}>Collection</Badge>
                          </div>
                          {isEditingSchema ? (
                            <Textarea
                              className={styles.schemaEditor}
                              value={defaultSchema.trips}
                              onChange={(e) => {
                                const updated = { ...defaultSchema }
                                updated.trips = e.target.value
                              }}
                            />
                          ) : (
                            <pre className={styles.codeBlock}>
                              <code>{defaultSchema.trips}</code>
                            </pre>
                          )}
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>

                <div className={styles.schemaSection}>
                  <h3 className={styles.sectionTitle}>Recommended Indexes</h3>
                  <div className={styles.indexList}>
                    <div className={styles.indexItem}>
                      <div className={styles.indexName}>vehicles.vin_1</div>
                      <div className={styles.indexDetails}>
                        <Badge variant="outline">Unique</Badge>
                        <span className={styles.indexDescription}>For vehicle lookup by VIN</span>
                      </div>
                    </div>
                    <div className={styles.indexItem}>
                      <div className={styles.indexName}>vehicles.currentLocation.timestamp_-1</div>
                      <div className={styles.indexDetails}>
                        <Badge variant="outline">Standard</Badge>
                        <span className={styles.indexDescription}>For sorting by most recent location</span>
                      </div>
                    </div>
                    <div className={styles.indexItem}>
                      <div className={styles.indexName}>trips.vehicleId_1_startTime_-1</div>
                      <div className={styles.indexDetails}>
                        <Badge variant="outline">Compound</Badge>
                        <span className={styles.indexDescription}>For querying trips by vehicle and time</span>
                      </div>
                    </div>
                    <div className={styles.indexItem}>
                      <div className={styles.indexName}>trips.driverId_1_startTime_-1</div>
                      <div className={styles.indexDetails}>
                        <Badge variant="outline">Compound</Badge>
                        <span className={styles.indexDescription}>For querying trips by driver and time</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className={styles.cardFooter}>
                <div className={styles.schemaStats}>3 collections with optimized indexes</div>
                <div className={styles.schemaActions}>
                  <Button
                    variant="outline"
                    onClick={() => handleCopy(JSON.stringify(defaultSchema, null, 2))}
                    className={styles.actionButton}
                  >
                    {copied ? <Check className="mr-2 h-4 w-4" /> : <Copy className="mr-2 h-4 w-4" />}
                    {copied ? "Copied" : "Copy Schema"}
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="sample-data">
            {!hasConnection ? (
              <Card className={styles.noConnectionCard}>
                <CardContent className={styles.noConnectionContent}>
                  <Server className={styles.noConnectionIcon} />
                  <h3 className={styles.noConnectionTitle}>Database Connection Required</h3>
                  <p className={styles.noConnectionDescription}>
                    Set up a database connection to generate and view sample documents.
                  </p>
                  <Button className={styles.setConnectionButton} onClick={() => setShowConnectionDialog(true)}>
                    <Settings className="mr-2 h-4 w-4" />
                    Set Connection
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardHeader>
                  <CardTitle className={styles.cardTitleWithIcon}>
                    <Code className="mr-2 h-5 w-5" />
                    Sample Documents
                  </CardTitle>
                  <CardDescription>Example documents based on your schema structure</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className={styles.sampleControls}>
                    <div className={styles.controlGroup}>
                      <Label htmlFor="recordCount">Number of Records</Label>
                      <Input
                        id="recordCount"
                        type="number"
                        min="1"
                        max="100"
                        value={recordCount}
                        onChange={(e) => setRecordCount(Number.parseInt(e.target.value))}
                        className={styles.numberInput}
                      />
                    </div>
                    <div className={styles.controlGroup}>
                      <Label htmlFor="collectionName">Collection</Label>
                      <Select value={collectionName} onValueChange={setCollectionName}>
                        <SelectTrigger className={styles.collectionSelect}>
                          <SelectValue placeholder="Select collection" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="vehicles">vehicles</SelectItem>
                          <SelectItem value="drivers">drivers</SelectItem>
                          <SelectItem value="trips">trips</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button
                      className={styles.generateButton}
                      onClick={() => {
                        setHasSampleData(true)
                      }}
                    >
                      Generate Sample Data
                    </Button>
                  </div>

                  <ScrollArea className={styles.sampleDataScrollArea}>
                    <pre className={styles.codeBlock}>
                      <code>{sampleData}</code>
                    </pre>
                  </ScrollArea>
                </CardContent>
                <CardFooter className={styles.cardFooter}>
                  <div className={styles.sampleStats}>{recordCount} sample documents generated</div>
                  <div className={styles.sampleActions}>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setActiveTab("query-sandbox")
                      }}
                      className={styles.actionButton}
                    >
                      <Search className="mr-2 h-4 w-4" />
                      Query Data
                    </Button>
                    <Button variant="outline" onClick={() => handleCopy(sampleData)} className={styles.actionButton}>
                      {copied ? <Check className="mr-2 h-4 w-4" /> : <Copy className="mr-2 h-4 w-4" />}
                      {copied ? "Copied" : "Copy Documents"}
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="query-sandbox">
            {!hasSampleData ? (
              <Card className={styles.noSampleDataCard}>
                <CardContent className={styles.noSampleDataContent}>
                  <Search className={styles.noSampleDataIcon} />
                  <h3 className={styles.noSampleDataTitle}>Sample Data Required</h3>
                  <p className={styles.noSampleDataDescription}>Generate sample data before using the query sandbox.</p>
                  <Button
                    className={styles.generateSampleDataButton}
                    onClick={() => {
                      setActiveTab("sample-data")
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
                    <Code className="mr-2 h-5 w-5" />
                    Query Sandbox
                  </CardTitle>
                  <CardDescription>Test queries and aggregations against your schema</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className={styles.queryBuilder}>
                    <div className={styles.queryControls}>
                      <div className={styles.controlGroup}>
                        <Label htmlFor="collection">Collection/Table</Label>
                        <Select value={selectedCollection} onValueChange={setSelectedCollection}>
                          <SelectTrigger className={styles.collectionSelect}>
                            <SelectValue placeholder="Select collection" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="vehicles">vehicles</SelectItem>
                            <SelectItem value="drivers">drivers</SelectItem>
                            <SelectItem value="trips">trips</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className={styles.controlGroup}>
                        <Label htmlFor="queryType">Query Type</Label>
                        <Select value={selectedQueryType} onValueChange={setSelectedQueryType}>
                          <SelectTrigger className={styles.queryTypeSelect}>
                            <SelectValue placeholder="Select query type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="find">Find</SelectItem>
                            <SelectItem value="aggregate">Aggregate</SelectItem>
                            <SelectItem value="count">Count</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className={styles.queryEditorContainer}>
                      <Label htmlFor="queryEditor">Query</Label>
                      <div className={styles.queryEditor}>
                        <pre className={styles.codeBlock}>
                          <code
                            contentEditable
                            suppressContentEditableWarning={true}
                            onBlur={(e) => setCurrentQuery(e.target.textContent)}
                          >
                            {currentQuery}
                          </code>
                        </pre>
                      </div>
                    </div>

                    <div className={styles.queryActions}>
                      <Button className={styles.runQueryButton}>
                        <Play className="h-4 w-4 mr-2" />
                        Run Query
                      </Button>

                      <div className={styles.querySaveLoadButtons}>
                        <Dialog open={showSaveQueryDialog} onOpenChange={setShowSaveQueryDialog}>
                          <DialogTrigger asChild>
                            <Button variant="outline">
                              <Save className="h-4 w-4 mr-2" />
                              Save Query
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Save Query</DialogTitle>
                              <DialogDescription>Give your query a name to save it for future use</DialogDescription>
                            </DialogHeader>
                            <div className={styles.saveQueryForm}>
                              <Label htmlFor="queryName">Query Name</Label>
                              <Input
                                id="queryName"
                                value={queryName}
                                onChange={(e) => setQueryName(e.target.value)}
                                placeholder="e.g., Find Vehicles by Location"
                              />
                            </div>
                            <DialogFooter>
                              <Button onClick={handleSaveQuery}>Save Query</Button>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>

                        <Dialog open={showLoadQueryDialog} onOpenChange={setShowLoadQueryDialog}>
                          <DialogTrigger asChild>
                            <Button variant="outline">
                              <FolderOpen className="h-4 w-4 mr-2" />
                              Load Query
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-[600px]">
                            <DialogHeader>
                              <DialogTitle>Saved Queries</DialogTitle>
                              <DialogDescription>Select a previously saved query to load</DialogDescription>
                            </DialogHeader>
                            <div className={styles.savedQueriesList}>
                              {savedQueries.length === 0 ? (
                                <p className={styles.noQueriesMessage}>No saved queries yet</p>
                              ) : (
                                savedQueries.map((query) => (
                                  <div
                                    key={query.id}
                                    className={styles.savedQueryItem}
                                    onClick={() => handleLoadQuery(query)}
                                  >
                                    <div className={styles.savedQueryInfo}>
                                      <h4 className={styles.savedQueryName}>{query.name}</h4>
                                      <div className={styles.savedQueryMeta}>
                                        <Badge variant="outline">{query.collection}</Badge>
                                        <Badge variant="outline">{query.queryType}</Badge>
                                      </div>
                                    </div>
                                    <Button variant="ghost" size="sm">
                                      <FolderOpen className="h-4 w-4" />
                                    </Button>
                                  </div>
                                ))
                              )}
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </div>

                    <div className={styles.queryResultsContainer}>
                      <Label>Results</Label>
                      <ScrollArea className={styles.queryResultsScrollArea}>
                        <pre className={styles.codeBlock}>
                          <code>
                            {`[
  {
    "_id": ObjectId("6078f3a5e4c3a1d8c9f0b1c2"),
    "vin": "1HGCM82633A123456",
    "currentLocation": {
      "timestamp": ISODate("2023-04-12T09:15:32Z"),
      "latitude": 37.7749,
      "longitude": -122.4194,
      "altitude": 16.5
    },
    "telemetry": {
      "speed": 65.3,
      "traveledDistance": 12543.8,
      "acceleration": {
        "lateral": 0.02,
        "longitudinal": 0.1,
        "vertical": 0.0
      }
    },
    "diagnostics": {
      "dtcCount": 0,
      "dtcList": []
    },
    "lastUpdated": ISODate("2023-04-12T09:15:32Z")
  },
  {
    "_id": ObjectId("6078f3a5e4c3a1d8c9f0b1c3"),
    "vin": "5YJSA1E47MF123789",
    "currentLocation": {
      "timestamp": ISODate("2023-04-12T09:14:28Z"),
      "latitude": 37.3861,
      "longitude": -122.0839,
      "altitude": 22.1
    },
    "telemetry": {
      "speed": 42.8,
      "traveledDistance": 8732.5,
      "acceleration": {
        "lateral": -0.01,
        "longitudinal": 0.05,
        "vertical": 0.01
      }
    },
    "diagnostics": {
      "dtcCount": 1,
      "dtcList": ["P0300"]
    },
    "lastUpdated": ISODate("2023-04-12T09:14:28Z")
  }
]`}
                          </code>
                        </pre>
                      </ScrollArea>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      )}
    </div>
  )
}
