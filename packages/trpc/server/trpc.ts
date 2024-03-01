import { initTRPC } from "@trpc/server";
import type { CreateNextContextOptions } from "@trpc/server/adapters/next";
import { getServerSession } from "next-auth";
import superjson from "superjson";
import { authOptions } from "@blogs/features/auth/authOptions";

export const createContext = async (opts: CreateNextContextOptions) => {
  const session = await getServerSession(opts.req, opts.res, authOptions);
  return {
    session,
  };
};

const t = initTRPC.context<Context>().create({
  transformer: superjson,
});
export const router = t.router;
export const publicProcedure = t.procedure.use(
  async (opts: CreateNextContextOptions) => {
    return opts.next({
      ctx: {
        session: opts.ctx.session,
      },
    });
  }
);
export const mergeRouter = t.mergeRouter;
export type Context = Awaited<ReturnType<typeof createContext>>;
