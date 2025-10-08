import Link from 'next/link'
import React from 'react'

function Breadcrumbs({ breadcrumbs }) {

    if (!breadcrumbs) {
        return null
    }

    return (
        <nav className='p-2'>
            <ul className='flex items-center gap-2'>
                {
                    breadcrumbs.map((item, index) => (
                        <li
                            key={item.id}
                            className={`text-base flex gap-x-2 font-normal 
                            ${item.active ? 'text-secondary-0' : 'text-secondary-400'}`}>
                            <Link href={item.path}>{item.title}</Link>
                            {
                                index + 1 < breadcrumbs.length &&
                                <div className='text-secondary-300'>/</div>
                            }
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}

export default Breadcrumbs
