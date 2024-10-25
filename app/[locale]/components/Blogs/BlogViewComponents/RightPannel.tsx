import React from 'react'
import Category from '../Category'
import TopReports from '../TopReports'
import Image from 'next/image'
const RightPannel = () => {
  return (
    <div className=' lg:max-w-[282px] '>
    <Category />
    <div className="flex mt-[40px] lg:mt-[81px] m items-center  border-b-2 border-customPink pb-3">
      <span className="text-gray-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35m2.48-5.12a7.48 7.48 0 11-14.96 0 7.48 7.48 0 0114.96 0z"
          />
        </svg>
      </span>
      <input
        type="text"
        placeholder="Search for Keywords"
        className="ml-2 w-full bg-transparent  text-gray-300 focus:outline-none focus:border-pink-500 transition duration-300"
      />
    </div>
    {/* right About */}
    <div className='flex flex-col justify-between mt-[70px] lg:mt-[166px]'>
      <div className='text-[18px] leading-[34px] font-normal'>
        <p className='text-white'>About</p>
        <p className='text-lightGray'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloree laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi </p>

      <div className='flex justify-center items-center'>

     
        <div className='bg-customPink  flex flex-col  justify-center gap-1 px-[32px] lg:w-full mt-[40px] mb-[30px] lg:mb-[80px] py-[17px] items-center  text-white rounded-[8px]'>
          <Image src="/assets/Blogs/download.svg" width={24} height={24} alt='download' />
          <p>Downlad This Article</p>
        </div>
        </div>
        <div>
          <TopReports />
        </div>
      </div>
    </div>
  </div>
  )
}

export default RightPannel