export const dynamic = "force-dynamic";
import Breadcrumbs from '@/ui/Breadcrumbs'
import LoadingSpinner from '@/ui/LoadingSpinner'
import BlogsCardWrapper from 'app/(dashboard)/_/component/BlogsCardWrapper'
import BlogsTable from 'app/(dashboard)/_/component/BlogsTable'
import { CreateBlog } from 'app/(dashboard)/_/component/Buttons'
import DashboardSearchBar from 'app/(dashboard)/_/component/DashboardSearchBar'
import queryString from 'query-string'
import React, { Suspense } from 'react'

const breadcrumbs = [
    {
        id: 1,
        path: '/',
        title: 'خانه',
        active: false
    },
    {
        id: 2,
        path: '/profile',
        title: 'داشبورد',
        active: false
    },
    {
        id: 3,
        path: '/profile/blogs',
        title: 'بلاگ ها',
        active: true
    },
]

function BlogsPage({ searchParams }) {
    const queries = !queryString.stringify(searchParams).includes('limit') ? 
    `${queryString.stringify(searchParams)}&limit=5`: 
    queryString.stringify(searchParams);

    return (
        <div>
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <div className='flex items-center justify-between'>
                <div className='space-y-2'>
                    <h2 className='text-2xl md:text-3xl text-secondary-0 font-bold'>بلاگ ها</h2>
                    <p className='text-sm hidden sm:flex text-secondary-300 font-normal'>
                        تعداد بلاگ های خودم، ایجاد بلاگ جدید و آنالیزی از اتفاقات
                    </p>
                </div>
                <CreateBlog />
            </div>
            <div className='grid grid-cols-12 gap-2 w-full mt-4'>
                <Suspense fallback={<LoadingSpinner color='#fff' />}>
                    <BlogsCardWrapper />
                </Suspense>
            </div>
            <div className='mt-6 rounded-xl p-4 bg-secondary-950'>
                <DashboardSearchBar />
                <Suspense fallback={<LoadingSpinner color='#fff' />} key={queries}>
                    <BlogsTable queries={queries} />
                </Suspense>
            </div>
        </div>
    )
}

export default BlogsPage
