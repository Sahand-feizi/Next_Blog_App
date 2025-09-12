import React from 'react'
import CoverBordImage from '@/ui/CoverBordImage'
import SignupForm from 'app/_components/SignupForm'

function Signup() {
  return (
    <CoverBordImage>
      <div className='w-sm pt-20 space-y-4 z-20'>
        <h1 className='font-black text-secondary-0 text-3xl text-center relative z-20'>ثبت نام</h1>
        <SignupForm />
      </div>
    </CoverBordImage>
  )
}

export default Signup
