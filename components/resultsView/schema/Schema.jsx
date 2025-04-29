"use client";

import { useState, useEffect } from "react";
import { Copy, Database, Check, Edit, Save, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import dynamic from "next/dynamic";
import styles from "./schema.module.css";

// Dynamic import of ReactJsonView to avoid SSR issues
const ReactJsonView = dynamic(() => import("@microlink/react-json-view"), {
  ssr: false,
});

export default function Schema({
  databaseType,
  defaultSchema,
  appDefinition,
  handleCopy,
  copied,
  generatedSchema = null,
}) {
  const [activeCollection, setActiveCollection] = useState(null);
  const [schema, setSchema] = useState(defaultSchema);
  const [collections, setCollections] = useState([]);

  // Update schema when generatedSchema changes
  useEffect(() => {
    if (generatedSchema) {
      setSchema(generatedSchema);

      if (
        generatedSchema.collections &&
        generatedSchema.collections.length > 0
      ) {
        setCollections(generatedSchema.collections);
        setActiveCollection(generatedSchema.collections[0].name);
      }
    }
  }, [generatedSchema]);

  // Get the active collection
  const getActiveCollection = () => {
    return collections.find((c) => c.name === activeCollection) || null;
  };

  // Render schema cards
  const renderSchemaCards = (collection) => {
    if (!collection || !collection.schemas) return null;

    return (
      <div className={styles.schemaCardsContainer}>
        {collection.schemas.map((schema, index) => (
          <Card key={index} className={styles.schemaCard}>
            <CardContent className={styles.schemaCardContent}>
              <div className={styles.schemaJsonContainer}>
                <ReactJsonView
                  src={schema.schema}
                  theme="grayscale:inverted"
                  collapsed={1}
                  displayObjectSize={false}
                  displayDataTypes={false}
                  enableClipboard={false}
                  quotesOnKeys={false}
                  name={null}
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className={styles.cardTitleWithIcon}>
          Recommended Storage Schema
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs
          value={activeCollection}
          onValueChange={setActiveCollection}
          className={styles.collectionTabs}
        >
          <TabsList className={styles.collectionTabsList}>
            {collections.map((collection) => (
              <TabsTrigger key={collection.name} value={collection.name}>
                {collection.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {collections.map((collection) => (
            <TabsContent key={collection.name} value={collection.name}>
              <div className={styles.collectionContainer}>
                {renderSchemaCards(collection)}

                {collection.indexes && collection.indexes.length > 0 && (
                  <div className={styles.indexesContainer}>
                    <h3 className={styles.indexesTitle}>Recommended Indexes</h3>
                    <div className={styles.indexList}>
                      {collection.indexes.map((index, idx) => (
                        <div key={idx} className={styles.indexItem}>
                          <Badge variant="outline">
                            {index.unique ? "Unique" : "Compound"}
                          </Badge>
                          <span className={styles.indexName}>
                            {collection.name}.{index.name}:
                          </span>{" "}
                          {index.fields.join(", ")}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
      <CardFooter className={styles.cardFooter}>
        <div className={styles.schemaStats}>
          {collections.length} collection{collections.length !== 1 ? "s" : ""}{" "}
          with{" "}
          {collections.reduce(
            (total, collection) => total + (collection.schemas?.length || 0),
            0
          )}{" "}
          schema definition
          {collections.reduce(
            (total, collection) => total + (collection.schemas?.length || 0),
            0
          ) !== 1
            ? "s"
            : ""}
        </div>
      </CardFooter>
    </Card>
  );
}
