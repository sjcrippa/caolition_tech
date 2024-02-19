import React from 'react'
import Image from 'next/image'

import hero from "/public/herobg.png";

export default function Hero() {
  return (
    <section className='relative h-screen'>
      <div className='z-10 absolute top-10 left-24 '>
        <h1 className='text-7xl texbla'>LOS ANGELES</h1> 
        <h2 className='text-7xl'>MOUNTAIN</h2>
      </div>
      <Image
        className='-z-10 absolute -top-10 h-screen object-cover '
        src={hero}
        alt='Mountains background image'
      />
    </section>
  )
}
