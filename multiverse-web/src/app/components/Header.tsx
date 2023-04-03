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
      <div className="font-sans fixed bottom-0 w-full md:static md:top-0 text-xs z-50 bg-white flex-col-reverse">
        <header>
          <Container>
            <div className="flex justify-between py-4 md:py-10 w-full ">
              <div className="flex justify-start max-w-screen-2xl items-center ">
                <Link
                  as={"/"}
                  href="/"
                  prefetch={true}
                  className="h-fit-content"
                >
                  <LogoSmall height="2em" width="100%" />
                </Link>
                <MenuSwitch></MenuSwitch>
              </div>
              <div className="flex justify-end ">
                <Link
                  as={"/about"}
                  prefetch={true}
                  href="/about"
                  className={`px-5 pt-[.25rem] md:pt-[.5rem] md:px-8 md:-pb-[1rem] transition-colors rounded-full ${
                    pathname?.split("/").includes("about")
                      ? " bg-[#F40000] z-10"
                      : " -ml-12 z-0 bg-[#d0d0d0]"
                  }`}
                >
                  about
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
