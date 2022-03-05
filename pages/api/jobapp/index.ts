import { getToken } from "next-auth/jwt";
import { connectToDatabase } from "../../../lib/db";

const secret = process.env.SECRET;

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
  data: any[] | {} | null;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const token = await getToken({ req, secret });

  if (token) {
    //signed in

    // console.log("JSON Web Token", token);
    if (req.method === "POST") {
      // console.log("api Request");
      // console.log(req.body.userInput);
      const client = await connectToDatabase();

      const db = client.db();
      const inputData = req.body.userInput;

      // console.log(req.body.userInput);

      let data = {};

      data = {
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
            status: inputData.applicationStatus,
            createdDate: new Date(),
          },
        ],
        createdDate: new Date(),
        updatedDate: new Date(),
      };

      //insert to mongodb
      const status = await db.collection("JobApplications").insertOne(data);

      res.status(201).json({ message: "Application created", data: status });

      client.close();
    } else if (req.method === "GET") {
      const client = await connectToDatabase();

      const db = client.db();
      const data1 = await db.collection("JobApplications").find({}).toArray();

      console.log("------------------------------");
      console.log(data1);
      res.status(200).json({ message: "Successfull", data: data1 });
      client.close();
    }
  } else {
    res.status(401).json({ message: "Unauthorized", data: null });
  }

  res.end();
}
