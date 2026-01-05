"use client"
import Image from "next/image"
import {AnimatePresence, easeInOut, motion} from "motion/react"
import { useState } from "react"
export default  function HoverAnimations(){
  const [state,setState] =useState(true)
  return (<>
    <AnimatePresence>
  {state &&
  <motion.div
  initial={{
    scale : 0.99,
    filter : "blur(5px)"
  }} 
  animate = {{
    scale : 1,
    filter : "blur(0px)"
  }}
  exit={{
    opacity : 0,
    scale : 0.98,
    filter : "blur(15px)",
  }}
  transition={{
    duration : 0.3,
    ease : "easeInOut"
  }}
  className="bg-neutral-100 rounded-sm   text-left p-7 shadow-lg">
  <h1 className="font-semibold text-sm">UI Components for Website.</h1>
  <span className="opacity-65 text-[11px] font-semibold tracking-tight ">Some components below that will make your site awesome.
  </span>
  <div className="flex justify-center  mx-auto p-1 px-7 rounded-lg bg-neutral-100 shadow-sm m-5 items-center space-x-2 w-fit ">
    <Image className="h-4.5 w-5" src={'/logo.png'} width={1080} height={1920} alt="Logo"></Image>
    <span className="text-sm ">Aceternity</span>
    <button onClick={()=> setState(prev => !prev)}> 
    <svg  xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x-icon cursor-pointer lucide-x text-neutral-800"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg></button>
  </div>

<div className="bg-neutral-200 w-[85%] mx-auto h-66 rounded-md relative" > 

  <motion.div 
  initial={{
    opacity : 0,
    scale : 0.98,
    filter : "blur(5px)"
  }}
  whileHover={ {
    opacity:1,
    scale : 1,
    filter : "blur(0px)"
  }}
  transition={{
    ease : "easeInOut"
  }}
  className="shadow-lg py-1 w-full mx-auto bg-neutral-100 rounded-md divide-y border-neutral-300 border-1 divide-neutral-400 absolute cursor-pointer">
  
 

  <div className="flex items-start space-x-2 px-3 py-4"> 
     <svg xmlns="http://www.w3.org/2000/svg" width="26" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-brush-icon lucide-brush rounded-md shadow-md p-1 text-neutral-600"><path d="m11 10 3 3"/><path d="M6.5 21A3.5 3.5 0 1 0 3 17.5a2.62 2.62 0 0 1-.708 1.792A1 1 0 0 0 3 21z"/><path d="M9.969 17.031 21.378 5.624a1 1 0 0 0-3.002-3.002L6.967 14.031"/></svg>
     <div className="flex flex-col items-start">
      <span className="font-semibold text-[12px] opacity-80">UI Component</span>
   <span className="opacity-50 text-[10px] font-semibold ">Great from animations</span>
   </div>
  </div>
  <div className="flex items-start space-x-2 px-3 py-4">
    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shadow-md rounded-md p-1 text-neutral-800 lucide lucide-message-square-quote-icon lucide-message-square-quote"><path d="M14 14a2 2 0 0 0 2-2V8h-2"/><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"/><path d="M8 14a2 2 0 0 0 2-2V8H8"/></svg>
  <div className="flex flex-col items-start">
      <span className="font-semibold text-[12px] opacity-80">Optimization</span>
   <span className="opacity-50 text-[10px] font-semibold  ">Fast and Sleek</span>
   </div>
     </div>
  
<div className="flex items-start space-x-2 px-3 py-4">
   <Image className="shadow-md rounded-md p-1 text-neutral-800 h-6 w-6" src={'/logo.png'} alt="Logo" height={1080} width={1920}></Image>
  <div className="flex flex-col items-start">
      <span className="font-semibold text-[12px] opacity-80">Value</span>
   <span className="opacity-50 text-[10px] font-semibold  ">Best in the market</span>
   </div>
   </div>
 
 <div className="flex items-center justify-center space-x-2 px-3 pb-4 pt-2">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus-icon lucide-plus rounded-full shadow-md p-1 text-neutral-600"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
  <span>
      
     <span className="opacity-85 text-sm font-semibold ">Create new</span>
  </span>
 </div>
  </motion.div>

 </div>
  </motion.div> 

  }
   </AnimatePresence> 
  </>)
}