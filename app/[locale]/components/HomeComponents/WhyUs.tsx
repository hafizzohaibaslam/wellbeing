import React from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

const WhyUs = () => {
  const t = useTranslations('WhyUs')

  return (
    <div
      className="bg-cover bg-center h-auto"
      style={{ backgroundImage: "url('/assets/HomeImages/whyUs.svg')" }}
    >
      <div className='max-w-[93%] xl:max-w-[83%] mx-auto h-full text-white'>
        <div className='bg-primary max-w-[607px] py-[118px] px-[20px] xs:px-[43px] h-full'>
          <p className='text-customPink uppercase text-[24px] font-semibold'>
            {t('title')}
          </p>
          <p className='text-[2.5rem] sm:text-[3.5rem] leading-[50px] xs:leading-[66px] font-semibold'>
            {t('heading')}
          </p>

          <div className='mt-[40px]'>
            <div className='flex xs:flex-row flex-col items-center gap-[16px]'>
              <Image src='/assets/HomeImages/Empower.svg' alt='Empowerment Icon' width={50} height={45} />
              <p className='text-[2rem] xs:text-[2.2rem] md:text-[2.5rem] flex-1'>
                {t('sections.0.heading')}
              </p>
            </div>
            <p className='mt-4 ml-4 xs:text-left text-center leading-[30px] text-[18px] xs:text-[20px] md:ml-16'>
              {t('sections.0.description')}
            </p>
          </div>

          <div className='my-[36px]'>
            <div className='flex xs:flex-row flex-col items-center gap-[16px]'>
              <Image src='/assets/HomeImages/graphicon.svg' alt='Transformation Icon' width={50} height={45} />
              <p className='text-[2rem] xs:text-[2.2rem] md:text-[2.5rem] flex-1'>
                {t('sections.1.heading')}
              </p>
            </div>
            <p className='mt-4 ml-4 xs:text-left text-center leading-[30px] text-[18px] xs:text-[20px] md:ml-16'>
              {t('sections.1.description')}
            </p>
          </div>

          <div>
            <div className='flex xs:flex-row flex-col items-center gap-[16px]'>
              <Image src='/assets/HomeImages/bulb.svg' alt='Innovation Icon' width={50} height={45} />
              <p className='text-[2rem] xs:text-[2.2rem]'>
                {t('sections.2.heading')}
              </p>
            </div>
            <p className='mt-4 xs:text-left text-center ml-4 leading-[30px] text-[18px] xs:text-[20px] md:ml-16'>
              {t('sections.2.description')}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyUs
