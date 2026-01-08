"use client"

import { motion, useAnimate } from "motion/react"
import { useState } from "react"

export default function PayButton(){
  const[scope,animate] = useAnimate()
  const[loading,setLoading] = useState(false)
const scoping= async ()=>{
  setLoading(true)
 
 await animate("#lucide",{
    opacity :1,
    rotate : 4 * 360,
    
  },{
    duration : 2
  })
  
 await  animate("h1",{
    opacity : 0
  },{
    duration:0.3
  })
  animate("#lucide",{
    opacity : 0
  },{})
  await animate("button",{
    width : 89,
    borderRadius : "1000px",
   
  },{
    duration : 0.3
  })

   
  await animate("button",{
    scale : [1,0.8,1,0.8,1],
    backgroundImage : "linear-gradient(to right , green )"
  },{
    duration : 0.5
  })
  animate("#check" , {
    opacity : 1
  },{
    duration:1
  })
 animate("#check-path",{
  opacity:1,
  pathLength :1
 },{
  duration : 0.3,
  type : "tween"
 })
}

return(<div ref={scope} className="w-full h-screen flex justify-center items-center">
<motion.button  onClick={()=> 
scoping()
} className=" rounded-md bg-indigo-400 text-neutral-300 font-semibold text-sm  cursor-pointer relative w-100 text-center items-center justify-center flex">
   <motion.svg
   initial = {{opacity:0}}
   xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide" id={"lucide"}><motion.path
   
   d="M21 12a9 9 0 1 1-6.219-8.56"/></motion.svg>
    <motion.h1 className="text p-4">Pay Now ($180)</motion.h1> 
   
  <motion.svg 
  initial={{opacity:0}}
  id={"check"}
  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-8 absolute inset-0 m-auto ">
  <motion.path
  id={"check-path"}
  initial = {{
    pathLength : 0,
  }}
 
  strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</motion.svg>

</motion.button>




</div>)


}
