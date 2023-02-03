import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

type Props = {}

function MenuSwitch({}: Props) {
  const pathname = usePathname()
  return (
    <div className="flex ml-8 ">
      <Link
        href="/works"
        className={`bg-[#d0d0d0] px-8 py-3 rounded-full hover:bg-red-500 drop-shadow-lg  ${
          pathname?.split('/').includes('works')
            ? 'bg-red-500 z-10'
            : pathname == '/' || pathname == '/about'
            ? 'z-10'
            : 'pr-16 -mr-12 z-0'
        }`}
      >
        work
      </Link>{' '}
      <Link
        href="/play"
        className={`bg-[#d0d0d0] px-8 py-3  hover:bg-red-500 rounded-full ${
          pathname?.split('/').includes('play')
            ? 'bg-red-500 z-10'
            : 'pl-16 -ml-12 z-0'
        }`}
      >
        play
      </Link>
    </div>
  )
}

export default MenuSwitch
