import Breadcrumbs from '@/ui/Breadcrumbs'
import LoadingSpinner from '@/ui/LoadingSpinner'
import UsersTable from 'app/(dashboard)/_/component/UsersTable'
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
        path: '/profile/users',
        title: 'کاربران',
        active: true
    },
]

function UsersPage() {

    return (
        <div>
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <div className='flex items-center justify-between'>
                <div className='space-y-2'>
                    <h2 className='text-2xl md:text-3xl text-secondary-0 font-bold'>کاربران سایت</h2>
                    <p className='text-sm hidden sm:flex text-secondary-300 font-normal'>
                        تعداد کاربرانی که در سایت ثبت نام کرده اند
                    </p>
                </div>
            </div>
            <div className='mt-6 rounded-xl p-4 bg-secondary-950'>
                <Suspense fallback={<LoadingSpinner color='#fff' />}>
                    <UsersTable />
                </Suspense>
            </div>
        </div>
    )
}

export default UsersPage
