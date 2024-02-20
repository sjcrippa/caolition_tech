import React from 'react'
import Image from 'next/image'

import hero from "/public/herobg.png";

export default function Hero() {
  return (
    <section className='h-screen'>

      <div className='w-full absolute top-24 border border-red-500 z-10 text-center'>
        <h1 className='text-slate-900 font-extrabold text-5xl sm:text-7xl'>LOS ANGELES</h1>
        <h2 className='text-blue-950 tracking-widest font-extrabold text-5xl sm:text-7xl'>MOUNTAINS</h2>
      </div>

      <Image
        className='-z-10 object-cover absolute -top-10'
        src={hero}
        alt='Mountains background image'
      />
    </section>
  )
}
