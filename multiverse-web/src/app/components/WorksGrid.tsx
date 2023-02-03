'use client'
import { FrameGrid } from '@egjs/react-grid'
import React from 'react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import Card from './Card'

type Props = {
  works: any[]
}

function WorksGrid({ works }: Props) {
  return (
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
            image_url={`${
              process.env.REACT_APP_HOSTNAME ??
              'https://galattico-dev-directus.ov3mip.easypanel.host'
            }/assets/${work.image.id}`}
            slug={work.slug}
            title={work.name}
          ></Card>
        )
      })}
    </FrameGrid>
  )
}

export default WorksGrid
