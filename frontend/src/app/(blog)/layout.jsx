import React from 'react'
import Header from './_components/Header'

function blogLayout({children}) {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}

export default blogLayout
