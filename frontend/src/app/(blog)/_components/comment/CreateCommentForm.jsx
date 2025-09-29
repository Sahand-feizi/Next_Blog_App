'use client'
import SubmitButton from '@/ui/SubmitButton'
import TextArea from '@/ui/TextArea'
import React, { useState } from 'react'

function CreateCommentForm() {
    const [text, setText] = useState('')

    return (
        <form className='w-full space-y-3'>
            <TextArea
                labelValue={'متن نظر'}
                name={'text'}
                maxLength={100}
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
