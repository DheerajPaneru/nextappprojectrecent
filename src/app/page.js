"use client"
import React from 'react'
import Link from 'next/link'
import About from "./about/page"
import Signup from "./signup/page"
import  styles from "./page.module.css"
import { useRouter } from 'next/navigation'
const page = () => {
  const router =useRouter();
  return (
    <>
    <Signup/>
    
    </>
  )
}


export default page
