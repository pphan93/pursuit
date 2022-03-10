import { getToken } from "next-auth/jwt";
import { connectToDatabase } from "../../../lib/db";

import type { WithId, Document, ObjectId } from "mongodb";

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
    if (req.method === "POST") {
      // console.log("api Request");
      // console.log(req.body.userInput);

      const inputData = req.body.userInput;

      // console.log(req.body.userInput);

      let data = {};

      data = {
        userId: userID,
        company: {
          name: inputData.company,
          location: inputData.companyLocation,
        },
        jobTitle: inputData.jobTitle,
        jobUrl: inputData.jobUrl,
        deadline: inputData.deadline,
        jobDescription: inputData.jobDescription,
        estimatedSalary: 0,
        officialSalary: inputData.officialSalary,
        applicationStatus: [
          {
            name: inputData.applicationStatus,
            status: "Active",
            createdDate: new Date(),
          },
        ],
        createdDate: new Date(),
        lastModified: new Date(),
      };

      //insert to mongodb
      const status = await db.collection("JobApplications").insertOne(data);

      res
        .status(201)
        .json({ message: "Application created", data: status, total: null });

      client.close();

      //---------------GET METHOD------------------////////
    } else if (req.method === "GET") {
      // const client = await connectToDatabase();

      // const db = client.db();

      console.log(req.query);
      const page = +req.query.page;

      const total = await db
        .collection("JobApplications")
        .countDocuments({ userId: userID });

      console.log(total);

      const data1 = await db
        .collection("JobApplications")
        .find({ userId: userID })
        .skip(page > 0 ? (page - 1) * 10 : 0)
        .limit(10)
        .toArray();

      // console.log("------------------------------");
      // console.log(data1);
      res.status(200).json({
        message: "Successfull",
        data: data1,
        total: Math.ceil(total / 10),
      });
      client.close();
    }
  } else {
    res.status(401).json({ message: "Unauthorized", data: null, total: null });
  }

  res.end();
}
