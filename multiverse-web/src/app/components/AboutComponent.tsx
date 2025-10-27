"use client";
import React from "react";
import Container from "./Container";
import Marquee from "react-fast-marquee";
import { useMediaQuery } from "usehooks-ts";
import HandScrollUp from "./HandScrollUp";
import { VideoAutoPlayer } from "./VideoPlayer";
import CharactersCarousel from "./charachtersCarousel/CharactersCarousel";
import Link from "next/link";

type Props = {
  blocks: any[];
};

const awards = [
  {
    year: "2025",
    awards: "Fedrigoni Top Awards",
    place: "1st place",
    category: "Packaging",
    project: "Hera nei Campi",
    logo: "/logos/top.svg",
  },
  {
    year: "2024",
    awards: "Pentawards",
    place: "Platinum",
    category: "Food",
    project: "Hera nei Campi",
    logo: "/logos/penta.svg",
  },
  {
    year: "2024",
    awards: "D&AD",
    place: "Shortlist",
    category: "Packaging",
    project: "Hera nei Campi",
    logo: "/logos/DAD.svg",
  },
  {
    year: "2024",
    awards: "Dieline",
    place: "Silver",
    category: "Bread, Cereal and Pasta",
    project: "Hera nei Campi",
    logo: "/logos/dieline.svg",
  },
  {
    year: "2024",
    awards: "One More Pack",
    place: "1st place",
    category: "Packaging",
    project: "Hera nei Campi",
    logo: "/logos/omp.svg",
  },
  {
    year: "2024",
    awards: "One More Pack",
    place: "Special mention",
    category: "Storytelling",
    project: "Hera nei Campi",
    logo: "/logos/omp.svg",
  },
];

