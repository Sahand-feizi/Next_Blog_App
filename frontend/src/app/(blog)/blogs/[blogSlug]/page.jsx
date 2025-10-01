import React, { Suspense } from 'react'
import BlogPage from 'app/(blog)/_components/BlogPage';
import LoadingSpinner from '@/ui/LoadingSpinner';
import { getBlogBySlugApi } from '@/services/blogServices';

export async function generateMetadata({ params }) {
  const { blogSlug } = params || {}

  const blog = await getBlogBySlugApi(blogSlug)

  return {
    title: blog.title,
    description: blog.briefText
  }
}

async function page({ params }) {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <BlogPage params={params} />
    </Suspense>
  )
}

export default page
