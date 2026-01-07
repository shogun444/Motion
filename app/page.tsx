import Image from "next/image";
import Scroll from "./components/ScrollComponent";
import Button from "./components/Button";
import HoverAnimations from "./components/HoverandExit";
import Dashboard from "./components/Dashboard";
import Parallax from "./components/parallax";
import Layout from "./components/layout";


export default function Home() {
  return (
    <>
      <div
        //  style={{
        //   backgroundImage : `radial-gradient(circle at 0.5px 0.5px , rgba(255,255,255,0.2) 1px,transparent 0 )`,
        //   backgroundSize : "8px 8px",
        //   backgroundRepeat : "repeat"
        //  }}
        className="w-full h-screen flex-col justify-center items-center p-5 mx-auto bg-neutral-200"
      >
        {/* <Scroll/> */}
        {/* <Button/> */}
        {/* <HoverAnimations/> */}
        {/* <Dashboard/> */}
        {/* <Parallax/> */}
        <Layout/>
      </div>
    </>
  );
}
