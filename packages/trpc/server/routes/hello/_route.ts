import { publicProcedure, router } from '../../trpc';
 

type GreetingResponse = {
  message: String,
  type: String
}
export const helloRouter =  router({
  greetingsss: publicProcedure.query(() => {
    const resp : GreetingResponse = {
      message: "Hello! Good morning",
      type: "GM"
    }
  

    return resp;

  })
});


export const appRouter = router({
  zero:  helloRouter,
  one: router({
    oneOne: publicProcedure.query(() => "one")
  }),
  two: router({
    twoone: router({
      twotwo: publicProcedure.query(() => "two")
    })
  })
})
 
export type AppRouter = typeof appRouter;