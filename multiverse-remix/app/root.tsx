import { json, MetaFunction } from '@remix-run/node'
import ScrollToTop from './components/ScrollToTop'

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react'
/* import Header from './components/Header'
import FooterComponent from './components/FooterComponent' */

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Multiverse',
  viewport: 'width=device-width,initial-scale=1',
})

export async function loader() {
  return json({
    ENV: {
      DIRECTUS_BACKEND: process.env.DIRECTUS_BACKEND,
    },
  })
}
export default function App() {
  const data = useLoaderData<typeof loader>()

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        {/*  <header>
          <Header></Header>
        </header> */}
        <Outlet />
        <ScrollToTop></ScrollToTop>
        {/*    <footer>
          <FooterComponent footer={undefined}></FooterComponent>
        </footer> */}
        <ScrollRestoration />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.ENV = ${JSON.stringify(data.ENV)}`,
          }}
        />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
