import { fetcher } from './apollo'
import { GET_HOME } from './apollo/queries'
import HomeComponent from './components/HomeComponent'
import Logo from './components/Logo'
import Container from './components/Container'

export default async function Home() {
  const { home } = await fetcher({ query: GET_HOME, variables: null })
  return (
    <>
      <Container>
        <div>
          <h1
            key={home.id}
            className="font-sans font-semibold w-full text-[1.6rem] md:text-5xl  pb-20 break-words leading-[1.1] overflow-visible pt-4"
          >
            <div className="inline-flex self-baseline mr-2">
              <Logo height=".95em" width="auto" />
            </div>
            <span>{home?.header}</span>
          </h1>
        </div>
      </Container>
      <HomeComponent />
    </>
  )
}
