import { prisma } from "@blogs/prisma";
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

  callbacks :{
    async signIn({ user, account, profile, email, credentials } : any) {
      console.log("##########call back post sign in called", user.email)


      if(!user.email){
        return "/unauthorized"
      }

      const dbEmail = await prisma.bloguser.findFirst({
        where : {
          email : user.email
        }
      })
      
      console.log("dmEmail: ",dbEmail)
      if(!dbEmail){
        await prisma.bloguser.create({data: {email: user.email}})
        console.log("Saves data succesfully")
      }

      console.log("here")
      return true
    },
  }
}
export default NextAuth(authOptions)