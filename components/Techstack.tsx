import React from 'react'
import { CardStack } from './ui/card-stack'
import { Card } from '@/data'

function Techstack() {
  return (
    <div className='justify-center mt-36 flex sm:pb-20 sm:flex-col lg:flex-row gap-x-16'>
        <div className='text-4xl text-blue-100 font-bold text-center'>Tech Stack I Use...</div>
        
        <CardStack items={Card}/>
        


        
    </div>
  )
}

export default Techstack