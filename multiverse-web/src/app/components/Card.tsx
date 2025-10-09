import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  id: number;
  Name: string;
  slug: string;
  image_url: string;
  style?: any;
  aspect_ratio: string;
  status: string;
  priority?: boolean;
  width?: number;
  height?: number;
};

const Card = (props: Props) => {
  return (
    <div className="flex-grow rounded-[3px]" style={props.style}>
      {props.status != "published" ? (
        <div
        // style={{ aspectRatio: props.aspect_ratio }}
        ></div>
      ) : (
        <Link
          href={props.slug ? `/works/${props.slug}` : "/"}
          prefetch={true}
          key={props.id}
          className="contents"
        >
          <>
            <div className="">
              <Image
                // style={{ aspectRatio: props.aspect_ratio }}
                className="h-full w-full rounded-[3px] "
                width={props?.width! / 4}
                height={props?.height! / 4}
                src={props.image_url}
                alt={""}
                quality={100}
                priority={props.priority}
              />
              <div className="text-black text-xl pt-2 pl-0  w-full uppercase ">
                <h3>{props.Name}</h3>
              </div>
            </div>
          </>
        </Link>
      )}
    </div>
  );
};

export default Card;
