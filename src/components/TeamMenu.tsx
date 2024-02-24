'use client'

import React, { useState, useEffect } from 'react';

import { Mountain, mountains } from '@/data/data';

export default function TeamMenu() {
  const [selectedMountain, setSelectedMountain] = useState<Mountain>(mountains[0]);

  useEffect(() => {
    // Updating content
  }, [selectedMountain]);

  const handleMenuClick = (mountain: Mountain) => {
    setSelectedMountain(mountain);
  };

  return (
    <section className='relative'>
      <menu className="h-12 flex gap-5 justify-center text-lg bg-blue-950 text-slate-400 font-bold z-20">
        {mountains.map((mountain) => (
          <button
            className={`py-1 px-4 ${selectedMountain.name === mountain.name ? 'bg-gray-400 text-blue-950 underline transition-all ease-in duration-200' : ''
              }`}
            key={mountain.name}
            onClick={() => handleMenuClick(mountain)}
          >
            {mountain.name}
          </button>
        ))}
      </menu>

      <section className='mt-16 md:mt-10 lg:mt-24 w-[20rem] md:w-[25rem] h-[15rem] mx-auto px-5 py-2 bg-gray-50/80 rounded-lg shadow-lg'>
        <h3 className='text-2xl text-blue-950 font-extrabold leading-10	'>SCHEDULE</h3>
        <div className='mt-5 transition'>
          {selectedMountain.schedule.map((item) => (
            <ul
              className='grid grid-cols-2 items-center py-2 transition'
              key={item.date}
            >
              <li>{item.date}</li>
              <li>{item.description}</li>
            </ul>
          ))}
        </div>
      </section>

    </section>
  );
}
