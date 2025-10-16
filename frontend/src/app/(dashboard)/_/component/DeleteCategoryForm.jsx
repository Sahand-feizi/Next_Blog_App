'use client'
import Button from '@/ui/Button'
import React from 'react'
import LoadingSpinner from '@/ui/LoadingSpinner'
import { useRouter } from 'next/navigation'
import useDeleteCategory from './useDeleteCategory'

function DeleteCategoryForm({ _id: categoryId, title, onClose }) {
    const { isDeleting, deleteCategory } = useDeleteCategory()
    const router = useRouter()

    return (
        <div className='space-y-4'>
            <p className="text-base text-secondary-300 font-normal">
                آیا از حذف دسته بندی "{title}" مطمانید
            </p>
            <div className='flex items-center gap-2'>
                <Button
                    onClick={async () => {
                        await deleteCategory(categoryId, {
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
                            'حذف دسته بندی'
                    }
                </Button>
                <Button variant={'outline'} onClick={onClose}>
                    بازگشت
                </Button>
            </div>
        </div>
    )
}

export default DeleteCategoryForm
