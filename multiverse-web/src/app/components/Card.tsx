import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  id: number;
  Name: string;
  slug: string;
  image_url: string;
  style?: any;
};

const Card = (props: Props) => {
  return (
    <div
      className="relative overflow-hidden self-stretch rounded-lg"
      style={props.style}
    >
      <Link href={`/works/${props.slug}`} key={props.id} className="contents">
        <div className="absolute top-0 left-0 w-full h-full z-10 opacity-0 hover:opacity-90 hover:bg-red-500">
          <div className="text-black text-4xl pt-6 pl-10 absolute">
            <h1 className="absolute">{props.Name}</h1>
          </div>
        </div>
        <Image
          width={1400}
          height={1400}
          src={props.image_url}
          alt={""}
          quality={100}
        />
      </Link>
    </div>
  );
};

export default Card;
