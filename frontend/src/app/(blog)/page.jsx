import Button from '@/ui/Button'
import React from 'react'
import SearchInput from '@/ui/SearchInput';
import CoverBordImage from '@/ui/CoverBordImage';
import Link from 'next/link';
import BlogSlider from './_components/BlogSlider';
import Features from './_components/Features';

export const metadata = {
  title: 'خانه'
}

function HomePage() {
  return (
    <div className='text-secondary-0 pt-20 font-black'>
      <CoverBordImage>
        <div className="flex flex-col gap-8 w-[345px] z-20">
          <h1 className="text-3xl text-secondary-0 font-black z-20">به وبلاگ خوش آمدید .وبلاگ<br /> آماده خدمت رسانی به شما</h1>
          <h4 className="text-lg text-secondary-300 font-normal z-20">وبلاگ سایتی برای مدیریت بلاگ و مدیریت کامنت ه و مدیریت کامل آنها ا!وخواندن بلاگ های دیگر ریکشن به آنها برای خوشحال کردن انها</h4>
          <SearchInput />
          <div className="grid grid-cols-2 gap-8">
            <Link href='/blogs' className="z-20">
              <Button variant='outline' className='w-full font-medium'>
                مطالعه بلاگ ها
              </Button>
            </Link>
            <Link href='/profile' className="z-20">
              <Button variant='white' className='w-full font-medium'>
                مدیریت بلاگ ها
              </Button>
            </Link>
          </div>
        </div>
      </CoverBordImage>
      <BlogSlider />
      <Features />
    </div>
  )
}

export default HomePage
