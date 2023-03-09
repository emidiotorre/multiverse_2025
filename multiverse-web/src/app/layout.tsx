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
        <main className="relative pb-[10vh] pt-0 md:pb-0 flex flex-col w-full justify-start min-h-[100svh] min-h-[100vh]">
          <Header />
          {children}
          {footer && <FooterComponent footer={footer} />}
        </main>
      </body>
    </html>
  )
}
