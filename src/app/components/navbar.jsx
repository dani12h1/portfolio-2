"use client";

import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="w-full top-0 left-0 right-0  container mx-auto text-xl">
        <nav className={`py-4 bg-[#F6F3E9]`}>
          <div className="flex items-center justify-between">
            <div className="text-black font-bold text-[1.5rem] cursor-pointer">
              <Link href="/">DANIEL NYGAARD</Link>
            </div>

            {/* for larger device */}
            <div className="lg:flex items-center gap-3 hidden text-body">
              <a href="/about" className="block text-black hover:text-gray-400 py-2 px-4 cursor-pointer">
                About me
              </a>
              <a href="/project" className="block text-black hover:text-gray-400 py-2 px-4 cursor-pointer">
                Projects
              </a>
              <a href="https://www.linkedin.com/in/danielnygaardc/" className="block py-2 px-4 cursor-pointer text-black hover:text-gray-400">
                Linkedin
              </a>
            </div>

            {/* btn for small devices */}
            <button onClick={toggleMenu} className="lg:hidden text-black text-4xl">
              {isMenuOpen ? <IoMdClose /> : <HiMenu />}
            </button>
          </div>

          {/* Mobile menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div className="fixed top-0 left-0 bottom-0 w-3/4 md:w-2/4 md:text-4xl bg-black z-50 overflow-y-auto" initial={{ x: "-100%" }} animate={{ x: 0 }} exit={{ x: "-100%" }} transition={{ duration: 0.3, ease: "easeInOut" }}>
                <div className="h-full flex flex-col justify-center">
                  <a className="block py-2 px-4 cursor-pointer text-white">About me</a>
                  <a href="/project" className="block text-white py-2 px-4 cursor-pointer">
                    Projects
                  </a>
                  <a href="https://www.linkedin.com/in/danielnygaardc/" className="block py-2 px-4 cursor-pointer text-white">
                    Linkedin
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
