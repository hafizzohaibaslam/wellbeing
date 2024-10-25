


import React from 'react'

const Category = () => {
  return (
    <div className='bg-secondary3 rounded-[16px] lg:max-w-[282px] text-white px-[24px] py-[32px]'>
    <p className='text-[24px] leading-[24px] mb-[24px]'>Categories</p>
    <div className='flex lg:flex-col lg:flex-nowrap gap-4 flex-wrap flex-row justify-between'>
      <p className=' cursor-pointer text-[14px] leading-[30px] py-[8px] border-b border-lightGray hover:text-customPink'>News</p>
      <p className=' cursor-pointer text-[14px] leading-[30px] py-[8px] border-b border-lightGray hover:text-customPink'>Reports</p>
      <p className=' cursor-pointer text-[14px] leading-[30px] py-[8px] border-b border-lightGray hover:text-customPink'>Market Updates</p>
      <p className=' cursor-pointer text-[14px] leading-[30px] py-[8px] border-b border-lightGray hover:text-customPink'>Blogs</p>
      <p className=' cursor-pointer text-[14px] leading-[30px] py-[8px] border-b border-lightGray hover:text-customPink'>Share of Voice</p>
    </div>
  </div>

  )
}

export default Category