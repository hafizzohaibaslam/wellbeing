import Image from 'next/image';
import React from 'react';
import {Blog } from '@/misc/interfaces'
import { dateConversion, getShortDescription } from '@/lib/utils';
import { SERVER_IMAGE_URL } from '@/misc/constants';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const BlogCard = ({blog}:{blog:Blog}) => {
  const params = useParams();
  const locale = params.locale as string;

  return (
    <div className='sm:max-w-[382px]'>
      <div className='w-full h-[200px] object-cover overflow-hidden'>
        <Image src={blog?.image?.url ? SERVER_IMAGE_URL + blog?.image?.url : "/public/assets/Blogs/blog1.png"} alt='blog' width={382} height={185} />
      </div>
      <div className='py-[19px] max-h-[408px]'>
        <p className='text-[24px] leading-[34px] text-white font-normal'>{blog?.title}</p>
        <p className='text-[14px] leading-[26px] h-[78px] font-normal text-lightGray pt-[20px] line-clamp-3'>
          {getShortDescription(blog?.deccription)}
        </p>
        <div className='flex justify-between pt-[20px]'>
          <p className='text-white text-[14px] leading-[26px]'>{dateConversion(blog?.publishedAt)}</p>
          <Link 
            href={`/${locale}/blogs/${blog?.id}`} 
            className='text-customPink'
          >
            Read more
          </Link> 
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
