import { fetcher } from "./apollo";
import { GET_FOOTER } from "./apollo/queries";
import FooterComponent from "./components/FooterComponent";
import Header from "./components/Header";
import "./globals.css";
import localFont from "next/font/local";

// Font files can be colocated inside of `app`
const myFont = localFont({
  src: "./Everett-Medium.woff2",
  display: "swap",
});
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  //@ts-ignore
  const { footer } = await fetcher({
    query: GET_FOOTER,
    variables: null,
  });

  return (
    <html lang="en" className={myFont.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head>
        {/*         <script src="/lubenda.js" />
        <script
          type="text/javascript"
          src="//cdn.iubenda.com/cs/gpp/stub.js"
        ></script>
        <script
          type="text/javascript"
          src="//cdn.iubenda.com/cs/iubenda_cs.js"
          async
        ></script> */}
      </head>
      <body>
        <main className="relative pb-[5vh] pt-0 md:pb-0 flex flex-col w-full justify-start min-h-[100dvh] ">
          <Header />
          {children}
          {footer && <FooterComponent footer={footer} />}
        </main>
      </body>
    </html>
  );
}
