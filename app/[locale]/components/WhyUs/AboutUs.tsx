import Image from 'next/image';
import React from 'react';
import { useTranslations } from 'next-intl';

const AboutUs = () => {
  const t = useTranslations('aboutUs');

  return (
    <div className='bg-secondary2'>
      <div className='max-w-[93%] xl:max-w-[83%] mx-auto pt-[116px] pb-[88px]'>
        <div className='grid lg:grid-cols-2 gap-[30px]'>
          <Image className='h-[500px] lg:h-full w-full lg:w-auto' src="/assets/WhyUs/about.png" width={585} height={760} alt='no image' />

          <div className='text-white self-stretch'>
            <p className='text-customPink text-[24px] leading-[34px] font-normal'>{t('title')}</p>
            <p className='leading-[50px] xl:leading-[66px] text-[2.8rem] xl:text-[3.5rem] font-normal mb-[10px]'>{t('subtitle')}</p>
            <p className='text-[18px] leading-[30px] font-normal text-lightGray'>{t('description')}</p>
            <p className='text-[18px] leading-[30px] font-normal py-[16px] text-lightGray'>{t('collaboration')}</p>
            <p className='text-[18px] leading-[30px] font-normal text-lightGray'>{t('growth')}</p>
            <button className='px-[32px] flex items-center gap-2 py-[17px] mt-[38px] bg-customPink rounded-[10px]'>
              <span>{t('getFreeConsultation')}</span>
              <Image className='mt-1' src="/assets/WhyUs/ArrowRight.svg" alt='no image' width={13} height={12} />
            </button>
          </div>
        </div>

        <div className='md:grid-cols-2 grid gap-[28px] xl:gap-[32px] mt-[88px]'>
          <div className='text-lightGray bg-center bg-cover p-[16px] md:p-[32px]' style={{ backgroundImage: "url('/assets/WhyUs/f1.png')" }}>
            <p className='text-[24px]'>OUR</p>
            <p className='text-customPink text-[48px] leading-[58px] font-normal'>{t('visionTitle')}</p>
            <p className='text-[20px] xl:text-[24px] leading-[34px] md:leading-[38px] font-normal pt-4'>{t('visionDescription')}</p>
          </div>
          <div className='text-lightGray bg-center bg-cover p-[16px] md:p-[32px]' style={{ backgroundImage: "url('/assets/WhyUs/f2.png')" }}>
            <p className='text-[24px]'>OUR</p>
            <p className='text-customPink text-[48px] leading-[58px] font-normal'>{t('missionTitle')}</p>
            <p className='text-[20px] xl:text-[24px] leading-[34px] md:leading-[38px] font-normal pt-4'>{t('missionDescription')}</p>
          </div>
        </div>
        <div className='text-lightGray bg-center bg-no-repeat bg-contain bg-[#0C1C27] mt-[24px] p-[16px] md:p-[32px]' style={{ backgroundImage: "url('/assets/WhyUs/f3.png')" }}>
          <p className='text-[24px]'>OUR</p>
          <p className='text-customPink text-[48px] leading-[58px] font-normal'>{t('valuesTitle')}</p>
          <p className='text-[20px] xl:text-[24px] leading-[34px] md:leading-[38px] font-normal pt-4'>{t('valuesDescription')}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
