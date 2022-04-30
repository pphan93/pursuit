import { getToken } from "next-auth/jwt";
import { connectToDatabase } from "../../../lib/db";

// import type { ObjectId } from "mongodb";
import { ObjectId } from "mongodb";

const secret = process.env.SECRET;

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { compareSync } from "bcryptjs";

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

      // console.log(data1);

      if (
        data1 !== null &&
        data1.jobLevel !== null &&
        data1.jobLevel !== "" &&
        data1.jobLevel !== undefined
      ) {
        let jobTitle = "";
        if (
          data1.jobTitle.toLowerCase().includes("software") === true ||
          data1.jobTitle.toLowerCase().includes("developer") === true
        ) {
          console.log("----");
          jobTitle = "Software Engineer";
        }

        console.log(jobTitle);
        const pipeline = [
          {
            $match: {
              company: data1.company.name,
              title: new RegExp(".*" + jobTitle + ".*"),
              level: new RegExp(".*" + data1.jobLevel + ".*", "i"),
              location: new RegExp(
                ".*" + data1.company.location.split(",")[0] + ".*"
              ),
            },
          },
          {
            $group: {
              _id: null,
              avgComp: { $avg: "$totalyearlycompensation" },
            },
          },
          {
            $project: {
              _id: null,
              avgComp: {
                $round: ["$avgComp", 0],
              },
            },
          },
        ];

        const levelfyi = await db
          .collection("levels")
          .aggregate(pipeline)
          .toArray();

        if (levelfyi.length !== 0) {
          for await (const doc of levelfyi) {
            if (Object.keys(doc.avgComp).length === 0) {
              finalData = { ...data1, avgComp: doc.avgComp };
            } else {
              finalData = { ...data1 };
            }
          }
        } else {
          finalData = { ...data1 };
        }
      } else {
        finalData = { ...data1 };
      }

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

      console.log(body);
      const data1 = await db.collection("JobApplications").findOneAndUpdate(
        { _id: o_id },
        {
          $set: { applicationStatus: body },
          //@ts-ignore
          $currentDate: { lastModified: true },
        },
        //by default it return unaltered value, add this to return the altered data
        { returnDocument: "after" }
      );

      //@ts-ignore
      const appStatusReturn = data1.value.applicationStatus;

      res.status(200).json({
        message: "Updated successful",
        data: appStatusReturn,
        total: null,
      });
    }
  } else {
    res.status(401).json({ message: "Unauthorized", data: null, total: null });
  }

  res.end();
}
