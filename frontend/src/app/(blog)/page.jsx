import Button from '@/ui/Button'
import ButtonIcon from '@/ui/ButtonIcon'
import { RiMenu2Fill } from "react-icons/ri";
import React from 'react'

export const metadata = {
  title: 'خانه'
}

function HomePage() {
  return (
    <div className='text-secondary-0 font-black'>
      <Button
        variant={'white'}
        className={'font-normal'}
      >
        سلام
      </Button>
      <ButtonIcon variant={'white'}>
        <span>سلام</span>
        <RiMenu2Fill />
      </ButtonIcon>
    </div>
  )
}

export default HomePage
