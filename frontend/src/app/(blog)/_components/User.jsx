"use client"
import { useAuth } from '@/context/AuthContext';
import Avatar from '@/ui/Avatar'
import Button from '@/ui/Button'
import Link from 'next/link';
import React, { useState } from 'react'
import { SlArrowUp } from "react-icons/sl";

function User({ avatarUrl, name }) {
    const [isOpen, setIsOpen] = useState(false)
    const { logout } = useAuth()

    return (
        <div className='relative justify-self-end space-y-2'>
            <Button
                className='flex px-2 w-[10rem] items-center justify-between bg-transparent border-b 
                border-b-secondary-300 rounded-none sm:rounded-lg sm:border-0 sm:bg-white'
                variant={'white'}
                onClick={() => setIsOpen(prev => !prev)}
            >
                <div className='flex items-center gap-2'>
                    <Avatar
                        path={avatarUrl || '/images/avatar.png'}
                        alt={name}
                    />
                    <p className='text-sm font-bold text-secondary-300 sm:text-secondary-600'>{name}</p>
                </div>
                <SlArrowUp className={`text-xs hidden sm:flex text-black transition-all duration-200
                    font-black ${isOpen ? 'rotate-0' : 'rotate-180'}`} />
            </Button>
            <ul className={`${isOpen ? 'sm:absolute relative' : 'sm:hidden'} animate-zoomIn w-full 
            sm:top-12 left-0 rounded-lg space-y-1 bg-transparent p-0 sm:bg-white sm:p-2`}>
                <Link href={'/profile'}>
                    <li className='list-none w-full rounded-lg transition-all duration-200 
                    text-sm font-bold py-2 px-3 hover:bg-secondary-800/50 text-secondary-200 
                    hover:text-secondary-100 sm:hover:bg-secondary-100 sm:text-secondary-500 
                    sm:hover:text-secondary-700'>
                        پروفایل
                    </li>
                </Link>
                <li className='list-none w-full rounded-lg transition-all duration-200 
                    text-red-500 hover:text-error text-sm font-bold
                     py-2 px-3 cursor-pointer hover:bg-red-400/20 sm:hover:bg-red-50'
                    onClick={logout}
                >
                    خروج
                </li>
            </ul>
        </div>
    )
}

export default User
