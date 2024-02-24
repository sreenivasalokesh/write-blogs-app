import { publicProcedure, router } from '../../trpc';
import * as fs from "fs"; 

let data = fs.readFileSync("./authorization.json", 'utf8')

type GreetingResponse = {
  message: String,
  type: String
}
export const adminRouter =  router({
  userauth: publicProcedure.query((email: string) => {
   
    //check if user has entry in user table
    //if entry - get the permission
    //if no entry - make entry with permission Read


    
    //generate jwt


    const resp : GreetingResponse = {
      message: "Hello! Good morning",
      type: "GM"
    }
  

    return resp;

  }),

});

