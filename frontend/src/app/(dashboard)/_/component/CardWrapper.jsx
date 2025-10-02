import React from 'react'
import Card from './Card'

function CardWrapper() {
    return (
        <div className='grid grid-cols-12 gap-2 w-full mt-4'>
            <Card
                title={'همه بلاگ ها'}
                description={"مجموع بلاگ ها از ماه گذشته"}
                path={'/profile/blogs'}
                count={21}
                active
            />
            <Card
                title={'همه کاربران'}
                description={"مجموع کاربر ها از ماه گذشته"}
                path={'/profile/users'}
                count={56}
            />
            <Card
                title={'همه نظرات'}
                description={"مجموع نظر ها از ماه گذشته"}
                path={'/profile/comments'}
                count={14}
            />
        </div>
    )
}

export default CardWrapper
