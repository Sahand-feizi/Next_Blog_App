'use client'
import Button from '@/ui/Button'
import React from 'react'
import LoadingSpinner from '@/ui/LoadingSpinner'
import { useRouter } from 'next/navigation'
import useDeleteComment from './useDeleteComment'
import { useQueryClient } from '@tanstack/react-query'

function DeleteCommentForm({ _id: commentId, onClose }) {
    const { isDeleting, deleteComment } = useDeleteComment()
    const router = useRouter()
    const queryClient = useQueryClient()

    return (
        <div className='space-y-4'>
            <p className="text-base text-secondary-300 font-normal">
                آیا از حذف این نظر مطمانید
            </p>
            <div className='flex items-center gap-2'>
                <Button
                    onClick={async () => {
                        await deleteComment(commentId, {
                            onSuccess: () => {
                                onClose()
                                router.refresh()
                                queryClient.invalidateQueries({
                                    queryKey: ['comments']
                                })
                            }
                        })
                    }}
                    variant={'danger'}
                >
                    {
                        isDeleting ?
                            <LoadingSpinner height='30' width='30' color='#000' /> :
                            'حذف نظر'
                    }
                </Button>
                <Button variant={'outline'} onClick={onClose}>
                    بازگشت
                </Button>
            </div>
        </div>
    )
}

export default DeleteCommentForm
