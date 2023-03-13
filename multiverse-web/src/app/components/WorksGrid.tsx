'use client'
import React from 'react'
import Card from './Card'
import Image from 'next/image'
import Up from '../../../public/materiale/UP.png'
import { useMediaQuery } from 'usehooks-ts'
import Marquee from 'react-fast-marquee'
import Container from './Container'

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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-2 mb-2 md:mb-0">
                      <div className="row-span-2">
                        <Card
                          height={block.item.work1.image.height}
                          width={block.item.work1.image.width}
                          key={idx}
                          id={block.item.work1.image.id}
                          image_url={`${'https://multiverse-dev-directus.ov3mip.easypanel.host'}/assets/${
                            block.item.work1.image.id
                          }`}
                          slug={block.item.work1.slug}
                          Name={block.item.work1.Name}
                        ></Card>
                      </div>

                      <Card
                        height={block.item.work1.image.height}
                        width={block.item.work1.image.width}
                        key={idx}
                        id={block.item.work2.image.id}
                        image_url={`${'https://multiverse-dev-directus.ov3mip.easypanel.host'}/assets/${
                          block.item.work2.image.id
                        }`}
                        slug={block.item.work2.slug}
                        Name={block.item.work2.Name}
                      ></Card>

                      <Card
                        height={block.item.work1.image.height}
                        width={block.item.work1.image.width}
                        key={idx}
                        id={block.item.work3.image.id}
                        image_url={`${'https://multiverse-dev-directus.ov3mip.easypanel.host'}/assets/${
                          block.item.work3.image.id
                        }`}
                        slug={block.item.work3.slug}
                        Name={block.item.work3.Name}
                      ></Card>
                    </div>
                  )
                case 'split-half':
                  return (
                    <div
                      style={
                        matches
                          ? {
                              display: 'grid',
                              gridTemplateColumns: '1fr 1fr',
                              gridTemplateRows: '1fr 1fr',
                              gap: '0.5rem',
                            }
                          : {
                              display: 'grid',
                              gridTemplateColumns: '1fr',
                              gridTemplateRows: '1fr 1fr 1fr',
                              gap: '0.5rem',
                            }
                      }
                    >
                      <div
                        style={
                          matches
                            ? {
                                gridRowStart: 1,
                                gridColumnStart: 1,
                                gridRowEnd: 'auto',
                                gridColumnEnd: 'auto',
                              }
                            : {
                                gridRowStart: 1,
                                gridRowEnd: 'auto',
                              }
                        }
                      >
                        <Card
                          height={block.item.work1.image.height}
                          width={block.item.work1.image.width}
                          key={idx}
                          id={block.item.work1.image.id}
                          image_url={`${'https://multiverse-dev-directus.ov3mip.easypanel.host'}/assets/${
                            block.item.work1.image.id
                          }`}
                          slug={block.item.work1.slug}
                          Name={block.item.work1.Name}
                        ></Card>
                      </div>
                      <div
                        style={
                          matches
                            ? {
                                gridRowStart: 2,
                                gridColumnStart: 1,
                                gridRowEnd: 2,
                                gridColumnEnd: 2,
                              }
                            : {
                                gridRowStart: 2,
                                gridRowEnd: 'auto',
                              }
                        }
                      >
                        <Card
                          height={block.item.work1.image.height}
                          width={block.item.work1.image.width}
                          key={idx}
                          id={block.item.work2.image.id}
                          image_url={`${'https://multiverse-dev-directus.ov3mip.easypanel.host'}/assets/${
                            block.item.work2.image.id
                          }`}
                          slug={block.item.work2.slug}
                          Name={block.item.work2.Name}
                        ></Card>
                      </div>
                      <div
                        className="mb-2"
                        style={
                          matches
                            ? {
                                gridRowStart: 1,
                                gridColumnStart: 2,
                                gridRowEnd: 'none',
                                gridColumnEnd: 2,
                              }
                            : {
                                gridRowStart: 3,
                                gridRowEnd: 'auto',
                              }
                        }
                      >
                        <Card
                          height={block.item.work1.image.height}
                          width={block.item.work1.image.width}
                          key={idx}
                          id={block.item.work3.image.id}
                          image_url={`${'https://multiverse-dev-directus.ov3mip.easypanel.host'}/assets/${
                            block.item.work3.image.id
                          }`}
                          slug={block.item.work3.slug}
                          Name={block.item.work3.Name}
                        ></Card>
                      </div>
                    </div>
                  )
                case 'half-half':
                  return (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-2 md:gap-y-2">
                      <div className="row-span-2 my-2">
                        <Card
                          key={idx}
                          id={block.item.work1.image.id}
                          image_url={`${'https://multiverse-dev-directus.ov3mip.easypanel.host'}/assets/${
                            block.item.work1.image.id
                          }`}
                          slug={block.item.work1.slug}
                          Name={block.item.work1.Name}
                          height={block.item.work1.image.height}
                          width={block.item.work1.image.width}
                        ></Card>
                      </div>
                      <div className="row-span-2 mb-2 md:my-2">
                        <Card
                          height={block.item.work1.image.height}
                          width={block.item.work1.image.width}
                          key={idx}
                          id={block.item.work2.image.id}
                          image_url={`${'https://multiverse-dev-directus.ov3mip.easypanel.host'}/assets/${
                            block.item.work2.image.id
                          }`}
                          slug={block.item.work2.slug}
                          Name={block.item.work2.Name}
                        ></Card>
                      </div>
                    </div>
                  )
              }
            })}
        <div className=" flex justify-end py-16 md:py-20">
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
      </Container>
    </>
  )
}

export default WorksGrid
