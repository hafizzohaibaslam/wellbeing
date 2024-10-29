import Image from 'next/image';
import React from 'react';

import { Blog } from '@/misc/interfaces';
import { SERVER_IMAGE_URL } from '@/misc/constants';
import { dateConversion } from '@/lib/utils';

const BlogContent: React.FC<{ blog: Blog }> = ({ blog }) => {
  return (
    <div className='max-w-[650px] xl:max-w-[792px]'>
      <div>
        <div className='w-full h-[465px] object-cover overflow-hidden'>
          <Image src={SERVER_IMAGE_URL + blog?.image?.url} width={792} height={465} alt='main blog image' />
        </div>
        <div>
          <p className='text-[48px] leading-[58px] font-normal text-white pt-[40px]'>{blog?.title}</p>
          <div className='flex items-center text-white border-b mb-[32px] gap-6 py-[32px]'>
            <p>Written by {blog?.author}</p>
            <p>{dateConversion(blog?.publishedAt)}</p>
          </div>
          
          <div className='text-gray-300'  dangerouslySetInnerHTML={{ __html: blog?.deccription }} />

          <div className='flex md:flex-row gap-5 items-center justify-between pr-3 flex-col mt-5'>
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
