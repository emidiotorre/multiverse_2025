import { fetcher } from './apollo'
import { GET_FOOTER } from './apollo/queries'
import FooterComponent from './components/FooterComponent'
import Header from './components/Header'
import './globals.css'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { footer } = await fetcher({
    query: GET_FOOTER,
    variables: null,
  })

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <main className="pb-[8vh] md:pb-[11vh] pt-2 md:pt-0 md:pb-o flex flex-col w-full justify-start min-h-screen">
          <Header />
          {children}
          {footer && <FooterComponent footer={footer} />}
        </main>
      </body>
    </html>
  )
}
