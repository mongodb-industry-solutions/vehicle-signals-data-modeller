import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SchemaBuilder from "@/components/schemaBuilder/SchemaBuilder";
import UseCaseManager from "@/components/useCaseManager/useCaseManager";
import ResultsView from "@/components/resultsView/ResultsView";

export default function Home() {
  return (
    <div className="container mx-auto py-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-center">
          Vehicle Signal Schema Builder
        </h1>
      </div>

      <Tabs defaultValue="schema" className="w-full">
        <TabsList className="w-full grid grid-cols-3 p-1 h-14">
          <TabsTrigger
            value="schema"
            className="flex items-center gap-2 h-full"
          >
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs">
              1
            </span>
            <span>Define Schema</span>
          </TabsTrigger>
          <TabsTrigger
            value="use-cases"
            className="flex items-center gap-2 h-full"
          >
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs">
              2
            </span>
            <span>Build App</span>
          </TabsTrigger>
          <TabsTrigger
            value="results"
            className="flex items-center gap-2 h-full"
          >
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs">
              3
            </span>
            <span>Generate Database Model</span>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="schema">
          <SchemaBuilder />
        </TabsContent>
        <TabsContent value="use-cases">
          <UseCaseManager />
        </TabsContent>
        <TabsContent value="results">
          <ResultsView />
        </TabsContent>
      </Tabs>
    </div>
  );
}
