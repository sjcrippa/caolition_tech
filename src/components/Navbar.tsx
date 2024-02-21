'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion";

import logo from "/public/logo.png";
import { links } from '@/data/data'

export default function Navbar() {
  return (
    <header>
      <nav className='fixed w-full z-20 flex px-4 py-5 justify-between left-0 max-w-screen-sm sm:max-w-screen-xl sm:left-1/2 sm:-translate-x-1/2 sm:px-2'>
        <Link href={'/'} className='transition'>
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <Image
              src={logo}
              alt='Logo Mountain Technologies'
              width={35}
              height={35}
            />
          </motion.div>
        </Link>

        <ul className='flex items-center justify-center gap-5 italic'>
          {
            links.map(link => (
              <motion.li
                className='h-3/4 flex items-center justify-center relative underline uppercase'
                key={link.hash}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <Link className='transition' href={link.hash}>
                  {link.name}
                </Link>
              </motion.li>
            ))
          }
        </ul>
      </nav>
    </header>
  )
}