const AboutComponent = ({ blocks }: Props) => {
  const matches = useMediaQuery("(min-width: 768px)");

  return (
    <>
      <Container>
        <div className="">
          <div className="w-full">
            <img
              className={" w-full h-max  rounded-[3px] overflow-hidden"}
              src={`/studio_hero.png`}
              alt={"hero image"}
              width={1200}
              height={800}
            />
          </div>
          <div className="w-full mt-4 flex flex-col md:flex-row gap-4 items-stretch mb-4 ">
            <img
              className={
                " w-full flex-1 rounded-[3px] overflow-hidden object-cover rounded-[3px]"
              }
              src={`/image_11.png`}
              alt={"hero image"}
            />
            <div className="bg-[#d0d0d0] flex-1 rounded-[3px] p-4 flex flex-col gap-4 justify-between">
              <p className="text-xl mb-12 leading-6">
                Palazzo Barone is our home. On the threshold, carved in stone,
                the Lion warns: Cor tibi magis domus pandit. &quot;This building
                opens a heart bigger than the door you&apos;re passing
                through.&quot; The portal has blown us into a universe with
                retro-futuristic traits in full science-fiction style. There is
                our whole world full of neo-Gothic images that hypnotize us. The
                Studio is in a Palace dug into the rock, enlivened by lions,
                gargoyles, merlons and arches of clear Islamic-Byzantine
                inspiration that overlook the sea.
              </p>
              <img src="/mamozzio.svg" alt="" className="h-[38rem] " />
            </div>
          </div>
          <div className="w-full bg-black rounded-[3px] px-4 py-4">
            <h1 className="text-white text-2xl md:text-5xl mb-24">
              Over the past year, we’ve received national and international
              awards for our work in packaging, branding and storytelling.
            </h1>
            <div className=" bg-black text-white">
              <table className="w-full text-sm md:text-md">
                <thead>
                  <tr className="border-b border-[#fff] text-[#C69C6D] uppercase font-light">
                    <th className="text-left py-4 px-2">Year</th>
                    <th className="text-left py-4 px-2"></th>
                    <th className="text-left py-4 px-2">Awards</th>
                    <th className="text-left py-4 px-2">Place</th>
                    <th className="text-left py-4 px-2">Category</th>
                    <th className="text-left py-4 px-2">Project</th>
                  </tr>
                </thead>
                <tbody>
                  {awards.map((award, index) => (
                    <tr key={index} className="border-b  border-[#fff]">
                      <td className="py-4 px-2">{award.year}</td>
                      <td className="py-4 md:pl-16 md:pr-0">
                        <img src={award.logo} alt="logo" className="w-8" />
                      </td>
                      <td className="py-4 px-2">{award.awards}</td>
                      <td className="py-4 px-2">{award.place}</td>
                      <td className="py-4 px-2">{award.category}</td>
                      <td className="py-4 px-2">{award.project}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="block relative h-[100vh] w-full mt-4 rounded-[3px] overflow-hidden">
            <CharactersCarousel />
          </div>
          <div className="w-full rounded-[3px] my-4">
            <VideoAutoPlayer
              src="https://vimeo.com/1114253200"
              showControls={false}
              videoWidth={426}
              videoHeight={120}
            />
          </div>
          <div className="relative w-full flex flex-col rounded-[3px] bg-[#FF164B] ">
            <h1 className=" text-black md:absolute top-0 mx-auto md:left-4 text-4xl md:mb-24 w-[30rem] text-center md:text-left mx-4 my-8 ">
              Contact us to build something new together.
            </h1>
            <h1 className="text-black md:absolute top-0 md:right-4 text-xl md:mb-24 w-[30rem] mx-auto text-center md:text-right mx-4 md:my-8 ">
              <Link
                href="https://www.instagram.com/joinmvs/"
                className="hover:underline mx-2"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </Link>
              |
              <Link
                href="https://www.behance.net/multiversestudio"
                className="hover:underline mx-2"
                target="_blank"
                rel="noreferrer"
              >
                Behance
              </Link>
            </h1>
            <img
              src="/contact.svg"
              alt=""
              className=" h-[30rem] md:h-[70vh] mb-8 mt-16 md:mt-32 md:mt-16 "
            />
            <div className="flex flex-col md:flex-row gap-8 px-4 py-4 text-xl">
              <div className="flex flex-col w-full">
                <h1 className="border-b-[2px]  border-black uppercase pb-2 mb-4">
                  Italy
                </h1>
                <div className="flex flex-col md:flex-row w-full">
                  <p className="md:text-left flex-1">
                    Palazzo Barone
                    <br />
                    Via Benedetto Croce,
                    <br />
                    34 Salerno, 84121
                  </p>
                  <p className="md:text-right flex-1">
                    info@multiversestudio.it
                    <br />
                    +39 347 2240367
                  </p>
                </div>
              </div>
              <div className="flex flex-col w-full">
                <h1 className="border-b-[2px]  border-black uppercase pb-2 mb-4">
                  Saudi Arabia
                </h1>
                <div className="flex flex-col md:flex-row w-full">
                  <p className="md:text-left flex-1">
                    Building No. 7372, Ali Alamri
                    <br />
                    Street, Al Arid District,
                    <br />
                    Riyadh 13338
                  </p>
                  <p className="md:text-right flex-1">
                    arabia@multiversestudio.it
                    <br />
                    +39 347 2240367{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/*{blocks &&
            blocks.map((block: any, idx: number) => {
              if (idx === 0 || idx === 1) return <></>;
              switch (block.item.type) {
                case "TextBlock":
                  if (block.item.columns === 2) {
                    return (
                      <div
                        key={idx}
                        style={{ background: block.item.background_color }}
                        className=" h-full w-full flex justify-between flex-col rounded-[3px] "
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
                        className=" h-full w-full flex justify-between flex-col rounded-[3px]"
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
                              " w-full max-w-full rounded-[3px] overflow-hidden"
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
                              "object-cover h-full w-full rounded-[3px] overflow-hidden"
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
            })}*/}
        </div>
        <HandScrollUp />
      </Container>
    </>
  );
};

export default AboutComponent;
