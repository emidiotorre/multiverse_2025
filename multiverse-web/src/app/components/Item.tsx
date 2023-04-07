import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

type Props = {
  id: number
  height: number
  width: number
  body: string
  image_url: string
  style?: any
}

function Item(props: Props) {
  return (
    <div
      className={`grid-item absolute max-w-[80vw] block mb-5`}
      style={{
        ...props.style,
        width: props.width / 3,
      }}
    >
      <Image
        src={props.image_url}
        className={`rounded-lg `}
        alt={''}
        quality={80}
        height={props.height / 3}
        width={props.width / 3}
      />
      <div className="absolute -bottom-4 flex justify-start font-Sharp_Grotesk_Book25">
        <div
          className="text-black text-[10px] "
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
      </div>
    </div>
  )
}

export default Item
