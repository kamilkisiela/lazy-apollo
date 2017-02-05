import { ApolloClient, createNetworkInterface } from 'apollo-client';

const networkInterface = createNetworkInterface({
  uri: 'https://api.graph.cool/simple/v1/ciystr13n624m0132l46p9lxa'
});
export const client = new ApolloClient({ networkInterface });
