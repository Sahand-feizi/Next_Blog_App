import React, { Suspense } from 'react'
import BlogPage from 'app/(blog)/_components/BlogPage';
import LoadingSpinner from '@/ui/LoadingSpinner';

async function page({ params }) {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <BlogPage params={params} />
    </Suspense>
  )
}

export default page
