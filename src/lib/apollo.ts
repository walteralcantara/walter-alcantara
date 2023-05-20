import { ApolloClient, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
  uri: process.env.URI_GRAPHCMS,
  cache: new InMemoryCache(),
});

export default apolloClient;
