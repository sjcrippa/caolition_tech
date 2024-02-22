import React from 'react'
import Image from 'next/image'

import secondbg from "/public/secondbg.png";
import { HistoryCarousel } from './Carousel';

export default function History() {
  return (
    <section id='history' className='relative' >

      <article className='absolute py-20 sm:py-24 sm:left-1/2 sm:-translate-x-1/2'>

        <div className='w-full flex justify-center md:w-[initial] md:block'>

          <section className='relative mx-auto w-72 h-28 sm:mx-[initial]'>
            <div className='text-9xl font-bold text-slate-500/70'>
              01
              <div className='absolute bottom-0 right-[7.5rem] w-3 h-3 bg-slate-500/70'></div>
            </div>
            <p className='absolute bottom-3 right-[1.5rem] text-2xl text-blue-950 font-extrabold'>HISTORY</p>
          </section>
        </div>

        <p className='w-auto sm:w-[40rem] md:w-[30rem] text-center mt-16 sm:mt-5 xl:mt-2 mx-5 sm:mx-[initial] md:translate-x-[4rem] md:text-start text-blue-950 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse facilis ipsum optio harum odit autem mollitia, culpa sit repellat saepe. Vero voluptatibus cupiditate quos, impedit suscipit voluptas modi, animi laboriosam tenetur beatae hic aperiam repellendus. Ad error amet voluptates explicabo ullam, at alias ipsam exercitationem hic commodi nihil in eligendi.</p>
      </article>

      <Image
        className='h-screen object-cover'
        src={secondbg}
        alt='Second mountain background image' />

      <HistoryCarousel />

    </section>
  )
}
