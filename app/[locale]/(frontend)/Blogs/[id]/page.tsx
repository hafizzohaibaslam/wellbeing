'use client';

import React, { useEffect, useState, useCallback, useMemo } from 'react';
import Image from 'next/image';
import BlogContent from '../../../components/Blogs/BlogViewComponents/BlogContent';
import Header from '@/app/[locale]/Header';
import BlogCard from '../../../components/Blogs/BlogCard';
import RightPannel from '@/app/[locale]/components/Blogs/BlogViewComponents/RightPannel';
import { Blog, BlogsResponse } from '@/misc/interfaces';
import server from '@/misc/axios';
import { useTranslations } from 'next-intl';

interface PageState {
  blog: Blog | null;
  relatedBlogs: Blog[];
  isLoading: boolean;
  error: string | null;
}


const RELATED_BLOGS_LIMIT = 4;

const BlogDetailsPage = ({ params }: { params: { id: string } }) => {
  const t = useTranslations();
  const [state, setState] = useState<PageState>({
    blog: null,
    relatedBlogs: [],
    isLoading: true,
    error: null,
  });

  // Memoize the fetch parameters
  const fetchParams = useMemo(() => ({
    populate: ["categories", "image", "author", "tags"],
  }), []);

  // Fetch single blog with correct type
  const fetchBlog = useCallback(async () => {
    try {
      const response = await server.get<BlogsResponse>("/Blogs", {
        params: {
          ...fetchParams,
          filters: {
            id: {
              $eq: params.id
            }
          },
          pagination: {
            page: 1,
            pageSize: 1
          }
        },
      });

      // Return the first (and only) item from the data array
      if (response.data.data && response.data.data.length > 0) {
        return response.data.data[0];
      }
      throw new Error('Blog not found');
    } catch (error) {
      console.error("Error fetching blog:", error);
      throw error;
    }
  }, [params.id, fetchParams]);

  // Fetch related blogs
  const fetchRelatedBlogs = useCallback(async () => {
    try {
      const response = await server.get<BlogsResponse>("/Blogs", {
        params: {
          ...fetchParams,
          pagination: {
            page: 1,
            pageSize: RELATED_BLOGS_LIMIT,
          },
          filters: {
            id: {
              $ne: params.id,
            },
          },
        },
      });

      return response.data.data;
    } catch (error) {
      console.error("Error fetching related blogs:", error);
      throw error;
    }
  }, [params.id, fetchParams]);

  // Combined fetch effect
  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      setState(prev => ({ ...prev, isLoading: true, error: null }));
      
      try {
        const [blogData, relatedBlogsData] = await Promise.all([
          fetchBlog(),
          fetchRelatedBlogs(),
        ]);

        if (isMounted) {
          setState({
            blog: blogData,
            relatedBlogs: relatedBlogsData,
            isLoading: false,
            error: null,
          });
        }
      } catch (error) {
        console.error("Error fetching blog details:", error);
        if (isMounted) {
          setState(prev => ({
            ...prev,
            isLoading: false,
            error: t('failedToLoadBlogContent'),
          }));
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [fetchBlog, fetchRelatedBlogs]);

  // Loading state
  if (state.isLoading) {
    return (
      <div className="min-h-screen bg-secondary2 flex items-center justify-center">
        <div className="animate-pulse text-white">{t('loading')}</div>
      </div>
    );
  }

  // Error state
  if (state.error) {
    return (
      <div className="min-h-screen bg-secondary2 flex items-center justify-center">
        <div className="text-red-500">{state.error}</div>
      </div>
    );
  }

  // No blog found state
  if (!state.blog) {
    return (
      <div className="min-h-screen bg-secondary2 flex items-center justify-center">
        <div className="text-white">{t('blogNotFound')}</div>
      </div>
    );
  }

  const breadcrumbItems = [
    { icon: "/assets/Contact/home.svg", text: "Home" },
    { text: "Blog" },
    { text: state.blog.title },
  ];

  return (
    <div className='bg-secondary2'>
      <Header />
      <div className='max-w-[93%] xl:max-w-[83%] mx-auto px-3'>
        {/* Breadcrumb */}
        <nav className="flex items-center text-lightGray gap-2 mt-[48px]" aria-label="Breadcrumb">
          {breadcrumbItems.map((item, index) => (
            <React.Fragment key={index}>
              {item.icon && (
                <Image src={item.icon} width={12} height={12} alt={item.text} />
              )}
              {index > 0 && (
                <Image 
                  src="/assets/Contact/leftArrow.svg" 
                  width={12} 
                  height={12} 
                  alt="separator" 
                />
              )}
              <p className="text-[14px] leading-[26px]">
                {index === breadcrumbItems.length - 1 ? item.text : item.text}
              </p>
            </React.Fragment>
          ))}
        </nav>

        {/* Main Content */}
        <div className='pb-[88px] flex flex-col-reverse lg:flex-row justify-between gap-[20px] pt-[50px] lg:pt-[89px]'>
          <BlogContent blog={state.blog} />
          <RightPannel />
        </div>

        {/* Related Articles */}
        {state.relatedBlogs.length > 0 && (
          <section className='pb-[80px]'>
            <h2 className='text-[40px] leading-[50px] font-normal text-white'>
              {t('relatedArticles')}
            </h2>
            <div className='grid pt-[40px] sm:grid-cols-2 lg:grid-cols-4 gap-5'>
              {state.relatedBlogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default BlogDetailsPage;