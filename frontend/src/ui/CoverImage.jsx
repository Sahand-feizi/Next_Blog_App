import Image from 'next/image'
import React from 'react'

function CoverImage({coverImageUrl, children, className}) {
  return (
    <div className='w-full h-full relative'>
      <Image 
        alt={coverImageUrl}
        src={coverImageUrl}
        fill
        className={`w-full h-full z-10 object-cover object-center absolute top-0 left-0 ${className}`}
      />
      <div className='h-full w-full z-20'>
        {children}
      </div>
    </div>
  )
}

export default CoverImage
