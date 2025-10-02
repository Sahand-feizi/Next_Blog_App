'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

function SidbarLink({ path, outlineIcon, solidIcon, title }) {
    const pathname = usePathname()

    return (
        <Link
            className={`sidbar_btn
            ${pathname == path ? 'after:bg-secondary-0 text-secondary-0 font-medium child-first:!text-secondary-0' :
                    'after:bg-transparent text-secondary-300 hover:text-secondary-200'}`}
            href={path}
        >
            {pathname == path ? solidIcon : outlineIcon}
            <span className='hidden lg:flex'>{title}</span>
        </Link>
    )
}

export default SidbarLink
