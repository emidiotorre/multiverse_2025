import Link from 'next/link'
import React from 'react'

type Props = {
  id: number
  title: string
  slug: string
  image_url: string
}

const Card = (props: Props) => {
  return (
    <div className="relative rounded-lg overflow-hidden self-stretch">
      <Link href={`/works/${props.slug}`} key={props.id} className="contents">
        <div className="absolute top-0 left-0 w-full h-full z-10 opacity-0 hover:opacity-90 hover:bg-red-500">
          <div className="text-black text-4xl pt-6 pl-10 absolute">
            <h1 className="absolute">{props.title}</h1>
          </div>
        </div>
        <img src={props.image_url} className="object-cover w-full h-full  " />
      </Link>
    </div>
  )
}

export default Card
