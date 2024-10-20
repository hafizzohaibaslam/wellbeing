import Image from 'next/image'
import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
const Header = () => {
  return (
    <div className=''>
        <div className='text-white flex max-w-[93%] xl:max-w-[83%] mx-auto items-center  py-[31px] justify-between'>
        <GiHamburgerMenu  size={25} className='text-white lg:hidden block'/>
            <Image className='sm:max-w-[204px] max-w-[150px] ' src='/assets/HomeImages/Logo.svg' alt='logo' width={204} height={43}/>
            <div className=' hidden lg:flex items-center gap-[28px]  xl:gap-[33px] justify-between'>
                <p>Home</p>
                <p>Why us</p>
                <p>Expertise</p>
                <p>Market Insights</p>
                <p>Reports</p>
            </div>

            <div className='flex items-center gap-x-[24px]'>
                <Image className='' src='/assets/HomeImages/search.svg' alt='search' width={24} height={24}/>
                <Image className=' hidden sm:block' src='/assets/HomeImages/Language.svg' alt='language' width={76} height={30}/>
                <button className='xs:block hidden px-[20px] sm:px-[32px] py-[12px] sm:py-[17px] bg-customPink rounded-[10px]'>Contact us</button>
            </div>
        </div>
    </div>
  )
}

export default Header