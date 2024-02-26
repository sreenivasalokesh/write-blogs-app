import { prisma } from "@blogs/prisma";

import GoogleProvider from "next-auth/providers/google";
import { AuthPrivilege } from "./lib/constants";

const GOOGLE_CID: string = process.env.GITHUB_ID || "";
const GOOGLE_SECRET: string = process.env.GITHUB_SECRET || "";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: GOOGLE_CID,
      clientSecret: GOOGLE_SECRET,
    }),
    // ...add more providers here
  ],

  callbacks: {
    async signIn({ user, account, profile, email, credentials }: any) {
      console.log("##########call back post sign in called", user.email);

      if (!user.email) {
        return "/unauthorized";
      }

      const dbEmail = await prisma.bloguser.findFirst({
        where: {
          email: user.email,
        },
      });

      console.log("dbEmail: ", dbEmail);
      if (!dbEmail) {
        try {
          await prisma.bloguser.create({
            data: {
              email: user.email,
              Auth: { create: { privilege: AuthPrivilege.Free } },
            },
          });
        } catch (e) {
          console.log(e);
        }

        console.log("Saves data succesfully");
      }

      console.log("here");
      return true;
    },
    async session({ session, user, token }: any) {
      // Return a cookie value as part of the session
      // This is read when `req.query.nextauth.includes("session") && req.method === "GET"`
      //session.someCookie = someCookie
      console.log("#######NEXTAUTH: session ", session);
      return { ...session };
    },
  },
};
