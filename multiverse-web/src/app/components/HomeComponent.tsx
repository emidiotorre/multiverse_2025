'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

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
  const constraintsRef = useRef(null)
  return (
    <>
      <motion.div ref={constraintsRef}>
        <div className="">
          <AnimationDiv myRef={constraintsRef}>
            <div>
              <Image
                style={{
                  pointerEvents: 'none',
                }}
                className="object-cover w-[8vh] md:w-[15vh]"
                quality={100}
                src={ImgU}
                alt={''}
              />
            </div>
          </AnimationDiv>
        </div>
        <div className="flex justify-center">
          <AnimationDiv myRef={constraintsRef}>
            <div>
              <Image
                style={{
                  pointerEvents: 'none',
                }}
                className="object-cover w-[8vh] md:w-[15vh]"
                src={ImgD}
                quality={100}
                alt={''}
              />
            </div>
          </AnimationDiv>
        </div>

        <Container>
          <div>
            <h1 className="font-sans font-semibold w-full text-2xl md:text-5xl pb-10 break-words leading-[1.2] overflow-visible pt-4">
              <Image
                className="object-contain w-auto object-left inline-block h-6 -mt-2 md:h-12 md:-mt-8 "
                src={Logo}
                height={500}
                quality={100}
                alt={''}
              />
              <span>{home.header}</span>
            </h1>
          </div>
        </Container>
        <div className="relative ">
          <AnimationDiv myRef={constraintsRef}>
            <div>
              <Image
                style={{
                  pointerEvents: 'none',
                }}
                className="object-cover  w-[8vh] md:w-[15vh]"
                src={ImgT}
                alt={''}
                quality={100}
              />
            </div>
          </AnimationDiv>
        </div>
        <div className="relative  ">
          <AnimationDiv myRef={constraintsRef}>
            <div>
              <Image
                style={{
                  pointerEvents: 'none',
                }}
                className="object-cover w-[8vh] md:w-[15vh] "
                src={ImgQ}
                quality={100}
                alt={''}
              />
            </div>
          </AnimationDiv>
        </div>
      </motion.div>
    </>
  )
}
export default HomeComponent
