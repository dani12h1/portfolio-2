"use client";

import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import Link from "next/link";

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
            <div className="text-black font-bold text-lg cursor-pointer">
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
