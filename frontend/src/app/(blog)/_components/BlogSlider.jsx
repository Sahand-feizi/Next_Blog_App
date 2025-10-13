import Button from '@/ui/Button'
import React from 'react'
import { getBlogsApi } from '@/services/blogServices'
import Link from 'next/link'
import setCookiesOnReq from '@/utils/setCookiesOnReq';
import { cookies } from 'next/headers';
import KeenSlider from './KeenSlider';

const swiperBreakpoints = {
    '(max-width: 1280px)': {
        slides: {
            perView: 3,
            spacing: 15,
        },
    },
    '(max-width: 1279px)': {
        slides: {
            perView: 2.6,
            spacing: 15,
        },
    },
    '(max-width: 1024px)': {
        slides: {
            perView: 1.6,
            spacing: 10,
        },
    },
    '(max-width: 768px)': {
        slides: {
            perView: 2.3,
            spacing: 10,
        },
    },
    '(max-width: 645px)': {
        slides: {
            perView: 2,
            spacing: 10,
        },
    },
    '(max-width: 565px)': {
        slides: {
            perView: 1.8,
            spacing: 10,
        },
    },
    '(max-width: 520px)': {
        slides: {
            perView: 1.65,
            spacing: 10,
        },
    },
    '(max-width: 500px)': {
        slides: {
            perView: 1.4,
            spacing: 10,
        },
    },
    '(max-width: 400px)': {
        slides: {
            perView: 1,
            spacing: 10,
        },
    },
}

async function BlogSlider() {
    const cookiesStore = await cookies()
    const options = setCookiesOnReq(cookiesStore)
    const {blogs: popularBlogs} = await getBlogsApi('sort=popular&limit=6', options)

    if(!popularBlogs){
        return null
    }

    return (
        <div className="container">
            <div className="flex flex-col justify-center md:grid w-full my-8 md:grid-cols-[16rem_1fr] gap-8 items-center">
                <div className="flex flex-col items-center md:items-start flex-end gap-5">
                    <h1 className="text-secondary-0 text-3xl font-black">
                        محبوب ترین بلاگ ها
                    </h1>
                    <h3 className="text-lg text-secondary-0 font-medium">به دانش ات با بلاگ ها پر و بال ببر</h3>
                    <Link href='/blogs'>
                        <Button variant='white' className='font-bold'>مشاهده همه بلاگ ها</Button>
                    </Link>
                </div>
                <KeenSlider perView={4} breakpoints={swiperBreakpoints} blogs={popularBlogs} />
            </div>
        </div>
    )
}

export default BlogSlider
