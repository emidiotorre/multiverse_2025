"use client";
import Item from "./Item";
import HandScrollUp from "./HandScrollUp";
import { Masonry } from "react-plock";

type Props = {
  play_page: any;
  plays: any[];
};

function PlaysGrid(props: Props) {
  return (
    <>
      <div key={props.play_page.id} className="flex justify-center mt-6">
        <h1
          className=" text-3xl md:text-5xl my-[30vh] text-center"
          // dangerouslySetInnerHTML={{ __html: props.play_page.title }}
        >
          All work and no play makes
          <br />
          Multiverse a dull agency.
        </h1>
      </div>
      <Masonry
        items={props?.plays.filter((p) => p.status === "published")}
        config={{
          columns: [1, 2, 3, 4],
          gap: [24, 12],
          media: [640, 768, 1024, 1480],
        }}
        render={(play, idx) => (
          <Item
            id={idx}
            height={play?.image?.height}
            width={play?.image?.width}
            key={"subgrid_item_" + idx}
            image_url={`${"https://multiverse-dev-directus.rizo.tech"}/assets/${
              play?.image?.id
            }`}
            video_url={play.videoUrl}
            videoHeight={play?.video_height}
            videoWidth={play?.video_width}
            body={play.body}
          ></Item>
        )}
      />

      <HandScrollUp />
    </>
  );
}
export default PlaysGrid;
