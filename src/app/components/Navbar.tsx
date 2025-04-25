"use client"; // Add this line to make it a client component

import Link from "next/link";
import Image from "next/image";
import { FC, useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaBars, FaTimes } from "react-icons/fa";

const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Navbar container with fixed positioning */}
      <nav
        className="flex justify-between items-center h-[90px] px-6 lg:px-[280px] fixed top-0 left-0 w-full z-50"
        style={{ backgroundColor: "#567C8D" }} // Navbar background color
      >
        {/* Logo Section */}
        <div className="flex items-center">
          <Link href="/home">
            <div className="relative w-[70px] h-[70px] cursor-pointer group">
              <Image
                src="/images/1.png" // Path to your logo image
                alt="Logo"
                layout="fill"
                objectFit="cover"
                className="rounded-full transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0  opacity-0 group-hover:opacity-50 rounded-full transition-opacity duration-300"></div>
            </div>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white text-3xl focus:outline-none z-20">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`${
            isOpen ? 'flex' : 'hidden'
          } lg:flex flex-col lg:flex-row lg:items-center gap-5 text-white text-xl bg-[#567C8D] lg:bg-transparent absolute lg:relative top-20 lg:top-0 left-0 lg:left-auto w-full lg:w-auto p-5 lg:p-0 z-50`}
          style={{ fontFamily: '"Mona Sans", "Helvetica Neue", Helvetica, Arial, sans-serif' }}
        >
          <Link href="#" className="hover:text-[#88B0C5] transition-colors duration-300">
            Home
          </Link>
          <Link href="#about" className="hover:text-[#88B0C5] transition-colors duration-300">
            About
          </Link>
          <Link href="#skills" className="hover:text-[#88B0C5] transition-colors duration-300">
            Skills
          </Link>
          <Link href="#projects" className="hover:text-[#88B0C5] transition-colors duration-300">
            Project
          </Link>
          <Link href="#Contact" className="hover:text-[#88B0C5] transition-colors duration-300">
            Contact
          </Link>
        </div>

        {/* Social Icons */}
        <div className="hidden lg:flex gap-5 text-white pr-[10px] z-50">
          <Link href="https://github.com/A-Rehman-arain" target="_blank" className="hover:text-[#88B0C5] transition-colors duration-300">
            <FaGithub className="text-3xl" />
          </Link>
          <Link href="https://www.linkedin.com/in/abdul-rehman-b4ab90329?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className="hover:text-[#88B0C5] transition-colors duration-300">
            <FaLinkedin className="text-3xl" />
          </Link>
          <Link href="https://www.instagram.com/abdu1rehman1/" target="_blank" className="hover:text-[#88B0C5] transition-colors duration-300">
            <FaInstagram className="text-3xl" />
          </Link>
          <Link href="https://www.facebook.com/share/1BzSnVUGZp/" target="_blank" className="hover:text-[#88B0C5] transition-colors duration-300">
            <FaFacebook className="text-3xl" />
          </Link>
        </div>
      </nav>

      {/* Offset content to ensure navbar doesn't overlap */}
      <div className="pt-[90px]">
        {/* Page content goes here */}
      </div>
    </div>
  );
};

export default Navbar;
