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
    <div className="flex justify-center ">
      <motion.div className="relative overflow-hidden" style={{ height: "15px", width: "215px" }} onMouseEnter={handleHover} onMouseLeave={handleHover}>
        <motion.p initial={{ y: "100%" }} animate={isHovered ? { y: -35 } : { y: "0%" }} transition={{ duration: 0.3 }} className="absolute inset-0 flex cursor-pointer z-10 text-sm">
          HOGWARTS STUDENT LIST
        </motion.p>
        <motion.p initial={{ y: "100%" }} animate={isHovered ? { y: 0 } : { y: "100%" }} transition={{ duration: 0.3 }} className="absolute inset-0 flex cursor-pointer z-0 text-sm">
          VIEW PROJECT
        </motion.p>
      </motion.div>
    </div>
  );
};

export default TextAnimation;
