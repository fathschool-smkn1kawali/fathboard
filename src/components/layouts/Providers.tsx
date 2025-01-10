'use client'

import { NextUIProvider } from "@nextui-org/react";
import { QueryClient, QueryClientProvider } from "react-query";

export const Providers: React.FC<{ children: React.ReactNode }> = ({children}) => {

  const query = new QueryClient(
    {
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
          refetchOnMount: false,
          refetchInterval: 5000,
        },
      },
    }
  );

  return (
    <QueryClientProvider client={query}>
      <NextUIProvider>{children}</NextUIProvider>
    </QueryClientProvider>
  );
};
