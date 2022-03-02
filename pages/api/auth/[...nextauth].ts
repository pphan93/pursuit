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
        console.log(credentials?.password);

        // const {email, password} = credentials

        const email = credentials?.email;
        const password = credentials?.password!;

        const client: MongoClient = new MongoClient(
          `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_CLUSTER}/${process.env.MONGO_DB}?retryWrites=true&w=majority`
        );

        await client.connect();

        const db = client.db();

        const user = await db
          .collection("Users")
          .findOne({ email: credentials?.email });

        // const user = await usersCollection.findOne({
        //   email: credentials.email,
        // });

        if (!user) {
          client.close();
          throw new Error("No user found!");
        }

        const isValid = await compare(password, user.password);

        if (!isValid) {
          client.close();
          throw new Error("Could not log you in!");
        }

        client.close();
        return { email: user.email };
      },
    }),
  ],
});
