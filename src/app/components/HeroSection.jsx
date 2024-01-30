"use client";
import Image from "next/image";
import Mig from "../assets/mig.png";
import { motion } from "framer-motion";
import React from "react";

function HeroSection() {
  return (
    <>
      <section className="flex flex-col lg:flex-row h-screen bg-hvid text-black container mx-auto mt-16 lg:mt-0">
        <div className="lg:flex lg:flex-col block justify-center   p-8 order-2 lg:order-1 ">
          <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }} className="text-7xl font-extrabold">
            Hello! I’m Daniel
          </motion.h1>
          <motion.h2 initial={{ opacity: 0, y: -180 }} animate={{ opacity: 1, y: 0 }} transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }} className="text-black font-thin  lg:text-6xl text-2xl lg:text-left">
            a developer and multimediadesigner
          </motion.h2>

          {/* <div className=" lg:pt-6 lg:order-2 text-center lg:text-left pt-6">
            <button className="px-4 py-2 bg-[#6366F1] hover:bg-[#5256c8] border text-white text-2xl rounded hover:bg-primary transition-all duration-300 ">Contact</button>
          </div> */}
        </div>
      </section>
    </>
  );
}

export default HeroSection;
