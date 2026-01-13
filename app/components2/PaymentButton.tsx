"use client";
import { easeInOut, motion, useAnimate } from "motion/react";
export default function PaymentButton() {
  const [scope, animate] = useAnimate();
  async function start() {
    animate(
      ".fight",
      { width: 63, borderRadius: "999px" },
      {
        ease: "easeInOut",
      }
    );
    await animate("span", { opacity: 0 }, { ease: easeInOut, duration: 0.1 });

    animate(
      ".fight",
      {
        scale: [1, 0.8, 1],
        backgroundImage: "linear-gradient(green)",
      },
      { ease: "easeInOut" }
    );
    animate(
      ".check-svg",
      {
        opacity: 1,
      },
      {
        ease: "easeInOut",
      }
    );
    animate(".path",{pathLength:1},{type : "tween"})
  }
  return (
    <div ref={scope}>
      <motion.button
        onClick={start}
        className="fight h-15 w-70 cursor-pointer rounded-md bg-linear-to-r from-neutral-700 to-neutral-800"
      >
        <motion.span className="text-neutral-50 font-semibold">
          PayNow ($110)
        </motion.span>
      </motion.button>
      <motion.svg
        initial={{
          opacity: 0,
        }}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="check-svg absolute m-auto inset-0 size-8"
      >
        <motion.path className="path text-neutral-200 "
          initial={{
            pathLength: 0,
          }}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m4.5 12.75 6 6 9-13.5"
        />
      </motion.svg>
    </div>
  );
}
