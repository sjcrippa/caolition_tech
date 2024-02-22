'use client'

import React, { useState, useEffect } from 'react';

import { Mountain, mountains } from '@/data/data';

export default function TeamMenu() {
  const [selectedMountain, setSelectedMountain] = useState<Mountain>(mountains[0])

  useEffect(() => {
    // Actualizar el contenido del calendario al cambiar la montaña seleccionada
  }, [selectedMountain]);

  const handleMenuClick = (mountain: Mountain) => {
    setSelectedMountain(mountain);
  };

  return (
    <section className='relative z-20'>
      <menu className="border border-purple-500 h-12 flex gap-5 justify-center text-lg bg-blue-950 text-slate-400 font-bold underline">
        {mountains.map((mountain) => (
          <button
            className=''
            key={mountain.name}
            onClick={() => handleMenuClick(mountain)}>
            {mountain.name}
          </button>
        ))}
      </menu>

      <section className='mt-10 w-[25rem] h-[15rem] mx-auto px-5 py-2 bg-gray-50/80 rounded-lg shadow-lg'>
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
