'use client'
import { useRef } from 'react'
import AnimationDiv from './components/AnimationDiv'
import Container from './components/Container'
import Image from 'next/image'
import ImgU from '../../public/materiale/home/img1.png'
import ImgD from '../../public/materiale/home/img2.png'
import ImgT from '../../public/materiale/home/img3.png'
import ImgQ from '../../public/materiale/home/img4.png'
import Logo from '../../public/materiale/mvs_logo.png'

export default function Home() {
  const constraintsRef = useRef()
  return (
    <>
      <div className="relative top-3 left-7">
        <AnimationDiv dragConstraints={constraintsRef}>
          <div>
            <Image
              style={{
                pointerEvents: 'none',
              }}
              className="object-cover h-full w-[15vh]"
              quality={75}
              src={ImgU}
              alt={''}
            />
          </div>
        </AnimationDiv>
      </div>
      <div className="flex justify-center">
        <AnimationDiv>
          <div>
            <Image
              style={{
                pointerEvents: 'none',
              }}
              className="object-cover w-[15vh]"
              src={ImgD}
              alt={''}
            />
          </div>
        </AnimationDiv>
      </div>

      <Container>
        <div>
          <h1 className="font-sans font-semibold max-w-[60vw] text-5xl pb-10 break-words leading-[1.2]">
            <span className="inline-flex">
              <Image
                className="object-cover h-full w-[40vh]"
                src={Logo}
                width={500}
                height={500}
                alt={''}
              />
            </span>
            is a multidimensional laboratory that combines multiple universes
            thanks to the professional who make up the team. we create highly
            distinctive visual identities by focusing on the concept and
            storytelling. creative agency, specialized in brand identity, 3D
            adv, 2D animation and illustrations, NFT and Metaverse.
          </h1>
        </div>

        <div className="relative left-20 bottom-44">
          <AnimationDiv>
            <div>
              <Image
                style={{
                  pointerEvents: 'none',
                }}
                className="object-cover  w-[15vh]"
                src={ImgT}
                alt={''}
              />
            </div>
          </AnimationDiv>
        </div>
        <div className="relative left-[68rem] bottom-[14.5rem]">
          <AnimationDiv>
            <div>
              <Image
                style={{
                  pointerEvents: 'none',
                }}
                className="object-cover w-[15vh]"
                src={ImgQ}
                alt={''}
              />
            </div>
          </AnimationDiv>
        </div>
      </Container>
    </>
  )
}
