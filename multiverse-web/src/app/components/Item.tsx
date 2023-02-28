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
      className={`grid-item absolute block overflow-hidden mb-5`}
      style={{
        ...props.style,
        height: props.height / 3,
        width: props.width / 3,
      }}
    >
      <Link href={`${props.url}`} key={props.id} className="contents">
        <Image
          src={props.image_url}
          className={`rounded-lg `}
          alt={''}
          quality={100}
          fill={true}
        />
        <div className="flex justify-start">
          <div
            className="text-black text-[10px] "
            dangerouslySetInnerHTML={{ __html: props.body }}
          />
        </div>
      </Link>
    </div>
  )
}

export default Item
