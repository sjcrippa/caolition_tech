import Hero from '@/components/Hero'
import History from '@/components/History'
import Team from '@/components/Team'
import React from 'react'

export default function page() {
  return (
    <main className='relative'>
      <Hero />
      <History />
      <Team />
    </main>
  )
}
