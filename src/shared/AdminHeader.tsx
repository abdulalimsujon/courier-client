"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";
import { IoMenuOutline } from "react-icons/io5";
import { LuBellRing } from "react-icons/lu";

// Array of icons for mapping
const icons = [CiSearch, AiOutlineMail, LuBellRing];

const MenuDropdown = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Menu Button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-[36px] h-[36px] md:w-[40px] md:h-[40px] flex items-center justify-center"
      >
        <IoMenuOutline className="text-[24px]" />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-[160px] bg-white shadow-lg rounded-lg border border-gray-200 py-2 z-50">
          <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
            Profile
          </button>
          <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="lg:hidden relative" ref={menuRef}>
      <button
        onClick={() => setOpen(!open)}
        className="w-[36px] h-[36px] flex items-center justify-center"
      >
        <IoMenuOutline className="text-[24px]" />
      </button>
      {open && (
        <div className="absolute right-0 top-full mt-2 w-[180px] bg-white shadow-lg rounded-lg border border-gray-200 py-2 z-50 flex flex-col gap-2">
          <Link href="/" className="px-4 py-2 hover:bg-gray-100">
            Dashboard
          </Link>
          <Link href="/" className="px-4 py-2 hover:bg-gray-100">
            Order & Delivery
          </Link>
          <Link href="/" className="px-4 py-2 hover:bg-gray-100">
            Delivery Management
          </Link>
        </div>
      )}
    </div>
  );
};

const AdminHeader = () => {
  return (
    <div className="w-full">
      <div className="bg-white mx-auto max-w-[1200px] p-4 md:p-[24px] rounded-[12px] flex justify-between items-center">
        {/* Logo */}
        <div className="w-[75px] h-[40px]">
          <Image src="/images/logo.svg" width={75} height={40} alt="Logo" />
        </div>

        {/* Middle Nav (hidden on mobile, visible on lg) */}
        <div className="hidden lg:flex max-w-[504px] gap-[24px] font-dm-sans font-normal text-[20px] items-center">
          <Link href="/">Dashboard</Link>
          <Link href="/">Order & Delivery</Link>
          <Link href="/">Delivery Management</Link>
        </div>

        {/* End Icons */}
        <div className="flex items-center gap-2 md:gap-[16px]">
          {icons.map((Icon, index) => (
            <div
              key={index}
              className="w-[36px] h-[36px] md:w-[40px] md:h-[40px] flex items-center justify-center"
            >
              <Icon className="text-[20px]" />
            </div>
          ))}

          {/* Desktop Menu Dropdown */}
          <div className="hidden lg:block">
            <MenuDropdown />
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
