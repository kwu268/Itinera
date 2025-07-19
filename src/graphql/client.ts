import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://your-graphql-endpoint.com/graphql", // Replace with your GraphQL API URL
  cache: new InMemoryCache(),
});
