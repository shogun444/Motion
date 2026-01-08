"use client"

import { motion, stagger, useAnimate } from "motion/react"
import { useEffect, useRef } from "react"



export default function Sequences(){
  const head = "Welcome to the FightClub! "
  const text = "The first rule of FightClub you don't talk about FightClub.The second Rule of FightClub you don't talk about FightClub. third Rule of FightClub you don't talk about FightClub. "
  const parentVareint={

  opacity : 0,
  transition : {
    staggerChildren : 0.7,
    filter : 'blur(10px)'
  }
}
const childrenVarient = {
opacity : 1
}
  return(<div className="text-neutral-50 h-screen flex justify-center items-center  max-w-1/4  mx-auto text-center " >
    
   <Word head={head} text={text}/>
  
  </div>)
}

function Word( {head ,text} : any){
 
  const [scope,animate] = useAnimate()
  useEffect(()=>{
    startAnimate()
  },[])
  function startAnimate(){
    animate("span",{
      opacity : 1,
      filter : "blur(0px)"
    },{
      duration : 0.3,
      delay : stagger(0.07),
     ease : "easeInOut"
    })
  }
  return(<>
   <motion.div 
    ref={scope}
    className="flex-col border border-neutral-50 shadow-md rounded-sm p-5">
<motion.span 
initial={{
filter: "blur(10px)"
}}
animate = {{
  filter : "blur(0px)"
}}
transition={{
  duration : 0.1
}}
className="font-semibold text-2xl text-neutral-100  ">{head}<br />
  </motion.span>
 
      {text.split(" ").map((word : string,index : any)=>(
           <motion.span 
           initial={{
             filter : "blur(10px)",
             opacity : 0
           }}
           key={word+index}
            className="font-semibold mt  text-neutral-300 tracking-tight">
            {word}&nbsp;
              </motion.span>
      ))}

    </motion.div>
  </>)
}