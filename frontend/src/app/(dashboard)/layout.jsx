import React from 'react'
import Sidbar from './_/component/Sidbar'
import Header from './_/component/Header'

function DashboardLayout({ children }) {
  return (
    <div className='flex gap-4 p-4'>
      <Sidbar />
      <div className='w-full space-y-4'>
        <Header />
        <div className='p-4 rounded-xl w-full bg-black'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout
