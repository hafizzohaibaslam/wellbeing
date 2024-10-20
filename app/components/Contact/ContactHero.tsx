

import Header from '@/app/Header'
import Image from 'next/image'
import React from 'react'

const ContactHero = () => {
  return (
 
        <div
      className="bg-cover bg-center  h-[396px] "
      style={{ backgroundImage: "url('/assets/Contact/contactHero.svg')" }} // Reference image directly from public folder
    >
     <Header/>
     <div className='max-w-[93%] xl:max-w-[83%] mx-auto'>
        <div className='flex items-center text-lightGray gap-2 mt-[48px] ' >
            <Image src="/assets/Contact/home.svg" width={12} height={12} alt='Home'/>
            <Image src="/assets/Contact/leftArrow.svg" width={12} height={12} alt='Home'/>
            <p className='text-[14px] leading-[26px]'>contact</p>
        </div>
        <p className='text-[64px] leading-[74px] font-normal text-white mt-[64px]'>Contact</p>
     </div>
    </div>
  )
}

export default ContactHero