"use client";

import React, { useState, useEffect } from "react";
import { HiMenu } from "react-icons/hi";
import Clock from "react-live-clock";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="w-full fixed top-0 left-0 right-0  container mx-auto text-xl ">
        <nav className={`py-4  bg-white ${isSticky ? "sticky top-0 right-0 left-0 bg-white " : ""}`}>
          <div className="flex items-center justify-between">
            <div className="text-black font-bold text-lg cursor-pointer">
              {/* <Image src={logo} alt="" className="h-10" /> */}
              <h2>
                Daniel<br></br>Nygaard
              </h2>
            </div>

            {/* for larger device */}
            <div className="lg:flex items-center gap-3 hidden text-body">
              <a className="block text-black  hover:text-gray-400 py-2 px-4 cursor-pointer">About me</a>
              <a href="https://www.linkedin.com/in/danielnygaardc/" className="block py-2 px-4 cursor-pointer text-black">
                Linkedin
              </a>
            </div>

            {/* contact me btn */}
            <div className="lg:block hidden">
              <button className="px-4 py-2 bg-[#6366F1] hover:bg-[#6366F4] border text-white rounded hover:bg-primary hover:text-black transition-all duration-300">Theme</button>
            </div>

            {/* btn for small devices */}
            <button onClick={toggleMenu} className="lg:hidden text-black text-3xl">
              <HiMenu />
            </button>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="mt-4 bg-body p-4 rounded-lg text-black">
              <a className="block py-2 px-4 cursor-pointer text-black">About me</a>
              <a href="https://www.linkedin.com/in/danielnygaardc/" className="block py-2 px-4 cursor-pointer text-black">
                Linkedin
              </a>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

export default Navbar;
