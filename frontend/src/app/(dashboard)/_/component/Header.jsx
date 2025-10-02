import SearchInput from '@/ui/SearchInput'
import React from 'react'
import SidbarProfile from './SidbarProfile'

function Header() {
    return (
        <div className='w-full p-4 rounded-xl bg-black flex items-center justify-between'>
            <SearchInput
                className={'bg-secondary-950 rounded-full px-5'}
                containerClassName={'max-w-[17rem]'}
            />
            <SidbarProfile />
        </div>
    )
}

export default Header
