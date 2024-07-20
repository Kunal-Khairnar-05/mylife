import Link from 'next/link'
import React from 'react'

function Contact() {
  return (
    <section id='contact'>
    <div className="flex gap-7 py-10 sm:grid-cols-2 items-center justify-center">
      <Link href="https://www.linkedin.com/in/kunal-khairnar-63b5b522a/" target="_blank"><div className='bg-black-300 rounded-2xl p-5'><img src="linkedin.png" className="lg:w-12 md:w-8 w-6"/></div></Link>
      <Link href="https://x.com/KunalKhairnar_" target="_blank"><div className='bg-black-300 rounded-2xl p-5'><img src="x.png" className="lg:w-12 md:w-8 w-6"/></div></Link>
      <Link href="https://www.instagram.com/___kunaaaal" target="_blank"><div className='bg-black-300 rounded-2xl p-5'><img src="instagram.png" className="lg:w-12 md:w-8 w-6"/></div></Link>
      <Link href="https://github.com/Kunal-Khairnar-05" target="_blank"><div className='bg-black-300 rounded-2xl p-5'><img src="github.png" className="lg:w-12 md:w-8 w-6"/></div></Link>

    </div>
    
    </section>
  )
}

export default Contact