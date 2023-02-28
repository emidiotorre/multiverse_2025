import { fetcher } from './apollo'
import { GET_HOME } from './apollo/queries'
import HomeComponent from './components/HomeComponent'
import Image from 'next/image'
import Logo from '../../public/materiale/mvs_logo.png'
import Container from './components/Container'

async function Home() {
  const { home } = await fetcher({ query: GET_HOME, variables: null })
  return (
    <>
      <Container>
        <div>
          <h1 className="font-sans font-semibold w-full text-2xl md:text-5xl pb-10 break-words leading-[1.2] overflow-visible pt-4">
            <Image
              className="object-contain w-auto object-left inline-block h-6 -mt-2 md:h-12 md:-mt-8 "
              src={Logo}
              height={500}
              quality={100}
              alt={'logo'}
            />
            <span>{home.header}</span>
          </h1>
        </div>
      </Container>
      <HomeComponent />
    </>
  )
}
export default Home
