"use client"
import Image from "next/image";
import motion from 'motion/react'
export default function Scroll(){
  return(<>
  <div className=" w-full h-[300vh] py-10 text-center">
    <span className="font-semibold text-3xl">Unleash the power 
      <br />of scroll animations.
    </span>
    <div className="w-2/3 rounded-2xl bg-violet-50 h-155 -mt-1 p-1 shadow-3xl mx-auto">
    <div className="w-full h-full rounded-2xl bg-neutral-50">
      <Image className="h-full w-full rounded-2xl" src={'/scroll.avif'} alt="Scroll" height={500}  width={500}></Image>
      </div> </div>
  </div>
  </>)
}