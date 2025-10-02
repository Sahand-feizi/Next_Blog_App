import SearchInput from '@/ui/SearchInput'
import React from 'react'
import SidbarProfile from './SidbarProfile'

function Header() {
    return (
        <div className='w-full sticky top-4 p-4 rounded-xl bg-black flex items-center justify-between'>
            <SearchInput
                className={'bg-secondary-950 rounded-full px-5'}
                containerClassName={'max-w-[17rem]'}
            />
            <SidbarProfile className={'hidden sm:flex sm:flex-col'}/>
        </div>
    )
}

export default Header
