'use client'
import React from 'react'
import { useFormStatus } from 'react-dom'
import Button from './Button'
import LoadingSpinner from './LoadingSpinner'

function SubmitButton({ children, className, ...rest }) {
    const { pending } = useFormStatus()

    return (
        <Button {...rest} className={`flex justify-center ${className}`} variant={'white'}>
            {
                pending ?
                    <LoadingSpinner height='30' width='30' color='#000' /> :
                    children
            }
        </Button>
    )
}

export default SubmitButton
