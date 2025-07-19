// components/Providers.tsx
"use client";

import { ReactNode } from "react";
import { Provider } from "react-redux";
import { ApolloProvider } from "@apollo/client";
import { store } from "../store";
import { client } from "@/graphql/client";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>{children}</ApolloProvider>
    </Provider>
  );
}
