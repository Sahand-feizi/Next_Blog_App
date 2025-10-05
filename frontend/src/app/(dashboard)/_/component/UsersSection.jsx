import { getAllUsersApi } from '@/services/authServices'
import setCookiesOnReq from '@/utils/setCookiesOnReq';
import { cookies } from 'next/headers';
import React from 'react'
import SidbarProfile from './SidbarProfile';
import UserProfile from './UserProfile';
import { UsersButton } from './Buttons';

async function UsersSection() {
    const cookieStore = cookies()
    const options = setCookiesOnReq(cookieStore)
    const { users } = await getAllUsersApi(options)

    return (
        <div className="space-y-2 row-span-2 bg-secondary-950 rounded-xl 
        col-span-12 sm:col-span-6 md:col-span-4 p-4 max-h-[24rem]">
            <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-secondary-0">کابران</h3>
                <UsersButton />
            </div>
            <div className='space-y-2'>
                {
                    users.slice(0, 6).map(user => (
                        <UserProfile key={user._id} user={user} />
                    ))
                }
            </div>
        </div>
    )
}

export default UsersSection
