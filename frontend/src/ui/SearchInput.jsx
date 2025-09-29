"use client"
import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import React from 'react'
import { LuSearch } from "react-icons/lu";

function SearchInput() {
    const searchParams = useSearchParams()
    const router = useRouter()
    const pathname = usePathname()
    const newParams = new URLSearchParams(searchParams);
    const submitHandler = (e) => {
        e.preventDefault()

        const searchInput = e.target.search;
        const searchText = searchInput.value;

        if (!searchText.value) {
            newParams.delete('search')
        }
        newParams.set('search', searchText)
        if (!pathname.includes('blogs')) {
            router.push(`/blogs?${newParams}`)
            return null
        }
        router.push(`${pathname}?${newParams}`)
    }

    return (
        <form
            onSubmit={submitHandler}
            className='flex items-center justify-between relative w-full z-20'
        >
            <input
                className='Search_input z-20'
                placeholder='جستجو  بلاگ ها، متن ها و ...'
                name='search'
                id='search'
                defaultValue={newParams.get('search') || ''}
            />
            <button type='submit' className='absolute left-3 top-[.6rem] z-20 cursor-pointer'>
                <LuSearch className='text-2xl text-secondary-300' />
            </button>
        </form>
    )
}

export default SearchInput
