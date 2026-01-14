import Image from "next/image";
import Scroll from "./components/ScrollComponent";
import Button from "./components/Button";
import HoverAnimations from "./components/HoverandExit";
import Dashboard from "./components/Dashboard";
import Parallax from "./components/parallax";
import Layout from "./components/layout";
import Sequences from "./components/sequences";
import PayButton from "./components2/PayButton";

import Text from "./components2/text";
import PaymentButton from "./components2/PaymentButton";
import IphoneCards from "./components2/IphoneCards";
import Navbar from "./components2/navbar";


export default function Home() {
  return (
    <>
      <div
        //  style={{
        //   backgroundImage : `radial-gradient(circle at 0.5px 0.5px , rgba(255,255,255,0.2) 1px,transparent 0 )`,
        //   backgroundSize : "8px 8px",
        //   backgroundRepeat : "repeat"
        //  }}
        className="w-full h-screen flex justify-center items-center   m-auto bg-neutral-900"
      >
        {/* <Scroll/> */}
        {/* <Button/> */}
        {/* <HoverAnimations/> */}
        {/* <Dashboard/> */}
        {/* <Parallax/> */}
        {/* <Layout/> */}
        {/* <PayButton/>
        <Sequences/> */}
        {/* <AnimatedText/> */}
      {/* <Text/> */}
      {/* <PaymentButton/> */}
      {/* <IphoneCards/> */}
      <Navbar/>
      </div>
    </>
  );
}
