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
      <div>
        <header>
          <Container>
            <div className="flex justify-between py-10">
              <div className="flex justify-start">
                <Link href="/">
                  <Image src={logoSmall} width={200} height={200} alt={''} />
                </Link>
                <MenuSwitch></MenuSwitch>
              </div>
              <div className="flex justify-end">
                <Link
                  href="/about"
                  className={`bg-[#d0d0d0] px-8 py-3  transition-colors hover:bg-red-500 hover:z-10 hover:drop-shadow-lg rounded-full ${
                    pathname?.split('/').includes('about')
                      ? 'bg-red-500 z-10 drop-shadow-lg'
                      : ' -ml-12 z-0'
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
