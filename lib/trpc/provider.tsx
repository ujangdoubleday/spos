'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client';
import { ReactNode, useMemo } from 'react';
import superjson from 'superjson';
import { trpc } from './client';

export function TRPCProvider({ children }: { children: ReactNode }) {
  const [queryClient] = useMemo(() => [new QueryClient()], []);
  const [trpcClient] = useMemo(
    () => [
      trpc.createClient({
        links: [
          httpBatchLink({
            url: `${getBaseUrl()}/api/trpc`,
            transformer: superjson,
          }),
        ],
      }),
    ],
    [],
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  );
}

function getBaseUrl() {
  if (typeof window !== 'undefined') return '';
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return 'http://localhost:3000';
}
