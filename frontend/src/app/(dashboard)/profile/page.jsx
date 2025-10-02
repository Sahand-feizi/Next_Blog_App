import React from 'react'
import { CreateBlog } from '../_/component/Buttons'

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
    </div>
  )
}

export default page
