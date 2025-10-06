'use client'
import { useAuth } from '@/context/AuthContext'
import Button from '@/ui/Button'
import { ArrowRightStartOnRectangleIcon, ArrowUpLeftIcon, ArrowUpRightIcon, PlusIcon } from '@heroicons/react/24/outline'
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

export function CardButton({ path, className }) {
    return (
        <Link
            className={`card_button ${className}`}
            href={path}
        >
            <ArrowUpLeftIcon className='w-6 h-6' />
        </Link>
    )
}

export function UsersButton({ className }) {
    return (
        <Link
            className={`py-2 px-2 text-sm rounded-full text-secondary-900 bg-secondary-0
        flex items-center gap-2 font-medium shadow-[0_0px_20px_rgba(50,50,50)] ${className}`}
            href={'/profile/users'}
        >
            دیدن همه
        </Link>
    )
}

export function BlogsButton({ className }) {
    return (
        <Link
            className={`py-2 px-2 text-sm rounded-full text-secondary-900 bg-secondary-0
        flex items-center gap-2 font-medium ${className}`}
            href={'/profile/blogs'}
        >
            دیدن همه
        </Link>
    )
}
