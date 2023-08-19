"use client"
import React, { useEffect, useState } from 'react'
import "./about.css"
import { useRouter } from 'next/navigation'
const page = () => {
  const [data,setdata]=useState([])
  const router =useRouter();
  //  router.push("/about")
  const fetchnews=async ()=>{
 const x= await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=5fc641e9a5af412cac0d6cc4763fb33e")
 const p= await x.json()
 setdata(p.articles)
 
  }
  useEffect(()=>{
fetchnews()
  },[])
  console.log(data,"ghjkiop")
  return (
    <>

<div className="container">
  <div className="heading">
    <h1>News website</h1>
  </div>
  <div className="row">
    
   
   {data&&data.map((c,id)=>{
return(
  <>
  
  <div className="card" style={{marginRight:5}}>
      <div className="card-header">
        <h1>{c?.author}</h1>
      </div>
      <div>
        <img  style={{width:"100%"}}src={c?.urlToImage
} alt=""/>
      </div>
      <div className="card-body">
        <p>
         {c?.description}
         </p>
        <a href={c?.url} className="btn">
          View More
        </a>
      </div>
    </div>
   
  
  </>
)

   })}
  </div>
</div>



    </>
  )
}

export default page