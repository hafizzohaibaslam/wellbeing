

import React from 'react'
import Image from 'next/image'
import BlogCard from './BlogCard'
import { useTranslations } from 'next-intl';
const Blogs = () => {
    const t = useTranslations('BlogSection');
    return (
        <div className='bg-primary'>

            <div className=' max-w-[93%] xl:max-w-[83%] mx-auto py-[120px]'>
                <div className='flex flex-col justify-center items-center'>
                    <p className='text-customPink text-[24px] leading-[34px] text-center'>
                        {t('ourBlogs')}
                    </p>
                    <p className='text-[2.5rem] md:text-[3.5rem] leading-[55px] md:leading-[66px] font-semibold text-center text-white'>
                        {t('exploreBlogs')}
                    </p>
                    <p className='text-[18px] leading-[30px] text-center mt-[16px] text-[#EBEBEB]'>
                        {t('blogDescription')}
                    </p>
                </div>
                <div className=' grid grid-cols-1 lg:grid-cols-[40%,auto]  xl:flex lg:flex-row flex-col gap-[21px] mt-[48px]'>
                    <div className='relative'>

                        <Image className=' w-full  h-[656px]' src="/assets/HomeImages/B1.png" alt="blog" width={548} height={656} />

                        <div className='absolute bottom-0 text-white mx-[30px] xs:mx-[49px] mb-[32px]'>
                            <p className='text-[14px] leading-[26px]'>Published on September 12, 2024 | Business Solutions</p>
                            <p className='text-[24px] leading-[34px] py-[9px]'>Discover how businesses are embracing digital transformation to stay competitive</p>

                            <div className='flex items-center gap-3'>
                                <p className='text-white'>Learn More</p>
                                <Image src="/assets/HomeImages/ArrowRight.svg" width={20} height={20} alt='no image' />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-[20px]'>
                        <BlogCard />
                        <BlogCard />
                        <BlogCard />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Blogs