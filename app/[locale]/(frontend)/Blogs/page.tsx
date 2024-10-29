import Hero from '../../components/Blogs/Hero'
import React from 'react'
import BlogsSection from '../../components/Blogs/BlogsSection'
import { categories } from '@/lib/utils'

interface BlogPageProps {
  searchParams: {
    category?: string;
  }
}

const BlogPage = ({ searchParams }: BlogPageProps) => {
  const category = searchParams.category ? categories[searchParams.category as keyof typeof categories] : null;
  return (
    <div>
      <Hero />
      <BlogsSection category={category} />
    </div>
  )
}

export default BlogPage