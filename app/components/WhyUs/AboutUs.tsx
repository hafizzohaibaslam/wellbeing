

import Image from 'next/image'
import React from 'react'

const AboutUs = () => {
  return (

    <div className='bg-secondary2 '>
      <div className='  max-w-[93%] xl:max-w-[83%] mx-auto pt-[116px] pb-[88px]'>
        <div className='flex gap-[30px] '>

          <Image className='h-[760px]' src="/assets/WhyUs/about.png" width={585} height={760} alt='no image' />

          <div className='text-white self-stretch '>
            <p className='text-customPink text-[24px] leading-[34px] font-normal'>About us</p>
            <p className=' leading-[66px] text-[3.5rem] font-normal mb-[10px]'>Empowering Businesses to Thrive</p>
            <p className='text-[18px] leading-[30px] font-normal text-lightGray'>At Wellbeing Consulting, we believe in transforming businesses through innovative digital solutions and a human-centered approach. Founded two years ago, we are an early-stage startup dedicated to redefining the standards of business consulting by integrating digital mental health, business agility, and automation into our core services. Despite being a young company, we have rapidly gained recognition for our commitment to creating impactful change.</p>
            <p className='text-[18px] leading-[30px] font-normal py-[16px] text-lightGray'>We work closely with organizations to optimize their potential by offering tailored strategies that align with their unique challenges and goals. Our focus is on driving growth and enhancing well-being, ensuring businesses are equipped to thrive in an ever-evolving market landscape. Whether it’s through innovative mental health solutions that support employee well-being, agile business practices that foster adaptability, or intelligent automation that streamlines operations, our goal is to empower businesses to achieve sustainable success.</p>
            <p className='text-[18px] leading-[30px] font-normal text-lightGray'>As we continue to grow, we are passionate about expanding our impact across industries, helping organizations not only adapt but excel in a rapidly changing world.</p>
            <button className='px-[32px] py-[17px] mt-[38px] bg-customPink rounded-[10px]'>Get Free Consultation</button>
          </div>
        </div>

        <div className='grid-cols-2 grid gap-[32px] mt-[88px]'>
          <div className='text-lightGray bg-center bg-cover p-[32px]'
           style={{ backgroundImage: "url('/assets/WhyUs/f1.png')" }}
          >
           <p className='text-[24px]'>OUR</p>
           <p className='text-customPink text-[48px] leading-[58px] font-normal'>VISION</p>
           <p className='text-[24px] leading-[38px] font-normal pt-4'>To be the leading partner for businesses seeking innovative, sustainable, and human-centered solutions that drive long-term success and well-being.</p>
          
          </div>
          <div className='text-lightGray bg-center bg-cover p-[32px]'
           style={{ backgroundImage: "url('/assets/WhyUs/f2.png')" }}
          >
           <p className='text-[24px]'>OUR</p>
           <p className='text-customPink text-[48px] leading-[58px] font-normal'>MISSION</p>
           <p className='text-[24px] leading-[38px] font-normal pt-4'>To provide businesses with personalized digital strategies that foster growth, resilience, and agility, enabling them to thrive in a dynamic environment.</p>
          
          </div>
        </div>
        <div className='text-lightGray bg-center  bg-no-repeat bg-contain bg-[#0C1C27] mt-[24px] p-[32px]'
           style={{ backgroundImage: "url('/assets/WhyUs/f3.png')" }}
          >
           <p className='text-[24px]'>OUR</p>
           <p className='text-customPink text-[48px] leading-[58px] font-normal'>VALUES</p>
           <p className='text-[24px] leading-[38px] font-normal pt-4'>To driving excellence through cutting-edge innovation, maintaining the highest ethical standards, and always prioritizing the well-being of our clients and their communities.</p>
          
          </div>
      </div>
    </div>

  )
}

export default AboutUs