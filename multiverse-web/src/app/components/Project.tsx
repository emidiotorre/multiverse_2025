"use client";
import React, { useState } from "react";
import Image from "next/image";
import Container from "@/app/components/Container";
import AnimateHeight from "react-animate-height";
import { VideoAutoPlayer } from "./VideoPlayer";
import ReactPlayer from "react-player";
import Hand from "./Hand";
import HandScrollUp from "./HandScrollUp";

type Props = {
  work: any;
};

const Project = ({ work }: Props) => {
  const [isDescriptionOpen, setisDescriptionOpen] = useState(false);

  return (
    <>
      <Container className="font-Sharp_Grotesk_Book25">
        {work?.vimeoUrl !== null ? (
          <VideoAutoPlayer
            src={work?.vimeoUrl}
            showControls={true}
          ></VideoAutoPlayer>
        ) : (
          <></>
        )}
        {work.gallery?.map((img: any, idx: number) => {
          switch (img.item.tipologia) {
            case "full-width":
              return (
                <div
                  key={idx}
                  className="w-full relative mb-2"
                  style={{
                    aspectRatio: img?.item.aspect_ratio,
                  }}
                >
                  {img.item.vimeoUrl1 !== null ? (
                    <div className="w-full h-full">
                      <ReactPlayer
                        style={{
                          overflow: "hidden",
                          position: "relative",
                          marginBottom: "0.5rem",
                          objectFit: "cover",
                          borderRadius: "0.5rem",
                          aspectRatio: img?.item.aspect_ratio,
                        }}
                        playsinline={true}
                        height={"auto"}
                        width={"auto"}
                        loop
                        muted={true}
                        playing={true}
                        url={img?.item?.vimeoUrl1}
                      ></ReactPlayer>
                    </div>
                  ) : (
                    <Image
                      fill={true}
                      priority={idx < 3 ? true : false}
                      className={`object-cover  w-full h-full rounded-lg overflow-hidden`}
                      src={`${"https://multiverse-dev-directus.rizo.tech"}/assets/${
                        img?.item?.image_1?.id
                      }`}
                      quality={80}
                      alt={""}
                    />
                  )}
                </div>
              );
            case "half-split":
              return (
                <div
                  key={idx}
                  className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-2"
                >
                  {img.item.vimeoUrl1 !== null ? (
                    <div className="  aspect-[4/5] row-span-2  w-full h-full">
                      <ReactPlayer
                        style={{
                          overflow: "hidden",
                          borderRadius: "0.5rem",
                          position: "relative",
                          //marginBottom: "0.5rem",
                          objectFit: "cover",
                          width: "100%",
                          height: "100%",
                          //aspectRatio: "4/5",
                        }}
                        playsinline={true}
                        muted={true}
                        height={"100%"}
                        width={"100%"}
                        loop
                        playing={true}
                        url={img?.item?.vimeoUrl1}
                      ></ReactPlayer>
                    </div>
                  ) : (
                    <div className="relative aspect-[4/5] h-full w-full row-span-2 ">
                      <Image
                        fill={true}
                        priority={idx < 3 ? true : false}
                        className=" object-cover rounded-lg  w-full h-full overflow-hidden"
                        src={`${"https://multiverse-dev-directus.rizo.tech"}/assets/${
                          img?.item?.image_1?.id
                        }`}
                        quality={80}
                        alt={""}
                      />
                    </div>
                  )}
                  {img.item.vimeoUrl2 !== null ? (
                    <div className="  aspect-[8/5] w-full h-full">
                      <ReactPlayer
                        style={{
                          borderRadius: "0.5rem",
                          overflow: "hidden",
                          position: "relative",
                          objectFit: "cover",
                          aspectRatio: "8/5",
                        }}
                        playsinline={true}
                        muted={true}
                        height={"auto"}
                        width={"auto"}
                        loop
                        playing={true}
                        url={img?.item?.vimeoUrl2}
                      ></ReactPlayer>
                    </div>
                  ) : (
                    <div className="relative  h-full w-full aspect-[8/5]">
                      <Image
                        fill={true}
                        priority={idx < 3 ? true : false}
                        className=" object-cover  w-full h-full rounded-lg overflow-hidden"
                        src={`${"https://multiverse-dev-directus.rizo.tech"}/assets/${
                          img.item.image_2.id
                        }`}
                        quality={80}
                        alt={""}
                      />
                    </div>
                  )}
                  {img.item.vimeoUrl3 !== null ? (
                    <div className=" aspect-[8/5]  w-full h-full">
                      <ReactPlayer
                        style={{
                          borderRadius: "0.5rem",
                          overflow: "hidden",
                          position: "relative",
                          objectFit: "cover",
                          aspectRatio: "8/5",
                        }}
                        playsinline={true}
                        muted={true}
                        height={"auto"}
                        width={"auto"}
                        loop
                        playing={true}
                        url={img?.item?.vimeoUrl3}
                      ></ReactPlayer>
                    </div>
                  ) : (
                    <div className=" relative h-full w-full aspect-[8/5]">
                      <Image
                        fill={true}
                        priority={idx < 3 ? true : false}
                        className=" object-cover  w-full h-full rounded-lg overflow-hidden"
                        src={`${"https://multiverse-dev-directus.rizo.tech"}/assets/${
                          img.item.image_3.id
                        }`}
                        quality={80}
                        alt={""}
                      />
                    </div>
                  )}
                </div>
              );

            case "split-half":
              return (
                <div
                  key={idx}
                  className="flex flex-col md:flex-row  gap-2 mb-2"
                >
                  <div className="flex flex-col gap-2 md:w-1/2">
                    {img.item.vimeoUrl1 !== null ? (
                      <div className="aspect-[8/5] w-full h-full">
                        <ReactPlayer
                          muted={true}
                          style={{
                            borderRadius: "0.5rem",
                            overflow: "hidden",
                            position: "relative",
                            objectFit: "cover",
                            aspectRatio: "8/5",
                          }}
                          playsinline={true}
                          height={"auto"}
                          width={"auto"}
                          loop
                          playing={true}
                          url={img?.item?.vimeoUrl1}
                        ></ReactPlayer>
                      </div>
                    ) : (
                      <div className="relative w-full h-full aspect-[8/5]">
                        <Image
                          fill={true}
                          priority={idx < 3 ? true : false}
                          className="w-full h-full object-cover rounded-lg overflow-hidden"
                          src={`${"https://multiverse-dev-directus.rizo.tech"}/assets/${
                            img.item.image_1.id
                          }`}
                          quality={80}
                          alt={""}
                        />
                      </div>
                    )}
                    <div className="relative  w-full h-full aspect-[8/5]">
                      {img.item.vimeoUrl2 !== null ? (
                        <div className=" aspect-[8/5]  w-full h-full">
                          <ReactPlayer
                            muted={true}
                            style={{
                              borderRadius: "0.5rem",
                              overflow: "hidden",
                              position: "relative",
                              //marginBottom: '0.5rem',
                              aspectRatio: "8/5",
                            }}
                            playsinline={true}
                            height={"auto"}
                            width={"auto"}
                            loop
                            playing={true}
                            url={img?.item?.vimeoUrl2}
                          ></ReactPlayer>
                        </div>
                      ) : (
                        <Image
                          fill={true}
                          priority={idx < 3 ? true : false}
                          className="w-full h-full object-cover overflow-hidden rounded-lg"
                          src={`${"https://multiverse-dev-directus.rizo.tech"}/assets/${
                            img.item.image_2.id
                          }`}
                          quality={80}
                          alt={""}
                        />
                      )}
                    </div>
                  </div>
                  <div className="flex aspect-[4/5] md:w-[calc(50%)] overflow-hidden rounded-lg">
                    {img.item.vimeoUrl3 !== null ? (
                      <div className="   w-full h-full">
                        <ReactPlayer
                          style={{
                            borderRadius: "0.5rem",
                            overflow: "hidden",
                            position: "relative",
                            //marginBottom: '0.5rem',
                            width: "100%",
                            height: "100%",
                            //aspectRatio: "4/5",
                          }}
                          playsinline={true}
                          muted={true}
                          height={"100%"}
                          width={"100%"}
                          loop
                          playing={true}
                          url={img?.item?.vimeoUrl3}
                        ></ReactPlayer>
                      </div>
                    ) : (
                      <div className="relative w-full h-full aspect-[4/5]">
                        <Image
                          fill={true}
                          priority={idx < 3 ? true : false}
                          className=" w-full h-full object-cover rounded-lg overflow-hidden"
                          src={`${"https://multiverse-dev-directus.rizo.tech"}/assets/${
                            img.item.image_3.id
                          }`}
                          quality={80}
                          alt={""}
                        />
                      </div>
                    )}
                  </div>
                </div>
              );
            case "half-half":
              return (
                <div
                  key={idx}
                  className="grid grid-cols-1 md:grid-cols-2 mb-2 gap-2"
                >
                  {img.item.vimeoUrl1 !== null ? (
                    <div
                      style={{
                        aspectRatio: img?.item.aspect_ratio,
                      }}
                      className=" row-span-2  w-full h-full"
                    >
                      <ReactPlayer
                        style={{
                          overflow: "hidden",
                          position: "relative",
                          borderRadius: "0.5rem",
                          objectFit: "cover",
                          aspectRatio: img?.item.aspect_ratio,
                        }}
                        playsinline={true}
                        muted={true}
                        height={"100%"}
                        width={"100%"}
                        loop
                        playing={true}
                        url={img?.item?.vimeoUrl1}
                      ></ReactPlayer>
                    </div>
                  ) : (
                    <div
                      style={{
                        aspectRatio: img?.item.aspect_ratio,
                      }}
                      className="row-span-2  w-full h-full relative"
                    >
                      <Image
                        fill={true}
                        priority={idx < 3 ? true : false}
                        className="w-full h-full object-cover rounded-lg"
                        src={`${"https://multiverse-dev-directus.rizo.tech"}/assets/${
                          img.item.image_1.id
                        }`}
                        quality={80}
                        alt={""}
                      />
                    </div>
                  )}
                  {img.item.vimeoUrl2 !== null ? (
                    <div
                      style={{
                        aspectRatio: img?.item.aspect_ratio,
                      }}
                      className=" row-span-2 w-full h-full"
                    >
                      <ReactPlayer
                        style={{
                          borderRadius: "0.5rem",
                          overflow: "hidden",
                          position: "relative",
                          objectFit: "cover",
                          aspectRatio: img?.item.aspect_ratio,
                        }}
                        playsinline={true}
                        muted={true}
                        height={"auto"}
                        width={"auto"}
                        loop
                        playing={true}
                        url={img?.item?.vimeoUrl2}
                      ></ReactPlayer>
                    </div>
                  ) : (
                    <div
                      style={{
                        aspectRatio: img?.item.aspect_ratio,
                      }}
                      className="row-span-2   w-full h-full relative "
                    >
                      <Image
                        fill={true}
                        priority={idx < 3 ? true : false}
                        className="w-full h-full object-cover rounded-lg"
                        src={`${"https://multiverse-dev-directus.rizo.tech"}/assets/${
                          img.item.image_2.id
                        }`}
                        quality={80}
                        alt={""}
                      />
                    </div>
                  )}
                </div>
              );
            case "third-third-third":
              return (
                <div
                  key={idx}
                  className="flex justify-between flex-col md:flex-row gap-x-2 gap-y-2 mb-2 md:mb-2"
                >
                  {img.item.vimeoUrl1 !== null ? (
                    <div className="aspect-square w-full h-full">
                      <ReactPlayer
                        muted={true}
                        style={{
                          borderRadius: "0.5rem",
                          overflow: "hidden",
                          position: "relative",
                          //marginBottom: "0.5rem",
                          objectFit: "cover",
                          aspectRatio: "1/1",
                        }}
                        playsinline={true}
                        height={"100%"}
                        width={"auto"}
                        loop
                        playing={true}
                        url={img?.item?.vimeoUrl1}
                      ></ReactPlayer>
                    </div>
                  ) : (
                    <div className="relative  h-full w-full aspect-square">
                      <Image
                        fill={true}
                        priority={idx < 3 ? true : false}
                        className="w-full h-full object-cover  rounded-lg"
                        src={`${"https://multiverse-dev-directus.rizo.tech"}/assets/${
                          img.item.image_1.id
                        }`}
                        quality={80}
                        alt={""}
                      />
                    </div>
                  )}
                  {img.item.vimeoUrl2 !== null ? (
                    <div className="aspect-square w-full h-full">
                      <ReactPlayer
                        muted={true}
                        style={{
                          borderRadius: "0.5rem",
                          overflow: "hidden",
                          position: "relative",
                          //marginBottom: "0.5rem",
                          objectFit: "cover",
                          aspectRatio: "1/1",
                        }}
                        playsinline={true}
                        height={"100%"}
                        width={"auto"}
                        loop
                        playing={true}
                        url={img?.item?.vimeoUrl2}
                      ></ReactPlayer>
                    </div>
                  ) : (
                    <div className="relative h-full   w-full aspect-square">
                      <Image
                        fill={true}
                        priority={idx < 3 ? true : false}
                        className="w-full h-full object-cover rounded-lg"
                        src={`${"https://multiverse-dev-directus.rizo.tech"}/assets/${
                          img.item.image_2.id
                        }`}
                        quality={80}
                        alt={""}
                      />
                    </div>
                  )}
                  {img.item.vimeoUrl3 !== null ? (
                    <div className="aspect-square w-full h-full">
                      <ReactPlayer
                        muted={true}
                        style={{
                          borderRadius: "0.5rem",
                          overflow: "hidden",
                          position: "relative",
                          //marginBottom: "0.5rem",
                          objectFit: "cover",
                          aspectRatio: "1/1",
                        }}
                        playsinline={true}
                        height={"100%"}
                        width={"auto"}
                        loop
                        playing={true}
                        url={img?.item?.vimeoUrl3}
                      ></ReactPlayer>
                    </div>
                  ) : (
                    <div className="relative h-full w-full aspect-square">
                      <Image
                        fill={true}
                        priority={idx < 3 ? true : false}
                        className="w-full h-full object-cover rounded-lg"
                        src={`${"https://multiverse-dev-directus.rizo.tech"}/assets/${
                          img.item.image_3.id
                        }`}
                        quality={80}
                        alt={""}
                      />
                    </div>
                  )}
                </div>
              );
            default:
              return <div className="overflow-hidden rounded-lg my-2"></div>;
          }
        })}
        {work.Body && (
          <div className="grid md:grid-cols-3 gap-4 mt-7 z-30">
            <div
              className="cursor-pointer"
              onClick={() => setisDescriptionOpen(!isDescriptionOpen)}
            >
              {isDescriptionOpen ? (
                <div> - Project Information</div>
              ) : (
                <div> + Project Information</div>
              )}
            </div>
            <AnimateHeight
              className={`col-span-2 overflow-hidden text-sm`}
              height={isDescriptionOpen ? "auto" : 0}
              duration={600}
            >
              <div dangerouslySetInnerHTML={{ __html: work.Body }}></div>
              <div className="pt-32 grid grid-cols-2 divide-x-0">
                {work?.Credits?.map((credit: any, idx: number) => {
                  return (
                    <>
                      <div className="border-none" key={idx}>
                        <div>{credit.Credit_Category}</div>
                      </div>
                      <div className="border-none">
                        <div>{credit.Credit_Value}</div>
                      </div>
                    </>
                  );
                })}
              </div>
            </AnimateHeight>
          </div>
        )}
        <HandScrollUp />
      </Container>
    </>
  );
};

export default Project;
