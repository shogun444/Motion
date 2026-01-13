"use client"
import {motion, useAnimate} from "motion/react"
import { useEffect, useState } from "react"
export default function PayButton(){
  const [scope,animate] = useAnimate()
  const [show,setShow] = useState(false)
  async function startAnimation(){
   
     animate(".btn",{width : 0
     },{
      ease : "easeInOut"
    })
     animate("span",{
      display : "none",
      opacity : 0
    },{
      ease : "easeInOut"
    })
     animate(".btn",{
      width : "4rem",
      borderRadius : "1000px",
      scale : [1,0.9,1],
      backgroundImage  : "linear-gradient(green)"
     },{ease : "easeInOut",
      duration : 0.3
     })
     animate("path",{pathLength : 1,opacity :1},{type : "tween",delay : 0.2})
  }

 
  return(<div ref={scope}>
  <motion.div 
  style={{
    backgroundColor : "green"
  }}
  onClick={startAnimation}
  className=" btn cursor-pointer h-16 w-75  justify-center flex items-center rounded-md  bg-linear-to-r from-indigo-400 to-violet-700">
    
    <motion.span className="relative" >Pay Now ($155)</motion.span>
    
     </motion.div>
<motion.svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute z-0 m-auto inset-0 text-white items-center lucide lucide-check-icon lucide-check"><motion.path initial={{
  opacity : 0,
  pathLength : 0
}} d="M20 6 9 17l-5-5"/></motion.svg>
  </div>)
}