import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  //connect to mongo atlas
  const mongo: MongoClient = new MongoClient(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_CLUSTER}/${process.env.MONGO_DB}?retryWrites=true&w=majority`
  );

  const client = await mongo.connect();

  return client;
}
