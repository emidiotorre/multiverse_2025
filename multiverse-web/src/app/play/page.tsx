import React from 'react'
import mock from '@/app/mock.json'
import Card from '@/app/components/Card'
import Container from '@/app/components/Container'

export default function Play() {
  return (
    <>
      <Container>
        <div className="grid grid-cols-2 grid-flow-dense gap-3">
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
        </div>
      </Container>
    </>
  )
}
