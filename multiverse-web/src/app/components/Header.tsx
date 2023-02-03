'use client'
import Link from 'next/link'
import React from 'react'
import Container from './Container'
import LogoSmall from '../../assets/png/logoSmall.png'
import { useRouter } from 'next/router'
import MenuSwitch from './MenuSwitch'

function Header() {
  return (
    <>
      <div>
        <header>
          <Container>
            <div className="flex justify-between py-10">
              <div className="flex justify-start">
                <Link href="/">
                  <img src="/png/logoSmall.png" width={200} />
                </Link>
                <MenuSwitch></MenuSwitch>
              </div>
              <div className="flex justify-end">
                <Link href="/about">
                  <button className="bg-[#d0d0d0] px-8 py-3 rounded-full  hover:bg-red-500">
                    about
                  </button>
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
