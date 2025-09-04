import Avatar from '@/ui/Avatar'
import React from 'react'

function Logo() {
    return (
        <div className='flex items-center gap-x-2'>
            <Avatar
                alt='لوگو وبلاگ'
                path='/images/logo.png'
                width={34}
            />
            <div>
                <h3 className='text-base font-bold text-secondary-0'>وبسایت وبلاگ</h3>
                <p className='text-xs font-thin text-secondary-0'>مرجع بلاگ های ایران و جهان</p>
            </div>
        </div>
    )
}

export default Logo