"use client"
import React, { useState } from 'react'
import NavLink from '@/components/NavLink'
import Link from 'next/link'
import Button from '@/ui/Button'
import Logo from '@/components/Logo'
import { RiMenu2Fill } from "react-icons/ri";
import ButtonIcon from '@/ui/ButtonIcon'
import useOutsideClick from '@/hooks/useOutsideClick'
import LoadingSpinner from '@/ui/LoadingSpinner'
import User from './User'
import { useAuth } from '@/context/AuthContext'

const navLinks = [
    {
        id: 1,
        path: '/',
        title: 'خانه',
    },
    {
        id: 2,
        path: '/blogs',
        title: 'بلاگ ها',
    }
]

function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const ref = useOutsideClick(closeMenu)
    const { isLoading, user } = useAuth()

    function closeMenu() {
        setIsOpen(false)
    }

    return (
        <div className='container sticky top-[1rem] z-30 flex justify-between items-center !py-2 sm:grid sm:grid-cols-[1fr_2fr]'>
            <Logo />
            <div ref={ref} className={`absolute top-0 h-[calc(100vh-2rem)] w-[14rem] bg-secondary-900 
            flex flex-col justify-between items-center rounded-[0_10px_10px_0] 
            ${isOpen ? 'left-0' : '-left-96'} my-4 p-4 transition-all duration-200 sm:h-auto 
            sm:bg-transparent sm:grid sm:grid-cols-2 sm:items-center sm:static sm:w-full sm:p-0 sm:m-0`}>
                <nav className='flex flex-col w-full justify-self-center gap-4 sm:w-auto sm:flex-row'>
                    {
                        navLinks.map(item => (
                            <NavLink key={item.id} path={item.path}>{item.title}</NavLink>
                        ))
                    }
                </nav>
                {
                    isLoading ? <LoadingSpinner width='30' height='20' />
                        : user ?
                            <User {...user} /> :
                            <Link className='justify-self-end w-full sm:w-auto' href='/signin'>
                                <Button
                                    className='w-full sm:w-auto'
                                    variant='white'
                                    onClick={() => { }}
                                >ورود | ثبت نام</Button>
                            </Link>
                }
            </div>
            <ButtonIcon className='sm:hidden' variant='white' onClick={() => setIsOpen(true)}>
                <RiMenu2Fill />
            </ButtonIcon>
        </div>
    )
}

export default Header