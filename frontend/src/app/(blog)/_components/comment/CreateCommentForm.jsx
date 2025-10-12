'use client'
import { createComment } from '@/lib/actions'
import SubmitButton from '@/ui/SubmitButton'
import TextArea from '@/ui/TextArea'
import React, { useActionState, useEffect, useState } from 'react'
import toast from 'react-hot-toast'

const initialState = {
    error: '',
    message: ''
}

function CreateCommentForm({ blogId, parentId, onClose }) {
    const [text, setText] = useState('')
    const [state, addNewComment] = useActionState(createComment, initialState)

    useEffect(() => {
        if (state.message) {
            toast.success(state.message)
            onClose()
        }
        if (state.error) {
            toast.error(state.error)
        }
    }, [state])

    return (
        <form action={async (formData) => {
            await addNewComment({ formData, blogId, parentId })
        }} className='w-full space-y-3'>
            <TextArea
                labelValue={'متن نظر'}
                name={'text'}
                maxLength={100}
                className={'!min-h-[10rem]'}
                value={text}
                setValue={setText}
            />
            <SubmitButton className='w-full'>
                ثبت نظر
            </SubmitButton>
        </form>
    )
}

export default CreateCommentForm
