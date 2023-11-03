"use client"
import React from "react";
import Image from "next/image";
import { VideoAutoPlayer } from "./VideoPlayer";

type Props = {
  id: number;
  height?: number;
  width?: number;
  body: string;
  image_url?: string;
  video_url?: string;
  style?: any;
};

function Item(props: Props) {
  return (
    <div
      className={`grid-item relative max-w-[80vw] block mb-5`}
      style={{
        ...props.style,
       /*  width: (props.width ?? 1200) / 3, */
      }}
    >
      {props.video_url && (
        <VideoAutoPlayer src={props.video_url} showControls={false} />
      )}
      {props.image_url && !props.video_url && (
        <Image
          src={props.image_url}
          className={`rounded-lg `}
          alt={""}
          quality={80}
          height={(props.height ?? 1200) / 3}
          width={(props.width ?? 1200) / 3} 
        />
      )}
      <div className="absolute -bottom-4 flex justify-start font-Sharp_Grotesk_Book25">
        <div
          className="text-black text-[10px] "
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
      </div>
    </div>
  );
}

export default Item;
