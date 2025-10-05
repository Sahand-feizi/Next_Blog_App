import { toPersianDigits } from '@/utils/numberFormater'
import React from 'react'
import { BlogsButton } from './Buttons'

function AdvertisementCard({ className }) {
    return (
        <div className={`hidden world-background md:hidden group/card 
            col-span-12 sm:col-span-6 md:col-span-4 p-4 col-start-1 col-end-7 row-start-3 row-end-4 bg-red-500
           sm:flex flex-col rounded-xl justify-between max-h-[11.5rem] ${className}`}>
            <h3 className='text-3xl font-medium text-secondary-0'>
                تــــــخـــــــفــــــــیـــــفــــاتـــــ<br />
                زمـــــــــســــــــتـــــــــانـــــــــه
            </h3>
            <p className='text-xl font-medium text-secondary-200'>
                از راه رســـــیــــــد
            </p>
            <div className='flex items-center justify-between'>
                <p className='text-4xl font-medium text-secondary-0'>
                    {toPersianDigits(100)}%
                </p>
                <BlogsButton />
            </div>
        </div>
    )
}

export default AdvertisementCard
