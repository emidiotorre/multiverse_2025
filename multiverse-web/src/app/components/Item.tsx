import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

type Props = {
  id: number
  body: string
  url: string
  image_url: string
  style?: any
}

function Item(props: Props) {
  return (
    <div className="relative  overflow-hidden self-stretch" style={props.style}>
      <Link href={`${props.url}`} key={props.id} className="contents">
        <Image
          src={props.image_url}
          width={800}
          height={800}
          className="object-cover w-full h-full rounded-lg"
          alt={''}
          quality={75}
        />
        <div className="text-black text-4xl pt-6 pl-10 absolute">
          <div
            dangerouslySetInnerHTML={{ __html: props.body }}
            className="absolute"
          />
        </div>
      </Link>
    </div>
  )
}

export default Item
