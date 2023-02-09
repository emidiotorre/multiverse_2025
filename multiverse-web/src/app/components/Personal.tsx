'use client'
import React from 'react'

import { FrameGrid } from '@egjs/react-grid'
import Image from 'next/image'

import Container from '@/app/components/Container'
import Up from '../../../public/materiale/UP.png'
type Props = {
  work: any
}

const Personal = ({ work }: Props) => {
  return (
    <>
      <Container>
        <FrameGrid
          gap={12}
          defaultDirection={'end'}
          frame={[
            [1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1],
            [2, 2, 2, 3, 3, 3],
            [2, 2, 2, 3, 3, 3],
            [2, 2, 2, 3, 3, 3],
            [2, 2, 2, 3, 3, 3],
            [4, 4, 4, 4, 4, 4],
            [4, 4, 4, 4, 4, 4],
            [4, 4, 4, 4, 4, 4],
            [5, 5, 5, 6, 6, 6],
            [5, 5, 5, 6, 6, 6],
            [5, 5, 5, 7, 7, 7],
            [5, 5, 5, 7, 7, 7],
            [8, 8, 8, 8, 8, 8],
            [8, 8, 8, 8, 8, 8],
            [8, 8, 8, 8, 8, 8],
          ]}
          useResizeObserver={true}
          observeChildren={true}
          useFrameFill={true}
        >
          {work.gallery?.map((img: any, imgIdx: number) => {
            return (
              <div key={imgIdx} className="overflow-hidden rounded-lg ">
                <Image
                  width={1400}
                  height={1400}
                  className="w-full h-full object-cover"
                  src={`${'https://multiverse-dev-directus.ov3mip.easypanel.host'}/assets/${
                    img.image.id
                  }`}
                  quality={100}
                  alt={''}
                />
              </div>
            )
          })}
        </FrameGrid>
        <div className="flex justify-end py-10">
          <Image
            onClick={() =>
              document.documentElement.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth', // Optional if you want to skip the scrolling animation
              })
            }
            className="object-cover h-[18vh] w-[10vh] "
            src={Up}
            alt={''}
            quality={100}
          />
        </div>
      </Container>
    </>
  )
}

export default Personal
