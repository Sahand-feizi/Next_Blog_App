import CoverBordImage from '@/ui/CoverBordImage'
import SigninForm from 'app/_components/SigninForm'
import React from 'react'


function Signin() {
    return (
        <CoverBordImage>
            <div className='w-sm pt-20 space-y-4 z-20'>
                <h1 className='font-black text-secondary-0 text-3xl text-center relative z-20'>ورود</h1>
                <SigninForm />
            </div>
        </CoverBordImage>
    )
}

export default Signin
