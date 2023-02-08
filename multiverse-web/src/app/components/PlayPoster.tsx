import Link from 'next/link'
import React from 'react'

type Props = {
  id: number
  body: string
  url: string
  image_url: string
  style?: any
}

const PlayPoster = (props: Props) => {
  return (
    <div
      className="relative rounded-lg overflow-hidden self-stretch"
      style={props.style}
    >
      <Link href={`${props.url}`} key={props.id} className="contents">
        <img src={props.image_url} className="object-cover w-full h-full" />
        <div className="text-black text-4xl pt-6 pl-10 absolute">
          <p
            dangerouslySetInnerHTML={{ __html: props.body }}
            className="absolute"
          >
            {props.body}
          </p>
        </div>
      </Link>
    </div>
  )
}

export default PlayPoster
