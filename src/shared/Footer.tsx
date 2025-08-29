import Image from "next/image";
import Link from "next/link";
import React from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About us" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
  { href: "/track order", label: "track order" },
];

const Footer = () => {
  return (
    <div className="w-full h-full">
      <div className="lg:w-[1440px] md:max-w-[1440px] lg:h-[389px] md:max-[389px] pt-[80px] pr-[120px] pb-[80px] pl-[120px] gap-[24px] opacity-100 flex  ">
        <div className="w-[384px] h-[142px]">
          <div className="w-full h-[60px] flex items-center justify-start relative">
            <Image src="/images/logo.png" alt="Logo" width={60} height={112} />
          </div>

          <div className="w-full h-[84px]">
            <p>Fast, reliable courier services for all your delivery need.</p>
          </div>
        </div>
        <div className="w-[180px] h-[223px] px-[24px] gap-[24px] opacity-100">
          <div className="flex flex-col  ">
            <div className="w-[132px] h-[22px] mb-3  ">
              <p className="font-[600] text-[20px] leading-[22px] align-middle  ">
                Quick links
              </p>
            </div>
            <div className="flex flex-col gap-[8px]">
              {navLinks.map((l, index) => (
                <Link key={index} href={l.href} className="w-[132px] h-[29px]">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="w-[282px] h-[223px] px-[24px] gap-[24px] opacity-100 ">
          <div className="w-[234px] h-[22px] mb-3">
            <p className="font-semibold text-[20px] leading-[22px] align-middle">
              Contact us
            </p>
          </div>
          <div className="w-[234px] h-[177px] flex flex-col gap-[16px] opacity-100">
            <div className="">
              <p className=" font-normal text-[18px] leading-[160%] align-middle">
                1901 Thornridge Cir. Shiloh, Hawaii 81063
              </p>
            </div>
            <div className="w-[234px] h-[29px] flex items-center gap-[16px] opacity-100">
              <p className="font-['DM_Sans'] font-normal text-[18px] leading-[160%] align-middle">
                felicia.reid@example.com
              </p>
            </div>
            <div className="w-[234px] h-[29px] flex items-center gap-[16px] opacity-100">
              <p className="font-['DM_Sans'] font-normal text-[18px] leading-[160%] align-middle">
                (319) 555-0115
              </p>
            </div>
          </div>
        </div>

        <div className="w-[282px] h-[166px] px-[24px] flex flex-col gap-[24px] opacity-100">
          <p className="font-semibold text-[20px] leading-[22px] text-center align-middle text-[#414651]">
            Payment methods
          </p>
          <div className="w-[234px] h-[120px]">
            <p className=" font-normal text-[18px] leading-[160%] align-middle">
              We accept all major credit cards & payment methods.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
