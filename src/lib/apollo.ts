import { ApolloClient, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl0bm6p3p4m6501w9flsc88mb/master",
  cache: new InMemoryCache(),
});

export default apolloClient;
