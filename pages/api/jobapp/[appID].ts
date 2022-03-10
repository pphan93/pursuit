import { getToken } from "next-auth/jwt";
import { connectToDatabase } from "../../../lib/db";

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

    if (req.method === "GET") {
      // const client = await connectToDatabase();

      // const db = client.db();

      //   console.log(req.query.appID);
      const id: any = req.query.appID;

      const o_id: ObjectId = new ObjectId(id);

      //   console.log(o_id);

      const data1 = await db.collection("JobApplications").findOne({
        $and: [
          { userId: userID },
          {
            _id: o_id,
          },
        ],
      });

      // console.log("------------------------------");
      console.log(data1);
      res.status(200).json({
        message: "Successfull",
        data: data1,
        total: null,
      });
      client.close();
    } else if (req.method === "PUT") {
      const id: any = req.query.appID;

      const o_id: ObjectId = new ObjectId(id);

      const body = req.body.updatedItem;
      const data1 = await db.collection("JobApplications").findOneAndUpdate(
        { _id: o_id },
        {
          $set: { applicationStatus: body },
          //@ts-ignore
          $currentDate: { lastModified: true },
        }
      );

      res
        .status(200)
        .json({ message: "Updated successful", data: data1, total: null });
    }
  } else {
    res.status(401).json({ message: "Unauthorized", data: null, total: null });
  }

  res.end();
}
