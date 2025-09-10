import CoverImage from '@/ui/CoverImage'
import React from 'react'
import BlogIntractions from './BlogIntractions'
import { ClockIcon } from '@heroicons/react/24/outline'
import Author from './Author'
import Button from '@/ui/Button'
import Link from 'next/link'


function BlogItem({
    coverImageUrl,
    title,
    text,
    readingTime,
    author,
    slug,
    isLiked,
    _id,
    isBookmarked,
    className
}) {
    return (
        <div className={`${className} rounded-xl overflow-hidden`}>
            <CoverImage coverImageUrl={coverImageUrl}>
                <div className='h-full w-full bg-linear-to-t from-black to-transparent z-20 
                absolute top-0 left-0'>
                    <div className="flex flex-col h-full justify-between p-2">
                        <BlogIntractions
                            isBookmarked={isBookmarked}
                            isLiked={isLiked}
                            blogId={_id}
                        />
                        <div className='space-y-2'>
                            <h4 className='text-lg font-bold text-secondary-0'>
                                {title}
                            </h4>
                            <p className="text-sm font-medium text-secondary-100">
                                {text}
                            </p>
                            <div className="flex items-center gap-1">
                                <ClockIcon className='w-6 h-6 stroke-secondary-200' />
                                <p className='text-sm font-thin text-secondary-200'>زمان مطالعه :
                                    <span className='text-base font-medium text-secondary-0'>{readingTime} دقیقه</span>
                                </p>
                            </div>
                            <div className='flex mt-3 items-center justify-between w-full'>
                                <Author {...author} />
                                <Link href={`/blogs/${slug}`}>
                                    <Button variant='white' className='!py-1'>مشاهده</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </CoverImage>
        </div>
    )
}

export default BlogItem
