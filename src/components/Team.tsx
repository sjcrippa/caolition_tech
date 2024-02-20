import Image from 'next/image'
import React from 'react'

import thirdbg from "/public/thirdbg.png";

export default function Team() {
  return (
    <section id='team'>
      <Image
        className='h-screen object-cover'
        src={thirdbg}
        alt='Third mountain background image' />
    </section>
  )
}
