"use client"
import Link from "next/link";
import {motion} from "motion/react"
import { useState } from "react";
export default function Navbar() {
  const nav = [
    { name: "Home", link: "#home" },
    { name: "Projects", link: "#projects" },
    { name: "About", link: "#about" },
    { name: "Contact", link: "#contact" },
  ];

  // interface item{
  //   name : string,
  //   link :string
  // }
  const [hovered,setId] = useState<number|null>(null)
  return (
    <>
      <div className="flex bg-neutral-300 w-2xl justify-between p-4  rounded-md ">
        {nav.map((i, idx) => (
          <Link href={i.link} key={idx} onMouseOver={()=>setId(idx)} 
         
          className="relative ">
              <h1   className="relative p-5  group-hover:bg-neutral-100 cursor-pointer z-10 text-neutral-500 gap-5 font-md text-lg">{i.name}</h1>
            {hovered === idx&&
            <motion.div
           
            layoutId="following"
            className="absolute cursor-pointer bg-neutral-100 rounded-md  p-4 m-auto inset-0   "></motion.div>
            }
          
          </Link>
        ))}
      </div>
    </>
  );
}
