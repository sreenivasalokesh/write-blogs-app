import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";

const NewArticle = (props : any) =>{
   const { data: session, status } = useSession();
   console.log("session",session, "status", status)

   if(!session && status === "unauthenticated"){
        console.log("Here")
        signIn()
    }else{
        console.log("Not")
    }

    return (
        <>
           <p className="mt-5"> Only authed users should reach this page</p>
           <p> Develop options here to write a New article </p> 

            
        </>
    )
}

export default NewArticle