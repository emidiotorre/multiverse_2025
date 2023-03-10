import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

type Props = {
  id: number
  height: number
  width: number
  body: string
  url: string
  image_url: string
  style?: any
}

function Item(props: Props) {
  return (
    <div
      className={`grid-item absolute block max-w-[80vw] mb-5`}
      style={{
        ...props.style,
        height: props.height / 3 + 20,
        width: props.width / 3,
      }}
    >
      <Link href={`${props.url}`} key={props.id} className="contents">
        <Image
          src={props.image_url}
          className={`rounded-lg `}
          alt={''}
          quality={100}
          height={props.height / 3}
          width={props.width / 3}
        />
      </Link>
      <div className="absolute -bottom-2 flex justify-start">
        <div
          className="text-black text-[10px] "
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
      </div>
    </div>
  )
}

export default Item
