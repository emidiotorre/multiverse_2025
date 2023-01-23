import Link from 'next/link'
import React from 'react'
import Container from './Container'
import LogoSmall from '../../assets/png/logoSmall.png'

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
                <div className="flex ml-8 ">
                  <button className="bg-[#d0d0d0] px-8 rounded-full hover:bg-red-500 drop-shadow-lg">
                    work
                  </button>{' '}
                  <button className="bg-[#d0d0d0] px-8 pl-16 -ml-12 hover:bg-red-500 rounded-full">
                    play
                  </button>
                </div>
              </div>
              <div className="flex justify-end">
                <button className="bg-[#d0d0d0] px-8 rounded-full">
                  about
                </button>
              </div>
            </div>
          </Container>
        </header>
      </div>
    </>
  )
}

export default Header
