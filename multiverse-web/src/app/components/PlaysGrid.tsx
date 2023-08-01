"use client";
import React, { useState } from "react";
import Item from "./Item";

import Gallery from "./Gallery";
import Hand from "./Hand";
import HandScrollUp from "./HandScrollUp";

type Props = {
  play_page: any;
  plays: any[];
};

function PlaysGrid(props: Props) {
  return (
    <>
      <div key={props.play_page.id} className="flex justify-center mt-6">
        <div className="font-sans  text-3xl md:text-7xl md:mt-20 break-words font-semibold text-center">
          <h1 dangerouslySetInnerHTML={{ __html: props.play_page.title }} />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="font-mono break-words max-w-[70%] md:max-w-[32%] text-xs md:text-sm font-light my-10 md:my-32 text-center">
          <h1 dangerouslySetInnerHTML={{ __html: props.play_page.subtitle }} />
        </div>
      </div>
      <Gallery>
        {props?.plays?.map((play: any, idx: number) => {
          return (
            <Item
              id={idx}
              height={play?.image?.height}
              width={play?.image?.width}
              key={"subgrid_item_" + idx}
              image_url={`${"https://multiverse-dev-directus.rizo.tech"}/assets/${
                play?.image?.id
              }`}
              video_url={play.videoUrl}
              body={play.body}
            ></Item>
          );
        })}
      </Gallery>
      <HandScrollUp />
    </>
  );
}
export default PlaysGrid;
