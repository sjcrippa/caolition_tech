import Image from 'next/image'
import React from 'react'

import thirdbg from "/public/thirdbg.png";
import TeamMenu from './TeamMenu';

export default function Team() {
  return (
    <section id='team' className='relative'>

      <article className='z-10 relative py-10 sm:left-1/2 sm:-translate-x-1/2 bg-gray-50 w-full h-72 flex flex-col gap-y-3 justify-center items-center md:flex md:flex-row md:gap-5'>

        <section className='relative mx-auto w-72 h-28 sm:mx-[initial] border border-red-500'>
          <div className='text-9xl font-bold text-slate-500/70'>
            02
            <div className='absolute bottom-0 right-[6rem] w-3 h-3 bg-slate-500/70'></div>
          </div>
          <p className='absolute bottom-3 right-[2rem] text-2xl text-blue-950 font-extrabold'>CLIMB</p>
        </section>

        <p className='text-center mt-10 mx-5 sm:mx-[initial] sm:mt-1 md:text-start text-blue-950 font-semibold border border-yellow-500 md:w-[30rem] xl:w-[50rem] p-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi facilis minus explicabo doloribus? Facilis aut architecto molestiae veniam similique dignissimos minus asperiores eveniet sequi cum.</p>
      </article>

      <TeamMenu />

      <Image
        className='h-screen object-cover absolute top-0'
        src={thirdbg}
        alt='Third mountain background image' />
    </section>
  )
}
