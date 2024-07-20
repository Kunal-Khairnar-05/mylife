"use client"
import React from 'react'
import { TypewriterEffectSmooth } from './ui/typewriter-effect'
import { books, words } from '@/data'
import { InfiniteMovingCards } from './ui/infinite-moving-cards'

function Books() {
  return (
    <section id="books">
    <div className='flex justify-center pt-36 text-7xl'>
    <TypewriterEffectSmooth words={words} />
    </div>
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-black-100 items-center justify-center relative overflow-hidden">
    <InfiniteMovingCards
    items={books}
      direction="right"
      speed="slow"
    />

  </div>

  </section>
  )
}

export default Books