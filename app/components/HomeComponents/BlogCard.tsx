import React from 'react';
import Image from 'next/image';

const BlogCard = () => {
  return (
    <div className=" flex flex-col sm:flex-row items-start lg:items-center text-white gap-4 lg:gap-[19px]">
      {/* Image with responsive sizing */}
      <Image
        className="w-full sm:w-auto  min-w-[150px]  lg:min-w-[225px] min-h-[120px] object-cover sm:min-h-[205px] "
        src="/assets/HomeImages/B2.png"
        alt="no image"
        width={225}
        height={205}
      />
      
      {/* Text Content */}
      <div className='sm:py-0 py-[20px]'>
        <p className="text-[12px] sm:text-[14px] leading-[20px] md:leading-[26px] md:text-[14px] xl:leading-[26px]">
          Published on August 28, 2024 | Digital Health
        </p>
        <p className="text-[22px] sm:text-[28px] md:text-[30px] md:leading-[46px] xl:text-[30px] leading-[28px] sm:leading-[34px] xl:leading-[46px] py-2">
          Human-Centered Design
        </p>
        <p className="text-[16px] xl:text-[18px] leading-[28px] xl:leading-[36px]">
          User-focused design ensures effectiveness in digital health platforms.
        </p>
        <div className="flex items-center lg:mt-0 mt-2 gap-2 ">
          <p className="text-customPink ">Learn More</p>
          <Image
            className=""
            src="/assets/HomeImages/ArrowRight.svg"
            width={20}
            height={20}
            alt="arrow icon"
          />
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
