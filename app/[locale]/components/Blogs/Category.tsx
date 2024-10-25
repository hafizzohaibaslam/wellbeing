import React from 'react';
import { useTranslations } from 'next-intl';

const Category = () => {
  const t = useTranslations('category');

  return (
    <div className='bg-secondary3 rounded-[16px] lg:max-w-[282px] text-white px-[24px] py-[32px]'>
      <p className='text-[24px] leading-[24px] mb-[24px]'>{t('title')}</p>
      <div className='flex lg:flex-col lg:flex-nowrap gap-4 flex-wrap flex-row justify-between'>
        <p className='cursor-pointer text-[14px] leading-[30px] py-[8px] border-b border-lightGray hover:text-customPink'>
          {t('items.0')}
        </p>
        <p className='cursor-pointer text-[14px] leading-[30px] py-[8px] border-b border-lightGray hover:text-customPink'>
          {t('items.1')}
        </p>
        <p className='cursor-pointer text-[14px] leading-[30px] py-[8px] border-b border-lightGray hover:text-customPink'>
          {t('items.2')}
        </p>
        <p className='cursor-pointer text-[14px] leading-[30px] py-[8px] border-b border-lightGray hover:text-customPink'>
          {t('items.3')}
        </p>
        <p className='cursor-pointer text-[14px] leading-[30px] py-[8px] border-b border-lightGray hover:text-customPink'>
          {t('items.4')}
        </p>
      </div>
    </div>
  );
};

export default Category;
