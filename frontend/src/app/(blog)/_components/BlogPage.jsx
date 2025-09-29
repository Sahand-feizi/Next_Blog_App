import { getBlogBySlugApi } from '@/services/blogServices'
import CoverImage from '@/ui/CoverImage'
import toLocalDateShort from '@/utils/dateFormatter'
import React from 'react'
import Author from './Author'
import { IoCalendarOutline } from 'react-icons/io5'
import RelatedBlog from './RelatedBlog'
import BlogComments from './comment/BlogComments'

async function BlogPage({ params }) {
    const blog = await getBlogBySlugApi(params.blogSlug)
    const dateOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    }
    const blogCreatedData = toLocalDateShort(blog.createdAt, dateOptions)
    const lastUpdateBlog = toLocalDateShort(blog.updatedAt, dateOptions)

    return (
        <div className='pt-10 pb-5'>
            <div className="container max-w-4xl space-y-8 overflow-x-hidden">
                <div className='w-full overflow-hidden'>
                    <CoverImage
                        coverImageUrl={blog.coverImageUrl}
                        className={'h-aouto !static !rounded-lg hover:scale-[1.3] transition-all ease-out duration-300'}
                    />
                </div>
                <div className="space-y-4">
                    <h1 className='text-5xl font-bold text-secondary-0'>{blog.title}</h1>
                    <p className='text-lg font-medium text-secondary-200'>{blog.text}</p>
                </div>
                <div className='flex items-center justify-between'>
                    <div className='flex-col flex items-start gap-3 md:gap-5 md:flex-row'>
                        <Author {...blog.author} />
                        <p className='text-sm flex items-center gap-1 text-secondary-200'>
                            <IoCalendarOutline className='text-lg' />درست شده: {blogCreatedData}</p>
                        <p className='text-sm flex items-center gap-1 text-secondary-200'>
                            <IoCalendarOutline className='text-lg' />آخرین آپدیت: {lastUpdateBlog}
                        </p>
                    </div>
                    <div dir='ltr' className='flex items-center flex-wrap'>
                        <span className='badge--secondary'>{blog.tags}</span>
                    </div>
                </div>
                {
                    blog.related.length > 0 && <RelatedBlog blogs={blog.related} />
                }
                <BlogComments blog={blog}/>
            </div>
        </div>
    )
}

export default BlogPage
