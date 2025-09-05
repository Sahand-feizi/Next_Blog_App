import Image from 'next/image'
import React from 'react'

function CoverBordImage({ children }) {
    return (
        <div className="h-[80vh] w-full flex justify-center md:block container">
            <Image
                className="h-screen w-full absolute top-0 left-0 z-0"
                src='/images/homepage.png'
                alt="homepage"
                fill
            />
            <div className="h-screen w-full top-0 absolute left-0 bg-linear-to-l from-black/80 
            via-secondary-950/90 to-transparent z-10 from-100% via-50% to-100% md:from-30% md:via-50% 
            md:to-100% lg:from-10% lg:via-30% lg:to-100%"></div>
            {children}
        </div>
    )
}

export default CoverBordImage
