'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion";

import hero from "/public/herobg.png";

export default function Hero() {
  return (
    <section className='h-screen'>

      <motion.div className='w-full absolute top-48 sm:top-36 text-center'>
        <h1 className='text-slate-900 font-extrabold text-5xl sm:text-7xl'>LOS ANGELES</h1>
        <h2 className='text-blue-950 tracking-widest font-extrabold text-5xl sm:text-7xl'>MOUNTAINS</h2>
      </motion.div>

      <Image
        className='-z-10 object-cover h-screen'
        src={hero}
        alt='Mountains background image'
      />
    </section>
  )
}
