'use client'
import { FrameGrid } from '@egjs/react-grid'
import React from 'react'
import Card from './Card'
import Image from 'next/image'
import Up from '../../../public/materiale/UP.png'
import { useMediaQuery } from 'usehooks-ts'
import Gallery from './Gallery'
type Props = {
  works: any[]
}

function WorksGrid({ works }: Props) {
  const matches = useMediaQuery('(max-width: 768px)')
  return (
    <>
      {/* <FrameGrid
        gap={12}
        defaultDirection={'end'}
        break
        frame={
          matches
            ? [[1], [2], [3], [4], [5]]
            : [
                [1, 1, 1, 2, 2, 2],
                [1, 1, 1, 2, 2, 2],
                [1, 1, 1, 3, 3, 3],
                [1, 1, 1, 3, 3, 3],
                [4, 4, 4, 5, 5, 5],
                [4, 4, 4, 5, 5, 5],
              ]
        }
        useResizeObserver={true}
        observeChildren={true}
        useFrameFill={true}
      > */}
      <Gallery style={{ 'column-width': '600px' }}>
        {works?.map((work: any, idx: number) => {
          return (
            <li key={idx}>
              <Card
                id={work.id}
                image_url={`${'https://multiverse-dev-directus.ov3mip.easypanel.host'}/assets/${
                  work.image.id
                }`}
                slug={work.slug}
                Name={work.Name}
              ></Card>
            </li>
          )
        })}
        {/* </FrameGrid> */}
      </Gallery>
      <div className=" flex justify-end py-10">
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
