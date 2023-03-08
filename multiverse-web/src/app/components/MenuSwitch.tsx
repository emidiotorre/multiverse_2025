import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

type Props = {}

function MenuSwitch({}: Props) {
  const pathname = usePathname()
  return (
    <div className="font-sans font text-sm flex ml-4 relative bg-[#d0d0d0] rounded-full ">
      <Link
        prefetch={true}
        replace={true}
        href="/works"
        className="mx-6 my-0 py-2 z-10"
      >
        work
      </Link>{' '}
      <div
        className={` absolute z-0 drop-shadow-lg  bg-[#F40000] h-full w-1/2 rounded-full transform-gpu transition-colors
         transition-transform ${
           pathname?.split('/').includes('works')
             ? 'translate-x-0'
             : pathname?.split('/').includes('play')
             ? 'translate-x-[100%]'
             : pathname == '/' || pathname == '/about'
             ? 'opacity-0'
             : ''
         }`}
      ></div>{' '}
      <Link
        prefetch={true}
        replace={true}
        href="/play"
        className=" mx-6 my-0 py-2 z-10 "
      >
        play
      </Link>
    </div>
  )
}

export default MenuSwitch
