import { publicProcedure, router } from "../../trpc";

type GreetingResponse = {
  message: String;
  type: String;
};
export const authRouter = router({
  updateAuth: publicProcedure.mutation(async (opts: any) => {
    console.log("##########Update USER Triggered 1", await opts.ctx);
  }),

  userauth: publicProcedure.query(() => {
    const resp: GreetingResponse = {
      message: "Hello! Good morning",
      type: "GM",
    };

    return resp;
  }),
});

export type AuthRouter = typeof authRouter;
