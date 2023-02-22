"use client";
import React, { useState } from "react";
import Image from "next/image";
import Up from "../../../public/materiale/UP.png";
import Item from "./Item";
import getGridAreaFromIndex from "../utils/getGridAreaFromIndex";

import Gallery from "./Gallery";

type Props = {
  plays: any[];
};

//const maxLetter = 'O'

function PlaysGrid({ plays }: Props) {
  return (
    <>
      {/* <div className="columns-2 gap-3 w-auto mx-auto space-y-3 pb-28"> */}
      <Gallery style={{ "column-width": "200px" }}>
        {plays &&
          plays.map((playsElement: any, idx: number) => {
            return (
              <div key={idx}>
                {playsElement.map((play: any, indx: number) => {
                  // const letterGridElement = getGridAreaFromIndex(
                  //   indx,
                  //   maxLetter,
                  // )
                  return (
                    <li key={"subgrid_item_" + indx} className="photo-item">
                      <Item
                        id={play.id}
                        image_url={`${"https://multiverse-dev-directus.ov3mip.easypanel.host"}/assets/${
                          play.image.id
                        }`}
                        url={play.url}
                        body={play.body}
                      ></Item>
                    </li>
                  );
                })}
              </div>
            );
          })}
      </Gallery>
      {/* </div> */}
      <div className="flex justify-end py-10">
        <Image
          onClick={() =>
            document.documentElement.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            })
          }
          className="object-cover h-[18vh] w-[10vh] "
          src={Up}
          alt={""}
          quality={100}
        />
      </div>
    </>
  );
}
export default PlaysGrid;
