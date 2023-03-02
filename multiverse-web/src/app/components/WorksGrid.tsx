"use client";
import React from "react";
import Card from "./Card";
import Image from "next/image";
import Up from "../../../public/materiale/UP.png";
import { useMediaQuery } from "usehooks-ts";
import Marquee from "react-fast-marquee";

type Props = {
  blocks: any[];
};

function WorksGrid({ blocks }: Props) {
  const matches = useMediaQuery("(max-width: 768px)");
  return (
    <>
      <div className="my-10">
        <Marquee gradient={false} speed={100} style={{ overflowY: "hidden" }}>
          <h3 className="text-5xl">LOREM IPSUM</h3>
        </Marquee>
      </div>
      {blocks &&
        blocks
          .sort((a, b) =>
            a.item.work1.date_created < b.item.work1.date_created ? -1 : 1
          )
          .map((block: any, idx: number) => {
            switch (block.item.tipologia) {
              case "half-split":
                return (
                  <div className="grid grid-cols-2 gap-x-2 gap-y-2">
                    <div className="row-span-2">
                      <Card
                        height={block.item.work1.image.height}
                        width={block.item.work1.image.width}
                        key={idx}
                        id={block.item.work1.image.id}
                        image_url={`${"https://multiverse-dev-directus.ov3mip.easypanel.host"}/assets/${
                          block.item.work1.image.id
                        }`}
                        slug={block.item.work1.slug}
                        Name={block.item.work1.Name}
                      ></Card>
                    </div>
                    <div>
                      <Card
                        height={block.item.work1.image.height}
                        width={block.item.work1.image.width}
                        key={idx}
                        id={block.item.work2.image.id}
                        image_url={`${"https://multiverse-dev-directus.ov3mip.easypanel.host"}/assets/${
                          block.item.work2.image.id
                        }`}
                        slug={block.item.work2.slug}
                        Name={block.item.work2.Name}
                      ></Card>
                    </div>
                    <div>
                      <Card
                        height={block.item.work1.image.height}
                        width={block.item.work1.image.width}
                        key={idx}
                        id={block.item.work3.image.id}
                        image_url={`${"https://multiverse-dev-directus.ov3mip.easypanel.host"}/assets/${
                          block.item.work3.image.id
                        }`}
                        slug={block.item.work3.slug}
                        Name={block.item.work3.Name}
                      ></Card>
                    </div>
                  </div>
                );
              case "half-half":
                return (
                  <div className="grid grid-cols-2 gap-x-2 gap-y-2">
                    <div className="row-span-2 my-2">
                      <Card
                        key={idx}
                        id={block.item.work1.image.id}
                        image_url={`${"https://multiverse-dev-directus.ov3mip.easypanel.host"}/assets/${
                          block.item.work1.image.id
                        }`}
                        slug={block.item.work1.slug}
                        Name={block.item.work1.Name}
                        height={block.item.work1.image.height}
                        width={block.item.work1.image.width}
                      ></Card>
                      <div className="row-span-2 my-2">
                        <Card
                          height={block.item.work1.image.height}
                          width={block.item.work1.image.width}
                          key={idx}
                          id={block.item.work2.image.id}
                          image_url={`${"https://multiverse-dev-directus.ov3mip.easypanel.host"}/assets/${
                            block.item.work2.image.id
                          }`}
                          slug={block.item.work2.slug}
                          Name={block.item.work2.Name}
                        ></Card>
                      </div>
                    </div>
                  </div>
                );
            }
          })}
      <div className=" flex justify-end py-10">
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

export default WorksGrid;
