import React from 'react'
import Sidbar from './_/component/Sidbar'

function DashboardLayout({children}) {
  return (
    <div className='flex p-4'>
      <Sidbar />
      {children}
    </div>
  )
}

export default DashboardLayout
