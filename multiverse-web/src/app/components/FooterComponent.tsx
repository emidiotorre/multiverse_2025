"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { useMediaQuery } from "usehooks-ts";
import Container from "./Container";
import DateTime from "./DateTime";

type Props = {
  footer: any;
};

function FooterComponent({ footer }: Props) {
  const pathname = usePathname();
  const borderTop = `${
    pathname === "/" ? "border-none " : "border-black border-t"
  } md:border-none pb-2`;

  return (
    <>
      <footer className="absolute h-max bottom-16 md:bottom-0 top-auto flex-1 w-full max-w-full  flex align-bottom font-sans md:text-xs ">
        <Container style={{ alignSelf: "flex-end" }}>
          <hr className={borderTop} />
          <div className=" columns-2 flex justify-between text-[12px] md:text-sm items-end md:py-5 ">
            <div className="md:col-span-1 pt-0 ">
              <small>
                <Link
                  href="https://instagram.com"
                  className="hover:underline mr-4 hover:text-[#F40000]"
                >
                  Instagram
                </Link>
                |
                <Link
                  href="https://instagram.com"
                  className="hover:underline mx-4 hover:text-[#F40000]"
                >
                  Facebook
                </Link>
                <span className="sm:mr-4">|</span>
              </small>

              <small
                className="max-[1098px]:flex max-[1098px]:flex-col "
                key={footer.id}
                dangerouslySetInnerHTML={{ __html: footer.col1 }}
              ></small>
            </div>
            <div>
              <DateTime />
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
}

export default FooterComponent;
