'use client'
import { useRef } from 'react'
import AnimationDiv from './components/AnimationDiv'
import Container from './components/Container'

export default function Home() {
  const constraintsRef = useRef(null)
  return (
    <>
      <div className="relative top-3 left-7">
        <AnimationDiv dragConstraints={constraintsRef}>
          <div>
            <img
              style={{
                pointerEvents: 'none',
              }}
              className="object-cover h-full w-[15vh]"
              src={`${'../materiale/home/img1.png'}`}
            ></img>
          </div>
        </AnimationDiv>
      </div>
      <div className="flex justify-center">
        <AnimationDiv>
          <div>
            <img
              style={{
                pointerEvents: 'none',
              }}
              className="object-cover w-[15vh]"
              src={`${'../materiale/home/img2.png'}`}
            ></img>
          </div>
        </AnimationDiv>
      </div>

      <Container>
        <div>
          <h1 className="font-sans font-semibold max-w-[60vw] text-5xl pb-10 break-words leading-[1.2]">
            <span className="inline-flex">
              <img
                className="object-cover h-full w-[40vh]"
                src={`${'../materiale/mvs_logo.png'}`}
              ></img>
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
              <img
                style={{
                  pointerEvents: 'none',
                }}
                className="object-cover  w-[15vh]"
                src={`${'../materiale/home/img3.png'}`}
              ></img>
            </div>
          </AnimationDiv>
        </div>
        <div className="relative left-[68rem] bottom-[14.5rem]">
          <AnimationDiv>
            <div>
              <img
                style={{
                  pointerEvents: 'none',
                }}
                className="object-cover w-[15vh]"
                src={`${'../materiale/home/img4.png'}`}
              ></img>
            </div>
          </AnimationDiv>
        </div>
      </Container>
    </>
  )
}
