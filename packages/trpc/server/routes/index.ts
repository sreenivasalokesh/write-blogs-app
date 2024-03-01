import { router } from "../trpc";
import { authRouter } from "./auth/_route";
import { blogsRouter } from "./blogs/_route";

export const appRouter = router({
  auth: authRouter,
  blogs: blogsRouter,
});

export type AppRouter = typeof appRouter;
