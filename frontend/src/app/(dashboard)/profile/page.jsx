import React, { Suspense } from 'react'
import { CreateBlog } from '../_/component/Buttons'
import CardWrapper from '../_/component/CardWrapper'
import LoadingSpinner from '@/ui/LoadingSpinner'
import UsersSection from '../_/component/UsersSection'
import Chart from '../_/component/Chart'
function page() {
  return (
    <div>
      <div className='flex items-center justify-between'>
        <div className='space-y-2'>
          <h2 className='text-2xl md:text-3xl text-secondary-0 font-bold'>داشبورد</h2>
          <p className='text-sm hidden sm:flex text-secondary-300 font-normal'>
            تعداد بلاگ ها، کامنت ها و آنالیزی از اتفاقات
          </p>
        </div>
        <CreateBlog />
      </div>
      <div className='grid grid-cols-12 grid-rows-[12rem_12rem_12rem_auto] gap-2 w-full mt-4'>
        <Suspense fallback={<LoadingSpinner />}>
          <CardWrapper />
        </Suspense>
        <UsersSection />
        <Chart />
      </div>
    </div>
  )
}

export default page
