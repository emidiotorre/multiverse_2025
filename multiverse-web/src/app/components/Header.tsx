'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Container from './Container'
import MenuSwitch from './MenuSwitch'
import logoSmall from '../../../public/materiale/mvs_logo_small.png'
import { usePathname } from 'next/navigation'
function Header() {
  const pathname = usePathname()
  return (
    <>
      <div className="fixed bottom-0 w-full md:static md:top-0 text-xs md:text-base z-50 bg-white flex-col-reverse">
        <header>
          <Container>
            <div className="flex justify-between py-4 md:py-10 w-full ">
              <div className="flex justify-start max-w-screen-2xl items-center ">
                <Link href="/" className="h-fit-content">
                  <Image
                    className="object-contain object-left md:object-cover max-h-6 w-20 md:w-auto md:max-w-max md:max-h-12"
                    src={logoSmall}
                    width={200}
                    alt={''}
                  />
                </Link>
                <MenuSwitch></MenuSwitch>
              </div>
              <div className="flex justify-end">
                <Link
                  href="/about"
                  className={`bg-[#d0d0d0] px-2 py-2  md:px-8 md:py-3  transition-colors  hover:z-10 hover:drop-shadow-lg rounded-full ${
                    pathname?.split('/').includes('about') ? '' : ' -ml-12 z-0'
                  }`}
                >
                  about
                </Link>
              </div>
            </div>
          </Container>
        </header>
      </div>
    </>
  )
}

export default Header
