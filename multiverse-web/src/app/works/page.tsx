import React from 'react'
import mock from '@/app/mock.json'
import Card from '@/app/components/Card'
import Container from '@/app/components/Container'

export default function Work() {
  return (
    <>
      <Container>
        <div className="grid grid-cols-2 gap-3">
          {mock.works.map((work) => {
            return (
              <div key={work.id}>
                <Card
                  id={work.id}
                  image_url={work.image_url}
                  slug={work.slug}
                  title={work.title}
                ></Card>
              </div>
            )
          })}
        </div>
      </Container>
    </>
  )
}
