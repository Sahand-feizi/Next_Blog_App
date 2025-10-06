'use client'
import React from 'react'
import Card from './Card'
import useGetAllBlogs from './useGetAllBlogs'
import { HeartIcon, BookmarkIcon, UserIcon } from '@heroicons/react/24/outline'

function BlogsCardWrapper() {
    const { myBlogs, myBookmarkedBlogs, myLikedBlogs, blogs } = useGetAllBlogs('')

    return (
        <>
            <Card
                title={'بلاگ های خودم'}
                description={"بلاگ هایی که خودم ساختم"}
                count={myBlogs?.length}
                isDisable
                icon={<UserIcon className='w-7 h-7' />}
                active
            />
            <Card
                title={'بوکمارک شده'}
                description={"بلاگ های بوکمارک شده"}
                count={myBookmarkedBlogs?.length}
                isDisable
                icon={<BookmarkIcon className='w-7 h-7' />}
            />
            <Card
                title={'لایک شده'}
                description={"بلاگ های لایک شده"}
                count={myLikedBlogs?.length}
                isDisable
                icon={<HeartIcon className='w-7 h-7' />}
            />
        </>
    )
}

export default BlogsCardWrapper
