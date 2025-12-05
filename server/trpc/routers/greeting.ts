import { createTRPCRouter, publicProcedure } from '../init';

export const greetingRouter = createTRPCRouter({
  hello: publicProcedure.query(() => {
    return {
      message: 'Hello World from tRPC!',
    };
  }),
});
