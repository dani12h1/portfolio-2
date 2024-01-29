"use client";
import Image from "next/image";
import Mig from "../assets/mig.png";
import { motion } from "framer-motion";
import React from "react";

function HeroSection() {
  return (
    <>
      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }} className="flex flex-col lg:flex-row h-screen bg-hvid text-black container mx-auto mt-16 lg:mt-0">
        <div className="lg:flex lg:flex-col block justify-center text-center   p-8 order-2 lg:order-1 ">
          <h2 className="text-7xl">Hello! I’m Daniel</h2>
          <motion.h1 initial={{ opacity: 0, y: -180 }} animate={{ opacity: 1, y: 0 }} transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }} className="text-black font-thin  lg:text-4xl text-2xl lg:text-left">
            developer and multimediadesigner
          </motion.h1>

          <div className=" lg:pt-6 lg:order-2 text-center lg:text-left pt-6">
            <button className="px-4 py-2 bg-[#6366F1] hover:bg-[#6366F4] border text-white rounded hover:bg-primary hover:text-black transition-all duration-300 ">Contact</button>
          </div>
        </div>
        {/* <div className="flex justify-center items-center lg:w-1/2 p-8 order-1 lg:order-3">
          <Image src={Mig} width={500} height={500} alt="mig" />
        </div> */}
      </motion.section>
    </>
  );
}

export default HeroSection;
