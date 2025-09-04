import Image from "next/image";
import Link from "next/link";
import React from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About us" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
  { href: "/track order", label: "Track order" },
];

const Footer = () => {
  return (
    <div className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[120px] py-[80px] grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px]">
        {/* first */}
        <div className="flex flex-col gap-4">
          <div className="h-[60px] flex items-center justify-start relative">
            <Image src="/images/logo.png" alt="Logo" width={60} height={112} />
          </div>
          <p className="text-gray-600 text-[16px] leading-[22px]">
            Fast, reliable courier services for all your delivery need.
          </p>
        </div>

        {/* second */}
        <div className="flex flex-col">
          <p className="font-semibold text-[20px] leading-[22px] mb-3">
            Quick links
          </p>
          <div className="flex flex-col gap-[8px]">
            {navLinks.map((l, index) => (
              <Link key={index} href={l.href} className="text-[18px]">
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        {/* third */}
        <div className="flex flex-col">
          <p className="font-semibold text-[20px] leading-[22px] mb-3">
            Contact us
          </p>
          <div className="flex flex-col gap-[16px] text-[18px] leading-[160%]">
            <p>1901 Thornridge Cir. Shiloh, Hawaii 81063</p>
            <p>felicia.reid@example.com</p>
            <p>(319) 555-0115</p>
          </div>
        </div>

        {/* fourth */}
        <div className="flex flex-col gap-[24px]">
          <p className="font-semibold text-[20px] leading-[22px] text-center text-[#414651]">
            Payment methods
          </p>
          <p className="text-[18px] leading-[160%]">
            We accept all major credit cards & payment methods.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
