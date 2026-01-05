import Image from "next/image";
import Scroll from "./components/ScrollComponent";
import Button from "./components/Button";
import HoverAnimations from "./components/HoverandExit";

export default function Home() {
  return (
    <><div
      //  style={{
      //   backgroundImage : `radial-gradient(circle at 0.5px 0.5px , rgba(255,255,255,0.2) 1px,transparent 0 )`,
      //   backgroundSize : "8px 8px",
      //   backgroundRepeat : "repeat"
      //  }}
    className="h-screen w-full mx-auto bg-neutral-50 flex justify-center items-center">
      {/* <Scroll/> */}
      {/* <Button/> */}
      <HoverAnimations/>
      </div></>
  );
}
