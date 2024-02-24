import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";


const GOOGLE_CID : string  = process.env.GITHUB_ID  || "";
const GOOGLE_SECRET : string  = process.env.GITHUB_SECRET || "";

console.log("###ID", GOOGLE_CID);
console.log("###SEC", GOOGLE_SECRET)

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: GOOGLE_CID,
      clientSecret: GOOGLE_SECRET,
    }),
    // ...add more providers here
  ],
}
export default NextAuth(authOptions)