'use client'
import React from 'react'
import Image from 'next/image'
import Up from '../../../public/materiale/UP.png'
import Container from './Container'

type Props = {
  blocks: any[]
}

const AboutComponent = ({ blocks }: Props) => {
  return (
    <>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:nth-child-2:col-span-2 md:nth-child-3:row-span-2 md:nth-child-7:row-span-2">
          {blocks &&
            blocks.map((block: any, idx: number) => {
              switch (block.item.type) {
                case 'TextBlock':
                  if (block.item.columns === 2) {
                    return (
                      <div className="bg-gray-200 h-full w-full flex justify-between flex-col rounded-lg ">
                        <h3 className="font-extrabold text-xl md:text-3xl mx-6 pt-6">
                          {block.item.Title}
                        </h3>
                        <div
                          key={idx}
                          className="pt-8 text-xl lg:font-medium lg:gap-x-10 mx-6 grid grid-cols-1 lg:grid-cols-2 md:divide-x-0 mb-10"
                          dangerouslySetInnerHTML={{
                            __html: block.item.Body,
                          }}
                        ></div>
                      </div>
                    )
                  } else if (block.item.columns === 1) {
                    const BgPostIt = `${
                      idx === 7 ? 'bg-[#F40000]' : 'bg-gray-200'
                    }  h-full w-full flex justify-between flex-col rounded-lg`
                    return (
                      <div className={BgPostIt}>
                        <h3 className="font-extrabold text-xl md:text-3xl mx-6  pt-6">
                          {block.item.Title}
                        </h3>
                        <div>
                          <div
                            key={idx}
                            className="mx-6 pt-8 mb-10 lg:text-2xl"
                            dangerouslySetInnerHTML={{
                              __html: block.item.Body,
                            }}
                          ></div>
                        </div>
                      </div>
                    )
                  }
                case 'ImageBlock':
                  return (
                    <div className="" key={idx}>
                      <Image
                        className="object-cover w-full h-full rounded-lg overflow-hidden"
                        src={`${'https://multiverse-dev-directus.ov3mip.easypanel.host'}/assets/${
                          block.item.image.id
                        }`}
                        alt={''}
                        quality={100}
                        height={block.item.image.height}
                        width={block.item.image.width}
                      />
                    </div>
                  )
              }
            })}
        </div>
      </Container>
      <div className="flex justify-end py-10">
        <Image
          onClick={() =>
            document.documentElement.scrollTo({
              top: 0,
              left: 0,
              behavior: 'smooth',
            })
          }
          className="object- h-[18vh] w-[10vh] "
          src={Up}
          alt={''}
          quality={100}
          height="100"
        />
      </div>
    </>
  )
}

export default AboutComponent
