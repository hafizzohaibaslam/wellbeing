'use client'
import React from 'react';
import ContactUs from '../HomeComponents/ContactUs';
import { useTranslations } from 'next-intl';

const GetTouch = () => {
  const t = useTranslations('contact'); // Use the contact namespace for translations

  return (
    <div className='bg-secondary2'>
      <div className='flex md:flex-row flex-col'>
        <div className='mx-[10px] md:mx-[30px] lg:mx-[60px] xl:mx-[120px]'>
          <ContactUs isContact={true} />
        </div>

        <div className='bg-secondary3 md:py-0 py-[80px] flex items-center lg:pl-[62px] md:pl-[32px] md:pr-[32px] lg:pr-[62px] xl:pr-[120px]'>
          <div className='flex flex-col gap-[54px]'>
            <p className='text-right text-[2rem] sm:text-[2.8rem] lg:text-[3.5rem] leading-[66px] text-white font-semibold'>
              {t('contactDetails')}
            </p>
            <div className='flex flex-col justify-end items-end gap-[54px]'>
              <div>
                <p className='text-[18px] lg:text-[24px] font-normal leading-[38px] text-lightGray'>
                  {t('callUs')}
                </p>
                <p className='text-[25px] sm:text-[30px] lg:text-[40px] font-normal leading-[50px] text-white'>
                  {t('phoneNumber')}
                </p>
              </div>
              <div>
                <p className='text-[18px] font-normal leading-[38px] text-lightGray'>
                  {t('emailUs')}
                </p>
                <p className='text-[25px] sm:text-[30px] font-normal leading-[50px] text-white'>
                  {t('emailAddress')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetTouch;
