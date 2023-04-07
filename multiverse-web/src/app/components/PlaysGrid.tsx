'use client'
import React, { useState } from 'react'
import Item from './Item'

import Gallery from './Gallery'
import Hand from './Hand'

type Props = {
  play_page: any
  plays: any[]
}

function PlaysGrid(props: Props) {
  return (
    <>
      <div key={props.play_page.id} className="flex justify-center mt-6">
        <div className="font-sans max-w-[62%] md:max-w-[41%] lg:max-w-[50%] text-3xl md:text-7xl md:mt-20 break-words font-semibold text-center">
          <h1 dangerouslySetInnerHTML={{ __html: props.play_page.title }} />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="font-mono break-words max-w-[70%] md:max-w-[32%] text-xs md:text-sm font-light my-32 text-center">
          <h1 dangerouslySetInnerHTML={{ __html: props.play_page.subtitle }} />
        </div>
      </div>
      <Gallery>
        {props?.plays?.map((play: any, idx: number) => {
          return (
            <Item
              id={idx}
              height={play.image.height}
              width={play.image.width}
              key={'subgrid_item_' + idx}
              image_url={`${'https://multiverse-dev-directus.ov3mip.easypanel.host'}/assets/${
                play?.image?.id
              }`}
              body={play.body}
            ></Item>
          )
        })}
      </Gallery>
      <div className="flex justify-end py-10 md:py-20">
        <Hand
          onClick={() =>
            document.documentElement.scrollTo({
              top: 0,
              left: 0,
              behavior: 'smooth',
            })
          }
          className="object-cover h-[18vh] w-[10vh] cursor-pointer "
        />
      </div>
    </>
  )
}
export default PlaysGrid
