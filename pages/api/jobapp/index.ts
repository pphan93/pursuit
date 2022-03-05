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
      const client = await connectToDatabase();

      const db = client.db();
      console.log("api Request");
      // console.log(req.body.userInput);

      const inputData = req.body.userInput;

      console.log(req.body.userInput);

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
      };

      // console.log(data);

      //using bcrypt to hash the password
      const status = await db.collection("JobApplications").insertOne(data);

      res.status(201).json({ message: "Application created", ...status });

      client.close();

      // res.status(201).json({ message: "job created" });
    } else {
      // res.status(200).json({ name: "John Doe" });
    }
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }

  res.end();
  // res.status(200).json({ name: 'John Doe' })
}
