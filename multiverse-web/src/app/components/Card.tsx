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
    <div
      className=" rounded-[3px] w-full md:w-auto"
      style={{
        ...props.style,
        //width: `min(${props?.width! / 3}px, 40vw)`,
      }}
    >
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
                style={{
                  aspectRatio: props.aspect_ratio,
                  objectFit: "cover",
                  //height: `min(${props?.height!}px, 250px)`,
                }}
                className="h-full w-full rounded-[3px] w-full md:w-auto"
                width={Math.min(props?.width! / 2, 900)}
                height={Math.min(props?.height! / 2, 900)}
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
