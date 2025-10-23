'use client'
import Button from '@/ui/Button';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import React from 'react'

function Pagination({ totalPages }) {
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const currentPage = Number(searchParams.get('page')) || 1;

    const createPageURL = (page) => {
        const newParams = new URLSearchParams(searchParams)
        newParams.set('page', page)
        return `${pathname}?${newParams}`
    }

    return (
        <div className="mx-auto my-5 flex items-center gap-x-2">
            <PaginationArrow
                title={'قبلی'}
                disabled={currentPage == 1 || totalPages == 0}
                href={createPageURL(currentPage - 1)}
            />
            <p className='text-secondary-0 text-base font-normal'>{currentPage}</p>
            <PaginationArrow
                title={'بعدی'}
                disabled={currentPage == totalPages || totalPages == 0}
                href={createPageURL(currentPage + 1)}
            />
        </div>
    )
}

export default Pagination

function PaginationArrow({ disabled, title, href }) {
    if (disabled) {
        return (
            <Button
                variant={'outline'}
                className={`!py-2 text-secondary-400 disabled:cursor-not-allowed
                         border-secondary-400 text-sm disabled:opacity-50`}
                disabled={disabled}
            >
                {title}
            </Button>
        )
    } else {
        return (
            <Link href={href}>
                <Button
                    variant={'outline'}
                    className={`!py-2 text-secondary-400 border-secondary-400 text-sm`}
                >
                    {title}
                </Button>
            </Link>
        )
    }
}
