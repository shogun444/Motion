"use client"

import {motion} from 'motion/react'

export default function  Button(){
  return (<>
  <div 

  className="flex justify-center items-center"> 
  <motion.button
  initial = {{y:0,rotate : 0}}
  whileHover={{
    y : -2,
   boxShadow : "0px 20px 25px rgba(4,102,80,0.2)"
  }}
  whileTap={{
    scale : 0.95
  }}
  transition={{
    duration : 0.1,
    ease : "easeInOut"
  }}
  className="group  hover:bg-cyan-600 hover:cursor-pointer bg-neutral-500 rounded-lg text-xs text-neutral-800 hover:text-neutral-300  duration-100 p-3 relative ">
     Click ME!
    <span className="-bottom-px  inset-x-0 mx-auto bg-linear-to-r  from-transparent via-cyan-300 to-transparent h-0.5  w-3/4   absolute"></span>
     <span className="-bottom-px group-hover:opacity-100 opacity-0 inset-x-0 mx-auto bg-linear-to-r   via-cyan-400  h-1  w-[70%]  transition-opacity duration-100 absolute blur-xs"></span>
    
  </motion.button>
  </div>
  </>)
}