import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.DATABASE_NAME;

let client;
let clientPromise;

if (!global._mongoClientPromise) {
  if (uri) {
    client = new MongoClient(uri);
    clientPromise = client.connect();
    global._mongoClientPromise = clientPromise;
  } else {
    // During build time, URI might not be available
    // Create a promise that will be properly initialized when accessed at runtime
    clientPromise = Promise.resolve().then(() => {
      const runtimeUri = process.env.MONGODB_URI;
      if (!runtimeUri) {
        throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
      }
      // Check if a real connection was already established
      if (global._mongoClientPromise && global._mongoClientPromise !== clientPromise) {
        return global._mongoClientPromise;
      }
      // Initialize the real connection
      const runtimeClient = new MongoClient(runtimeUri);
      const runtimePromise = runtimeClient.connect();
      global._mongoClientPromise = runtimePromise;
      return runtimePromise;
    });
    global._mongoClientPromise = clientPromise;
  }
} else {
  clientPromise = global._mongoClientPromise;
}

export { clientPromise };
