'use client'
import { FrameGrid } from '@egjs/react-grid'
import React from 'react'
import Card from './Card'
import Image from 'next/image'
import Up from '../../../public/materiale/UP.png'

type Props = {
  works: any[]
}

function WorksGrid({ works }: Props) {
  return (
    <>
      <FrameGrid
        gap={12}
        defaultDirection={'end'}
        frame={[
          [1, 1, 1, 2, 2, 2],
          [1, 1, 1, 2, 2, 2],
          [1, 1, 1, 3, 3, 3],
          [1, 1, 1, 3, 3, 3],
          [4, 4, 4, 5, 5, 5],
          [4, 4, 4, 5, 5, 5],
        ]}
        useResizeObserver={true}
        observeChildren={true}
        useFrameFill={true}
      >
        {works?.map((work: any) => {
          return (
            <Card
              key={work.id}
              id={work.id}
              image_url={`${'https://multiverse-dev-directus.ov3mip.easypanel.host'}/assets/${
                work.image.id
              }`}
              slug={work.slug}
              Name={work.Name}
            ></Card>
          )
        })}
      </FrameGrid>
      <div className="flex justify-end py-10">
        <Image
          onClick={() =>
            document.documentElement.scrollTo({
              top: 0,
              left: 0,
              behavior: 'smooth',
            })
          }
          className="object-cover h-[18vh] w-[10vh] "
          src={Up}
          alt={''}
          quality={100}
        />
      </div>
    </>
  )
}

export default WorksGrid
