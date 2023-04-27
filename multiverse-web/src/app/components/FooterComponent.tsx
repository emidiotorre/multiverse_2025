"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
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
      <footer className="absolute h-max bottom-16 md:bottom-0 top-auto flex-1 w-full max-w-full  flex align-bottom font-Sharp_Grotesk_Book20 md:text-xs ">
        <Container style={{ alignSelf: "flex-end" }}>
          <hr className={borderTop} />
          <div className="flex-col md:flex-row md:columns-2 flex justify-between text-[12px] md:text-sm gap-2 md:items-end md:py-5 ">
            <div className="md:col-span-1 pt-0 ">
              <small>
                <Link
                  href="https://www.instagram.com/joinmvs/"
                  className="hover:underline mr-4 hover:text-[#F40000]"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </Link>
                |
                {/*  <Link
                  href="https://www.facebook.com/joinmvs"
                  className="hover:underline ml-4 hover:text-[#F40000]"
                  target="_blank"
                  rel="noreferrer"
                >
                  Facebook
                </Link> */}
                <Link
                  href="https://www.behance.net/multiversestudio"
                  className="hover:underline ml-4 hover:text-[#F40000]"
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
                        >
                          |
                        </span>
                        <span key={idx} className=" ">
                          {contact.type == "email" && (
                            <a
                              href={"mailto:" + contact.content}
                              className="whitespace-pre-line cursor-pointer hover:text-[#F40000] break-keep"
                            >
                              {contact.content}
                            </a>
                          )}
                          {contact.type == "tel" && (
                            <a
                              href={"tel:" + contact.content}
                              className="whitespace-pre-line cursor-pointer hover:text-[#F40000] break-keep"
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
                                className="whitespace-pre-line cursor-pointer hover:text-[#F40000] break-keep"
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
              <DateTime />
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
}

export default FooterComponent;
