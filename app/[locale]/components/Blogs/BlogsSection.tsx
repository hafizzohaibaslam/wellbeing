


import React from 'react'

import Category from './Category'
import TopReports from './TopReports'
import SortBySection from './SortBySection'
import BlogCard from './BlogCard'
import { useTranslations } from 'next-intl';
const blogData = [
  {
    id: 1,
    title: "Title One",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    date: "May 20th 2020",
    imageSrc: "/assets/Blogs/blog1.png",
  },
  {
    id: 2,
    title: "Title Two",
    description: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, making it look like readable English.",
    date: "June 15th 2020",
    imageSrc: "/assets/Blogs/blog1.png",
  },
  {
    id: 3,
    title: "Title Three",
    description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.",
    date: "July 10th 2020",
    imageSrc: "/assets/Blogs/blog1.png",
  },
  {
    id: 4,
    title: "Title Three",
    description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.",
    date: "July 10th 2020",
    imageSrc: "/assets/Blogs/blog1.png",
  },
];

const BlogsSection = () => {
  const t = useTranslations()
  return (

    <div className='bg-secondary2'>
      <div className='max-w-[93%] xl:max-w-[83%]  mx-auto'>

        <div className='flex flex-col-reverse lg:flex-row  justify-between gap-[20px] pt-[80px] pb-[64px]'>


          <div className='lg:max-w-[630px] px-3 xl:max-w-[792px]'>

            <SortBySection/>

            <div className='grid sm:grid-cols-2  gap-x-[24px] gap-y-[32px]'>
            {blogData.map((blog) => (
        <BlogCard 
          key={blog.id} 
          title={blog.title} 
          description={blog.description} 
          date={blog.date} 
          imageSrc={blog.imageSrc} 
        />
      ))}
            </div>
          </div>

          <div className=''>
            <Category/>

           <TopReports/>
          </div>
        </div>

        <div className='flex justify-center items-center pb-[128px]'>
          <button className='px-[32px] py-[17px] text-customPink border-customPink rounded-[8px] border-2'>  {t('loadMore')}</button>
        </div>
      </div>
    </div>

  )
}

export default BlogsSection