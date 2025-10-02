import React, { Suspense } from 'react'
import { CreateBlog } from '../_/component/Buttons'
import CardWrapper from '../_/component/CardWrapper'
import LoadingSpinner from '@/ui/LoadingSpinner'
import UsersSection from '../_/component/UsersSection'

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
      <Suspense fallback={<LoadingSpinner />}>
        <CardWrapper />
      </Suspense>
      <div className="grid mt-2 grid-cols-12 gap-2">
        <UsersSection />
      </div>
    </div>
  )
}

export default page
