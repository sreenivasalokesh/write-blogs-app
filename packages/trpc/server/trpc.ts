import { initTRPC } from "@trpc/server";
import type { CreateNextContextOptions } from "@trpc/server/adapters/next";
import { getServerSession } from "next-auth";
import superjson from "superjson";
import { authOptions } from "@blogs/features/auth/authOptions";

export const createContext = async (opts: CreateNextContextOptions) => {
  const session = await getServerSession(opts.req, opts.res, authOptions);
  console.log("#######createContext session", session);
  //console.log("#######opts.req", opts.req);

  return {
    session,
  };
};

const t = initTRPC.context<Context>().create({
  transformer: superjson,
});

export const router = t.router;
export const procedure = t.procedure;

export const publicProcedure = procedure.use(
  async (opts: CreateNextContextOptions) => {
    console.log("#########do nothing now", opts.ctx);
    return opts.next({
      ctx: {
        // Infers the `session` as non-nullable
        session: opts.ctx.session,
      },
    });
  }
);
export const mergeRouter = t.mergeRouter;

export type Context = Awaited<ReturnType<typeof createContext>>;
