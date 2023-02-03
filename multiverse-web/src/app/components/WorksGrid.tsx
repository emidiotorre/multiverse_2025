'use client'
import React from 'react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import Card from './Card'

type Props = {
  works: any[]
}

function WorksGrid({ works }: Props) {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 750: 1, 900: 2 }}>
      <Masonry gutter={'1rem'}>
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
      </Masonry>
    </ResponsiveMasonry>
  )
}

export default WorksGrid
