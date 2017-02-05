import { ApolloClient, createNetworkInterface } from 'apollo-client';

import { client as booksClient } from './books/apollo';
import { client as moviesClient } from './movies/apollo';

const networkInterface = createNetworkInterface({
  uri: 'https://api.graph.cool/simple/v1/ciystr6pz614g0120vo76ammn'
});
export const client = new ApolloClient({ networkInterface });

export function provideClient(): any {
  return {
    default: client,
    books: booksClient,
    movies: moviesClient,
  };
}
