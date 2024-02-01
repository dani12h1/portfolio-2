"use client";
import Image from "next/image";
import dev from "../assets/developer.svg";
import { motion } from "framer-motion";
import React from "react";

function HeroSection() {
  return (
    <>
      <section className="bg-bg text-content container mx-auto mb-24 flex flex-col lg:flex-row items-center justify-center mt-28 h-[75vh] gap-14">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }} className="order-1 lg:order-2">
          <Image className="lg:w-96 lg:h-auto" src={dev} alt="dev" />
        </motion.div>
        <div className=" lg:order-1 text-center lg:text-left">
          <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }} className="text-4xl pb-2">
            Hello! I’m Daniel
          </motion.h1>
          <motion.h2 initial={{ opacity: 0, y: -180 }} animate={{ opacity: 1, y: 0 }} transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }} className="text-content font-thin lg:text-3xl text-2xl lg:text-left">
            a developer and multimediadesigner
          </motion.h2>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
