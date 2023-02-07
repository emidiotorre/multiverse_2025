'use client'
import React from 'react'
import mock from '@/app/mock.json'
import Card from '@/app/components/Card'
import Container from '@/app/components/Container'
import getGridAreaFromIndex from '../utils/getGridAreaFromIndex'

export default function Play() {
  const maxLetter = 'O'
  return (
    <>
      <Container>
        <div className="grid grid-play-area gap-3">
          {mock.play.items.map((play, idx) => {
            const y = getGridAreaFromIndex(idx, maxLetter)

            return (
              <Card
                key={idx}
                id={play.id}
                image_url={play.image_url}
                slug={play.slug}
                title={play.title}
                style={{ gridArea: y }}
              ></Card>
            )
          })}
        </div>
      </Container>
    </>
  )
}
