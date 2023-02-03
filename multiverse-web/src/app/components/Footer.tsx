import Link from 'next/link'
import React from 'react'
import Container from './Container'
import DateTime from './DateTime'

function Footer() {
  return (
    <footer className="w-full grow flex align-bottom font-Sharp_Grotesk_Medium20 ">
      <Container style={{ alignSelf: 'flex-end' }}>
        <div className=" flex justify-between items-end py-6">
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
            <div>
              <small>
                Via Benedetto Croce, 31 - Salerno | +39 347 2240367 |
                info@multiversestudio.it
              </small>
            </div>
          </div>
          <div className="flex flex-col-reverse ">
            <DateTime />
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
