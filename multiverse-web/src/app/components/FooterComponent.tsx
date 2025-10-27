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
        className={` top-auto flex-1 w-full max-w-full flex align-bottom  ${pathname?.split("/").includes("play") ? "bg-black text-white" : "bg-white"} `}
      >
        <Container style={{ alignSelf: "flex-end" }}>
          {/*<hr className={borderTop} />*/}
          <div className="flex-col md:flex-row md:columns-2 flex justify-between gap-2 md:items-end md:py-2 uppercase ">
            <div className="md:col-span-1 pt-0 ">
              <small>
                <Link
                  href="https://www.instagram.com/joinmvs/"
                  className="hover:underline text-[1rem] mr-4 hover:text-[#FF164B]"
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
                  className="hover:underline text-[1rem] ml-4 hover:text-[#FF164B]"
                  target="_blank"
                  rel="noreferrer"
                >
                  Behance
                </Link>

                {footer.contacts &&
                  footer.contacts.map((contact: any, idx: number) => {
                    return (
                      <div key={contact.id}>
                        <span
                          key={contact.id}
                          className={
                            "mx-4 " +
                            (contact.type != "email"
                              ? "hidden md:inline"
                              : "hidden md:inline")
                          }
                        ></span>
                        <span key={idx} className=" ">
                          {contact.type == "email" && (
                            <>
                              <a
                                key={contact.id}
                                href={"mailto:" + contact.content}
                                className="whitespace-pre-line text-[1rem] cursor-pointer hover:text-[#FF164B] break-keep"
                              >
                                {contact.content}
                              </a>
                              <br className="md:hidden" />
                            </>
                          )}
                          {contact.type == "tel" && (
                            <>
                              <a
                                key={contact.id}
                                href={"tel:" + contact.content}
                                className="whitespace-pre-line text-[1rem] cursor-pointer hover:text-[#FF164B] break-keep"
                              >
                                {contact.content}
                              </a>
                              <br className="md:hidden" />
                            </>
                          )}
                          {contact.type == "address" && (
                            <>
                              <br className="md:hidden" />
                              <a
                                key={contact.id}
                                href={contact.googlemapsLink}
                                target="_blank"
                                rel="noreferrer"
                                className="whitespace-pre-line text-[1rem] cursor-pointer hover:text-[#FF164B] break-keep"
                              >
                                {contact.content}
                              </a>
                              <br className="md:hidden" />
                            </>
                          )}
                        </span>
                      </div>
                    );
                  })}
              </small>
            </div>
            <div>
              <Link
                href="#"
                className="hover:underline text-[1rem] mr-4 hover:text-[#FF164B]"
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
