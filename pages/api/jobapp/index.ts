import { getToken } from "next-auth/jwt";
import { connectToDatabase } from "../../../lib/db";

const secret = process.env.SECRET;

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const token = await getToken({ req, secret });

  if (token) {
    //signed in
    console.log("JSON Web Token", token);
    if (req.method === "POST") {
      // const client = await connectToDatabase();

      // const db = client.db();
      console.log("api Request");
      console.log(req.body);
      res.status(201).json({ message: "job created" });
    } else {
      // res.status(200).json({ name: "John Doe" });
    }
  } else {
    res.status(401);
  }

  res.end();
  // res.status(200).json({ name: 'John Doe' })
}
