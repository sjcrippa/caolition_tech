import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import logo from "/public/logo.png";
import { links } from '@/data/data'

export default function Navbar() {
  return (
    <nav className='fixed w-full z-20 flex px-2 py-3 justify-between left-0 max-w-screen-sm sm:max-w-screen-xl sm:left-1/2 sm:-translate-x-1/2'>
      <div>
        <Image
          src={logo}
          alt='Logo Mountain Technologies'
          width={25}
          height={25} />
      </div>
      <ul className='flex items-center justify-center gap-4'>
        {
          links.map(link => (
            <li
              className='h-3/4 flex items-center justify-center relative underline'
              key={link.name}
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
