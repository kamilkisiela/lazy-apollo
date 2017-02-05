import { ApolloClient, createNetworkInterface } from 'apollo-client';

const networkInterface = createNetworkInterface({
  uri: 'https://api.graph.cool/simple/v1/ciystr6pz614g0120vo76ammn'
});
const client = new ApolloClient({ networkInterface });

export function provideClient(): ApolloClient {
  return client;
}
