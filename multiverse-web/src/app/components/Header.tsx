"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Container from "./Container";
import MenuSwitch from "./MenuSwitch";
import LogoSmall from "../components/LogoSmall";
import { usePathname } from "next/navigation";

function Header() {
  const pathname = usePathname();
  return (
    <>
      <div
        className={`  w-full  text-xs z-50 flex-col-reverse ${pathname?.split("/").includes("play") ? "bg-black" : "bg-white"}`}
      >
        <header>
          <Container>
            <div className="flex justify-between py-4 md:pt-6 md:pb-2 w-full ">
              <div className="flex justify-start max-w-screen-2xl items-center ">
                <div
                  className={` hover:bg-[#B9B9B9] flex justify-center items-center px-2 rounded-[3px] h-[2rem]   ${
                    pathname == "/" ? " bg-[#FF164B]" : "  bg-[#d0d0d0]"
                  } `}
                >
                  <Link href="/" prefetch={true} className="h-fit-content ">
                    MULTIVERSE STUDIO
                  </Link>
                </div>

                <MenuSwitch></MenuSwitch>
              </div>
              <div className="flex justify-end ">
                <Link
                  prefetch={true}
                  href="/studio"
                  className={`hover:bg-[#B9B9B9] flex items-center align-center px-3 rounded-[3px] transition-colors uppercase  ${
                    pathname?.split("/").includes("studio")
                      ? " bg-[#FF164B] z-10"
                      : " -ml-12 z-0 bg-[#d0d0d0]"
                  }`}
                >
                  STUDIO
                </Link>
              </div>
            </div>
          </Container>
        </header>
      </div>
    </>
  );
}

export default Header;
