'use client'
import React from 'react'
import {
    BookmarkIcon as OutlineBookmarkIcon,
    HeartIcon as OutlineHeartIcon
} from '@heroicons/react/24/outline'
import {
    HeartIcon as SolidHeartIcon,
    BookmarkIcon as SolidBookmarkIcon
} from '@heroicons/react/24/solid'
import ButtonIcon from '@/ui/ButtonIcon'
import { useRouter } from 'next/navigation'
import { bookmarkBlogsApi, likeBlogsApi } from '@/services/blogServices'
import toast from 'react-hot-toast'

function BlogIntractions({ isLiked, isBookmarked, blogId }) {
    const router = useRouter()

    const likeHandler = async () => {
        try {
            const { message } = await likeBlogsApi(blogId)
            toast.success(message)
            router.refresh()
        } catch (error) {
            toast.error(error?.response?.data?.message)
        }
    }

    const bookmarkHandler = async () => {
        try {
            const { message } = await bookmarkBlogsApi(blogId)
            toast.success(message)
            router.refresh()
        } catch (error) {
            toast.error(error?.response?.data?.message)
        }
    }

    return (
        <div className='w-full flex flex-col items-end gap-2'>
            <ButtonIcon onClick={likeHandler} variant='danger' >
                {
                    isLiked ? <SolidHeartIcon className='w-6 h-6' /> :
                        <OutlineHeartIcon className='w-6 h-6' />
                }
            </ButtonIcon>
            <ButtonIcon onClick={bookmarkHandler} variant='primary' >
                {
                    isBookmarked ? <SolidBookmarkIcon className='w-6 h-6' /> :
                        <OutlineBookmarkIcon className='w-6 h-6' />
                }
            </ButtonIcon>
        </div>
    )
}

export default BlogIntractions
