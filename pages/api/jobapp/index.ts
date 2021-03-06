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

  //checked if signed in before updating
  if (token) {
    console.log(token);

    const client = await connectToDatabase();

    const db = client.db();

    //get user id from session, contain email, use email to get user id to search
    const customer = await db
      .collection("Users")
      .findOne({ email: token.email }, { projection: { _id: 1 } });

    const userID: ObjectId = customer!._id;
    // console.log("JSON Web Token", token);

    //-----------------ADD NEW APPLICATION ---------------------//
    if (req.method === "POST") {
      const inputData = req.body.formData;
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
        jobLevel: inputData.jobLevel,
        applicationStatus: [
          {
            name: "Applied",
            status: "Active",
            createdDate: new Date(),
            lastModified: new Date(),
          },
          {
            name: "Interview 1",
            status: null,
            createdDate: new Date(),
            lastModified: new Date(),
          },
          {
            name: "Take Home",
            status: null,
            createdDate: new Date(),
            lastModified: new Date(),
          },
          {
            name: "Interview 2",
            status: null,
            createdDate: new Date(),
            lastModified: new Date(),
          },
          {
            name: "Offered",
            status: null,
            createdDate: new Date(),
            lastModified: new Date(),
          },
          {
            name: "Accepted",
            status: null,
            createdDate: new Date(),
            lastModified: new Date(),
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

      //---------------GET ALL APPLICATIONS------------------////////
    } else if (req.method === "GET") {
      // console.log(req.query);

      //PAGINATION
      const page = +req.query.page;

      //OPTIONS - ALL or fav job application depend on query
      const option = req.query.option;
      let query;
      if (option === "All") {
        query = { userId: userID };
      } else {
        query = { userId: userID, favorite: true };
      }

      //GET TOTAL APPS TO DETERMINED THE PAGINATION
      const total = await db
        .collection("JobApplications")
        .countDocuments(query);

      console.log(total);

      //GET 10 at a time
      //Limitation if there alot of data, it will be slow, but for this purpose it should be fine
      const data1 = await db
        .collection("JobApplications")
        .find(query)
        .skip(page > 0 ? (page - 1) * 10 : 0)
        .limit(10)
        .toArray();

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
