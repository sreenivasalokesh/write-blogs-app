import { createNextApiHandler } from "@trpc/server/adapters/next";
import { appRouter } from "@blogs/trpc/server/routes/index";
import { createContext } from "@blogs/trpc/server/trpc";

export default createNextApiHandler({ router: appRouter, createContext });
