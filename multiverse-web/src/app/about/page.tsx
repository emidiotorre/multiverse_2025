import { fetcher } from '../apollo'
import { GET_ABOUT } from '../apollo/queries'
import AboutComponent from '../components/AboutComponent'

export default async function About() {
  const { about } = await fetcher({ query: GET_ABOUT, variables: null })
  console.log(about)
  return (
    /*     <div
      key={abouts.id}
      className="columns-2 gap-3 w-auto mx-auto space-y-3 pb-28"
    >
    
    </div> */
    <AboutComponent blocks={about.blocks} />
  )
}
