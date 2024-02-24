import Articles from "@/components/articles";
import { useSession } from "next-auth/react";



export default function Home() {
  const {data:session} = useSession();
  let user = "none"

  if(session){
    user = session.user?.name || "none";
  }

  return (
     <><Articles/></>
   
  );
}
