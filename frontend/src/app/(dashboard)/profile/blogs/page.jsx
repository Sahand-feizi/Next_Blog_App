import BlogsCardWrapper from 'app/(dashboard)/_/component/BlogsCardWrapper'
import { CreateBlog } from 'app/(dashboard)/_/component/Buttons'
import React from 'react'

function BlogsPage({ searchParams }) {
    return (
        <div>
            <div className='flex items-center justify-between'>
                <div className='space-y-2'>
                    <h2 className='text-2xl md:text-3xl text-secondary-0 font-bold'>بلاگ ها</h2>
                    <p className='text-sm hidden sm:flex text-secondary-300 font-normal'>
                        تعداد بلاگ های خودم، ایجاد بلاگ جدید و آنالیزی از اتفاقات
                    </p>
                </div>
                <CreateBlog />
            </div>
            <div className='grid grid-cols-12 grid-rows-[12rem_12rem_12rem_auto] gap-2 w-full mt-4'>
                <BlogsCardWrapper />
            </div>
        </div>
    )
}

export default BlogsPage
