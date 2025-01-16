'use client'

import { NextUIProvider } from "@nextui-org/react";
import { QueryClient, QueryClientProvider } from "react-query";

export const Providers: React.FC<{ children: React.ReactNode }> = ({children}) => {

  const query = new QueryClient(
    {
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: true,
          refetchInterval: 50000,
          // refetchOnMount: false,
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
