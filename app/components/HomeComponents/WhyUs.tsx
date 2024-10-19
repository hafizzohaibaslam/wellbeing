import React from 'react'
import Image from 'next/image'
const WhyUs = () => {
  return (
    <div
    className="bg-cover bg-center h-auto"
    style={{ backgroundImage: "url('/assets/HomeImages/whyUs.svg')" }} 
    >
      <div className='max-w-[93%] xl:max-w-[83%] mx-auto h-full text-white'>
        <div className='bg-primary max-w-[607px] py-[118px] px-[43px]  h-full'>
             <p className='text-customPink uppercase text-[24px] font-semibold'>Why us?</p>
             <p className='text-[2.5rem] sm:text-[3.5rem] leading-[66px] font-semibold'>Unlock Your Business Potential</p>
             <div className='mt-[40px]'>
                <div className='flex items-center gap-[16px]'>
                    <Image src='/assets/HomeImages/Empower.svg' alt='no image' width={50} height={45}/>
                    <p className='text-[2.2rem]'>Empowerment</p>
                </div>
                <p className='ml-16 leading-[30px] text-[18px]'>Empowering individuals with innovative digital mental health solutions prioritizing empathy and human-centered design.
                </p>
             </div>
             <div className='my-[36px]' >
                <div className='flex items-center gap-[16px]'>
                    <Image src='/assets/HomeImages/graphicon.svg' alt='no image' width={50} height={45}/>
                    <p className='text-[2.2rem]'>Transformation</p>
                </div>
                <p className='ml-16 leading-[30px] text-[18px]'>Empowering individuals with innovative digital mental health solutions prioritizing empathy and human-centered design.
                </p>
             </div>
             <div >
                <div className='flex items-center gap-[16px]'>
                    <Image src='/assets/HomeImages/bulb.svg' alt='no image' width={50} height={45}/>
                    <p className='text-[2.2rem]'>Innovation</p>
                </div>
                <p className='ml-16 leading-[30px] text-[18px]'>Empowering individuals with innovative digital mental health solutions prioritizing empathy and human-centered design.
                </p>
             </div>
        </div>
      </div>
    </div>
  )
}

export default WhyUs