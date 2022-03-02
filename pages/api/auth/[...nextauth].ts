import NextAuth from "next-auth";

import { MongoClient } from "mongodb";
import { compare } from "bcryptjs";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {
          label: "email",
          type: "email",
        },
        password: {
          label: "password",
          type: "password",
        },
      },
      async authorize(credentials) {
        // console.log(credentials?.password);

        //info past from frontend
        const email = credentials?.email;
        const password = credentials?.password || "";

        //connect to mongo atlas to get user info and compare password hash
        const client: MongoClient = new MongoClient(
          `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_CLUSTER}/${process.env.MONGO_DB}?retryWrites=true&w=majority`
        );

        await client.connect();

        const db = client.db();

        //get info that match email
        const user = await db.collection("Users").findOne({ email: email });

        if (!user) {
          client.close();
          throw new Error("No user found!");
        }

        //check if password match by comparing hash
        const isValid = await compare(password, user.password);

        if (!isValid) {
          client.close();
          throw new Error("Could not log you in!");
        }

        client.close();

        //return email as token
        return { email: user.email };
      },
    }),
  ],
});
