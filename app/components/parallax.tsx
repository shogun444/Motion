"use client";
import Image from "next/image";
import { motion, useMotionTemplate, useMotionValueEvent, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";




export default function Parallax() {
  const Card = [
    {
      id: 1,
      head: "Camels are Crazy!",
      jpeg: "/camel.jpg",
      text: "Camels are great for crossing the desert because they can travel far in harsh sunlight without long periods of Rest. The Nomadic peoples living in the desert have camels as their pets. They breed them drink their milk and also use them as their mode of transport for going one place to another in such a harsh Climate.  ",
    },
    {
      id: 2,
      head: "Craze of XUVS",
      jpeg: "/thars.jpg",
      text: "In India XUVs are becoming more and more common these days people buy them because of their road pressence and also as they are cheaper compared to Sedans. XUVs have dominated the Indian market of cars and it has been the goto for every Indian nowadays.",
    },
    {
      id: 3,
      head: "Soft Mornings, Clear Minds",
      jpeg: "/morning.jpg",
      text: "Mornings set the tone for the day. Gentle starts, quiet thoughts, and small routines can shape the hours that follow.",
    },
    {
      id: 4,
      head: "The Comfort of Familiar Roads",
      jpeg: "/stairs.jpg",
      text: "There’s a strange peace in places we’ve walked before. Familiar paths remind us how far we’ve come, even if the destination keeps changing.",
    },
  ];
  const container = useRef<HTMLDivElement>(null)
  const {scrollYProgress} = useScroll({
    target : container,
    offset : ["start end" , "end start"]
  })
const bgs = ["#212529","#333d29","#252422","#1b263b"]
  const [bg,setbg] = useState(bgs[0])
  
  useMotionValueEvent( scrollYProgress ,"change",(latest) =>{
      const value = Math.floor(latest * bgs.length)
      console.log(value)
      setbg(bgs[value])
  }) 
  

  return (
    <motion.div 
    animate={{backgroundColor : bg}}
    transition={{
      ease : "easeInOut",
      duration : 0.6
    }}
    ref={container}>
    {Card.map((itm)=>(<div
    key={itm.id}
    className="h-screen w-full"
    >
    <ParallaxCard 
    id={itm.id}
    head={itm.head}
    jpeg={itm.jpeg}
    text={itm.text}
    />
    </div>))}
    </motion.div>
  );
}


 function ParallaxCard({head,text,jpeg,id} : any){
  const ref =  useRef<HTMLDivElement>(null)
    const {scrollYProgress} = useScroll({
      target : ref,
    offset : [ "start end" , "end start"]
  })
   
  const translate = useTransform(scrollYProgress , [0,0.7] , [-200,100])
  const imagetranslate = useTransform(scrollYProgress , [0,0.7] , [300,-200])
  const opacity = useTransform(scrollYProgress , [0,0.4,0.68] , [0,1,0])
  const textopacity = useTransform(scrollYProgress , [0,0.4,0.68] , [0,1,0])
  const blur = useTransform(scrollYProgress,[0.5,0.6],[0,6])
  return(<>
 
        <motion.div   
        key={id}   className="h-screen w-full flex justify-center items-center">
        <motion.div 
       ref={ref}
        className="h-80 grid grid-cols-2 mt-40 " >
          <motion.div 
            style={{
              y : translate,
              opacity : textopacity,
             filter : useMotionTemplate`blur(${blur}px)`
            }}
            transition={{ease : "easeInOut"}}
          className="flex flex-col w-70">\
          <h1 className="font-semibold text-neutral-100 text-2xl">{head}</h1>
          <h1 className="font-semibold text-sm text-neutral-400 pt-5">{text}</h1>
           
          </motion.div>
          <motion.div
          style={{
             y : imagetranslate,
              opacity
            }}
            transition={{
              ease : "easeInOut"
            }}
          >
             <Image className="rounded-lg h-70 w-75" src={jpeg} alt={jpeg} width={720} height={720}></Image>
          </motion.div>
          
        
        </motion.div>
        </motion.div>
    
    </>)
}