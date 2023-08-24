"use client"
import React from 'react'
import Link from 'next/link'
import About from "./about/page"
import Signup from "./signup/page"
import  styles from "./page.module.css"
import { useRouter } from 'next/navigation'
import { AuthProvider } from './context/page'
const page = ({Component,pageProps}) => {
  const router =useRouter();
  return (
    <>
<AuthProvider>
    <Signup/>
    </AuthProvider>
    
    </>
  )
}


export default page
