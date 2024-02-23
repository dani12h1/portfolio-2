"use client";

import React from "react";
import Image from "next/image";
import ciff from "../assets/ciff3.png";
import edc from "../assets/edc.png";
import dashboard from "../assets/dashboard.png";
import test from "../assets/hogwarts.png";
import { motion } from "framer-motion";
import AnimationEffect from "./AnimationEffect";

function projects() {
  return (
    <>
      <h2 className="font-bold mx-auto pb-4 container">PROJECTS</h2>
      <AnimationEffect delay={0.2}>
        <motion.section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 gap-5 container mx-auto mb-10">
          <a href="/projects/1" className=" mx-auto">
            <p className="py-3 text-sm">1 / HOGWARTS STUDENT LIST</p>
            <Image className=" object-cover  mx-auto" src={test} width={500} height={500} alt="Picture of workers" />
          </a>
          <a href="/projects/3" className=" mx-auto">
            <p className="py-3 text-sm">2 / CIFF</p>
            <Image className="object-cover " src={ciff} width={500} height={500} alt="Picture of workers" />
          </a>
          <a href="/projects/2" className="mx-auto">
            <p className="py-3 text-sm">3 / EDC - FIND A BUYER</p>
            <Image className="object-cover  " src={edc} width={500} height={500} alt="Picture of workers" />
          </a>
          <a href="/projects/4" className=" mx-auto">
            <p className="py-3 text-sm">4 / DASHBOARD CIFF</p>
            <Image className="object-cover " src={dashboard} width={500} height={500} alt="Picture of workers" />
          </a>
        </motion.section>
      </AnimationEffect>
    </>
  );
}

export default projects;
