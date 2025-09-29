'use client'
import React from 'react'
import { useFormStatus } from 'react-dom'
import Button from './Button'
import LoadingSpinner from './LoadingSpinner'

function SubmitButton({ children, className }) {
    const { pending } = useFormStatus()

    return (
        <Button className={className} variant={'white'}>
            {
                pending ?
                    <LoadingSpinner /> :
                    children
            }
        </Button>
    )
}

export default SubmitButton
