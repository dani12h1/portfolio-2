"use client";

import React from "react";
import Typewriter from "./typewriter";

function HeroSection() {
  return (
    <>
      <section className="bg-bkg text-content container mx-auto mb-24 flex flex-col lg:flex-row items-center justify-center mt-22 h-[75vh] gap-14">
        <div className=" lg:order-1 text-center ">
          <Typewriter />
        </div>
      </section>
    </>
  );
}

export default HeroSection;
