import { TextGenerateEffect } from '@/components/ui/TextGenerateEffect'
import Link from 'next/link'
import React from 'react'

function guitar() {
  return (
    <div className="justify-center z-10 text-center">
      <TextGenerateEffect
        words="Learning Guitar"
        className="lg:text-2xl sm:text-2xl text-border backdrop:1 my-10"
      />

      <Link href="https://www.instagram.com/reel/C8JqMyqtdSQ9NbBJuPI5PA0_gtnkBfK8B6qEhY0/?igsh=NWNodGNlcmNxbWlx" target="_blank">
        <div className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-zinc-900 border border-cyan-800">
          <img
            src={`/guitar.jpeg`}
            alt="blogs image"
            height="400"
            width="400"
            className="object-contain border border-black-100"
          />
          <p className="text-base sm:text-xl mt-4 mb-2 text-neutral-200">
            Just started to learn Guitar 🎸 
          </p>
        </div>
      </Link>
    </div>
  )
}

export default guitar