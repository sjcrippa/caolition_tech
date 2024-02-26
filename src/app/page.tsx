import React from 'react'

import Hero from '@/components/Hero'
import History from '@/components/History'
import Team from '@/components/Team'

export default function InitialPage() {
  return (
    <section className='relative'>
      <Hero />
      <History />
      <Team />
    </section>
  )
}
