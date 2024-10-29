import React from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const Category = () => {
  const t = useTranslations('category');
  const params = useParams();
  const locale = params.locale as string;

  return (
    <div className='bg-secondary3 rounded-[16px] lg:max-w-[282px] text-white px-[24px] py-[32px]'>
      <p className='text-[24px] leading-[24px] mb-[24px]'>{t('title')}</p>
      <div className='flex lg:flex-col lg:flex-nowrap gap-4 flex-wrap flex-row justify-between'>
        <Link href={`/${locale}/blogs?category=news`}>
        <p className='cursor-pointer text-[14px] leading-[30px] py-[8px] border-b border-lightGray hover:text-customPink'>
          {t('items.0')}
        </p>
        </Link>
        <Link href={`/${locale}/blogs?category=reports`}>
        <p className='cursor-pointer text-[14px] leading-[30px] py-[8px] border-b border-lightGray hover:text-customPink'>
          {t('items.1')}
        </p>
        </Link>
        <Link href={`/${locale}/blogs?category=market-updates`}>
        <p className='cursor-pointer text-[14px] leading-[30px] py-[8px] border-b border-lightGray hover:text-customPink'>
          {t('items.2')}
        </p>
        </Link>
        <Link href={`/${locale}/blogs?category=blogs`}>
        <p className='cursor-pointer text-[14px] leading-[30px] py-[8px] border-b border-lightGray hover:text-customPink'>
          {t('items.3')}
        </p>
        </Link>
        <Link href={`/${locale}/blogs?category=share-of-voice`}>
        <p className='cursor-pointer text-[14px] leading-[30px] py-[8px] border-b border-lightGray hover:text-customPink'>
          {t('items.4')}
        </p>
        </Link>
      </div>
    </div>
  );
};

export default Category;
