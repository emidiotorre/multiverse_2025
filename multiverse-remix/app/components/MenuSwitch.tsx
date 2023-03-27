import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {};

function MenuSwitch({}: Props) {
  const pathname = usePathname();
  return (
    <div className="flex ml-8 ">
      <Link
        href="/works"
        className={`bg-[#d0d0d0] px-3 py-2  md:px-8 md:py-3 rounded-full transition-colors  ${
          pathname?.split("/").includes("works")
            ? "bg-red-500 z-10 drop-shadow-lg"
            : pathname == "/" || pathname == "/about"
            ? "z-10"
            : "pr-8 md:pr-16 -mr-6 md:-mr-12 z-0"
        }`}
      >
        work
      </Link>{" "}
      <Link
        href="/play"
        className={`bg-[#d0d0d0] px-3 py-2  md:px-8 md:py-3  transition-colors    rounded-full ${
          pathname?.split("/").includes("play")
            ? "bg-red-500 z-10 drop-shadow-lg"
            : "pl-8 md:pl-16 -ml-6 md:-ml-12 z-0"
        }`}
      >
        play
      </Link>
    </div>
  );
}

export default MenuSwitch;
