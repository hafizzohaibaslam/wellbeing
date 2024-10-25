'use client'
import React, { useState } from 'react';
import Image from 'next/image';

const SortBySection: React.FC = () => {
  const [sortOption, setSortOption] = useState<string>('Relevance');

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(event.target.value);
  };

  return (
    
      <div className='flex xs:flex-row flex-col gap-3 justify-between pb-[7px] border-b-customPink border-b-2 mb-[32px]'>
        <p className='text-[40px] text-white leading-[50px] font-normal'>News</p>

        <div className='flex items-center gap-1'>
          <Image src="/assets/Blogs/sort.svg" alt='sort' width={16} height={16} />
          <p className='text-white text-[18px] leading-[30px] font-normal'>
            Sort By : 
          </p>
          <select 
            value={sortOption}
            onChange={handleSortChange}
            className='bg-transparent text-customPink outline-none  rounded-md p-1'
          >
            <option value='Relevance'>Relevance</option>
            <option value='Date'>updated</option>
            <option value='Popularity'>Popularity</option>
          </select>
          {/* <Image src="/assets/Blogs/drop.svg" alt='none' width={16} height={16} /> */}
        </div>
      </div>
   
  );
};

export default SortBySection;
