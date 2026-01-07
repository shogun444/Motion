"use client";
import Image from "next/image";
import {
  motion,
  useMotionTemplate,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef, useState } from "react";
export default function Scroll() {
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
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const bgs = ["#212529", "#333d29", "#252422", "#1b263b"];
  const [bg, setbg] = useState(bgs[0]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const value = Math.floor(latest * bgs.length - 2);
    console.log(value);
    setbg(bgs[value]);
  });

  return (
    <>
      {/* <div className=" w-full h-[300vh] py-10 text-center">
    <span className="font-semibold text-3xl">Unleash the power 
      <br />of scroll animations.
    </span>
    <div className="w-2/3 rounded-2xl bg-violet-50 h-155 -mt-1 p-1 shadow-3xl mx-auto">
    <div className="w-full h-full rounded-2xl bg-neutral-50">
      <Image className="h-full w-full rounded-2xl" src={'/scroll.avif'} alt="Scroll" height={500}  width={500}></Image>
      </div> </div>
  </div> */}
      <motion.div ref={containerRef} className="h-screen w-full">
        {Card.map((itm) => (
          <motion.div
            transition={{ ease: "easeInOut", duration: 0.5 }}
            animate={{
              backgroundColor: bg,
            }}
            key={itm.id}
          >
            <Cards jpeg={itm.jpeg} text={itm.text} head={itm.head} />
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}

function Cards({ head, text, jpeg }: any) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5, 0.8], [0, 1, 0]);
  const translate = useTransform(scrollYProgress, [0, 0.9], [300, -300]);
  const Imagetranslate = useTransform(scrollYProgress, [0, 0.7], [700, -300]);
  const blur = useTransform(scrollYProgress, [0.55, 1], [0, 10]);
  return (
    <div
      ref={ref}
      className="h-screen w-full  flex justify-center items-center"
    >
      <motion.div
        style={{
          opacity,
          y: translate,
          filter: useMotionTemplate`blur(${blur}px)`,
        }}
        className="flex flex-col w-80"
      >
        <h1 className="font-semibold text-3xl text-neutral-200 m-1">{head}</h1>
        <h1 className="font-semibold text-sm text-neutral-400 m-1">{text}</h1>
      </motion.div>
      <motion.div
        style={{
          opacity,
          y: Imagetranslate,
        }}
      >
        <Image
          className="rounded-md h-80 w-70"
          src={jpeg}
          alt={jpeg}
          width={720}
          height={1080}
        ></Image>
      </motion.div>
    </div>
  );
}
