'use client';

import { QueryClient, QueryClientProvider } from 'react-query';
import { useState } from 'react';

const queryClient = new QueryClient();

export default function ReactQueryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
