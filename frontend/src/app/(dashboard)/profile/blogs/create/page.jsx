import Breadcrumbs from '@/ui/Breadcrumbs'
import CreateBlogForm from 'app/(dashboard)/_/component/CreateBlogForm'
import React from 'react'

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
        active: false
    },
    {
        id: 4,
        path: '/profile/blogs/create',
        title: 'ایجاد بلاگ',
        active: true
    },
]

function CreateBlogPage() {
    return (
        <div>
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <div className='space-y-2'>
                <h2 className='text-2xl md:text-3xl text-secondary-0 font-bold'>ایجاد بلاگ</h2>
                <p className='text-sm hidden sm:flex text-secondary-300 font-normal'>
                    ایجاد بلاگ جدید و انتخاب عکس و ...
                </p>
            </div>
            <CreateBlogForm />
        </div>
    )
}

export default CreateBlogPage
