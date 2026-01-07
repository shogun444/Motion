"use client"

import { motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";

export default function Layout(){
  const songs = [
  {id : 1,
    title: "Blinding Lights",
    description: "A synthwave-inspired track about longing and late-night drives.",
    overview: "The song captures the feeling of missing someone deeply while navigating fame, isolation, and the pull of love.",
    artist: "The Weeknd",
    img : "/a.jpg"
  },
  {
    id : 2,
    title: "Shape of You",
    description: "A catchy pop song blending romance with tropical beats.",
    overview: "Built around rhythm and attraction, the track focuses on physical chemistry evolving into emotional connection.",
    artist: "Ed Sheeran",
    img : "/b.jpg"
  },
  {
    id : 3,
    title: "Someone Like You",
    description: "An emotional ballad about heartbreak and moving on.",
    overview: "The song reflects acceptance and maturity after a breakup, balancing sadness with genuine well-wishes.",
    artist: "Adele",
    img : "/c.jpg"
  },
  {
    id : 4,
    title: "Believer",
    description: "A powerful anthem about turning pain into strength.",
    overview: "Inspired by personal struggles, the track emphasizes resilience and growth through adversity.",
    artist: "Imagine Dragons",
    img : "/d.jpg"
  },
  {
    id : 5,
    title: "Bohemian Rhapsody",
    description: "A genre-defying rock classic blending opera, ballad, and hard rock.",
    overview: "The song tells a dramatic and emotional story through shifting musical styles and expressive vocals.",
    artist: "Queen",
    img : "/e.jpg"
  }
];
const [visible,setVisible] = useState(null)
  return(<>
  {songs.map((itm)=>(<div className="flex justify-center items-center " key={itm.id}>
  <Card 
  title={itm.title}
  description={itm.description}
  img={itm.img}
  overview={itm.overview}
  artist={itm.artist}
  itm={itm}
  setVisible={setVisible}
  />
  {/* {visible && 
  <motion.div 
  layoutId="animate"
  className="z-10 fixed ">
  <div className=" h-2/3 w-1/3  bg-neutral-100 rounded-lg p-5 shadow-xs">
  <Image className="w-50 rounded-lg h-40 mx-auto" height={70} width={90} src={card.img}  alt={card.img}></Image>
  <div className="flex justify-between my-4">
     <div className="flex-col space-y-1 pl-5">
      <h1 className="font-semibold text-lg text-neutral-700">{card.title}</h1>
      <h1 className=" font-semibold text-neutral-400 text-xs">{card.artist}</h1>
      </div>
      <button className="bg-green-500 text-neutral-200 text-xs rounded-xl p-2 w-fit h-fit  ">Play</button> 
      
 </div>
  <h1 className=" font-semibold text-neutral-400 text-xs  text-center">{card.overview} {card.description}</h1>
  </div>
  </motion.div>
  } */}
  </div>))}
  </>)
}

function Card({title,description,overview,artist,img,id,setVisible,itm} : any){
  
  return(<>
  <motion.div 
 onClick={()=>setVisible(itm)}
 className="m-5 cursor-pointer p-2 w-2/4 rounded-lg bg-neutral-100 shadow-sm flex justify-between items-center">
 
 <div className="flex items-center ">

  <Image className="w-15 rounded-lg h-15" height={70} width={90} src={img}  alt={img}></Image>

    <div className="flex-col space-y-1 pl-5">
      <h1 className="font-semibold text-lg text-neutral-700">{title}</h1>
      <h1 className=" font-semibold text-neutral-400 text-xs">{artist}</h1>
 </div>
    
    </div>

    <button className="bg-green-500 text-neutral-200 text-xs rounded-xl p-2 w-fit h-fit  ">Play</button>
 </motion.div>
  
  
  </>)
}