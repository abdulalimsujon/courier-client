"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-100 shadow-md z-50">
      <div className="lg:w-[1200px] lg:h-[90px] mx-auto flex justify-between items-center   py-4 lg:py-[15px] ">
        {/* Logo */}
        <div className="w-[112px] h-[60px] flex-shrink-0">
          <Image src="/images/logo.svg" width={112} height={60} alt="Logo" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex w-[786px] h-[50px] justify-between items-center">
          {/* Nav Links */}
          <div className="flex gap-6 text-[#EF6820]">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative w-[80px] h-[28px] flex items-center justify-center group text-[20px]"
              >
                {link.label}
                {/* Hover underline div */}
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#EF6820] transition-all duration-300 group-hover:w-full"></div>
              </Link>
            ))}
          </div>

          {/* Buttons */}
          <div className="w-[270px] h-[52px] flex gap-[12px]">
            {/* Desktop Login Button */}
            <Link
              href="/login"
              className="relative w-[130px] h-[52px] flex items-center justify-center gap-[10px] px-[32px] py-[12px] rounded-[8px] border border-[#EF6820] overflow-hidden group"
            >
              <span className="relative z-10 text-[#EF6820] group-hover:text-white transition-colors duration-300 text-[18px]">
                Login
              </span>
              <div className="absolute inset-0 bg-[#EF6820] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 z-0"></div>
            </Link>

            {/* Sign Up Button */}
            <Link
              href="/signup"
              className="w-[128px] h-[52px] flex items-center justify-center gap-[10px] px-[32px] py-[12px] rounded-[8px] text-white bg-[#EF6820] hover:bg-[#d95c1d] transition-colors duration-300 text-[18px]"
            >
              Sign Up
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden flex items-center justify-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-gray-50 px-6 py-4 flex flex-col gap-4 shadow-md">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative py-2 border-b border-gray-200 group text-[20px]"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#EF6820] transition-all duration-300 group-hover:w-full"></div>
            </Link>
          ))}

          <div className="flex flex-col gap-3 mt-4">
            {/* Mobile Login Button */}
            <Link
              href="/login"
              className="relative w-full h-[52px] flex items-center justify-center gap-[10px] px-[32px] py-[12px] rounded-[8px] border border-[#EF6820] overflow-hidden group"
              onClick={() => setIsOpen(false)}
            >
              <span className="relative z-10 text-[#EF6820] group-hover:text-white transition-colors duration-300 text-[18px]">
                Login
              </span>
              <div className="absolute inset-0 bg-[#EF6820] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 z-0"></div>
            </Link>

            {/* Mobile Sign Up Button */}
            <Link
              href="/signup"
              className="w-full text-center px-6 py-2 rounded-lg text-white bg-[#EF6820] hover:bg-[#d95c1d] transition-colors text-[18px]"
              onClick={() => setIsOpen(false)}
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
