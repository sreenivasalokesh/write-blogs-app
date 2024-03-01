import { publicProcedure, router } from "../../trpc";
import { prisma } from "@blogs/prisma";
import { z } from "zod";

type GreetingResponse = {
  message: String;
  type: String;
};
export const blogsRouter = router({
  getBlogs: publicProcedure.query(async (opts: any) => {
    const blogs = await prisma.blogs.findMany({
      orderBy: {
        id: "asc",
      },
    });

    console.log("####records", blogs[0].id);
    return blogs;
  }),
});

export type AuthRouter = typeof blogsRouter;
