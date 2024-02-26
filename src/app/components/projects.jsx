"use client";

import React from "react";
import Image from "next/image";
import ciff from "../assets/ciff3.png";
import edc from "../assets/edc.png";
import dashboard from "../assets/dashboard.png";
import test from "../assets/hogwarts.png";
import { motion } from "framer-motion";
import AnimationEffect from "./AnimationEffect";
import { useState } from "react";
import Test from "./test";

function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(-1);
  };

  const projectText = (index, defaultText) => {
    return index === hoveredIndex ? "VIEW PROJECT" : defaultText;
  };

  return (
    <>
      <h2 className="font-bold mx-auto pb-4 container">PROJECTS</h2>
      <AnimationEffect delay={0.2}>
        <motion.section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 gap-5 container mx-auto mb-10">
          <a href="/projects/1" className=" mx-auto" onMouseEnter={() => handleMouseEnter(0)} onMouseLeave={handleMouseLeave}>
            <motion.p className="py-3 text-sm">{projectText(0, "HOGWARTS STUDENT LIST")}</motion.p>
            <Image className=" object-cover  mx-auto" src={test} width={500} height={500} alt="Picture of workers" />
          </a>
          <a href="/projects/3" className=" mx-auto" onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={handleMouseLeave}>
            <p className="py-3 text-sm"> {projectText(1, "CIFF")}</p>
            <Image className="object-cover " src={ciff} width={500} height={500} alt="Picture of workers" />
          </a>
          <a href="/projects/2" className="mx-auto" onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={handleMouseLeave}>
            <p className="py-3 text-sm">{projectText(2, "EDC - FIND A BUYER")}</p>
            <Image className="object-cover  " src={edc} width={500} height={500} alt="Picture of workers" />
          </a>
          <a href="/projects/4" className=" mx-auto" onMouseEnter={() => handleMouseEnter(3)} onMouseLeave={handleMouseLeave}>
            <p className="py-3 text-sm">{projectText(3, "DASHBOARD CIFF")}</p>
            <Image className="object-cover " src={dashboard} width={500} height={500} alt="Picture of workers" />
          </a>
        </motion.section>
      </AnimationEffect>
      <Test />
    </>
  );
}

export default Projects;
