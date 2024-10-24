

import Header from '@/app/Header'
import React from 'react'
import Image from 'next/image'
const HeroDataVisual = () => {
  return (
    <div
      className="bg-cover bg-center h-[700px] sm:h-[639px]"
      style={{ backgroundImage: "url('/assets/Contact/contactHero.svg')" }}
    >
      <Header />

      <div className=' max-w-[93%] mx-auto xl:max-w-[83%]'>
        <div className="">
          <div className="flex items-center text-lightGray gap-2 mt-[48px]">
            <Image src="/assets/Contact/home.svg" width={12} height={12} alt="Home" />
            <Image src="/assets/Contact/leftArrow.svg" width={12} height={12} alt="Left Arrow" />
            <p className="text-[14px] leading-[26px]">Market Insights</p>
          </div>
        </div>

        <div className="text-white  max-w-[840px] text-center mx-auto  ">
          <p className=' text-[30px] sm:text-[40px] lg:text-[56px] leading-[50px] lg:leading-[66px] font-normal text-white'>Access to information,<br/> reports, and statistics.</p>
          <p className=' text-[18px] lg:text-[24px] leading-[38px] font-normal py-[28px] sm:py-[32px] text-lightGray'>Make better decisions for your project. Base them on scientific evidence using our data, reports, and tools. Get the report that includes the data you need.</p>
          <div className='flex xs:flex-row flex-col items-center gap-[20px]'>
            <input type="text" placeholder='Search' className='border-customPink w-full border-2 h-[48px] px-[16px] py-[10px] bg-transparent rounded-md' />
            <button className='bg-customPink px-[32px] py-[10px] h-[48px] rounded-md'>Search</button>
          </div>
        </div>

      </div>

    </div>
  )
}

export default HeroDataVisual