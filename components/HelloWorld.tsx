'use client';

import { trpc } from '@/lib/trpc/client';

export function HelloWorld() {
  const { data, isLoading } = trpc.greeting.hello.useQuery();

  if (isLoading) return <div>Loading...</div>;

  return <div className="text-2xl font-bold">{data?.message}</div>;
}
