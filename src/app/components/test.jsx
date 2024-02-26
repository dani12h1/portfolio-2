"use client";
// src/TextAnimation.js
import React, { useState } from "react";
import { motion } from "framer-motion";

const TextAnimation = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div className="flex items-center justify-center h-screen ">
      <motion.div className="relative overflow-hidden pb-4" style={{ height: "50px", width: "1000px" }} onMouseEnter={handleHover} onMouseLeave={handleHover}>
        <motion.div initial={{ y: "100%" }} animate={isHovered ? { y: -40 } : { y: "0%" }} transition={{ duration: 0.3 }} className="absolute inset-0 flex items-center justify-center text-4xl cursor-pointer z-10">
          1 / HOGWARTS STUDENT LIST
        </motion.div>
        <motion.div initial={{ y: "100%" }} animate={isHovered ? { y: 0 } : { y: "100%" }} transition={{ duration: 0.3 }} className="absolute inset-0 flex items-center justify-center text-4xl cursor-pointer z-0">
          VIEW PROJECT
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TextAnimation;
