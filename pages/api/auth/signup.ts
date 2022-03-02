import { MongoClient } from "mongodb";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
};

import { hash } from "bcryptjs";

async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  //only allow POST method
  if (req.method === "POST") {
    const { email, password, firstName, lastName } = req.body;

    //quick validations
    if (!email || !email.includes("@") || !password) {
      res.status(422).json({ message: "Invalid Data" });
      return;
    }

    //connect to mongo atlas
    const client: MongoClient = new MongoClient(
      `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_CLUSTER}/${process.env.MONGO_DB}?retryWrites=true&w=majority`
    );

    await client.connect();

    const db = client.db();

    //check if email exist before creating new useer
    const checkExisting = await db
      .collection("Users")
      .findOne({ email: email });

    if (checkExisting) {
      res.status(422).json({ message: "User already exists" });
      client.close();
      return;
    }

    //using bcrypt to hash the password
    const status = await db.collection("Users").insertOne({
      firstName,
      lastName,
      email,
      password: await hash(password, 12),
    });

    res.status(201).json({ message: "User created", ...status });

    client.close();
  } else {
    res.status(500).json({ message: "Route not valid" });
  }
}

export default handler;
