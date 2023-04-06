import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
  id: number
  Name: string
  slug: string
  image_url: string
  style?: any
  height: number
  width: number
}

const Card = (props: Props) => {
  return (
    <div
      className="relative overflow-hidden rounded-lg w-full h-full"
      style={props.style}
    >
      <Link
        as={`/works/${props.slug}`}
        href={props.slug ? `/works/[slug]` : '/'}
        key={props.id}
        className="contents"
      >
        <div className="absolute top-0 left-0 w-full h-full z-10 opacity-0 hover:opacity-90 hover:bg-[#F40000]">
          <div className="text-black text-4xl pt-6 pl-10 absolute">
            <h1 className="absolute">{props.Name}</h1>
          </div>
        </div>
        <Image
          className="w-full h-full object-cover rounded-lg"
          height={props.height}
          width={props.width}
          src={props.image_url}
          alt={''}
          quality={100}
        />
      </Link>
    </div>
  )
}

export default Card
