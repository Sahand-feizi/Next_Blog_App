'use client'
import Button from '@/ui/Button';
import SelectInput from '@/ui/SelectInput'
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import React from 'react'

function Pagination({ totalPages }) {
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const itemsPerPage = Number(searchParams.get('limit')) || 5;
    const currentPage = Number(searchParams.get('page')) || 1;
    let options = [];
    for (let i = 1; i <= 7; i++) {
        options = [...options, {
            _id: i,
            slug: i,
            title: `نشان دادن ${i} در هر صفحه`
        }]
    }

    const createPageURL = (page) => {
        const newParams = new URLSearchParams(searchParams)
        newParams.set('page', page)
        newParams.set("limit", itemsPerPage.toString());
        return `${pathname}?${newParams}`
    }

    return (
        <div className='py-2 flex items-center justify-between'>
            <p className="text-sm text-secondary-400 font-normal">
                نشان دادن بلاگ 1 تا 5
            </p>
            <div className="flex items-center gap-x-2">
                <SelectInput
                    btnClassName={'!text-sm !border !border-secondary-400 text-secondary-400 !ring-0'}
                    name={'limit'}
                    title={`نشان دادن ${itemsPerPage} در هر صفحه`}
                    options={options}
                    optionClassName={'absolute min-w-[11.5rem] bottom-10 text-sm left-0'}
                />
                <PaginationArrow
                    title={'قبلی'}
                    disabled={currentPage == 1 || totalPages == 0}
                    href={createPageURL(currentPage - 1)}
                />
                <PaginationArrow
                    title={'بعدی'}
                    disabled={currentPage == totalPages || totalPages == 0}
                    href={createPageURL(currentPage + 1)}
                />
            </div>
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
