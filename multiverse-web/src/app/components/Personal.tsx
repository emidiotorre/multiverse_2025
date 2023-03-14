'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Container from '@/app/components/Container'
import Up from '../../../public/materiale/UP.png'
import AnimateHeight from 'react-animate-height'
import { VideoAutoPlayer } from './VideoPlayer'
import { useMediaQuery } from 'usehooks-ts'

type Props = {
  work: any
}

const Personal = ({ work }: Props) => {
  const matches = useMediaQuery('(min-width: 768px)')
  const [isDescriptionOpen, setisDescriptionOpen] = useState(false)

  return (
    <>
      <Container>
        <VideoAutoPlayer
          src={`${'https://multiverse-dev-directus.ov3mip.easypanel.host'}/assets/${
            work?.video?.id
          }`}
        ></VideoAutoPlayer>
        {work.gallery?.map((img: any, idx: number) => {
          switch (img.item.tipologia) {
            case 'full-width':
              return (
                <div
                  className={`overflow-hidden rounded-lg mb-2 w-full relative`}
                  style={{
                    aspectRatio: img.item.aspect_ratio.replace('-', '/'),
                  }}
                >
                  <Image
                    fill={true}
                    priority={idx < 3 ? true : false}
                    className={`object-cover rounded-lg`}
                    src={`${'https://multiverse-dev-directus.ov3mip.easypanel.host'}/assets/${
                      img.item.image_1.id
                    }`}
                    quality={70}
                    alt={''}
                  />
                </div>
              )
            case 'half-split':
              return (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-2">
                  <div className="row-span-2 h-[50vh] md:h-full w-full md:aspect-[4/5]">
                    <Image
                      fill={true}
                      priority={idx < 3 ? true : false}
                      className="w-full h-full object-cover rounded-lg overflow-hidden"
                      src={`${'https://multiverse-dev-directus.ov3mip.easypanel.host'}/assets/${
                        img.item.image_1.id
                      }`}
                      quality={70}
                      alt={''}
                    />
                  </div>
                  <div className="h-[50vh] md:h-full w-full md:aspect-[8/5]">
                    <Image
                      fill={true}
                      priority={idx < 3 ? true : false}
                      className="w-full h-full object-cover rounded-lg overflow-hidden"
                      src={`${'https://multiverse-dev-directus.ov3mip.easypanel.host'}/assets/${
                        img.item.image_2.id
                      }`}
                      quality={70}
                      alt={''}
                    />
                  </div>
                  <div className="h-[50vh] md:h-full w-full md:aspect-[8/5]">
                    <Image
                      fill={true}
                      priority={idx < 3 ? true : false}
                      className="w-full h-full object-cover rounded-lg overflow-hidden"
                      src={`${'https://multiverse-dev-directus.ov3mip.easypanel.host'}/assets/${
                        img.item.image_3.id
                      }`}
                      quality={70}
                      alt={''}
                    />
                  </div>
                </div>
              )
            case 'split-half':
              return (
                <div
                  className="mb-2"
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
                    className="relative h-[50vh] md:h-full w-full md:aspect-[5/4]"
                  >
                    <Image
                      fill={true}
                      priority={idx < 3 ? true : false}
                      className="w-full h-full object-cover rounded-lg overflow-hidden"
                      src={`${'https://multiverse-dev-directus.ov3mip.easypanel.host'}/assets/${
                        img.item.image_1.id
                      }`}
                      quality={70}
                      alt={''}
                    />
                  </div>
                  <div
                    className="relative h-[50vh] md:h-full w-full md:aspect-[5/4]"
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
                    <Image
                      fill={true}
                      priority={idx < 3 ? true : false}
                      className="w-full h-full object-cover rounded-lg overflow-hidden"
                      src={`${'https://multiverse-dev-directus.ov3mip.easypanel.host'}/assets/${
                        img.item.image_2.id
                      }`}
                      quality={70}
                      alt={''}
                    />
                  </div>

                  <div
                    className="relative  md:aspect-[5/8] w-full h-[50vh] md:h-full overflow-hidden"
                    style={
                      matches
                        ? {
                            gridRowStart: 1,
                            gridColumnStart: 2,
                            gridRowEnd: 3,
                            gridColumnEnd: 2,
                          }
                        : {
                            gridRowStart: 3,
                            gridRowEnd: 'auto',
                          }
                    }
                  >
                    <Image
                      fill={true}
                      priority={idx < 3 ? true : false}
                      className="w-full h-full object-cover rounded-lg overflow-hidden"
                      src={`${'https://multiverse-dev-directus.ov3mip.easypanel.host'}/assets/${
                        img.item.image_3.id
                      }`}
                      quality={70}
                      alt={''}
                    />
                  </div>
                </div>
              )
            case 'half-half':
              return (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-2 md:gap-y-2">
                  <div
                    style={{
                      aspectRatio: img.item.aspect_ratio.replace('-', '/'),
                    }}
                    className="row-span-2 my-2 relative"
                  >
                    <Image
                      fill={true}
                      priority={idx < 3 ? true : false}
                      className="w-full h-full object-cover rounded-lg"
                      src={`${'https://multiverse-dev-directus.ov3mip.easypanel.host'}/assets/${
                        img.item.image_1.id
                      }`}
                      quality={70}
                      alt={''}
                    />
                  </div>
                  <div
                    style={{
                      aspectRatio: img.item.aspect_ratio.replace('-', '/'),
                    }}
                    className="row-span-2 mb-2 md:my-2 relative"
                  >
                    <Image
                      fill={true}
                      priority={idx < 3 ? true : false}
                      className="w-full h-full object-cover rounded-lg"
                      src={`${'https://multiverse-dev-directus.ov3mip.easypanel.host'}/assets/${
                        img.item.image_2.id
                      }`}
                      quality={70}
                      alt={''}
                    />
                  </div>
                </div>
              )
            case 'third-third-third':
              return (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-2 gap-y-2">
                  <div className="relative h-[50vh] md:h-full w-full md:aspect-square">
                    <Image
                      fill={true}
                      priority={idx < 3 ? true : false}
                      className="w-full h-full object-cover  rounded-lg"
                      src={`${'https://multiverse-dev-directus.ov3mip.easypanel.host'}/assets/${
                        img.item.image_1.id
                      }`}
                      quality={70}
                      alt={''}
                    />
                  </div>
                  <div className="relative h-[50vh] md:h-full w-full md:aspect-square">
                    <Image
                      fill={true}
                      priority={idx < 3 ? true : false}
                      className="w-full h-full object-cover rounded-lg"
                      src={`${'https://multiverse-dev-directus.ov3mip.easypanel.host'}/assets/${
                        img.item.image_2.id
                      }`}
                      quality={70}
                      alt={''}
                    />
                  </div>
                  <div className="relative h-[50vh] md:h-full w-full md:aspect-square">
                    <Image
                      fill={true}
                      priority={idx < 3 ? true : false}
                      className="w-full h-full object-cover rounded-lg"
                      src={`${'https://multiverse-dev-directus.ov3mip.easypanel.host'}/assets/${
                        img.item.image_3.id
                      }`}
                      quality={70}
                      alt={''}
                    />
                  </div>
                </div>
              )
            default:
              return (
                <div
                  key={idx}
                  className="overflow-hidden rounded-lg my-2"
                ></div>
              )
          }
        })}
        <div className="grid md:grid-cols-3 gap-4 mt-7 z-30">
          <div
            className="cursor-pointer"
            onClick={() => setisDescriptionOpen(!isDescriptionOpen)}
          >
            {isDescriptionOpen ? (
              <p> - Project Information</p>
            ) : (
              <p> + Project Information</p>
            )}
          </div>
          <AnimateHeight
            className={`col-span-2 overflow-hidden`}
            height={isDescriptionOpen ? 'auto' : 0}
            duration={600}
          >
            <p dangerouslySetInnerHTML={{ __html: work.Body }}></p>
            <div className="pt-32 grid grid-cols-2 divide-x-0">
              {work?.Credits?.map((credit: any, idx: number) => {
                return (
                  <>
                    <div className="border-none" key={idx}>
                      <p>{credit.Credit_Category}</p>
                    </div>
                    <div className="border-none">
                      <p>{credit.Credit_Value}</p>
                    </div>
                  </>
                )
              })}
            </div>
          </AnimateHeight>
        </div>
        <div className="flex justify-end py-16 md:py-20">
          <Image
            onClick={() =>
              document.documentElement.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth', // Optional if you want to skip the scrolling animation
              })
            }
            className="object-cover h-[18vh] w-[10vh] "
            src={Up}
            alt={''}
            quality={70}
          />
        </div>
      </Container>
    </>
  )
}

export default Personal
