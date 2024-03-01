import { publicProcedure, router } from "../../trpc";
import { prisma } from "@blogs/prisma";
import { z } from "zod";

type GreetingResponse = {
  message: String;
  type: String;
};
export const authRouter = router({
  updateAuth: publicProcedure.input(z.string()).mutation(async (opts: any) => {
    const { input } = opts;
    console.log("###input: ", input);
    const email = await opts.ctx.session.user.email;
    console.log("User email", email);

    const currentPrivilege = await prisma.auth.findFirst({
      where: {
        user: {
          email,
        },
      },
    });

    const result = await prisma.auth.update({
      data: {
        privilege: input,
      },
      where: {
        id: currentPrivilege.id,
      },
    });

    console.log("####result", result.privilege);
    return result.privilege;
  }),

  getAuth: publicProcedure.query(async (opts: any) => {
    const email = await opts.ctx.session.user.email;
    const currentPrivilege = await prisma.auth.findFirst({
      where: {
        user: {
          email,
        },
      },
    });

    console.log("####record", currentPrivilege.privilege);
    return currentPrivilege.privilege;
  }),
});

export type AuthRouter = typeof authRouter;
