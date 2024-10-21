import Image from 'next/image';
import React from 'react';

interface BlogSection {
  title: string;
  content: string;
}

interface BlogData {
  title: string;
  author: string;
  date: string;
  sections: BlogSection[];
  mainImageSrc: string;
  chartImageSrc: string;
}

const BlogContent: React.FC<BlogData> = ({ title, author, date, sections, mainImageSrc, chartImageSrc }) => {
  return (
    <div className='max-w-[650px] xl:max-w-[792px]'>
      <div>
        <Image src={mainImageSrc} width={792} height={465} alt='main blog image' />
        <div>
          <p className='text-[48px] leading-[58px] font-normal text-white pt-[40px]'>{title}</p>
          <div className='flex items-center text-white border-b mb-[32px] gap-6 py-[32px]'>
            <p>Written by {author}</p>
            <p>{date}</p>
          </div>
          
          {sections.slice(0,3).map((section, index) => (
            <div key={index} className='mb-8'>
              <h1 className='text-[18px] leading-[34px] font-normal text-white'>{section.title}</h1>
              <p className='text-lightGray text-[16px] leading-[28px] font-normal'>
                {section.content}
              </p>
            </div>
          ))}

          <Image className='mb-8' src={chartImageSrc} width={792} height={243} alt='chart image' />
          {sections.slice(3,5).map((section, index) => (
            <div key={index} className='mb-8'>
              <h1 className='text-[18px] leading-[34px] font-normal text-white'>{section.title}</h1>
              <p className='text-lightGray text-[16px] leading-[28px] font-normal'>
                {section.content}
              </p>
            </div>
          ))}

          <div className='flex md:flex-row gap-5 items-center justify-between pr-3 flex-col'>
            <div className='flex items-center gap-[16px]'>
              <button className='text-white bg-customPink rounded-full px-[12px] py-[6px]'>Business</button>
              <button className='text-white bg-customPink rounded-full px-[12px] py-[6px]'>Market</button>
              <button className='text-white bg-customPink rounded-full px-[12px] py-[6px]'>Insights</button>
            </div>
            <div className='flex items-center gap-[20px] flex-wrap justify-center '>
              <div className='flex cursor-pointer items-center text-customPink text-[20px] font-normal leading-normal gap-[8px]'>
                <Image src="/assets/HomeImages/ArrowRight.svg" width={13.5} height={12.6} alt="arrow" className='rotate-180' />
                <p>Previous Article</p>
              </div>
              <div className='flex cursor-pointer items-center text-customPink text-[20px] font-normal leading-normal gap-[8px] '>
                <p>Next Article</p>
                <Image src="/assets/HomeImages/ArrowRight.svg" width={13.5} height={12.6} alt="arrow" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
