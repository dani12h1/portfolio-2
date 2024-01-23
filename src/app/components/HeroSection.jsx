"use client";
import Image from "next/image";
import Mig from "../assets/mig.png";
import { motion } from "framer-motion";
import React from "react";

function HeroSection() {
  return (
    <>
      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }} className="flex h-screen bg-hvid text-black container mx-auto">
        <div className=" flex flex-col justify-center items-start lg:w-1/2 p-8">
          <h1 className="text-black font-bold lg:text-4xl text:1xl">
            DEVELOPER & <br></br> MULTIMEDIA DESIGNER
          </h1>
          <div className="pt-6 text-xl">
            <button className="px-4 py-2 bg-[#6366F1] hover:bg-[#6366F4] border text-white rounded hover:bg-primary hover:text-black transition-all duration-300">Contact</button>
          </div>
        </div>
        <motion.div initial={{ opacity: 0, y: -180 }} animate={{ opacity: 1, y: 0 }} transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }} className="flex justify-center items-center lg:w-1/2 p-8">
          <Image src={Mig} width={500} height={500} alt="mig" />
        </motion.div>
      </motion.section>
    </>
  );
}

export default HeroSection;
