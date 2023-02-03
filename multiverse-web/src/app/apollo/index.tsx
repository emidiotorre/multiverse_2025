import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  DefaultOptions,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      /* Authorization:
        "Bearer TNh8qGdGB1jmZdL8Ej7hlfZjb7YisndJgZTS6ZLldue9Y0xHOviVzjrpF7De7Ark", */
      'Content-Type': 'application/json',
    },
  }
})
const httpLink = createHttpLink({
  uri: `${
    process.env.REACT_APP_HOSTNAME ??
    'https://galattico-dev-directus.ov3mip.easypanel.host'
  }/graphql`,
})
const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
}
const client = new ApolloClient({
  ssrMode: true,
  link: httpLink,
  cache: new InMemoryCache(),
  defaultOptions,
})

export default client
