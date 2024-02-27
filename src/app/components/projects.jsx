"use client";

import React, { useState } from "react";
import Image from "next/image";
import ciff from "../assets/ciff3.png";
import edc from "../assets/edc.png";
import dashboard from "../assets/dashboard.png";
import test from "../assets/hogwarts.png";
import { motion } from "framer-motion";
import AnimationEffect from "./AnimationEffect";

function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null);

  const handleHover = (index) => {
    setHoveredProject(index);
  };

  const handleMouseLeave = () => {
    setHoveredProject(null);
  };

  return (
    <>
      <h2 className="font-bold mx-auto pb-4 container">PROJECTS</h2>
      <AnimationEffect delay={0.2}>
        <motion.section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 gap-5 container mx-auto mb-10">
          {[
            { href: "/projects/1", image: test, text: "HOGWARTS STUDENT LIST" },
            { href: "/projects/3", image: ciff, text: "CIFF" },
            { href: "/projects/2", image: edc, text: "EDC - FIND A BUYER" },
            { href: "/projects/4", image: dashboard, text: "CIFF DASHBOARD" },
          ].map((project, index) => (
            <a key={index} href={project.href} className=" mx-auto" onMouseEnter={() => handleHover(index)} onMouseLeave={handleMouseLeave}>
              <motion.section className="relative overflow-hidden" style={{ height: "15px", width: "180px" }}>
                <motion.p initial={{ y: "100%" }} animate={hoveredProject === index ? { y: -35 } : { y: "0%" }} transition={{ duration: 0.3 }} className="absolute inset-0 flex cursor-pointer z-10 text-sm">
                  {project.text}
                </motion.p>
                <motion.p initial={{ y: "100%" }} animate={hoveredProject === index ? { y: 0 } : { y: "100%" }} transition={{ duration: 0.3 }} className="absolute inset-0 flex cursor-pointer z-0 text-sm">
                  VIEW PROJECT
                </motion.p>
              </motion.section>
              <Image className="object-cover mx-auto pt-4 hover:shadow-xl h-62" src={project.image} alt="projects" />
            </a>
          ))}
        </motion.section>
      </AnimationEffect>
    </>
  );
}

export default Projects;
