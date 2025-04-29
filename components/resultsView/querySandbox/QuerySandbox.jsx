"use client";

import { useState } from "react";
import {
  Copy,
  Code,
  Check,
  Save,
  FolderOpen,
  Play,
  Search,
  Server,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import styles from "./querySandbox.module.css";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function QuerySandbox({
  hasSampleData,
  setActiveTab,
  selectedCollection,
  setSelectedCollection,
  selectedQueryType,
  setSelectedQueryType,
  currentQuery,
  setCurrentQuery,
  showSaveQueryDialog,
  setShowSaveQueryDialog,
  showLoadQueryDialog,
  setShowLoadQueryDialog,
  queryName,
  setQueryName,
  handleSaveQuery,
  handleLoadQuery,
  savedQueries,
}) {
  return (
    <>
      {!hasSampleData ? (
        <Card className={styles.noSampleDataCard}>
          <CardContent className={styles.noSampleDataContent}>
            <Search className={styles.noSampleDataIcon} />
            <h3 className={styles.noSampleDataTitle}>Sample Data Required</h3>
            <p className={styles.noSampleDataDescription}>
              Generate sample data before using the query sandbox.
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
              <Code className="mr-2 h-5 w-5" />
              Query Sandbox
            </CardTitle>
            <CardDescription>
              Test queries and aggregations against your schema
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className={styles.queryBuilder}>
              <div className={styles.queryControls}>
                <div className={styles.controlGroup}>
                  <Label htmlFor="collection">Collection/Table</Label>
                  <Select
                    value={selectedCollection}
                    onValueChange={setSelectedCollection}
                  >
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
                  <Select
                    value={selectedQueryType}
                    onValueChange={setSelectedQueryType}
                  >
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
                  <Dialog
                    open={showSaveQueryDialog}
                    onOpenChange={setShowSaveQueryDialog}
                  >
                    <DialogTrigger asChild>
                      <Button variant="outline">
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
                          placeholder="e.g., Find Vehicles by Location"
                        />
                      </div>
                      <DialogFooter>
                        <Button onClick={handleSaveQuery}>Save Query</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>

                  <Dialog
                    open={showLoadQueryDialog}
                    onOpenChange={setShowLoadQueryDialog}
                  >
                    <DialogTrigger asChild>
                      <Button variant="outline">
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
                        {savedQueries.length === 0 ? (
                          <p className={styles.noQueriesMessage}>
                            No saved queries yet
                          </p>
                        ) : (
                          savedQueries.map((query) => (
                            <div
                              key={query.id}
                              className={styles.savedQueryItem}
                              onClick={() => handleLoadQuery(query)}
                            >
                              <div className={styles.savedQueryInfo}>
                                <h4 className={styles.savedQueryName}>
                                  {query.name}
                                </h4>
                                <div className={styles.savedQueryMeta}>
                                  <Badge variant="outline">
                                    {query.collection}
                                  </Badge>
                                  <Badge variant="outline">
                                    {query.queryType}
                                  </Badge>
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
    </>
  );
}
