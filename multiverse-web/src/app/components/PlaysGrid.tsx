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
        <div className="font-sans text-5xl font-semibold text-center">
          <h1 className="">all work</h1>
          <h1>and no play</h1>
          <h1>makes</h1>
          <h1>multiverse</h1>
          <h1>a bad agency</h1>
        </div>
      </div>

      <div className="font-sans text-xl font-light my-10 text-center">
        <h1 className="">In this page you will find </h1>
        <h1>experiments with new forms</h1>
        <h1>makes</h1>
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
