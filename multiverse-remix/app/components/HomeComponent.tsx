import { useQuery } from '@apollo/client'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import { GET_HOME } from '~/apollo/queries'

import ImgU from '../assets/home/img1.png'
import ImgD from '../assets/home/img2.png'
import ImgT from '../assets/home/img3.png'
import ImgQ from '../assets/home/img4.png'
import Logo from '../assets/mvs_logo.png'
import AnimationDiv from './AnimationDiv'
import Container from './Container'

function HomeComponent() {
  const { data: home, loading, error } = useQuery(GET_HOME, {
    fetchPolicy: 'no-cache',
  })

  if (error) return <div>error: {error.message}</div>
  if (loading) return <div>loading</div>
  const constraintsRef = useRef(null)
  return (
    <>
      <motion.div ref={constraintsRef}>
        <div className="relative top-3 left-7">
          <AnimationDiv myRef={constraintsRef}>
            <div>
              {/*  <ImgU
                style={{
                  pointerEvents: 'none',
                }}
                className="object-cover w-[8vh] md:w-[15vh]"
                quality={100}
                alt={''}
              /> */}
            </div>
          </AnimationDiv>
        </div>
        <div className="flex justify-center">
          <AnimationDiv myRef={constraintsRef}>
            <div>
              {/*  <ImgD
                style={{
                  pointerEvents: 'none',
                }}
                className="object-cover w-[8vh] md:w-[15vh]"
                quality={100}
                alt={''}
              /> */}
            </div>
          </AnimationDiv>
        </div>

        <Container>
          <div>
            <div>
              <h1 className="font-sans font-semibold w-full text-2xl md:text-5xl pb-20 break-words leading-[1.2] overflow-visible pt-4">
                <div className="inline-flex self-baseline mr-2">
                  {/*                 <Logo height=".95em" width="100%" />
                   */}{' '}
                </div>
                <span>{home.header}</span>
              </h1>
            </div>
          </div>
        </Container>
        <div className="relative left-20 bottom-44">
          <AnimationDiv myRef={constraintsRef}>
            <div>
              {/* <ImgT
                  style={{
                    pointerEvents: 'none',
                  }}
                  className="object-cover  w-[8vh] md:w-[15vh]"
                  alt={''}
                  quality={100}
                /> */}
            </div>
          </AnimationDiv>
        </div>
        <div className="relative flex justify-end bottom-20 left-36 ">
          <AnimationDiv myRef={constraintsRef}>
            <div>
              {/* <ImgQ
                  style={{
                    pointerEvents: 'none',
                  }}
                  className="object-cover w-[8vh] md:w-[15vh] "
                  quality={100}
                  alt={''}
                /> */}
            </div>
          </AnimationDiv>
        </div>
      </motion.div>
    </>
  )
}
export default HomeComponent
