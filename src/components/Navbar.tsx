import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import logo from "/public/logo.png";
import { links } from '@/data/data'

export default function Navbar() {
  return (
    <nav className='fixed w-full z-20 flex px-4 py-5 justify-between left-0 max-w-screen-sm sm:max-w-screen-xl sm:left-1/2 sm:-translate-x-1/2 sm:px-2'>
      <Link href={'/'}>
        <Image
          src={logo}
          alt='Logo Mountain Technologies'
          width={35}
          height={35} />
      </Link>

      <ul className='flex items-center justify-center gap-5 italic'>
        {
          links.map(link => (
            <li
              className='h-3/4 flex items-center justify-center relative underline'
              key={link.hash}
            >
              <Link href={link.hash}>
                {link.name}
              </Link>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}
