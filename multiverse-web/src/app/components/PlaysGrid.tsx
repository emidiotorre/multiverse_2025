'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Up from '../../../public/materiale/UP.png'
import Item from './Item'
import getGridAreaFromIndex from '../utils/getGridAreaFromIndex'

import Gallery from './Gallery'

type Props = {
  plays: any[]
}

//const maxLetter = 'O'

function PlaysGrid({ plays }: Props) {
  return (
    <>
      {/* <div className="columns-2 gap-3 w-auto mx-auto space-y-3 pb-28"> */}
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
      {/* </div> */}
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
