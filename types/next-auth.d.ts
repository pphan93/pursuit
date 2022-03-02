// import NextAuth from "next-auth";
// import "next-auth/providers/credentials";

// declare module "next-auth" {
//   /**
//    * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
//    */
//   interface Session {
//     user: {
//       /** The user's postal address. */
//       address: string;
//     };
//   }

//   interface Profile {
//     email: string;
//   }

//   interface CredentialsProvider {
//     authorize: {
//       email: string;
//     };
//   }
// }

// declare module "next-auth/providers/credentials" {
//   interface authorize {
//     /** The user's role. */
//     email: string;
//   }
// }
