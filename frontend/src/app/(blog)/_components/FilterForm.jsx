'use client'
import React, { useState } from 'react'
import ButtonIcon from '@/ui/ButtonIcon'
import { BiFilter } from 'react-icons/bi'
import useOutsideClick from '@/hooks/useOutsideClick'
import Button from '@/ui/Button'
import Link from 'next/link'

function FilterForm({ children }) {
    const [isOpen, setIsOpen] = useState(false)
    const ref = useOutsideClick(() => setIsOpen(false), 'openButton')

    return (
        <>
            <ButtonIcon
                id='openButton'
                onClick={() => setIsOpen(prev => !prev)}
                className={'flex md:hidden h-full cursor-pointer'}
                variant={'secondary'}
            >
                <span id='openButton' className='font-normal text-sm'>فیلتر</span>
                <BiFilter id='openButton' />
            </ButtonIcon>
            <div
                ref={ref}
                className={`${isOpen ? 'flex' : 'hidden md:flex'} absolute md:static flex-col  
                bg-black rounded-xl animate-zoomIn p-2 gap-2 md:p-0 md:rounded-none
                left-0 top-25 z-30 md:z-0 w-3xs md:w-full md:bg-transparent`}
            >
                <p className='flex md:hidden text-secondary-0 font-bold text-lg'>فیلتر ها</p>
                {children}
                <Link href={'/blogs'}>
                    <Button variant={'primary'} className='w-full'>
                        بازیابی
                    </Button>
                </Link>
            </div>
        </>
    )
}

export default FilterForm
