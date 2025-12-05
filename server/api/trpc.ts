import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { appRouter } from '../trpc/routers';

export const createContext = async () => ({});

export const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: '/api/trpc',
    req,
    router: appRouter,
    createContext,
    onError: ({ path, error }) => {
      console.error(`Error in tRPC handler on path '${path}':`, error);
    },
  });
