import React from 'react'
import Image from 'next/image'

import hero from "/public/herobg.png";

export default function Hero() {
  return (
    <section>
      <Image src={hero} alt='Mountains background image'/>
    </section>
  )
}
