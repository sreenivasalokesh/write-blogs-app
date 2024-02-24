import { trpc } from "@blogs/trpc/client/trpc";


const blogs = () => {

    const hello = trpc.zero.greetingsss.useQuery();
    if (!hello.data) {
      return <div>Loading...</div>;
    }

    return <>
        BLOGS New {hello.data.message}
    </>
}

export default blogs;