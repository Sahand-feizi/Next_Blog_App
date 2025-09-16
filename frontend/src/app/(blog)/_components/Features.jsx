import { ComputerDesktopIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { SiNginxproxymanager } from "react-icons/si"
import { SiAntdesign } from "react-icons/si";
import { SiProtools } from "react-icons/si";
import { BiSupport } from "react-icons/bi";
import { RiBloggerFill } from "react-icons/ri";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import FeatureItem from './FeatureItem'
import Button from '@/ui/Button';
import Link from 'next/link';

const FeaturesItem = [
  {
    title: 'داشبورد مدیریتی',
    description: 'داشبوردی که برای کاربرانمان درست کردیم تا بتوانند بلاگ های خود رامدیریت کنند و بتوانند انها را حذف یا اپدیت کنند',
    icon: <RiDashboardHorizontalFill />,
    color: 'green',
  },
  {
    title: 'رابط کاربری ساده و کارپسند',
    description: 'طراحی intuitive که فرایند ثبت نام، جستجو و مدیریت پروژه را آسان می کند، حتی برای کاربران مبتدی',
    icon: <SiAntdesign />,
    color: 'red',
  },
  {
    title: 'ابزار های مدیریت بلاگ ها',
    description: 'امکاناتی مانند تعیین زمان مطالعه بلاگ ها، مدیریت کامنت ها و حذف انها وامکانات متعدد دیگر',
    icon: <SiNginxproxymanager />,
    color: 'primary',
  },
  {
    title: 'بلاگ های شخصی سازی شده',
    description: 'شما می توانید به راحتی بلاگی را که برای درست کردن ان برنامه ریزی کردید ایجاد کنید',
    icon: <SiProtools />,
    color: 'purple',
  },
  {
    title: 'تنوع در بلاگ ها',
    description: 'اراعه بلاگ های مختلف در حوزه های مختلف، از طراحی گرافیک و برنامه نویسی گرفته تا ترجمه و نوشتن محتوا',
    icon: <RiBloggerFill />,
    color: 'secondary',
  },
  {
    title: 'پشتیبانی 24/7',
    description: 'تیم پشتیبانی فعال که همواره اماده پاسخگویی به سوالات و حل مشکلات شماست',
    icon: <BiSupport />,
    color: 'orange',
  },
]

function Features() {
  return (
    <div id='features' className='w-full flex flex-col justify-center gap-x-4 relative mt-20'>
      <div className='space-y-4 text-center'>
        <h1 className='text-3xl text-white font-black'>ویژگی ها</h1>
        <p className='font-thin text-gray-100 tracking-[.05em] text-base'>ویژگی های منحصر به فرد سایت ما مثل رابط کاربری راحت، ابزار های مدیریت پروژه و <br className='hidden sm:flex' />ویژگی های متعددی که شمارا از هر سایت دیگری بی نیاز میکند</p>
        <Link href={'/blogs'}>
          <Button variant={'white'} className={'font-bold'}>بزن بریم!</Button>
        </Link>
      </div>
      <div className='grid grid-cols-12 gap-3 lg:w-5xl w-full mx-auto lg:left-0 lg:top-0 p-4 lg:p-8'>
        {
          FeaturesItem.map(item => (
            <FeatureItem key={item.color} {...item} />
          ))
        }
      </div>
    </div>
  )
}

export default Features
