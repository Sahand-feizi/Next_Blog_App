'use client'
import { useAuth } from '@/context/AuthContext'
import Button from '@/ui/Button'
import { ArrowRightStartOnRectangleIcon } from '@heroicons/react/24/outline'
import React from 'react'

export function ExitButton() {
    const { logout } = useAuth()

    return (
        <Button variant={'danger'} onClick={logout} className={'sidbar_btn'}>
            <ArrowRightStartOnRectangleIcon className='w-6 h-6'/>
            <span className='hidden lg:flex'>خروج</span>
        </Button>
    )
}
