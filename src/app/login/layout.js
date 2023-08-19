"use client"
import React from 'react'
import  {usePathname} from "next/navigation"
const Layout = ({children}) => {
    const pathname =usePathname();
    console.log(pathname)
  return (
    <div>
      <h1>Layout tera bhai ka</h1>
      {children}
    </div>
  )
}

export default Layout
