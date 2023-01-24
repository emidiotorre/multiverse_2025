import Link from 'next/link'
import React from 'react'
import Container from './Container'
import DateTime from './DateTime'

function Footer() {
  return (
    <footer className="w-full grow flex align-bottom">
      <Container style={{ alignSelf: 'flex-end' }}>
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
          <div className="flex flex-row justify-end">
            <DateTime />
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
