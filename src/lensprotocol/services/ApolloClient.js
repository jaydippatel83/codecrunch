
import { ApolloClient, InMemoryCache, HttpLink, ApolloLink } from '@apollo/client'
 

const APIURL = 'https://api-mumbai.lens.dev/'
// const APIURL = 'https://api.lens.dev';


const defaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
}

const httpLink = new HttpLink({ uri: APIURL });

// example how you can pass in the x-access-token into requests using `ApolloLink`
const authLink = new ApolloLink((operation, forward) => {
  // Retrieve the authorization token from local storage.
  // if your using node etc you have to handle your auth different
  const token = localStorage.getItem('accessToken');

  // Use the setContext method to set the HTTP headers.
  operation.setContext({
    headers: {
      'x-access-token': token ? `Bearer ${token}` : ''
    }
  });

  // Call the next link in the middleware chain.
  return forward(operation);
});

export const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  onError: ({ networkError, graphQLErrors }) => {
    console.log('networkError', networkError)
  },
  cache: new InMemoryCache(),
  defaultOptions: defaultOptions
})



