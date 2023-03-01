'use client'
import React from 'react'
import Image from 'next/image'
import Container from '@/app/components/Container'
import Up from '../../../public/materiale/UP.png'
export default function About() {
  return (
    <Container>
      <div className="grid  grid-about-area gap-3">
        <div className="rounded-lg overflow-hidden" style={{ gridArea: 'A' }}>
          <img
            className="object-contain h-[80vh] w-full"
            src={`${'../materiale/about/img_1.png'}`}
          ></img>
        </div>
        <div className="rounded-lg overflow-hidden" style={{ gridArea: 'B' }}>
          <img
            className="object-cover h-full w-full"
            src={`${'../materiale/about/img_2.png'}`}
          ></img>
        </div>
        <div className="rounded-lg overflow-hidden" style={{ gridArea: 'C' }}>
          <img
            className="object-cover h-full w-full"
            src={`${'../materiale/about/img_3.png'}`}
          ></img>
        </div>
        <div className="rounded-lg overflow-hidden " style={{ gridArea: 'D' }}>
          <div className="bg-gray-200 h-full w-full flex justify-between flex-col">
            <h3 className="font-extrabold text-3xl  mx-6 pt-6 ">studio</h3>
            <div className=" mx-6 pt-8 mb-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              ac ornare sem. Morbi tristique nisl suscipit ante placerat auctor.
              Etiam dolor dolor, consectetur cursus nulla non, tincidunt mollis
              lorem. Nulla sodales, elit nec tempus imperdiet, arcu leo laoreet
              nisi, mollis vestibulum arcu arcu id quam. Aliquam ut ante purus.
              Pellentesque ultricies nunc at purus pellentesque malesuada.
            </div>
          </div>
        </div>
        <div className="rounded-lg overflow-hidden" style={{ gridArea: 'E' }}>
          <img
            className="object-cover h-full w-full"
            src={`${'../materiale/about/img_4.png'}`}
          ></img>
        </div>
        <div className="rounded-lg overflow-hidden" style={{ gridArea: 'F' }}>
          <div className="bg-gray-200 h-full w-full  flex justify-between flex-col">
            <h3 className="font-extrabold text-3xl mx-6  pt-6 ">clients</h3>
            <div className="font-medium gap-x-10 mx-6 grid grid-cols-2 divide-x-0 mb-10">
              <div>Airbnb</div>
              <div>Apple</div>
              <div>Brooklyn Museum</div>
              <div>Coinbase</div>
              <div>Google</div>
              <div>H&M</div>
              <div>Harper Collins</div>
              <div>Melissa</div>
              <div>Milk Bar</div>
              <div>Nabr</div>
              <div>Netflix</div>
              <div>Nike</div>
              <div>Nubank</div>
              <div>Olympikus</div>
              <div>Pinterest</div>
              <div>QuintoAndar</div>
              <div>Republic Records</div>
              <div>Shopify</div>
            </div>
          </div>
        </div>
        <div className="rounded-lg overflow-hidden" style={{ gridArea: 'H' }}>
          <div className="bg-red-600 h-full w-full  flex justify-between flex-col">
            <h3 className="font-extrabold text-3xl mx-6  pt-6 ">contact</h3>
            <div className="flex align-text-bottom mx-6 mb-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              ac ornare sem. Morbi tristique nisl suscipit ante placerat auctor.
              Etiam dolor dolor, consectetur cursus nulla non, tincidunt mollis
              lorem. Nulla sodales, elit nec tempus imperdiet, arcu leo laoreet
              nisi, mollis vestibulum arcu arcu id quam. Aliquam ut ante purus.
              Pellentesque ultricies nunc at purus pellentesque malesuada.
            </div>
          </div>
        </div>
        <div className="rounded-lg overflow-hidden" style={{ gridArea: 'G' }}>
          <img
            className="object-cover h-full w-full"
            src={`${'../materiale/about/img_5.png'}`}
          ></img>
        </div>
      </div>
      <div className="flex justify-end py-10">
        <Image
          onClick={() =>
            document.documentElement.scrollTo({
              top: 0,
              left: 0,
              behavior: 'smooth', // Optional if you want to skip the scrolling animation
            })
          }
          className="object-cover h-[18vh] w-[10vh] "
          src={Up}
          alt={''}
          quality={100}
        />
      </div>
    </Container>
  )
}
