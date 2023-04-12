import { DocumentNode } from 'graphql'
import { request } from 'graphql-request'
export const fetcher = (data: { query: DocumentNode; variables: any }) =>
  request(
    'https://multiverse-dev-directus.rizo.tech/graphql',
    data.query,
    data.variables,
  )

/* export function useQuery({
  query,
  variables,
}: {
  query: DocumentNode
  variables: any
}) {
  return useSWR({ query, variables }, fetcher)
}
 */
