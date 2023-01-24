import React from 'react'
import Container from '@/app/components/Container'
import mock from '@/app/mock.json'
import Card from '@/app/components/Card'

export default function PostWork({ params }: { params: any }) {
  const postWork = mock.works.find((s) => s.slug === params.slug)
  return (
    <>
      <Container>
        <div className="flex justify-center">
          <div key={postWork?.id}>
            <h1 className=" text-center text-4xl uppercase">
              {postWork?.title}
            </h1>
            <div className=" w-full h-full py-10">
              <img src={postWork?.image_url} alt="" />
              <div className="flex pt-3 ">
                <small>{postWork?.description}</small>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
