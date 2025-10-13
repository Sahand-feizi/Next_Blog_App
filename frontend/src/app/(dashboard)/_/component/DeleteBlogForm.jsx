'use client'
import Button from '@/ui/Button'
import React from 'react'
import useDeleteBlog from './useDeleteBlog'
import LoadingSpinner from '@/ui/LoadingSpinner'
import { useRouter } from 'next/navigation'

function DeleteBlogForm({ _id: blogId, title, onClose }) {
    const { isDeleting, deleteBlog } = useDeleteBlog()
    const router = useRouter()

    return (
        <div className='space-y-4'>
            <p className="text-base text-secondary-300 font-normal">
                آیا از حذف بلاگ "{title}" مطمانید
            </p>
            <div className='flex items-center gap-2'>
                <Button
                    onClick={async () => {
                        await deleteBlog(blogId, {
                            onSuccess: () => {
                                onClose()
                                router.refresh()
                            }
                        })
                    }}
                    variant={'danger'}
                >
                    {
                        isDeleting ?
                            <LoadingSpinner height='30' width='30' color='#000' /> :
                            'حذف بلاگ'
                    }
                </Button>
                <Button variant={'outline'} onClick={onClose}>
                    بازگشت
                </Button>
            </div>
        </div>
    )
}

export default DeleteBlogForm
