'use client'
import React from 'react'
import mock from '@/app/mock.json'
import Card from '@/app/components/Card'
import Container from '@/app/components/Container'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

export default function Play() {
  return (
    <>
      <Container>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 4 }}>
          <Masonry gutter={'1rem'}>
            {mock.play.items.map((play) => {
              return (
                <Card
                  id={play.id}
                  image_url={play.image_url}
                  slug={play.slug}
                  title={play.title}
                ></Card>
              )
            })}
          </Masonry>
        </ResponsiveMasonry>
      </Container>
    </>
  )
}
