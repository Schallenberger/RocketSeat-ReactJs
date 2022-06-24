import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri:'https://api-sa-east-1.graphcms.com/v2/cl4our3tp17rs01xk0g99hu4b/master',
  cache: new InMemoryCache()
});