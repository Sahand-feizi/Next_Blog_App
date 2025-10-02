import React from 'react'
import Card from './Card'
import { fetchCardData } from '@/lib/data'

async function CardWrapper() {
    const {
        numOfBlogs,
        numOfComments,
        numOfUsers
    } = await fetchCardData()

    return (
        <div className='grid grid-cols-12 gap-2 w-full mt-4'>
            <Card
                title={'همه بلاگ ها'}
                description={"مجموع بلاگ ها از ماه گذشته"}
                path={'/profile/blogs'}
                count={numOfBlogs}
                active
            />
            <Card
                title={'همه کاربران'}
                description={"مجموع کاربر ها از ماه گذشته"}
                path={'/profile/users'}
                count={numOfUsers}
            />
            <Card
                title={'همه نظرات'}
                description={"مجموع نظر ها از ماه گذشته"}
                path={'/profile/comments'}
                count={numOfComments}
            />
        </div>
    )
}

export default CardWrapper
