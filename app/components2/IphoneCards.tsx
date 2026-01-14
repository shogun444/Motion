"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { useState } from "react";
export default function IphoneCards() {
  const songs = [
    {
      src: "/a.jpg",
      songName: "Blinding Lights",
      artistName: "The Weeknd",
      description:
        "Blinding Lights is a modern pop anthem that blends retro 1980s synthwave sounds with contemporary pop production. The song captures a feeling of emotional urgency, loneliness, and longing, as The Weeknd sings about needing someone’s presence to feel whole again. The pulsing synth bass and driving rhythm create a sense of motion, almost like racing through empty city streets at night. Lyrically, the song reflects themes of vulnerability and dependence, showing a softer side beneath the flashy exterior. What makes Blinding Lights stand out is its nostalgic tone, which feels both familiar and fresh at the same time. The production is clean, energetic, and cinematic, making it perfect for late-night drives and large arenas alike. The Weeknd’s vocal delivery balances emotion and confidence, helping the song connect with a wide audience. Over time, Blinding Lights became more than just a hit—it turned into a cultural moment, symbolizing escapism, hope, and emotional intensity during uncertain times.",
    },
    {
      src: "/b.jpg",
      songName: "Shape of You",
      artistName: "Ed Sheeran",
      description:
        "Shape of You is a rhythm-driven pop song that focuses on attraction, connection, and the early stages of romance. Unlike Ed Sheeran’s more acoustic and lyrical ballads, this track leans heavily into groove, minimalism, and repetition. The tropical-inspired beat and subtle electronic elements give the song a laid-back yet infectious energy that makes it instantly memorable. Lyrically, the song emphasizes physical chemistry and everyday moments rather than grand romantic gestures, which helped it feel relatable and modern. Ed Sheeran’s conversational vocal style makes the lyrics feel casual and natural, as if he’s telling a story rather than performing. The structure of the song is simple but effective, allowing the rhythm to carry most of the emotional weight. Shape of You became a global phenomenon because of its universal theme, catchy hook, and dance-friendly production, proving that pop music doesn’t need complexity to make a massive impact.",
    },
    {
      src: "/e.jpg",
      songName: "Bohemian Rhapsody",
      artistName: "Queen",
      description:
        "Bohemian Rhapsody is one of the most iconic and unconventional songs in music history. Performed by Queen, the song defies traditional structure by blending multiple genres, including rock, opera, and ballad, into a single composition. Rather than following a standard verse-chorus format, the song unfolds in dramatic sections, each with its own emotional tone and musical style. Freddie Mercury’s powerful and expressive vocals guide the listener through themes of guilt, fear, fate, and self-reflection. The operatic middle section, filled with layered harmonies and theatrical flair, was groundbreaking for its time and remains unmatched in its ambition. Instrumentally, the song balances delicate piano melodies with heavy guitar riffs, creating a dynamic contrast. Bohemian Rhapsody’s lasting appeal comes from its mystery, emotional depth, and fearless creativity. It is not just a song, but a musical journey that challenges norms and continues to inspire artists across generations.",
    },
    {
      src: "/c.jpg",
      songName: "Set Fire to the Rain",
      artistName: "Adele",
      description:
        "Set Fire to the Rain is a powerful emotional ballad that showcases Adele’s commanding voice and expressive storytelling. The song revolves around themes of heartbreak, inner conflict, and emotional release. Lyrically, it uses strong imagery and contradiction, such as fire and rain, to represent a relationship filled with pain and emotional chaos. Adele’s vocal performance builds gradually, starting with restraint and eventually reaching an explosive climax that mirrors the intensity of the emotions being described. The orchestral production supports this growth, adding drama and weight without overpowering her voice. What makes the song so impactful is its honesty—listeners can feel the vulnerability and strength in every line. Set Fire to the Rain resonates deeply with anyone who has experienced emotional struggle in relationships. It stands as a testament to Adele’s ability to transform personal pain into music that feels universal, timeless, and deeply moving.",
    },
    {
      src: "/d.jpg",
      songName: "Believer",
      artistName: "Imagine Dragons",
      description:
        "Believer is a high-energy rock-pop song that focuses on resilience, pain, and personal growth. Performed by Imagine Dragons, the song uses intense percussion, bold vocals, and raw lyrics to convey the idea that struggle can be transformed into strength. The lyrics emphasize embracing pain rather than running from it, framing hardship as a necessary part of self-improvement. Dan Reynolds’ vocal delivery is aggressive and emotional, adding authenticity to the message. The heavy drum patterns give the song a primal and almost tribal feel, reinforcing its themes of endurance and inner power. Believer stands out because of its motivational tone and explosive energy, making it a popular choice for workouts, sports events, and inspirational moments. Over time, the song has become an anthem for perseverance, reminding listeners that pain, when faced head-on, can become a source of confidence, belief, and transformation.",
    },
  ];

  interface Items {
    src: string;
    songName: string;
    artistName: string;
    description: string;
  }
  const [itm, setId] = useState<Items | null>(null);
  return (
    <div 
    className=" h-screen w-full p-50 bg-neutral-200 items-center">
      {songs.map((i, idx) => (
        <motion.div
       
        layoutId={`card-${i.src}`}
        transition={{
          ease : "easeInOut"
        }}
          onClick={() => setId(i)}
          key={idx}
          className=" relative w-150 mx-auto m-10 flex items-center justify-between  cursor-pointer bg-neutral-100 border border-neutral-300 rounded-xl text-neutral-600  p-3"
        >
          <motion.div 
         
          className="flex items-center gap-5  ">
            <motion.div layoutId={`i-${i.songName}`}>
               <Image
              className="rounded-md h-15 w-15"
              src={i.src}
              alt={i.src}
              width={1000}
              height={1000}
            ></Image>
            </motion.div>
           
            <div >
              <motion.h1
              layoutId={`itm-${i.description}`}
              className="font-semibold text-md text-neutral-600 tracking-tight">
                {i.songName}
              </motion.h1>
              <motion.h1 
              layoutId={`itm-${i.artistName}`}
              className="text-sm font-medium text-neutral-500">
                {i.artistName}
              </motion.h1>
            </div>
          </motion.div>
          <motion.button 
         
          className="py-1 px-5 text-sm rounded-md text-neutral-50 bg-green-600 ">
            Play
          </motion.button>
        </motion.div>
      ))}
      {itm && <div onClick={()=>setId(null)} className="h-screen w-full z-10 bg-black/30 backdrop-blur-sm absolute inset-0 m-auto cursor-pointer"></div>}
      {itm && (
        <motion.div 
         initial={{opacity :0}}
        animate={{
          opacity :1
        }}
        transition={{
          ease : "easeInOut"
        }}
       layoutId={`card-${itm.src}`}
        className="cursor-pointer absolute m-auto inset-0 p-4 z-10 border overflow-hidden border-neutral-400 bg-neutral-50 shadow-sm h-150 rounded-lg w-100 ">
          <motion.div 
          transition={{
            ease : "easeInOut"
          }}
          layoutId={`i-${itm.songName}`}>
             <Image
            src={itm.src}
            alt={itm.src}
            height={1000}
            width={1000}
            className="rounded-xl h-60 w-85 m-auto"
          ></Image>
          </motion.div>
         
          <div className="p-4 flex justify-between items-center">
            <div >
              <motion.h1
                transition={{
          ease : "easeInOut"
        }}
              layoutId={`itm-${itm.description}`}
              className="text-md font-semibold tracking-tight text-neutral-700">
                {itm.songName}
              </motion.h1>
              <motion.h1 
                transition={{
          ease : "easeInOut"
        }}
              layoutId={`itm-${itm.artistName}`}
              className="text-sm font-medium text-neutral-400 ">
                {itm.artistName}
              </motion.h1>
            </div>
            <motion.button 
           
            className="py-1 px-5 text-sm rounded-md text-neutral-50 bg-green-600 ">Play</motion.button>
          </div>
          <div className="overflow-y-auto h-62 mask-b-from-80%">
            <motion.p 
            initial={{
              opacity:0,
              filter:"blur(5px)"
            }}
            animate={{
              opacity:1,
              filter:"blur(0px)"
            }}
            transition={{
              duration : 0.5,
              ease : "easeInOut"
            }}
            className="p-4 text-sm text-neutral-500 ">{itm.description}</motion.p>
          </div>
          
        </motion.div>
      )}
    </div>
  );
}
