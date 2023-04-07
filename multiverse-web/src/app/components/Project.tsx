'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Container from '@/app/components/Container'
import AnimateHeight from 'react-animate-height'
import { VideoAutoPlayer } from './VideoPlayer'
import { useMediaQuery } from 'usehooks-ts'
import ReactPlayer from 'react-player'
import Hand from './Hand'

type Props = {
  work: any
}

const Project = ({ work }: Props) => {
  const matches = useMediaQuery('(min-width: 768px)')
  const [isDescriptionOpen, setisDescriptionOpen] = useState(false)

  return (
    <>
      <Container className="font-Sharp_Grotesk_Book25">
        {work?.vimeoUrl !== null ? (
          <VideoAutoPlayer src={work?.vimeoUrl}></VideoAutoPlayer>
        ) : (
          <></>
        )}
        {work.gallery?.map((img: any, idx: number) => {
          switch (img.item.tipologia) {
            case 'full-width':
              return (
                <div
                  key={img.item.id}
                  className="w-full relative mb-2"
                  style={{
                    aspectRatio: img?.item.aspect_ratio,
                  }}
                >
                  {img.item.vimeoUrl1 !== null ? (
                    <div className="w-full h-full">
                      <ReactPlayer
                        style={{
                          overflow: 'hidden',
                          position: 'relative',
                          marginBottom: '0.5rem',
                          objectFit: 'cover',
                          borderRadius: '0.5rem',
                          aspectRatio: img?.item.aspect_ratio?.replace(
                            '-',
                            '/',
                          ),
                        }}
                        playsinline={true}
                        height={'auto'}
                        width={'auto'}
                        loop
                        muted={true}
                        playing={true}
                        url={img?.item?.vimeoUrl1}
                      ></ReactPlayer>
                    </div>
                  ) : (
                    <Image
                      fill={true}
                      priority={idx < 3 ? true : false}
                      className={`object-cover  w-full h-full rounded-lg overflow-hidden`}
                      src={`${'https://multiverse-dev-directus.ov3mip.easypanel.host'}/assets/${
                        img?.item?.image_1?.id
                      }`}
                      quality={70}
                      alt={''}
                    />
                  )}
                </div>
              )
            case 'half-split':
              return (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-2">
                  {img.item.vimeoUrl1 !== null ? (
                    <div className="  aspect-[4/5] row-span-2  w-full h-full">
                      <ReactPlayer
                        style={{
                          overflow: 'hidden',
                          borderRadius: '0.5rem',
                          position: 'relative',
                          marginBottom: '0.5rem',
                          objectFit: 'cover',
                          aspectRatio: '4/5',
                        }}
                        playsinline={true}
                        muted={true}
                        height={'auto'}
                        width={'auto'}
                        loop
                        playing={true}
                        url={img?.item?.vimeoUrl1}
                      ></ReactPlayer>
                    </div>
                  ) : (
                    <div
                      key={img.item.id}
                      className="relative aspect-[4/5] h-full w-full row-span-2 "
                    >
                      <Image
                        fill={true}
                        priority={idx < 3 ? true : false}
                        className=" object-cover rounded-lg  w-full h-full overflow-hidden"
                        src={`${'https://multiverse-dev-directus.ov3mip.easypanel.host'}/assets/${
                          img?.item?.image_1?.id
                        }`}
                        quality={70}
                        alt={''}
                      />
                    </div>
                  )}
                  {img.item.vimeoUrl2 !== null ? (
                    <div className="  aspect-[8/5] w-full h-full">
                      <ReactPlayer
                        style={{
                          borderRadius: '0.5rem',
                          overflow: 'hidden',
                          position: 'relative',
                          objectFit: 'cover',
                          aspectRatio: '8/5',
                        }}
                        playsinline={true}
                        muted={true}
                        height={'auto'}
                        width={'auto'}
                        loop
                        playing={true}
                        url={img?.item?.vimeoUrl2}
                      ></ReactPlayer>
                    </div>
                  ) : (
                    <div
                      key={img.item.id}
                      className="relative  h-full w-full aspect-[8/5]"
                    >
                      <Image
                        fill={true}
                        priority={idx < 3 ? true : false}
                        className=" object-cover  w-full h-full rounded-lg overflow-hidden"
                        src={`${'https://multiverse-dev-directus.ov3mip.easypanel.host'}/assets/${
                          img.item.image_2.id
                        }`}
                        quality={70}
                        alt={''}
                      />
                    </div>
                  )}
                  {img.item.vimeoUrl3 !== null ? (
                    <div className=" aspect-[8/5]  w-full h-full">
                      <ReactPlayer
                        style={{
                          borderRadius: '0.5rem',
                          overflow: 'hidden',
                          position: 'relative',
                          marginBottom: '0.5rem',
                          objectFit: 'cover',
                          aspectRatio: '8/5',
                        }}
                        playsinline={true}
                        muted={true}
                        height={'auto'}
                        width={'auto'}
                        loop
                        playing={true}
                        url={img?.item?.vimeoUrl3}
                      ></ReactPlayer>
                    </div>
                  ) : (
                    <div
                      key={img.item.id}
                      className=" relative h-full w-full aspect-[8/5]"
                    >
                      <Image
                        fill={true}
                        priority={idx < 3 ? true : false}
                        className=" object-cover  w-full h-full rounded-lg overflow-hidden"
                        src={`${'https://multiverse-dev-directus.ov3mip.easypanel.host'}/assets/${
                          img.item.image_3.id
                        }`}
                        quality={70}
                        alt={''}
                      />
                    </div>
                  )}
                </div>
              )

            case 'split-half':
              return (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-2">
                  {img.item.vimeoUrl1 !== null ? (
                    <div className="aspect-[8/5] w-full h-full">
                      <ReactPlayer
                        muted={true}
                        style={{
                          borderRadius: '0.5rem',
                          overflow: 'hidden',
                          position: 'relative',
                          objectFit: 'cover',
                          aspectRatio: '8/5',
                        }}
                        playsinline={true}
                        height={'auto'}
                        width={'auto'}
                        loop
                        playing={true}
                        url={img?.item?.vimeoUrl1}
                      ></ReactPlayer>
                    </div>
                  ) : (
                    <div
                      key={img.item.id}
                      className="relative w-full h-full aspect-[8/5]"
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
                  )}
                  <div
                    key={img.item.id}
                    className="relative  w-full h-full aspect-[8/5]"
                  >
                    {img.item.vimeoUrl2 !== null ? (
                      <div className=" aspect-[8/5]  w-full h-full">
                        <ReactPlayer
                          muted={true}
                          style={{
                            borderRadius: '0.5rem',
                            overflow: 'hidden',
                            position: 'relative',
                            marginBottom: '0.5rem',
                            aspectRatio: '8/5',
                          }}
                          playsinline={true}
                          height={'auto'}
                          width={'auto'}
                          loop
                          playing={true}
                          url={img?.item?.vimeoUrl2}
                        ></ReactPlayer>
                      </div>
                    ) : (
                      <Image
                        fill={true}
                        priority={idx < 3 ? true : false}
                        className="w-full h-full object-cover overflow-hidden rounded-lg"
                        src={`${'https://multiverse-dev-directus.ov3mip.easypanel.host'}/assets/${
                          img.item.image_2.id
                        }`}
                        quality={70}
                        alt={''}
                      />
                    )}
                  </div>
                  <div
                    key={img.item.id}
                    className="relative  w-full h-full aspect-[4/5]"
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
                    {img.item.vimeoUrl3 !== null ? (
                      <div className="  aspect-[4/5] row-span-2  w-full h-full">
                        <ReactPlayer
                          style={{
                            borderRadius: '0.5rem',
                            overflow: 'hidden',
                            position: 'relative',
                            marginBottom: '0.5rem',
                            aspectRatio: '4/5',
                          }}
                          playsinline={true}
                          muted={true}
                          height={'auto'}
                          width={'auto'}
                          loop
                          playing={true}
                          url={img?.item?.vimeoUrl3}
                        ></ReactPlayer>
                      </div>
                    ) : (
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
                    )}
                  </div>
                </div>
              )
            case 'half-half':
              return (
                <div className="grid grid-cols-1 md:grid-cols-2 mb-2 gap-2">
                  {img.item.vimeoUrl1 !== null ? (
                    <div
                      style={{
                        aspectRatio: img?.item.aspect_ratio,
                      }}
                      className="aspect-[5/8] row-span-2  w-full h-full"
                    >
                      <ReactPlayer
                        style={{
                          overflow: 'hidden',
                          position: 'relative',
                          borderRadius: '0.5rem',
                          objectFit: 'cover',
                          aspectRatio: img?.item.aspect_ratio?.replace(
                            '-',
                            '/',
                          ),
                        }}
                        playsinline={true}
                        muted={true}
                        height={'100%'}
                        width={'100%'}
                        loop
                        config={{
                          vimeo: {
                            playerOptions: {},
                          },
                        }}
                        playing={true}
                        url={img?.item?.vimeoUrl1}
                      ></ReactPlayer>
                    </div>
                  ) : (
                    <div
                      style={{
                        aspectRatio: img?.item.aspect_ratio,
                      }}
                      key={img.item.id}
                      className="row-span-2 mb-2 w-full h-full relative"
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
                  )}
                  {img.item.vimeoUrl2 !== null ? (
                    <div
                      style={{
                        aspectRatio: img?.item.aspect_ratio,
                      }}
                      className="  aspect-[5/8] row-span-2 w-full h-full"
                    >
                      <ReactPlayer
                        style={{
                          borderRadius: '0.5rem',
                          overflow: 'hidden',
                          position: 'relative',
                          objectFit: 'cover',
                          aspectRatio: img?.item.aspect_ratio?.replace(
                            '-',
                            '/',
                          ),
                        }}
                        playsinline={true}
                        muted={true}
                        height={'auto'}
                        width={'auto'}
                        loop
                        playing={true}
                        url={img?.item?.vimeoUrl2}
                      ></ReactPlayer>
                    </div>
                  ) : (
                    <div
                      style={{
                        aspectRatio: img?.item.aspect_ratio,
                      }}
                      key={img.item.id}
                      className="row-span-2 mb-2 md:mb-2 w-full h-full relative "
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
                  )}
                </div>
              )
            case 'third-third-third':
              return (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-2 gap-y-2 mb-2 md:mb-2">
                  {img.item.vimeoUrl1 !== null ? (
                    <div className="aspect-square w-full h-full">
                      <ReactPlayer
                        muted={true}
                        style={{
                          borderRadius: '0.5rem',
                          overflow: 'hidden',
                          position: 'relative',
                          marginBottom: '0.5rem',
                          objectFit: 'cover',
                          aspectRatio: '1/1',
                        }}
                        playsinline={true}
                        height={'auto'}
                        width={'auto'}
                        loop
                        playing={true}
                        url={img?.item?.vimeoUrl1}
                      ></ReactPlayer>
                    </div>
                  ) : (
                    <div
                      key={img.item.id}
                      className="relative  h-full w-full mb-2 md:mb-2 aspect-square"
                    >
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
                  )}
                  {img.item.vimeoUrl2 !== null ? (
                    <div className="aspect-square mb-2 md:mb-2 w-full h-full">
                      <ReactPlayer
                        muted={true}
                        style={{
                          borderRadius: '0.5rem',
                          overflow: 'hidden',
                          position: 'relative',
                          marginBottom: '0.5rem',
                          objectFit: 'cover',
                          aspectRatio: '1/1',
                        }}
                        playsinline={true}
                        height={'auto'}
                        width={'auto'}
                        loop
                        playing={true}
                        url={img?.item?.vimeoUrl2}
                      ></ReactPlayer>
                    </div>
                  ) : (
                    <div
                      key={img.item.id}
                      className="relative h-full mb-2 md:mb-2 w-full aspect-square"
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
                  )}
                  {img.item.vimeoUrl3 !== null ? (
                    <div className="aspect-square  mb-2 md:mb-2 w-full h-full">
                      <ReactPlayer
                        muted={true}
                        style={{
                          borderRadius: '0.5rem',
                          overflow: 'hidden',
                          position: 'relative',
                          marginBottom: '0.5rem',
                          objectFit: 'cover',
                          aspectRatio: '1/1',
                        }}
                        playsinline={true}
                        height={'auto'}
                        width={'auto'}
                        loop
                        playing={true}
                        url={img?.item?.vimeoUrl3}
                      ></ReactPlayer>
                    </div>
                  ) : (
                    <div
                      key={img.item.id}
                      className="relative h-full w-full md:mb-2 aspect-square"
                    >
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
                  )}
                </div>
              )
            default:
              return <div className="overflow-hidden rounded-lg my-2"></div>
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
          <Hand
            onClick={() =>
              document.documentElement.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth', // Optional if you want to skip the scrolling animation
              })
            }
            className="object-cover h-[18vh] w-[10vh] cursor-pointer"
          />
        </div>
      </Container>
    </>
  )
}

export default Project
