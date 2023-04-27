"use client";
import React from "react";
import Image from "next/image";
import Container from "./Container";
import Marquee from "react-fast-marquee";
import { useMediaQuery } from "usehooks-ts";
import HandScrollUp from "./HandScrollUp";

type Props = {
  blocks: any[];
};

const AboutComponent = ({ blocks }: Props) => {
  const matches = useMediaQuery("(min-width: 768px)");

  return (
    <>
      {!matches ? (
        <div className="my-5 decoration-[#F40000]">
          <Marquee
            gradient={false}
            speed={80}
            style={{ overflowY: "hidden", color: "#F40000" }}
          >
            <h3 className="  text-6xl font-bold uppercase ">
              &nbsp;Enter The Dungeon
            </h3>
            <h3 className="  text-6xl font-bold uppercase">
              &nbsp;Enter The Dungeon
            </h3>
          </Marquee>
        </div>
      ) : (
        <></>
      )}
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:nth-child-2:col-span-2 md:nth-child-3:row-span-2 md:nth-child-6:row-span-2">
          {blocks &&
            blocks.map((block: any, idx: number) => {
              switch (block.item.type) {
                case "TextBlock":
                  if (block.item.columns === 2) {
                    return (
                      <div
                        key={idx}
                        style={{ background: block.item.background_color }}
                        className=" h-full w-full flex justify-between flex-col rounded-lg "
                      >
                        <h3 className="font-extrabold text-xl md:text-3xl mx-6 pt-6">
                          {block.item.Title}
                        </h3>
                        <div
                          className="font-Sharp_Grotesk_Medium20 pt-8 text-lg lg:font-medium lg:gap-x-10 mx-6 grid grid-cols-1 lg:grid-cols-2 md:divide-x-0 mb-10"
                          dangerouslySetInnerHTML={{
                            __html: block.item.Body,
                          }}
                        ></div>
                      </div>
                    );
                  } else if (block.item.columns === 1) {
                    return (
                      <div
                        key={idx}
                        style={{ background: block.item.background_color }}
                        className=" h-full w-full flex justify-between flex-col rounded-lg"
                      >
                        <h3 className="font-extrabold text-xl md:text-3xl mx-6 pt-6">
                          {block.item.Title}
                        </h3>
                        <div>
                          <div
                            key={idx}
                            className="font-Sharp_Grotesk_Medium20 mx-6 pt-8 mb-10 text-lg"
                            dangerouslySetInnerHTML={{
                              __html: block.item.Body,
                            }}
                          ></div>
                        </div>
                      </div>
                    );
                  }
                case "ImageBlock":
                  return (
                    <>
                      {!matches && idx === 0 ? (
                        <div
                          className=" -ml-32 bg-cover w-[40rem] h-auto  "
                          key={idx}
                        >
                          <Image
                            className={
                              " w-full max-w-full rounded-lg overflow-hidden"
                            }
                            src={`${"https://multiverse-dev-directus.rizo.tech"}/assets/${
                              block?.item?.image_mobile?.id
                            }`}
                            priority={true}
                            alt={""}
                            quality={80}
                            height={block.item.image.height}
                            width={block.item.image.width}
                          />
                        </div>
                      ) : (
                        <div className="w-full h-full" key={idx}>
                          <Image
                            className={
                              "object-cover h-full w-full rounded-lg overflow-hidden"
                            }
                            src={`${"https://multiverse-dev-directus.rizo.tech"}/assets/${
                              block.item.image.id
                            }`}
                            alt={""}
                            priority={idx < 3}
                            quality={80}
                            height={block.item.image.height}
                            width={block.item.image.width}
                          />
                        </div>
                      )}
                    </>
                  );
              }
            })}
        </div>
        <HandScrollUp />
      </Container>
    </>
  );
};

export default AboutComponent;
