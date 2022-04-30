import { getToken } from "next-auth/jwt";
import { connectToDatabase } from "../../../../lib/db";

// import type { ObjectId } from "mongodb";
import { ObjectId } from "mongodb";

const secret = process.env.SECRET;

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
  data: any[] | {} | null;
  total: number | null;
};

type Users = {
  _id: ObjectId;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const token = await getToken({ req, secret });

  if (token) {
    //signed in

    console.log(token);

    const client = await connectToDatabase();

    const db = client.db();
    const customer = await db
      .collection("Users")
      .findOne({ email: token.email }, { projection: { _id: 1 } });

    const userID: ObjectId = customer!._id;
    // console.log("JSON Web Token", token);

    if (req.method === "PATCH") {
      const id: any = req.query.appID;
      console.log(id);
      const o_id: ObjectId = new ObjectId(id);

      //   const body = req.body.favorite;
      //   console.log(body);
      const data1 = await db
        .collection("JobApplications")
        .findOneAndDelete({ _id: o_id });

      res
        .status(200)
        .json({ message: "Updated successful", data: data1, total: null });
    }
  } else {
    res.status(401).json({ message: "Unauthorized", data: null, total: null });
  }

  res.end();
}
