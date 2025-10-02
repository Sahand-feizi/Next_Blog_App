import React from 'react'
import Sidbar from './_/component/Sidbar'
import Header from './_/component/Header'

function DashboardLayout({ children }) {
  return (
    <div className='grid grid-cols-[4rem_auto] lg:grid-cols-[14rem_auto] 
    grid-rows-[auto_auto] gap-4 p-4'>
      <Sidbar />
      <Header />
      <div className='p-4 rounded-xl w-full bg-black'>
        {children}
      </div>
    </div>
  )
}

export default DashboardLayout
