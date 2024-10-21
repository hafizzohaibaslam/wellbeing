import Image from 'next/image';
import React from 'react';

interface BlogCardProps {
  title: string;
  description: string;
  date: string;
  imageSrc: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, description, date, imageSrc }) => {
  return (
    <div className='sm:max-w-[382px]'>
      <Image className='w-full' src={imageSrc} alt='blog' width={382} height={185} />
      <div className='py-[19px] max-h-[408px]'>
        <p className='text-[24px] leading-[34px] text-white font-normal'>{title}</p>
        <p className='text-[14px] leading-[26px] h-[78px] font-normal text-lightGray pt-[20px] line-clamp-3'>
          {description}
        </p>
        <div className='flex justify-between pt-[20px]'>
          <p className='text-white text-[14px] leading-[26px]'>{date}</p>
          <p className='text-customPink'>Read more</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
