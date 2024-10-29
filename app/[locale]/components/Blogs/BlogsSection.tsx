"use client";
import React, { useState, useEffect, useCallback, useMemo } from "react";
import Category from "./Category";
import TopReports from "./TopReports";
import SortBySection from "./SortBySection";
import BlogCard from "./BlogCard";
import { useTranslations } from "next-intl";
import { Blog, BlogsResponse } from "@/misc/interfaces";
import server from "@/misc/axios";

interface BlogsSectionProps {
  category: string | null;
}

const ITEMS_PER_PAGE = 5;

const BlogsSection = ({ category }: BlogsSectionProps) => {
  const t = useTranslations();
  
  const [state, setState] = useState({
    blogs: [] as Blog[],
    isLoading: true,
    currentPage: 1,
    hasMore: true,
    isLoadingMore: false
  });

  // Memoize the filter parameters
  const filterParams = useMemo(() => ({
    populate: ["image", "author", "tags", "categories"],
    pagination: {
      pageSize: ITEMS_PER_PAGE,
    },
    ...(category && {
      filters: {
        categories: {
          title: {
            $eq: category,
          },
        },
      },
    }),
  }), [category]);

  // Memoize the fetch function
  const fetchBlogs = useCallback(async (page: number, isLoadMore: boolean = false) => {
    try {
      const response = await server.get<BlogsResponse>("/Blogs", {
        params: {
          ...filterParams,
          pagination: {
            ...filterParams.pagination,
            page,
          },
        },
      });

      setState(prev => ({
        ...prev,
        blogs: isLoadMore 
          ? [...prev.blogs, ...response.data.data]
          : response.data.data,
        hasMore: response.data.meta.pagination.page < response.data.meta.pagination.pageCount,
        isLoading: false,
        isLoadingMore: false,
      }));
    } catch (error) {
      console.error("Error fetching blogs:", error);
      setState(prev => ({
        ...prev,
        isLoading: false,
        isLoadingMore: false,
      }));
    }
  }, [filterParams]);

  // Handle initial load and category changes
  useEffect(() => {
    setState(prev => ({ ...prev, isLoading: true, currentPage: 1 }));
    fetchBlogs(1);
  }, [category, fetchBlogs]);

  // Handle load more
  const handleLoadMore = useCallback(() => {
    if (state.isLoadingMore || !state.hasMore) return;
    
    const nextPage = state.currentPage + 1;
    setState(prev => ({
      ...prev,
      isLoadingMore: true,
      currentPage: nextPage,
    }));
    fetchBlogs(nextPage, true);
  }, [state.isLoadingMore, state.hasMore, state.currentPage, fetchBlogs]);

  if (state.isLoading) {
    return (
      <div className="min-h-[400px] flex items-center justify-center">
        <div className="animate-pulse">Loading...</div>
      </div>
    );
  }

  if (state.blogs.length === 0) {
    return (
      <div className="min-h-[400px] flex items-center justify-center">
        <p>{t('noBlogsFound')}</p>
      </div>
    );
  }

  return (
    <div className="bg-secondary2">
      <div className="max-w-[93%] xl:max-w-[83%] mx-auto">
        <div className="flex flex-col-reverse lg:flex-row justify-between gap-[20px] pt-[80px] pb-[64px]">
          <div className="lg:max-w-[630px] px-3 xl:max-w-[792px]">
            <SortBySection category={category ?? "All"} />

            <div className="grid sm:grid-cols-2 gap-x-[24px] gap-y-[32px]">
              {state.blogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>
          </div>

          <aside className="lg:sticky lg:top-24">
            <Category />
            <TopReports />
          </aside>
        </div>

        {state.hasMore && (
          <div className="flex justify-center items-center pb-[128px]">
            <button 
              onClick={handleLoadMore}
              disabled={state.isLoadingMore}
              className="px-[32px] py-[17px] text-customPink border-customPink rounded-[8px] border-2 disabled:opacity-50 transition-opacity"
            >
              {state.isLoadingMore ? t("loading") : t("loadMore")}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogsSection;
