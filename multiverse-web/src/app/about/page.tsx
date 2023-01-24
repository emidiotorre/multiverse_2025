import React from 'react'
import mock from '@/app/mock.json'
import Card from '@/app/components/Card'
import Container from '@/app/components/Container'

export default function About() {
  return (
    <>
      <Container>
        {/*   <div className="grid grid-cols-2 grid-flow-row gap-3">
          {mock.works.map((work) => {
            return (
              <Card
                id={work.id}
                image_url={work.image_url}
                slug={work.slug}
                title={work.title}
              ></Card>
            )
          })}
        </div> */}
      </Container>
    </>
  )
}
