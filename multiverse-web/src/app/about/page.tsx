import { fetcher } from '../apollo'
import { GET_ABOUT } from '../apollo/queries'
import AboutComponent from '../components/AboutComponent'

export default async function About() {
  //@ts-ignore
  const { about } = await fetcher({ query: GET_ABOUT, variables: null })
  return (
    <AboutComponent blocks={about.blocks} />
  )
}
