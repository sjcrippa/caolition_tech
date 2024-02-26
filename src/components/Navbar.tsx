'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion";

import logo from "/public/logo.png";
import { links } from '@/data/data'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed w-full z-20 left-0 px-3 md:px-10 lg:px-[28rem] sm:left-1/2 sm:-translate-x-1/2 text-gray-50  ${scrolled ? 'bg-gray-50 text-blue-900' : 'bg-transparent'} transition ease-linear duration-200`}>
      <nav className='flex px-4 py-5 justify-between'>
        <Link href={'/'}>
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <div className='flex items-center'>
              <Image
                className='border-[0.5px] rounded-full border-gray-400'
                src={logo}
                alt='Logo Mountain Technologies'
                width={35}
                height={35}
              />
              {
                scrolled &&
                <p className="ml-2 text-slate-900 font-bold -space-y-2">LOS ANGELES <br />
                  <p className='text-blue-950 tracking-widest'>MOUNTAINS</p>
                </p>
              }
            </div>
          </motion.div>
        </Link>

        <ul className='flex items-center justify-center gap-5'>
          {links.map(link => (
            <motion.li
              className='h-3/4 font-semibold flex items-center justify-center relative underline uppercase italic'
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link href={link.hash}>{link.name}</Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
