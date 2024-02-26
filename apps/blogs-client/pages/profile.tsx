import { trpc } from "../../../packages/trpc/client/trpc"

const Profile = () =>{

    const mutation = trpc.auth.updateAuth.useMutation();
    const query = trpc.auth.userauth.useQuery()

    const onSubmit = async (e: any) =>{
        e.preventDefault()
        alert("page submit")

        console.log("####Query data: ", query.data)

        mutation.mutate();
    }

    return (<> 
        <h1>User Profile</h1>
        <form  onSubmit={onSubmit}>
            <input type="radio" id="free" name="fav_language" value="free"/>
            <label htmlFor="free">Free</label><br/>
            <input type="radio" id="css" name="fav_language" value="basic"/>
            <label htmlFor="privileged">Basic</label><br/>
            <input type="radio" id="privileged" name="fav_language" value="privileged"/>
            <label htmlFor="privileged">Privileged</label><br/>
            <button type="submit">Submit</button>
        </form>
    
    </>)
}

export default Profile;