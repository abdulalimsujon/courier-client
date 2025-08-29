import React from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

const Header = () => {
  return (
    <div>
      <div className="w-full h-full bg-[#FFFFFF] flex justify-center items-center text-[#EF6820]">
        <div className="w-[1440px] h-[90px] flex justify-between pt-[15px] pr-[120px] pb-[15px] pl-[120px] opacity-100">
          {/* Logo */}
          <div className="w-[112px] h-[60px] my-auto relative">
            <Image
              src="/images/logo.png"
              alt="Logo"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Navigation + Buttons */}
          <div className="w-[786px] h-[50px] flex justify-between">
            {/* Nav Links */}
            <div className="flex justify-between my-auto gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="w-[80px] h-[28px] flex items-center justify-center"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Buttons */}
            <div className="w-[270px] h-[52px] flex gap-[12px]">
              <Link
                href="/login"
                className="w-[130px] h-[52px] flex items-center justify-center gap-[10px] px-[32px] py-[12px] rounded-[8px] border border-solid opacity-100"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="w-[128px] h-[52px] flex items-center justify-center gap-[10px] px-[32px] py-[12px] rounded-[8px] opacity-100 text-[#ffffff] bg-[#EF6820]"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
