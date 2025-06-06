import Navbar from '@/components/Navbar'
import React from 'react'

const Layout = ({children}) => {
  return (
     <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow p-6">{children}</main>
    </div>
  )
}

export default Layout