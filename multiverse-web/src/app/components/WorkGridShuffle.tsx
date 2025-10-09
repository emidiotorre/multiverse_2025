"use client";
import React from "react";
import Card from "./Card";

import Marquee from "react-fast-marquee";
import Container from "./Container";
import Hand from "./Hand";
import HandScrollUp from "./HandScrollUp";

type Props = {
  blocks: any[];
};

function WorksGridShuffle({ blocks }: Props) {
  //const matches = useMediaQuery('(min-width: 768px)')
  return (
    <>
      <Container>
        <div className="flex flex-row flex-wrap  justify-stretch items-stretch gap-4 pt-4">
          {blocks &&
            blocks
              .sort((a, b) => (a.item.work1.sort < b.item.work1.sort ? -1 : 1))
              .map((block: any, idx: number) => {
                switch (block.item.tipologia) {
                  case "full":
                    return (
                      <>
                        <Card
                          status={block.item.work1?.status}
                          aspect_ratio={block.item.work1?.aspectRatioImage}
                          id={block.item.work1?.id}
                          image_url={`${"https://multiverse-dev-directus.rizo.tech"}/assets/${
                            block.item.work1.image?.id
                          }`}
                          width={block.item.work1?.image?.width}
                          height={block.item.work1?.image?.height}
                          slug={block.item.work1?.slug}
                          Name={block.item.work1?.Name}
                          priority={idx <= 2}
                          key={block.item.work1?.id}
                        ></Card>
                      </>
                    );
                  case "half-split":
                    return (
                      <>
                        <Card
                          status={block.item.work1?.status}
                          aspect_ratio={block.item.work1?.aspectRatioImage}
                          id={block.item.work1?.id}
                          image_url={`${"https://multiverse-dev-directus.rizo.tech"}/assets/${
                            block.item.work1.image?.id
                          }`}
                          slug={block.item.work1?.slug}
                          Name={block.item.work1?.Name}
                          priority={idx <= 2}
                          width={block.item.work1?.image?.width}
                          height={block.item.work1?.image?.height}
                          key={block.item.work1?.id}
                        ></Card>
                        <Card
                          status={block.item.work2?.status}
                          aspect_ratio={block.item.work2?.aspectRatioImage}
                          id={block.item.work2.id}
                          image_url={`${"https://multiverse-dev-directus.rizo.tech"}/assets/${
                            block.item.work2.image?.id
                          }`}
                          slug={block.item.work2?.slug}
                          Name={block.item.work2?.Name}
                          priority={idx <= 2}
                          width={block.item.work2?.image?.width}
                          height={block.item.work2?.image?.height}
                          key={block.item.work2?.id}
                        ></Card>
                        <Card
                          status={block.item.work3?.status}
                          aspect_ratio={block.item.work3?.aspectRatioImage}
                          id={block.item.work3.id}
                          image_url={`${"https://multiverse-dev-directus.rizo.tech"}/assets/${
                            block.item.work3.image?.id
                          }`}
                          slug={block.item.work3?.slug}
                          Name={block.item.work3?.Name}
                          priority={idx <= 2}
                          width={block.item.work3?.image?.width}
                          height={block.item.work3?.image?.height}
                          key={block.item.work3.id}
                        ></Card>
                      </>
                    );

                  case "split-half":
                    return (
                      <>
                        <Card
                          status={block.item.work1?.status}
                          aspect_ratio={block.item.work1?.aspectRatioImage}
                          id={block.item.work1.id}
                          image_url={`${"https://multiverse-dev-directus.rizo.tech"}/assets/${
                            block.item.work1.image?.id
                          }`}
                          slug={block.item.work1?.slug}
                          Name={block.item.work1?.Name}
                          priority={idx <= 2}
                          width={block.item.work1?.image?.width}
                          height={block.item.work1?.image?.height}
                          key={block.item.work1.id}
                        ></Card>
                        <Card
                          status={block.item.work2?.status}
                          aspect_ratio={block.item.work2?.aspectRatioImage}
                          id={block.item.work2.image.id}
                          image_url={`${"https://multiverse-dev-directus.rizo.tech"}/assets/${
                            block.item.work2.image?.id
                          }`}
                          slug={block.item.work2?.slug}
                          Name={block.item.work2?.Name}
                          priority={idx <= 2}
                          width={block.item.work2?.image?.width}
                          height={block.item.work2?.image?.height}
                          key={block.item.work2.id}
                        ></Card>
                        <Card
                          status={block.item.work3?.status}
                          aspect_ratio={block.item.work3?.aspectRatioImage}
                          id={block.item.work3.image.id}
                          image_url={`${"https://multiverse-dev-directus.rizo.tech"}/assets/${
                            block.item.work3.image?.id
                          }`}
                          slug={block.item.work3?.slug}
                          Name={block.item.work3?.Name}
                          priority={idx <= 2}
                          width={block.item.work3?.image?.width}
                          height={block.item.work3?.image?.height}
                          key={block.item.work3.id}
                        ></Card>
                      </>
                    );
                  case "half-half":
                    return (
                      <>
                        <Card
                          aspect_ratio={block.item.work1?.aspectRatioImage}
                          id={block.item.work1.image.id}
                          image_url={`${"https://multiverse-dev-directus.rizo.tech"}/assets/${
                            block.item.work1.image?.id
                          }`}
                          slug={block.item.work1?.slug}
                          Name={block.item.work1?.Name}
                          priority={idx <= 2}
                          status={block.item.work1?.status}
                          width={block.item.work1?.image?.width}
                          height={block.item.work1?.image?.height}
                          key={block.item.work1.id}
                        ></Card>
                        <Card
                          status={block.item.work2?.status}
                          aspect_ratio={block.item.work2?.aspectRatioImage}
                          id={block.item.work2.image.id}
                          image_url={`${"https://multiverse-dev-directus.rizo.tech"}/assets/${
                            block.item.work2.image?.id
                          }`}
                          slug={block.item.work2?.slug}
                          Name={block.item.work2?.Name}
                          priority={idx <= 2}
                          width={block.item.work2?.image?.width}
                          height={block.item.work2?.image?.height}
                          key={block.item.work2.id}
                        ></Card>
                      </>
                    );
                }
              })}
        </div>
        <HandScrollUp />
      </Container>
    </>
  );
}

export default WorksGridShuffle;
