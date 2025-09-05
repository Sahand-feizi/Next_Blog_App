import Button from '@/ui/Button'
import ButtonIcon from '@/ui/ButtonIcon'
import { RiMenu2Fill } from "react-icons/ri";
import React from 'react'
import Logo from '@/components/Logo';
import NavLink from '@/components/NavLink';
import Header from './_components/Header';
import SearchInput from '@/ui/SearchInput';

export const metadata = {
  title: 'خانه'
}

function HomePage() {
  return (
    <div className='text-secondary-0 font-black'>
      سلام
      <SearchInput />
    </div>
  )
}

export default HomePage
