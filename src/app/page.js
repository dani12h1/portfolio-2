"use client";
import Navbar from "./components/navbar";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <>
      <body className="">
        {/* <motion.div animate={{ y: [-200, 0] }} transition={{ duration: 1 }}> */}
        <Navbar />
        {/* </motion.div> */}
        <HeroSection />
      </body>
    </>
  );
}
