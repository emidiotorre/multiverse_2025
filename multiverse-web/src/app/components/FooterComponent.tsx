"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";
import Container from "./Container";
import DateTime from "./DateTime";
import HomeComponent from "./HomeComponent";

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
      {/*<Image
          className=" w-full select-none pointer-events-none px-8"
          src={
            pathname?.split("/").includes("play")
              ? "/footerone_bianco.svg"
              : "/footerone_nero.svg"
          }
          quality={80}

          fill
          alt={""}
        />*/}
      <img
        className={` hidden md:block w-full select-none pointer-events-none px-8 ${pathname?.split("/").includes("play") ? "bg-black" : "bg-white"}`}
        src={
          pathname?.split("/").includes("play")
            ? "/footerone_bianco.svg"
            : "/footerone_nero.svg"
        }
        alt=""
      />
      <img
        className={` block md:hidden w-full select-none pointer-events-none px-8 ${pathname?.split("/").includes("play") ? "bg-black" : "bg-white"}`}
        src={
          pathname?.split("/").includes("play")
            ? "/footerone_bianco_mobile.svg"
            : "/footerone_nero_mobile.svg"
        }
        alt=""
      />
      <footer
        className={` top-auto flex-1 w-full max-w-full  flex align-bottom font-Sharp_Grotesk_Book20 md:text-xs ${pathname?.split("/").includes("play") ? "bg-black text-white" : "bg-white"} `}
      >
        <Container style={{ alignSelf: "flex-end" }}>
          <hr className={borderTop} />
          <div className="flex-col md:flex-row md:columns-2 flex justify-between text-[12px] md:text-sm gap-2 md:items-end md:py-5 uppercase ">
            <div className="md:col-span-1 pt-0 ">
              <small>
                <Link
                  href="https://www.instagram.com/joinmvs/"
                  className="hover:underline mr-4 hover:text-[#FF164B]"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </Link>

                {/*  <Link
                  href="https://www.facebook.com/joinmvs"
                  className="hover:underline ml-4 hover:text-[#FF164B]"
                  target="_blank"
                  rel="noreferrer"
                >
                  Facebook
                </Link> */}
                <Link
                  href="https://www.behance.net/multiversestudio"
                  className="hover:underline ml-4 hover:text-[#FF164B]"
                  target="_blank"
                  rel="noreferrer"
                >
                  Behance
                </Link>
                {/*
              </small>

            <small className="flex flex-row" key={footer.id}> */}
                {footer.contacts &&
                  footer.contacts.map((contact: any, idx: number) => {
                    return (
                      <>
                        <span
                          className={
                            "mx-4 " +
                            (contact.type != "email" ? "hidden md:inline" : "")
                          }
                        ></span>
                        <span key={idx} className=" ">
                          {contact.type == "email" && (
                            <a
                              href={"mailto:" + contact.content}
                              className="whitespace-pre-line cursor-pointer hover:text-[#FF164B] break-keep"
                            >
                              {contact.content}
                            </a>
                          )}
                          {contact.type == "tel" && (
                            <a
                              href={"tel:" + contact.content}
                              className="whitespace-pre-line cursor-pointer hover:text-[#FF164B] break-keep"
                            >
                              {contact.content}
                            </a>
                          )}
                          {contact.type == "address" && (
                            <>
                              <br className="md:hidden" />
                              <a
                                href={contact.googlemapsLink}
                                target="_blank"
                                rel="noreferrer"
                                className="whitespace-pre-line cursor-pointer hover:text-[#FF164B] break-keep"
                              >
                                {contact.content}
                              </a>
                              <br className="md:hidden" />
                            </>
                          )}
                        </span>
                      </>
                    );
                  })}
              </small>
            </div>
            <div>
              <Link
                href="#"
                className="hover:underline mr-4 hover:text-[#FF164B]"
                target="_blank"
                rel="noreferrer"
              >
                Cookies and Policy
              </Link>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
}

export default FooterComponent;
