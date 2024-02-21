import React from 'react'

export default function TeamMenu() {
  return (
    <section className='w-full bg-blue-950 h-12 z-20 relative'>
      <ul className='flex h-full items-center'>
        <button className='active:bg-gray-400'>
          <li className=' text-blue-950'>MOUNTAIN 1</li>
        </button>
        <li>MOUNTAIN 2</li>
      </ul>
    </section>
  )
}
