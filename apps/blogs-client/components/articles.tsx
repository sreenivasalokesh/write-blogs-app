import Link from "next/link";

const Articles = () =>{
    const articles = [
            {name: "All about OAuth, OAuth2, and OIDC", imgSrc: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg"}, 
            {name: "Different attacks on web applications and how to prevent it", imgSrc: "https://images.pexels.com/photos/5380678/pexels-photo-5380678.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},  
            {name: "How to make use of Prisma database in Next Js applications", imgSrc: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},  
            {name: "Turbo repo, a new monorpeo framework", imgSrc: "https://images.pexels.com/photos/418831/pexels-photo-418831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},  
            {name: "tRPC and tailwind in next js apps", imgSrc: "https://images.pexels.com/photos/691710/pexels-photo-691710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},  
            {name: "How to get into Freelancing", imgSrc: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}, 
        ]

    return <>
        {
            <div className="w-full h-full mt-10">
                {articles && articles.map(item =>                   
                        <div key={item.name} className="block w-full h-full p-10 m-2 text-center w-64 bg-[#F6F5F5]">
                            <Link href={{pathname: '/article', query: {name: item.name, imgSrc: item.imgSrc}}} >
                                {item.name}
                            </Link>
                        </div>
                    
                    )}
            </div>

        }


    
    </>


}


export default Articles;