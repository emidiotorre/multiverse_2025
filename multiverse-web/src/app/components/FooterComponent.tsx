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
        <div className=" md:flex md:justify-between md:items-end md:py-10 ">
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
            </small>

            <small key={footer.id}>{footer.col1}</small>
          </div>
          <div className="flex flex-col-reverse">
            <DateTime />
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default FooterComponent
