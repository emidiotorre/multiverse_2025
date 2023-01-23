import Link from 'next/link'
import React from 'react'
import Container from './Container'
import DateTime from './DateTime'

function Footer() {
  return (
    <footer className="fixed bottom-0 w-full bg-white">
      <Container>
        <div className="flex justify-between items-start py-6">
          <div className="flex flex-col pt-0">
            <div>
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
            </div>
            <div>
              <small>
                Via Benedetto Croce, 31 - Salerno | +39 347 2240367 |
                info@multiversestudio.it
              </small>
            </div>
          </div>
          <div className="flex flex-row justify-end items-end">
            <DateTime />
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
