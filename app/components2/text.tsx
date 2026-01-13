"use client"

import {motion, stagger, useAnimate} from "motion/react"
import { useEffect } from "react";

export default function  Text(){
    const heading =
    "The first rule of Fight Club: You do not talk about Fight Club.The second rule of Fight Club: You do not talk about Fight Club.The third rule of Fight Club: If someone yells “stop!”, goes limp, or taps out — the fight is over.";
  return(<div className="flex flex-wrap w-2xl text-neutral-200">
    <Words text={heading}/>
    
    </div>)
}

export function Words({text} : {text:string}){
  const [scope,animate] = useAnimate()
  useEffect(()=>{
    animate("h1",{
      filter : "blur(0px)",
      opacity:1
    },{
      delay : stagger(0.02)
    })
  },[])
  const words = text.split(" ").map((i,idx) =>(<motion.h1 initial={{
    filter : "blur(10px)",
    opacity :0
  }}  key={idx}>{i}&nbsp;</motion.h1>))
  return(<div ref={scope} className="flex flex-wrap w-2xl text-neutral-200">
  {words}
  </div>)
}