import { getBlogsApi } from '@/services/blogServices';
import setCookiesOnReq from '@/utils/setCookiesOnReq';
import BlogsList from 'app/(blog)/_components/BlogsList';
import { cookies } from 'next/headers';
import queryString from 'query-string'
import React from 'react'

async function BlogsPage({ searchParams }) {
  const queries = queryString.stringify(searchParams);
  const cookiesStore = cookies()
  const options = setCookiesOnReq(cookiesStore)
  const blogs = await getBlogsApi(queries, options)

  const { search: searchValue } = searchParams;

  const resultsText = blogs.length > 1 ? "نتایج" : "نتیجه";

  return (
    <div>
      {searchValue ? (
        <p className="mb-4 text-secondary-0">
          {blogs.length === 0
            ? "هیچ پستی با این مشخصات یافت نشد"
            : `نشان دادن ${blogs.length} ${resultsText} برای `}
          <span className="font-bold">&quot;{searchValue}&quot;</span>
        </p>
      ) : <p className="mb-4 text-secondary-0">تعداد بلاگ ها {blogs.length}</p>}
      <div className='grid grid-cols-12 gap-4'>
        <BlogsList blogs={blogs} />
      </div>
    </div>
  )
}

export default BlogsPage
