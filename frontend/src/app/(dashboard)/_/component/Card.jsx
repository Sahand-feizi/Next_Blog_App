import React from 'react'
import { CardButton } from './Buttons'
import { toPersianDigits } from '@/utils/numberFormater'

function Card({ className, active, title, count, description, path }) {
  return (
    <div className={`group/card col-span-12 sm:col-span-6 md:col-span-4 p-4 
      bg-secondary-950 bg-linear-to-tl duration-500
    hover:from-secondary-0 hover:to-secondary-300 flex flex-col justify-between transition-colors
    rounded-xl max-h-[12rem] ${active && '!bg-secondary-0'} ${className}`}>
      <div className="flex items-center justify-between w-full">
        <p className={`text-secondary-0 group-hover/card:text-secondary-900 
          text-lg font-normal ${active && 'text-secondary-900'}`}>
          {title}
        </p>
        <CardButton path={path} className={`${active && 'shadow-[0_8px_30px_rgb(0,0,0)]'}`}/>
      </div>
      <h1 className={`text-[55px] text-secondary-0 group-hover/card:text-secondary-900 
      font-bold ${active && 'text-secondary-900'}`}>
        {toPersianDigits(count)}
      </h1>
      <p className={`text-sm text-secondary-300 group-hover/card:text-secondary-500 
        font-normal ${active && 'text-secondary-500'}`}>
        {description}
      </p>
    </div>
  )
}

export default Card
