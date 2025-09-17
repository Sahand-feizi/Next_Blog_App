"use client"
import React from 'react'
import Button from './Button'
import { RiArrowDropUpFill } from 'react-icons/ri'

function GoUpButton() {
    return (
        <Button
            variant={'white'}
            onClick={() => window.scrollTo(0, 0)}
            className={'w-[35px] h-[35px] sm:w-[50px] sm:h-[50px] !p-0 !text-[20px] rounded-full flex items-center justify-center'}>
            <RiArrowDropUpFill className='!text-2xl' />
        </Button>
    )
}

export default GoUpButton
