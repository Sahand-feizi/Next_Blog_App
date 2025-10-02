import Avatar from '@/ui/Avatar'
import React from 'react'

function UserProfile({ user, className }) {
    return (
        <div className='flex items-center gap-2'>
            <Avatar
                path={user?.avatarUrl || '/images/avatar.png'}
                alt={user?.name || '-'}
                width={'30'}
            />
            <div className={`${className}`}>
                <p className='text-sm font-medium text-secondary-300'>
                    {user?.name}
                </p>
                <span className='text-xs font-normal text-secondary-500'>
                    {user?.email}
                </span>
            </div>
        </div>
    )
}

export default UserProfile
