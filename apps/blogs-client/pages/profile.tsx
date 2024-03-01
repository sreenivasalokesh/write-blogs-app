import { useEffect, useState } from "react";
import { trpc } from "../../../packages/trpc/client/trpc"

const Profile = () =>{
    const [privilege, setPrivilege] = useState<string>("");

    const mutation = trpc.auth.updateAuth.useMutation();
    
    const {isLoading, data, isFetched} = trpc.auth.getAuth.useQuery()


    const onSubmit = async (e: any) =>{
        e.preventDefault()
        alert("page submit 1")

        console.log("####Query data 1: ")

       const result = await mutation.mutateAsync(privilege);
       console.log("#####mutate result ",result)
    }

    const handlePrivilege = (e:any) =>{
        setPrivilege(e.target.value);
        console.log("####Privilege",e.target.value)
    }


    return (<> 
        <h1 className="text-center mt-5">User Profile</h1>
        <form  onSubmit={onSubmit}>
            <input type="radio" id="free" name="fav_language" value="free" onChange={handlePrivilege} checked = {privilege === "free" || isFetched && data === "free"}/>
            <label htmlFor="free">Free</label><br/>
            <input type="radio"  id="css" name="fav_language" value="basic"  className="mt-3"  onChange={handlePrivilege} checked = {privilege === "basic" || isFetched && data === "basic"}/>
            <label htmlFor="privileged">Basic</label><br/>
            <input type="radio" id="privileged" name="fav_language" value="privileged"  className="mt-3"  onChange={handlePrivilege} checked = {privilege === "privileged" || isFetched && data === "privileged"}/>
            <label htmlFor="privileged">Privileged</label><br/>
            <button type="submit" className="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                Submit
            </button>
        </form>
    
    </>)
}

export default Profile;