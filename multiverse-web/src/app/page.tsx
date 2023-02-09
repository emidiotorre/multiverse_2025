import client from './apollo'
import { GET_HOME } from './apollo/queries'
import HomeComponent from './components/HomeComponent'

type Props = {
  home: string
}

async function Home({ home }: Props) {
  const { data, loading, error } = await client.query({ query: GET_HOME })
  if (loading || error) {
    return null
  }
  return (
    <>
      <HomeComponent home={data.home} />
    </>
  )
}
export default Home
