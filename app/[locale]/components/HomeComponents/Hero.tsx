'use client'

import Header from '@/app/[locale]/Header'
import React from 'react';

import { useTranslations } from "next-intl";
const Hero = () => {
 // No need for a namespace
   const t = useTranslations("Homepage")
  return (
    <div
      className="bg-cover bg-center h-auto pb-[184px]"
      style={{ backgroundImage: "url('/assets/HomeImages/HeroGIF.gif')" }} // Reference the .gif file
    >
      <Header />
      <div className='max-w-[93%] xl:max-w-[83%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[30px] items-center '>
        <div className='text-white mt-[121px]'>
          <h1 className='font-semibold text-[3rem] xl:text-[4rem] leading-[65px] xl:leading-[74px]'>
            {t('title')} {/* This should now work */}
          </h1>
          <p className='text-[1.2rem] xl:text-[1.5rem] font-normal leading-[30px] xl:leading-[38px] my-[24px]'>
           {t('subHeading')}
          </p>
          <div className='flex items-center gap-[24px]'>
            <button className='px-[32px] py-[17px] bg-customPink rounded-[10px]'>{t('getStarted')}</button>
            <button className='px-[32px] py-[17px] border-white border-2 rounded-[10px]'>{t('discoverMore')}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
