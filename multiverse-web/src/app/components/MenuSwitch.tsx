import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {};

function MenuSwitch({}: Props) {
  const pathname = usePathname();
  return (
    <div className=" text-xs flex ml-2 md:ml-4 relative bg-[#d0d0d0] h-[2rem] rounded-[3px] ">
      <Link
        prefetch={true}
        href="/works"
        className="flex items-center align-center px-5 z-10 uppercase "
      >
        work
      </Link>{" "}
      <div
        className={` absolute  block z-0  bg-[#FF164B] h-[2rem] w-1/2 transform-gpu transition-colors rounded-[3px]
         transition-all ${
           pathname?.split("/").includes("works")
             ? "left-0"
             : pathname?.split("/").includes("play")
               ? "left-[51%]"
               : pathname == "/" || pathname == "/studio"
                 ? "opacity-0"
                 : ""
         }`}
      ></div>
      <Link
        prefetch={true}
        href="/play"
        className=" flex items-center align-center px-5 z-10 uppercase "
      >
        play
      </Link>
    </div>
  );
}

export default MenuSwitch;
