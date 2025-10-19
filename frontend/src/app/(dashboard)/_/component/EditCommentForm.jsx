'use client'
import Button from '@/ui/Button'
import React from 'react'
import LoadingSpinner from '@/ui/LoadingSpinner'
import { useRouter } from 'next/navigation'
import useDeleteComment from './useDeleteComment'
import { useQueryClient } from '@tanstack/react-query'
import FormikSelectInput from '@/ui/FormikSelectInput'
import { useFormik } from 'formik'
import useEditComment from './useEditComment'

const options = [
    {
        _id: 1,
        value: 0,
        title: 'رد شده'
    },
    {
        _id: 2,
        value: 1,
        title: 'در حال بررسی'
    },
    {
        _id: 3,
        value: 2,
        title: 'قبول شده'
    }
]

function EditCommentForm({ _id: commentId, onClose, status }) {
    const initialValues = {
        status: status
    }
    const { isEditing, editComment } = useEditComment()
    const router = useRouter()
    const queryClient = useQueryClient()
    const formik = useFormik({
        initialValues,
        onSubmit: async (data) => {
            await editComment({ commentId, data }, {
                onSuccess: () => {
                    onClose()
                    router.refresh()
                    queryClient.invalidateQueries({
                        queryKey: ['comments']
                    })
                }
            })
        }
    })

    return (
        <form onSubmit={formik.handleSubmit} className='space-y-4'>
            <FormikSelectInput
                name={'status'}
                labelValue={'تغییر وضعیت'}
                options={options}
                formik={formik}
                isRequired
            />
            <div className='flex items-center gap-2'>
                <Button
                    variant={'white'}
                    type={'submit'}
                >
                    {
                        isEditing ?
                            <LoadingSpinner height='30' width='30' color='#000' /> :
                            'آپدیت نظر'
                    }
                </Button>
                <Button variant={'outline'} onClick={onClose}>
                    بازگشت
                </Button>
            </div>
        </form>
    )
}

export default EditCommentForm
