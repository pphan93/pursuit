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

    const client = await connectToDatabase();

    const db = client.db();
    const customer = await db
      .collection("Users")
      .findOne({ email: token.email }, { projection: { _id: 1 } });

    const userID: ObjectId = customer!._id;

    if (req.method === "GET") {
      let finalData = {};

      const id: any = req.query.appID;

      const o_id: ObjectId = new ObjectId(id);

      const data1 = await db.collection("JobApplications").findOne({
        $and: [
          { userId: userID },
          {
            _id: o_id,
          },
        ],
      });

      //get the estimated salary from level.fyi db, currently just finding software/developer only due to different name in job title. Will have find better way to determine the role
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

        //pipeline to search in database and find a average of all the salary
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
      console.log(req.query);
      const id: any = req.query.appID;

      const o_id: ObjectId = new ObjectId(id);

      // const body = req.body.updatedItem;

      if (req.query.update === "all") {
        const data1 = await db.collection("JobApplications").findOneAndUpdate(
          { _id: o_id },
          {
            $set: {
              "company.name": req.body.formData.company,
              "company.location": req.body.formData.companyLocation,
              jobTitle: req.body.formData.jobTitle,
              jobUrl: req.body.formData.jobUrl,
              deadline: req.body.formData.deadline,
              jobDescription: req.body.formData.jobDescription,
              officialSalary: req.body.formData.officialSalary,
              jobLevel: req.body.formData.jobLevel,
            },
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
      } else if (req.query.update === "status") {
        const data1 = await db.collection("JobApplications").findOneAndUpdate(
          { _id: o_id },
          {
            $set: { applicationStatus: req.body.updatedItem },
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

      client.close();
    }
  } else {
    res.status(401).json({ message: "Unauthorized", data: null, total: null });
  }

  res.end();
}
