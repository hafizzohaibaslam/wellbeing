

import BlogContent from '@/app/components/Blogs/BlogViewComponents/BlogContent'
import Header from '@/app/Header'
import React from 'react'
import Image from 'next/image'
import BlogCard from '@/app/components/Blogs/BlogCard'

import RightPannel from '@/app/components/Blogs/BlogViewComponents/RightPannel'
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
const blogContent = {
  title: "Finibus Bonorum et Malorum",
  author: "John Doe",
  date: "Monday May 20",
  mainImageSrc: "/assets/Blogs/blog2.png",
  chartImageSrc: "/assets/Blogs/chart.png",
  sections: [
    {
      title: "Section 1.10.32 of de Finibus Bonorum et Malorum",
      content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
    },
    {
      title: "1914 translation by H. Rackham",
      content: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
    },
    {
      title: "Section 1.10.33 of de Finibus Bonorum et Malorum",
      content: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
    },
    {
      title: "Section",
      content: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
    },
    {
      title: "Section 1.10.33",
      content:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
    }
  ]
};

const page = () => {
  return (
    <div className='bg-secondary2'>
      <Header />
      <div className=' max-w-[93%] xl:max-w-[83%] mx-auto px-3'>
        {/* Humberger */}
        <div className="flex items-center text-lightGray gap-2 mt-[48px]">
          <Image src="/assets/Contact/home.svg" width={12} height={12} alt="Home" />
          <Image src="/assets/Contact/leftArrow.svg" width={12} height={12} alt="Left Arrow" />
          <p className="text-[14px] leading-[26px]">Blog</p>
          <Image src="/assets/Contact/leftArrow.svg" width={12} height={12} alt="Left Arrow" />
          <p>...</p>
          <Image src="/assets/Contact/leftArrow.svg" width={12} height={12} alt="Left Arrow" />
          <p>Blog Title</p>
        </div>


        {/* Blog Content */}

        <div className='pb-[88px] flex flex-col-reverse  lg:flex-row  justify-between gap-[20px] pt-[50px] lg:pt-[89px]'>
          <BlogContent {...blogContent}/>

          {/* right pannel */}
         <RightPannel/>


        </div>
        {/* related articles */}
        <div >
          <p className='text-[40px] leading-[50px] font-normal text-white'>Related Articles</p>
          <div className='grid pt-[40px] pb-[80px] sm:grid-cols-2 lg:grid-cols-4  gap-5'>
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
      </div>
    </div>
  )
}

export default page