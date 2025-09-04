import Image from 'next/image'
import React from 'react'

function Avatar({ alt, path, width = 24 }) {
    return (
        <Image
            alt={alt}
            src={path}
            width={width}
            height={width}
            className='rounded-full'
        />
    )
}

export default Avatar