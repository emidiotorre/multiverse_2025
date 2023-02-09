'use client'

import Image from 'next/image'
import ImgU from '../../../public/materiale/home/img1.png'
import ImgD from '../../../public/materiale/home/img2.png'
import ImgT from '../../../public/materiale/home/img3.png'
import ImgQ from '../../../public/materiale/home/img4.png'
import Logo from '../../../public/materiale/mvs_logo.png'
import AnimationDiv from './AnimationDiv'
import Container from './Container'

type Props = {
  home: any
}

function HomeComponent({ home }: Props) {
  return (
    <>
      <div className="relative top-3 left-7">
        <AnimationDiv>
          <div>
            <Image
              style={{
                pointerEvents: 'none',
              }}
              className="object-cover h-full w-[15vh]"
              quality={100}
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
              quality={100}
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
                quality={100}
                alt={''}
              />
            </span>
            <span key={home.id}>{home.header}</span>
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
                quality={100}
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
                quality={100}
                alt={''}
              />
            </div>
          </AnimationDiv>
        </div>
      </Container>
    </>
  )
}
export default HomeComponent
