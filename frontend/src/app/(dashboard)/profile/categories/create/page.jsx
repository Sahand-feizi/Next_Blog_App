import Breadcrumbs from '@/ui/Breadcrumbs'
import CreateAndEditCategoryForm from 'app/(dashboard)/_/component/CreateAndEditCategoryForm'
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
        path: '/profile/categories',
        title: 'دسته بندی ها',
        active: false
    },
    {
        id: 4,
        path: '/profile/categories/create',
        title: 'ایجاد دسته بند',
        active: true
    },
]

export const metadata = {
    title: 'ایجاد دسته بندی جدید'
}

function CreateCategoryPage() {
    return (
        <div>
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <div className='space-y-2'>
                <h2 className='text-2xl md:text-3xl text-secondary-0 font-bold'>ایجاد دسته بندی</h2>
                <p className='text-sm hidden sm:flex text-secondary-300 font-normal'>
                    ایجاد دسته بندی جدید و انتخاب نام و ...
                </p>
            </div>
            <CreateAndEditCategoryForm />
        </div>
    )
}

export default CreateCategoryPage
