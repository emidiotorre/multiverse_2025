'use client'
import React from 'react'
import Container from '@/app/components/Container'
import { FrameGrid } from '@egjs/react-grid'

export default function About() {
  return (
    <Container>
      <FrameGrid
        gap={12}
        defaultDirection={'end'}
        frame={[
          [1, 1, 1, 1, 1, 1],
          [1, 1, 1, 1, 1, 1],
          [2, 2, 2, 2, 2, 2],
          [2, 2, 2, 2, 2, 2],
          [2, 2, 2, 2, 2, 2],
          [3, 3, 3, 4, 4, 4],
          [3, 3, 3, 4, 4, 4],
          [3, 3, 3, 5, 5, 5],
          [3, 3, 3, 5, 5, 5],
          [7, 7, 7, 6, 6, 6],
          [7, 7, 7, 6, 6, 6],
          [8, 8, 8, 6, 6, 6],
          [8, 8, 8, 6, 6, 6],
        ]}
        useResizeObserver={true}
        observeChildren={true}
        useFrameFill={true}
      >
        <div className="rounded-lg overflow-hidden">
          <img
            className="object-contain h-full w-full"
            src={`${'../about/img_1.png'}`}
          ></img>
        </div>
        <div className="rounded-lg overflow-hidden">
          <img
            className="object-cover h-full w-full"
            src={`${'../about/img_2.png'}`}
          ></img>
        </div>
        <div className="rounded-lg overflow-hidden">
          <img
            className="object-cover h-full w-full"
            src={`${'../about/img_3.png'}`}
          ></img>
        </div>
        <div className="rounded-lg overflow-hidden">
          <div className="bg-slate-400 h-full w-full ">
            <h3 className="font-extrabold text-3xl">studio</h3>

            <div className="rounded-lg overflow-hidden">
              <div className="py-16">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas ac ornare sem. Morbi tristique nisl suscipit ante
                placerat auctor. Etiam dolor dolor, consectetur cursus nulla
                non, tincidunt mollis lorem. Nulla sodales, elit nec tempus
                imperdiet, arcu leo laoreet nisi, mollis vestibulum arcu arcu id
                quam. Aliquam ut ante purus. Pellentesque ultricies nunc at
                purus pellentesque malesuada. Maecenas pharetra tortor purus,
                eget tempor mauris viverra ac. Vivamus risus eros, semper sed
                tempor eu, porta at leo. Praesent elementum nisl semper nisl
                rutrum rhoncus. Mauris congue eget lacus sed mollis. Donec at
                tortor sit amet justo lobortis hendrerit accumsan eu sem.
              </div>
            </div>
          </div>
        </div>
        <div className={'item'}>5</div>
        <div className={'item'}>6</div>
        <div className={'item'}>7</div>
        <div className={'item'}>8</div>
        <div className={'item'}>9</div>
        <div className={'item'}>10</div>
      </FrameGrid>
    </Container>
  )
}
