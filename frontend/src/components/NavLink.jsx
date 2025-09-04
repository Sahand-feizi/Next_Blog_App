"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

function NavLink({ path, children }) {
    const pathname = usePathname()

    return (
        <Link
            href={path}
            className={`text-base font-normal text-secondary-0 hover:text-primary-900 w-full p-2
            hover:bg-secondary-800/50 transition-all duration-200 sm:bg-transparent sm:hover:bg-transparent sm:w-auto rounded-lg
            ${pathname == path && '!text-primary-900 bg-secondary-800/80'}`}
        >
            {children}
        </Link>
    )
}

export default NavLink
