import { ApolloClient, createNetworkInterface } from 'apollo-client';

const networkInterface = createNetworkInterface({
  uri: 'https://api.graph.cool/simple/v1/ciystqt9762350132dogjxkrq'
});
export const client = new ApolloClient({ networkInterface });
