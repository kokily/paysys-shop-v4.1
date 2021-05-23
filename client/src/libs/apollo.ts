import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  Operation,
} from '@apollo/client';
import { HttpLink } from '@apollo/client/link/http';
import { onError } from '@apollo/client/link/error';
import isLogged from './store/isLogged';

const getToken = () => {
  const token = localStorage.getItem('paysys_token');

  if (token) {
    isLogged(true);
    return token;
  } else {
    isLogged(false);
    return '';
  }
};

const cache = new InMemoryCache();

const authMiddleware = new ApolloLink((operation: Operation, forward: any) => {
  operation.setContext({
    headers: {
      authorization: `Bearer ${getToken()}`,
    },
  });

  return forward(operation);
});

const httpLink = new HttpLink({
  uri:
    process.env.NODE_ENV === 'production'
      ? 'https://paysys.shop/graphql'
      : 'http://localhost:4000/graphql',
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  console.table([graphQLErrors, networkError]);
});

const client = new ApolloClient({
  cache,
  link: ApolloLink.from([errorLink, authMiddleware, httpLink]),
});

export default client;
