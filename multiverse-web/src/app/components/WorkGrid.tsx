'use client'
import React from 'react'
import Card from './Card'
import { useMediaQuery } from 'usehooks-ts'
import Marquee from 'react-fast-marquee'
import Container from './Container'
import Hand from './Hand'

type Props = {
  blocks: any[]
}

function WorksGrid({ blocks }: Props) {
  const matches = useMediaQuery('(min-width: 768px)')
  return (
    <>
      <div className="my-5">
        <Marquee gradient={false} speed={100} style={{ overflowY: 'hidden' }}>
          <h3 className="marque-title text-8xl font-bold uppercase">
            &nbsp;discover another universe
          </h3>
          <h3 className="marque-title text-8xl font-bold uppercase">
            &nbsp;discover another universe
          </h3>
        </Marquee>
      </div>
      <Container>
        {blocks &&
          blocks
            .sort((a, b) =>
              a.item.work1.date_created < b.item.work1.date_created ? -1 : 1,
            )
            .map((block: any, idx: number) => {
              switch (block.item.tipologia) {
                case 'half-split':
                  return (
                    <div
                      key={idx}
                      className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-2"
                    >
                      <div className="row-span-2 relative aspect-[4/5] h-full w-full">
                        <Card
                          aspect_ratio={block.item.work1?.aspectRatioImage}
                          id={block.item.work1?.id}
                          image_url={`${'https://multiverse-dev-directus.ov3mip.easypanel.host'}/assets/${
                            block.item.work1.image?.id
                          }`}
                          slug={block.item.work1?.slug}
                          Name={block.item.work1?.Name}
                          priority={idx <= 2}
                        ></Card>
                      </div>
                      <div className="relative aspect-[8/5]  w-full h-full">
                        <Card
                          aspect_ratio={block.item.work2?.aspectRatioImage}
                          id={block.item.work2.id}
                          image_url={`${'https://multiverse-dev-directus.ov3mip.easypanel.host'}/assets/${
                            block.item.work2.image?.id
                          }`}
                          slug={block.item.work2?.slug}
                          Name={block.item.work2?.Name}
                          priority={idx <= 2}
                        ></Card>
                      </div>
                      <div className="relative aspect-[8/5]  w-full h-full">
                        <Card
                          aspect_ratio={block.item.work3?.aspectRatioImage}
                          key={block.item.work3.id}
                          id={block.item.work3.id}
                          image_url={`${'https://multiverse-dev-directus.ov3mip.easypanel.host'}/assets/${
                            block.item.work3.image?.id
                          }`}
                          slug={block.item.work3?.slug}
                          Name={block.item.work3?.Name}
                          priority={idx <= 2}
                        ></Card>
                      </div>
                    </div>
                  )
                case 'split-half':
                  return (
                    <div
                      key={idx}
                      className="flex flex-col md:flex-row gap-2 mb-2"
                    >
                      <div className="flex flex-col gap-2 md:w-1/2">
                        <div className="relative w-full h-full aspect-[8/5]">
                          <Card
                            aspect_ratio={block.item.work1?.aspectRatioImage}
                            id={block.item.work1.id}
                            image_url={`${'https://multiverse-dev-directus.ov3mip.easypanel.host'}/assets/${
                              block.item.work1.image?.id
                            }`}
                            slug={block.item.work1?.slug}
                            Name={block.item.work1?.Name}
                            priority={idx <= 2}
                          ></Card>
                        </div>
                        <div className="relative w-full h-full aspect-[8/5]">
                          <Card
                            aspect_ratio={block.item.work2?.aspectRatioImage}
                            id={block.item.work2.image.id}
                            image_url={`${'https://multiverse-dev-directus.ov3mip.easypanel.host'}/assets/${
                              block.item.work2.image.id
                            }`}
                            slug={block.item.work2?.slug}
                            Name={block.item.work2?.Name}
                            priority={idx <= 2}
                          ></Card>
                        </div>
                      </div>
                      <div className="flex aspect-[4/5] md:w-[calc(50%)] overflow-hidden rounded-lg">
                        <div className="relative w-full h-full ">
                          <Card
                            aspect_ratio={block.item.work3?.aspectRatioImage}
                            id={block.item.work3.image.id}
                            image_url={`${'https://multiverse-dev-directus.ov3mip.easypanel.host'}/assets/${
                              block.item.work3.image.id
                            }`}
                            slug={block.item.work3?.slug}
                            Name={block.item.work3?.Name}
                            priority={idx <= 2}
                          ></Card>
                        </div>
                      </div>
                    </div>
                  )
                case 'half-half':
                  return (
                    <div
                      key={idx}
                      className="grid grid-cols-1 md:grid-cols-2 gap-2"
                    >
                      <div className="row-span-2 md:mb-2">
                        <Card
                          aspect_ratio={block.item.work1?.aspectRatioImage}
                          id={block.item.work1.image.id}
                          image_url={`${'https://multiverse-dev-directus.ov3mip.easypanel.host'}/assets/${
                            block.item.work1.image?.id
                          }`}
                          slug={block.item.work1?.slug}
                          Name={block.item.work1?.Name}
                          priority={idx <= 2}
                        ></Card>
                      </div>
                      <div className="row-span-2 mb-2 ">
                        <Card
                          aspect_ratio={block.item.work2?.aspectRatioImage}
                          id={block.item.work2.image.id}
                          image_url={`${'https://multiverse-dev-directus.ov3mip.easypanel.host'}/assets/${
                            block.item.work2.image.id
                          }`}
                          slug={block.item.work2?.slug}
                          Name={block.item.work2?.Name}
                          priority={idx <= 2}
                        ></Card>
                      </div>
                    </div>
                  )
              }
            })}
        <div className=" flex justify-end py-16 md:py-20">
          <Hand
            onClick={() =>
              document.documentElement.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth',
              })
            }
            className="object-cover h-[18vh] w-[10vh] cursor-pointer"
          />
        </div>
      </Container>
    </>
  )
}

export default WorksGrid
