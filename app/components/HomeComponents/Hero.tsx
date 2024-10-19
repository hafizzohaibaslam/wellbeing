
import Header from '@/app/Header'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div
      className="bg-cover bg-center  h-auto pb-[184px] "
      style={{ backgroundImage: "url('/assets/HomeImages/Property.png')" }} // Reference image directly from public folder
    >
      <Header/>
      <div className='max-w-[93%] xl:max-w-[83%] mx-auto  grid grid-cols-1 md:grid-cols-2 gap-[30px] items-center '>
       


      

          <div className='text-white  mt-[121px]'>
            <h1 className='font-semibold text-[3rem] xl:text-[4rem] leading-[65px] xl:leading-[74px]'>Empowering Your Business with</h1>
            <p className=' text-[1.2rem] xl:text-[1.5rem] font-normal leading-[30px] xl:leading-[38px] my-[24px]'>Transform your business with tailored digital solutions and expert consultations, driven by innovation and agility.</p>
            <div className='flex items-center gap-[24px]'>
              <button className='px-[32px] py-[17px] bg-customPink rounded-[10px]'>Get Started</button>
              <button className='px-[32px] py-[17px] border-white border-2 rounded-[10px]'>Discover More</button>
            </div>
          </div>
        
         <div className='flex mt-[50px] justify-center items-center'>
      
         <Image className=' object-contain ' src="/assets/HomeImages/Frame.png" alt="circle"  width={499} height={495}/>
         </div>
       
      </div>

    </div>
  )
}

export default Hero