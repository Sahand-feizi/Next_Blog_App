'use client'
import { useAuth } from '@/context/AuthContext'
import Button from '@/ui/Button'
import { ArrowRightStartOnRectangleIcon, PlusIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React from 'react'

export function ExitButton() {
    const { logout } = useAuth()

    return (
        <Button variant={'danger'} onClick={logout} className={'sidbar_btn'}>
            <ArrowRightStartOnRectangleIcon className='w-6 h-6' />
            <span className='hidden lg:flex'>خروج</span>
        </Button>
    )
}

export function CreateBlog() {
    return (
        <Link
            className='py-2 px-2 sm:px-3 rounded-full bg-secondary-0 text-secondary-800 
            flex items-center gap-2 font-medium'
            href={'/profile/blogs/create'}
        >
            <PlusIcon className='w-6 h-6' />
            <span className='hidden sm:flex'>بلاگ جدید</span>
        </Link>
    )
}
