import Breadcrumbs from '@/ui/Breadcrumbs'
import LoadingSpinner from '@/ui/LoadingSpinner'
import CommentsCardWrapper from 'app/(dashboard)/_/component/CommentsCardWrapper'
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
    path: '/profile/comments',
    title: 'نظرات',
    active: true
  },
]

function CommentPage() {
  return (
    <div>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <div className='flex items-center justify-between'>
        <div className='space-y-2'>
          <h2 className='text-2xl md:text-3xl text-secondary-0 font-bold'>نظرات</h2>
          <p className='text-sm hidden sm:flex text-secondary-300 font-normal'>
            تعداد بلاگ های خودم، ایجاد بلاگ جدید و آنالیزی از اتفاقات
          </p>
        </div>
      </div>
      <div className='grid grid-cols-12 gap-2 w-full mt-4'>
        <Suspense fallback={<LoadingSpinner color='#fff' />}>
          <CommentsCardWrapper />
        </Suspense>
      </div>
    </div>
  )
}

export default CommentPage
