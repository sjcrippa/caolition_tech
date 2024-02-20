import React from 'react'
import Image from 'next/image'

import secondbg from "/public/secondbg.png";

export default function History() {
  return (
    <section id='history' className=''>
      <Image
        className='h-screen object-cover' 
        src={secondbg} 
        alt='Second mountain background image'/>
    </section>
  )
}
