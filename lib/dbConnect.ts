import { MongoClient, ServerApiVersion } from "mongodb";

export const dbConnect = (collectionName: string) => {
  const client = new MongoClient(process.env.MONGODB_URI as string, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  return client.db(process.env.DB_NAME as string).collection(collectionName);
};
