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
    console.log(userID);

    if (req.method === "GET") {
      let finalData = {};
      // const client = await connectToDatabase();

      // const db = client.db();

      //   console.log(req.query.appID);
      const id: any = req.query.appID;

      const o_id: ObjectId = new ObjectId(id);

      console.log(o_id);

      const data1 = await db.collection("JobApplications").findOne({
        $and: [
          { userId: userID },
          {
            _id: o_id,
          },
        ],
      });

      console.log(data1);

      if (
        data1 !== null &&
        data1.jobLevel !== null &&
        data1.jobLevel !== "" &&
        data1.jobLevel !== undefined
      ) {
        console.log("weee");
        const pipeline = [
          {
            $match: {
              company: data1.company.name,
              title: { $regex: data1.jobTitle, $options: "i" },
              level: { $regex: data1.jobLevel, $options: "i" },
              location: { $regex: "Toronto", $options: "i" },
            },
          },
          {
            $group: {
              _id: "$location",
              avgComp: { $avg: "$totalyearlycompensation" },
            },
          },
        ];

        const levelfyi = await db
          .collection("levels")
          .aggregate(pipeline)
          .toArray();
        console.log(levelfyi);

        if (levelfyi.length !== 0) {
          for await (const doc of levelfyi) {
            if (Object.keys(doc.avgComp).length === 0) {
              console.log("test");

              finalData = { ...data1, avgComp: doc.avgComp };
            } else {
              console.log("test");
              finalData = { ...data1 };
            }
          }
        } else {
          finalData = { ...data1 };
        }
      } else {
        finalData = { ...data1 };
      }

      // console.log("0--------------------------=");
      // console.log(levelfyi);

      // console.log("------------------------------");
      console.log(finalData);
      res.status(200).json({
        message: "Successfull",
        data: finalData,
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
