'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Up from '../../../public/materiale/UP.png'
import Item from './Item'

import Gallery from './Gallery'

type Props = {
  plays: any[]
}

function PlaysGrid({ plays }: Props) {
  return (
    <>
      <div className="flex justify-center">
        <div className="font-sans text-3xl md:text-5xl font-semibold text-center max-w-[60%] md:max-w-[19.5%]">
          <h1>all work and no play makes multiverse a bad agency</h1>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="font-sans text-[1vh] max-w-[80%] md:max-w-[21%] md:text-xs font-light my-10 text-center">
          <h1>
            In this page you will find experiments with new forms of design
            technology & moving image
          </h1>
        </div>
      </div>
      <Gallery>
        {plays &&
          plays.map((play: any, idx: number) => {
            return (
              <Item
                id={play.id}
                height={play.image.height}
                width={play.image.width}
                key={'subgrid_item_' + idx}
                image_url={`${'https://multiverse-dev-directus.ov3mip.easypanel.host'}/assets/${
                  play.image.id
                }`}
                url={play.url}
                body={play.body}
              ></Item>
            )
          })}
      </Gallery>
      <div className="flex justify-end py-10">
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
    </>
  )
}
export default PlaysGrid
