import Image from 'next/image'
import { Inter } from '@next/font/google'
import Container from './components/Container'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Container>
        <div>
          <h1 className="font-sans font-semibold max-w-[60vw] text-5xl pb-10 break-words leading-[1.2]">
            Multiverse is a multidimensional laboratory that combines multiple
            universes thanks to the professional who make up the team. we create
            highly distinctive visual identities by focusing on the concept and
            storytelling. creative agency, specialized in brand identity, 3D
            adv, 2D animation and illustrations, NFT and Metaverse.
          </h1>
        </div>
      </Container>
    </>
  )
}
