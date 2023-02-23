'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Container from './Container'
import DateTime from './DateTime'
import Logo from '../../../public/materiale/mvs_logo.png'
import { usePathname } from 'next/navigation'

type Props = {
  footer: any
}

function FooterComponent({ footer }: Props) {
  const pathName = usePathname()

  return (
    <footer className="relative flex-1 max-w-full pt-10 md:top-24 flex align-bottom font-Sharp_Grotesk_Medium20 ">
      <Container style={{ alignSelf: 'flex-end' }}>
        {pathName === '/' ? (
          <div className=" flex justify-between items-end py-10 ">
            <div className="flex flex-col pt-0 ">
              <small>
                <Link href="https://instagram.com" className="underline mr-4">
                  Instagram
                </Link>
                |
                <Link href="https://instagram.com" className="underline mx-4">
                  Behance
                </Link>
                |
                <Link href="https://instagram.com" className="underline mx-4">
                  Facebook
                </Link>
              </small>
              <div key={footer.id}>
                <small>{footer.col1}</small>
              </div>
            </div>
            <div className="flex flex-col-reverse ">
              <DateTime />
            </div>
          </div>
        ) : (
          <>
            <div className=" flex flex-col md:flex-row justify-start md:justify-between	 py-10">
              <div>
                <Image
                  className="object-contain max-h-5 md:w-full w-24 mb-4 "
                  src={Logo}
                  alt={''}
                  height={500}
                  width={500}
                  quality={100}
                />
              </div>
              <div className="flex flex-col pt-0 md:items-end">
                <small>
                  <Link href="https://instagram.com" className="underline mr-4">
                    Instagram
                  </Link>
                  |
                  <Link href="https://instagram.com" className="underline mx-4">
                    Behance
                  </Link>
                  |
                  <Link href="https://instagram.com" className="underline mx-4">
                    Facebook
                  </Link>
                </small>
                <div key={footer.id}>
                  <small>{footer.col1}</small>
                </div>
              </div>
            </div>
          </>
        )}
      </Container>
    </footer>
  )
}

export default FooterComponent
