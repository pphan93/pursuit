import { MongoClient } from "mongodb";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
};

import { hash } from "bcryptjs";

async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method === "POST") {
    const { email, password, firstName, lastName } = req.body;

    if (!email || !email.includes("@") || !password) {
      res.status(422).json({ message: "Invalid Data" });
      return;
    }

    const client: MongoClient = new MongoClient(
      `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_CLUSTER}/${process.env.MONGO_DB}?retryWrites=true&w=majority`
    );

    await client.connect();

    const db = client.db();

    const checkExisting = await db
      .collection("Users")
      .findOne({ email: email });

    if (checkExisting) {
      res.status(422).json({ message: "User already exists" });
      client.close();
      return;
    }

    const status = await db.collection("Users").insertOne({
      firstName,
      lastName,
      email,
      password: await hash(password, 12),
    });

    res.status(201).json({ message: "User created", ...status });

    client.close();

    // const client = await new MongoClient.connect(
    //   `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_CLUSTER}/${process.env.MONGO_DB}?retryWrites=true&w=majority`,
    //   { useNewUrlParser: true, useUnifiedTopology: true }
    // );
  } else {
    res.status(500).json({ message: "Route not valid" });
  }
}

export default handler;
