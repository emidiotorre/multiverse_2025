'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Container from '@/app/components/Container'
import Up from '../../../public/materiale/UP.png'
import AnimateHeight from 'react-animate-height'
import { VideoAutoPlayer } from './VideoPlayer'

type Props = {
  work: any
}

const Personal = ({ work }: Props) => {
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
                    quality={100}
                    alt={''}
                  />
                </div>
              )
            case 'half-split':
              return (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-2">
                  <div className="row-span-2">
                    <Image
                      width={1400}
                      height={1400}
                      priority={idx < 3 ? true : false}
                      className="w-full h-full object-cover rounded-lg"
                      src={`${'https://multiverse-dev-directus.ov3mip.easypanel.host'}/assets/${
                        img.item.image_1.id
                      }`}
                      quality={100}
                      alt={''}
                    />
                  </div>
                  <div>
                    <Image
                      width={1400}
                      height={1400}
                      priority={idx < 3 ? true : false}
                      className="w-full h-full object-cover rounded-lg"
                      src={`${'https://multiverse-dev-directus.ov3mip.easypanel.host'}/assets/${
                        img.item.image_2.id
                      }`}
                      quality={100}
                      alt={''}
                    />
                  </div>
                  <div>
                    <Image
                      width={1400}
                      height={1400}
                      priority={idx < 3 ? true : false}
                      className="w-full h-full object-cover rounded-lg"
                      src={`${'https://multiverse-dev-directus.ov3mip.easypanel.host'}/assets/${
                        img.item.image_3.id
                      }`}
                      quality={100}
                      alt={''}
                    />
                  </div>
                </div>
              )
            case 'split-half':
              return <div></div>
            case 'half-half':
              return (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-2 md:gap-y-2">
                  <div className="row-span-2 my-2">
                    <Image
                      width={1400}
                      height={1400}
                      priority={idx < 3 ? true : false}
                      className="w-full h-full object-cover rounded-lg"
                      src={`${'https://multiverse-dev-directus.ov3mip.easypanel.host'}/assets/${
                        img.item.image_1.id
                      }`}
                      quality={100}
                      alt={''}
                    />
                  </div>
                  <div className="row-span-2 mb-2 md:my-2">
                    <Image
                      width={1400}
                      height={1400}
                      priority={idx < 3 ? true : false}
                      className="w-full h-full object-cover rounded-lg"
                      src={`${'https://multiverse-dev-directus.ov3mip.easypanel.host'}/assets/${
                        img.item.image_2.id
                      }`}
                      quality={100}
                      alt={''}
                    />
                  </div>
                </div>
              )
            case 'third-third-third':
              return (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-2 gap-y-2">
                  <div>
                    <Image
                      width={1400}
                      height={1400}
                      priority={idx < 3 ? true : false}
                      className="w-full h-full object-cover  rounded-lg"
                      src={`${'https://multiverse-dev-directus.ov3mip.easypanel.host'}/assets/${
                        img.item.image_1.id
                      }`}
                      quality={100}
                      alt={''}
                    />
                  </div>
                  <div>
                    <Image
                      width={1400}
                      height={1400}
                      priority={idx < 3 ? true : false}
                      className="w-full h-full object-cover rounded-lg"
                      src={`${'https://multiverse-dev-directus.ov3mip.easypanel.host'}/assets/${
                        img.item.image_2.id
                      }`}
                      quality={100}
                      alt={''}
                    />
                  </div>
                  <div>
                    <Image
                      width={1400}
                      height={1400}
                      priority={idx < 3 ? true : false}
                      className="w-full h-full object-cover rounded-lg"
                      src={`${'https://multiverse-dev-directus.ov3mip.easypanel.host'}/assets/${
                        img.item.image_3.id
                      }`}
                      quality={100}
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
        <div className="flex justify-end py-10 md:py-20">
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
            quality={100}
          />
        </div>
      </Container>
    </>
  )
}

export default Personal
