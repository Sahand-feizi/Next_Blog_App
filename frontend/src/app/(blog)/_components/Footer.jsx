import Logo from '@/components/Logo'
import React from 'react'
import Link from 'next/link';
import GoUpButton from '@/ui/GoUpButton';

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

function Footer() {
    return (
        <div className='container'>
            <div className='flex items-center justify-between w-full'>
                <div className="flex items-center gap-2 sm:gap-8">
                    <Logo />
                    <nav className='gap-4 w-auto flex'>
                        {
                            navLinks.map(item => (
                                <Link href={item.path} className='text-sm font-normal sm:text-base text-secondary-0 hover:text-primary-900 bg-transparent' key={item.id} path={item.path}>{item.title}</Link>
                            ))
                        }
                    </nav>
                </div>
                
                <GoUpButton />
            </div>
            <h4 className='text-sm pt-1 pb-2 text-secondary-0 font-thin text-center'>
                با سپاس از تمام همراهان عزیزم که در این راه به من کمک کردند ❤❤ 
            </h4>
        </div>
    )
}

export default Footer
