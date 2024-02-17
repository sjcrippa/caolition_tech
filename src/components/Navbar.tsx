import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import logo from "/public/logo.png";
import { links } from '@/data/data'

export default function Navbar() {
  return (
    <nav className='flex '>
      <div>
        <Image
          src={logo}
          alt='Logo Mountain Technologies'
          width={25}
          height={25} />
      </div>
      <ul className='flex flex-wrap items-center justify-center'>
        {
          links.map(link => (
            <li
              className='h-3/4 flex items-center justify-center relative'
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
