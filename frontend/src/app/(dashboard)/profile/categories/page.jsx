export const dynamic = "force-dynamic";
import Breadcrumbs from '@/ui/Breadcrumbs'
import LoadingSpinner from '@/ui/LoadingSpinner'
import { CreateCategory } from 'app/(dashboard)/_/component/Buttons'
import CategoriesTable from 'app/(dashboard)/_/component/CategoriesTable'
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
        path: '/profile/categories',
        title: 'دسته بندی ها',
        active: true
    },
]

function CategoriesPage() {
    return (
        <div>
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <div className='flex items-center justify-between'>
                <div className='space-y-2'>
                    <h2 className='text-2xl md:text-3xl text-secondary-0 font-bold'>دسته بندی ها</h2>
                    <p className='text-sm hidden sm:flex text-secondary-300 font-normal'>
                        تعداد دسته بندی ها، ایجاد دسته بندی جدید و آنالیزی از اتفاقات
                    </p>
                </div>
                <CreateCategory />
            </div>
            <div className='mt-6 rounded-xl p-4 bg-secondary-950'>
                <Suspense fallback={<LoadingSpinner color='#fff' />}>
                    <CategoriesTable />
                </Suspense>
            </div>
        </div>
    )
}

export default CategoriesPage
