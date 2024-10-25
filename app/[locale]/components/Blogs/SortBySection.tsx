'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const SortBySection: React.FC = () => {
  const t = useTranslations('sortBySection'); // Change the namespace as per your JSON structure
  const [sortOption, setSortOption] = useState<string>('Relevance');

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(event.target.value);
  };

  return (
    <div className='flex xs:flex-row flex-col gap-3 justify-between pb-[7px] border-b-customPink border-b-2 mb-[32px]'>
      <p className='text-[40px] text-white leading-[50px] font-normal'>{t('news')}</p>

      <div className='flex items-center gap-1'>
        <Image src="/assets/Blogs/sort.svg" alt='sort' width={16} height={16} />
        <p className='text-white text-[18px] leading-[30px] font-normal'>
          {t('sortBy')}:
        </p>
        <select 
          value={sortOption}
          onChange={handleSortChange}
          className='bg-transparent text-customPink outline-none rounded-md p-1'
        >
          <option value='Relevance'>{t('options.relevance')}</option>
          <option value='Date'>{t('options.updated')}</option>
          <option value='Popularity'>{t('options.popularity')}</option>
        </select>
      </div>
    </div>
  );
};

export default SortBySection;
