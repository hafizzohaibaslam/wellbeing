import React from 'react';
import Image from 'next/image';
import { Blog } from '@/misc/interfaces';
import { dateConversion } from '@/lib/utils';
import { SERVER_IMAGE_URL } from '@/misc/constants';
import { getShortDescription } from '@/lib/utils';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const BlogCard = ({blog}:{blog:Blog}) => {
  const params = useParams();
  const locale = params.locale as string;

  return (
    <div className=" flex flex-col sm:flex-row items-start lg:items-center text-white gap-4 lg:gap-[19px]">
      {/* Image with responsive sizing */}
      <div className='w-full sm:w-auto  min-w-[150px]  lg:min-w-[225px] min-h-[120px] object-cover sm:min-h-[205px] rounded-2xl overflow-hidden'>
        <Image
          src={SERVER_IMAGE_URL + blog.image?.url}
          alt="no image"
          width={225}
          height={205}
        />
      </div>
      {/* Text Content */}
      <div className='sm:py-0 py-[20px]'>
        <p className="text-[12px] sm:text-[14px] leading-[20px] md:leading-[26px] md:text-[14px] xl:leading-[26px]">
          Published on {dateConversion(blog?.publishedAt)} | {blog?.categories?.[0]?.title}
        </p>
        <p className="text-[22px] sm:text-[28px] md:text-[30px] md:leading-[46px] xl:text-[30px] leading-[28px] sm:leading-[34px] xl:leading-[46px] py-2">
          {blog?.title}
        </p>
        <p className="text-[16px] xl:text-[18px] leading-[28px] xl:leading-[36px]">
          {getShortDescription(blog?.deccription)}
        </p>
        
          <Link href={`/${locale}/blogs/${blog?.id}`} className='text-customPink flex items-center lg:mt-0 mt-2 gap-2'>
          <p className="text-customPink ">Learn More</p>
          <Image
            className=""
            src="/assets/HomeImages/ArrowRight.svg"
            width={20}
            height={20}
            alt="arrow icon"
          />
          </Link>
      </div>
    </div>
  );
};

export default BlogCard;
