import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://stonehaus-statamic.test/graphql", // Replace with your actual GraphQL endpoint
  cache: new InMemoryCache(),
});

export { client, gql };
