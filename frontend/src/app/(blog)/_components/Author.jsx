import Avatar from '@/ui/Avatar'
import React from 'react'

function Author({avatarUrl, name}) {
  return (
    <div className='flex items-center gap-2'>
      <Avatar 
        alt={name}
        path={avatarUrl || '/images/avatar.png'}
      />
      <p className='text-secondary-0 font-bold text-sm'>{name}</p>
    </div>
  )
}

export default Author
