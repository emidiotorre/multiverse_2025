'use client'
import React from 'react'
import Container from '@/app/components/Container'
import { FrameGrid } from '@egjs/react-grid'
import client from '@/app/apollo'
import { GET_WORKS_IMG } from '@/app/apollo/queries'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import { useRouter } from 'next/router'

type Props = {
  work: any
}

const Personal = ({ work }: Props) => {
  console.log(work)
  return (
    <>
      <Container>
        <div className="w-full">
          <div key={work.id}>
            {/*  <h1 className=" text-center text-4xl uppercase">{work.Name}</h1> */}
            <div className=" w-full h-full py-10">
              <img
                className="w-full rounded-lg overflow-hidden object-cover mb-3 "
                src={`${
                  process.env.REACT_APP_HOSTNAME ??
                  'https://galattico-dev-directus.ov3mip.easypanel.host'
                }/assets/${work.image?.id}`}
                alt=""
              />
              <FrameGrid
                gap={12}
                defaultDirection={'end'}
                frame={[
                  [1, 1, 1, 2, 2, 2],
                  [1, 1, 1, 2, 2, 2],
                  [1, 1, 1, 3, 3, 3],
                  [1, 1, 1, 3, 3, 3],
                  [4, 4, 4, 4, 4, 4],
                  [4, 4, 4, 4, 4, 4],
                  [4, 4, 4, 4, 4, 4],
                  [5, 5, 5, 7, 7, 7],
                  [5, 5, 5, 7, 7, 7],
                  [6, 6, 6, 7, 7, 7],
                  [6, 6, 6, 7, 7, 7],
                ]}
                useResizeObserver={true}
                observeChildren={true}
                useFrameFill={true}
              >
                {work.gallery?.map((img: any, imgIdx: number) => {
                  return (
                    <div key={imgIdx} className="overflow-hidden rounded-lg ">
                      <img
                        className="w-full h-full object-cover "
                        src={`${
                          process.env.REACT_APP_HOSTNAME ??
                          'https://galattico-dev-directus.ov3mip.easypanel.host'
                        }/assets/${img.image?.id}`}
                      ></img>
                    </div>
                  )
                })}
                {work.gallery?.map((img: any, imgIdx: number) => {
                  return (
                    <div key={imgIdx} className="overflow-hidden rounded-lg ">
                      <img
                        className="w-full h-full object-cover "
                        src={`${
                          process.env.REACT_APP_HOSTNAME ??
                          'https://galattico-dev-directus.ov3mip.easypanel.host'
                        }/assets/${img.image?.id}`}
                      ></img>
                    </div>
                  )
                })}
                {work.gallery?.map((img: any, imgIdx: number) => {
                  return (
                    <div key={imgIdx} className="overflow-hidden rounded-lg ">
                      <img
                        className="w-full h-full object-cover "
                        src={`${
                          process.env.REACT_APP_HOSTNAME ??
                          'https://galattico-dev-directus.ov3mip.easypanel.host'
                        }/assets/${img.image?.id}`}
                      ></img>
                    </div>
                  )
                })}
              </FrameGrid>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Personal
