"use client";
import Image from "next/image";
import dev from "../assets/developer.svg";
import { motion } from "framer-motion";
import React from "react";

function HeroSection() {
  return (
    <>
      <section className="bg-bkg text-content container mx-auto mb-24 flex flex-col lg:flex-row items-center justify-center mt-28 h-[75vh] gap-14">
        <div className=" lg:order-1 text-center ">
          <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }} className="text-4xl pb-2">
            Hello! I’m Daniel
          </motion.h1>
          <motion.h2 initial={{ opacity: 0, y: -180 }} animate={{ opacity: 1, y: 0 }} transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }} className="text-content font-thin lg:text-3xl text-2xl ">
            a developer and multimediadesigner
          </motion.h2>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
