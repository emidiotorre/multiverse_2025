import { fetcher } from './apollo'
import { GET_HOME } from './apollo/queries'
import HomeComponent from './components/HomeComponent'
import Image from 'next/image'
import Logo from './components/Logo'
import Container from './components/Container'

export default async function Home() {
  const { home } = await fetcher({ query: GET_HOME, variables: null })
  return (
    <>
      <Container>
        <div>
          <h1 className="font-sans font-semibold w-full text-2xl md:text-5xl pb-20 break-words leading-[1.2] overflow-visible pt-4">
            <div className="inline-flex self-baseline mr-2">
              <Logo height=".95em" width="auto" />
            </div>
            <span>{home.header}</span>
          </h1>
        </div>
      </Container>
      <HomeComponent />
    </>
  )
}
