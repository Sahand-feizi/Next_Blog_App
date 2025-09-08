import React from 'react'
import {
    BookmarkIcon as OutlineBookmarkIcon,
    HeartIcon as OutlineHeartIcon
} from '@heroicons/react/24/outline'
import {
    HeartIcon as SolidHeartIcon,
    BookmarkIcon as SolidBookmarkIcon
} from '@heroicons/react/24/solid'
import ButtonIcon from '@/ui/ButtonIcon'

function BlogIntractions({ isLiked, isBookmarked }) {

    return (
        <div className='w-full flex flex-col items-end gap-2'>
            <ButtonIcon variant='danger' >
                {
                    isLiked ? <SolidHeartIcon className='w-6 h-6' /> :
                        <OutlineHeartIcon className='w-6 h-6' />
                }
            </ButtonIcon>
            <ButtonIcon variant='primary' >
                {
                    isBookmarked ? <SolidBookmarkIcon className='w-6 h-6' /> :
                        <OutlineBookmarkIcon className='w-6 h-6' />
                }
            </ButtonIcon>
        </div>
    )
}

export default BlogIntractions
