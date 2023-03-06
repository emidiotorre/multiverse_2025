"use client";
import React from "react";
import Image from "next/image";
import Up from "../../../public/materiale/UP.png";
import Container from "./Container";

type Props = {
  blocks: any[];
};

const AboutComponent = ({ blocks }: Props) => {
  return (
    <>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:nth-child-2:col-span-2 md:nth-child-3:row-span-2 md:nth-child-7:row-span-2">
          {blocks &&
            blocks.map((block: any, idx: number) => {
              switch (block.item.type) {
                case "TextBlock":
                  if (block.item.columns === 2) {
                    return (
                      <div className="bg-gray-200 h-full w-full flex justify-between flex-col rounded-lg ">
                        <h3 className="font-extrabold text-xl md:text-3xl mx-6 pt-6">
                          {block.item.Title}
                        </h3>
                        <div
                          key={idx}
                          className="pt-8 lg:font-medium lg:gap-x-10 mx-6 grid grid-cols-1 lg:grid-cols-2 md:divide-x-0 mb-10"
                          dangerouslySetInnerHTML={{
                            __html: block.item.Body,
                          }}
                        ></div>
                      </div>
                    );
                  } else if (block.item.columns === 1) {
                    return (
                      <div className="bg-gray-200 h-full w-full flex justify-between flex-col rounded-lg">
                        <h3 className="font-extrabold text-xl md:text-3xl mx-6  pt-6">
                          {block.item.Title}
                        </h3>
                        <div>
                          <div
                            className="mx-6 pt-8 mb-10 lg:text-2xl"
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
                    <div className="" key={idx}>
                      <Image
                        className="object-cover w-full h-full rounded-lg overflow-hidden"
                        src={`${"https://multiverse-dev-directus.ov3mip.easypanel.host"}/assets/${
                          block.item.image.id
                        }`}
                        alt={""}
                        quality={100}
                        height={block.item.image.height}
                        width={block.item.image.width}
                      />
                    </div>
                  );
              }
            })}
        </div>
      </Container>
      <div className="flex justify-end py-10">
        <Image
          onClick={() =>
            document.documentElement.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            })
          }
          className="object- h-[18vh] w-[10vh] "
          src={Up}
          alt={""}
          quality={100}
          height="100"
        />
      </div>
    </>
    /*  <div className="rounded-lg overflow-hidden" style={{ gridArea: 'A' }}>
          <img
            className="object-contain h-[80vh] w-full"
            src={`${'../materiale/about/img_1.png'}`}
          ></img>
        </div>
        <div className="rounded-lg overflow-hidden" style={{ gridArea: 'B' }}>
          <img
            className="object-cover h-full w-full"
            src={`${'../materiale/about/img_2.png'}`}
          ></img>
        </div>
        <div className="rounded-lg overflow-hidden" style={{ gridArea: 'C' }}>
          <img
            className="object-cover h-full w-full"
            src={`${'../materiale/about/img_3.png'}`}
          ></img>
        </div>
        <div className="rounded-lg overflow-hidden " style={{ gridArea: 'D' }}>
          <div className="bg-gray-200 h-full w-full flex justify-between flex-col">
            <h3 className="font-extrabold text-3xl  mx-6 pt-6 ">studio</h3>
            <div className=" mx-6 pt-8 mb-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              ac ornare sem. Morbi tristique nisl suscipit ante placerat auctor.
              Etiam dolor dolor, consectetur cursus nulla non, tincidunt mollis
              lorem. Nulla sodales, elit nec tempus imperdiet, arcu leo laoreet
              nisi, mollis vestibulum arcu arcu id quam. Aliquam ut ante purus.
              Pellentesque ultricies nunc at purus pellentesque malesuada.
            </div>
          </div>
        </div>
        <div className="rounded-lg overflow-hidden" style={{ gridArea: 'E' }}>
          <img
            className="object-cover h-full w-full"
            src={`${'../materiale/about/img_4.png'}`}
          ></img>
        </div>
        <div className="rounded-lg overflow-hidden" style={{ gridArea: 'F' }}>
          <div className="bg-gray-200 h-full w-full  flex justify-between flex-col">
            <h3 className="font-extrabold text-3xl mx-6  pt-6 ">clients</h3>
            <div className="font-medium gap-x-10 mx-6 grid grid-cols-2 divide-x-0 mb-10">
              <div>Airbnb</div>
              <div>Apple</div>
              <div>Brooklyn Museum</div>
              <div>Coinbase</div>
              <div>Google</div>
              <div>H&M</div>
              <div>Harper Collins</div>
              <div>Melissa</div>
              <div>Milk Bar</div>
              <div>Nabr</div>
              <div>Netflix</div>
              <div>Nike</div>
              <div>Nubank</div>
              <div>Olympikus</div>
              <div>Pinterest</div>
              <div>QuintoAndar</div>
              <div>Republic Records</div>
              <div>Shopify</div>
            </div>
          </div>
        </div>
        <div className="rounded-lg overflow-hidden" style={{ gridArea: 'H' }}>
          <div className="bg-red-600 h-full w-full  flex justify-between flex-col">
            <h3 className="font-extrabold text-3xl mx-6  pt-6 ">contact</h3>
            <div className="flex align-text-bottom mx-6 mb-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              ac ornare sem. Morbi tristique nisl suscipit ante placerat auctor.
              Etiam dolor dolor, consectetur cursus nulla non, tincidunt mollis
              lorem. Nulla sodales, elit nec tempus imperdiet, arcu leo laoreet
              nisi, mollis vestibulum arcu arcu id quam. Aliquam ut ante purus.
              Pellentesque ultricies nunc at purus pellentesque malesuada.
            </div>
          </div>
        </div>
        <div className="rounded-lg overflow-hidden" style={{ gridArea: 'G' }}>
          <img
            className="object-cover h-full w-full"
            src={`${'../materiale/about/img_5.png'}`}
          ></img>
        </div>
      </div> */
  );
};

export default AboutComponent;
