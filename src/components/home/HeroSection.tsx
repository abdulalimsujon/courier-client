import Image from "next/image";
import React from "react";
import heroimage from "../../assets/Home/heroImage.png";
import icon1 from "../../assets/Home/Group (1).png";
import icon2 from "../../assets/Home/Group (2).png";
import icon3 from "../../assets/Home/Group (3).png";
import icon4 from "../../assets/Home/image 7 (1).png";
import { StaticImageData } from "next/image";

const InfoCard = ({
  icon,
  title,
}: {
  icon: StaticImageData;
  title: string;
}) => {
  return (
    <div className="w-full md:mx-auto lg:max-w-[282px] h-auto rounded-[16px] flex justify-center items-center bg-[#FFFFFFBF] p-6">
      <div className="flex flex-col gap-6 items-center text-center">
        <Image src={icon} height={56} width={56} alt={title} />
        <p className="font-['Open_Sans'] font-semibold text-[20px] leading-[22px]">
          {title}
        </p>
      </div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="relative w-full mt-[90px] mx-auto ">
      {/* Hero Top */}
      <div className="max-w-[1200px] w-full mx-auto flex flex-col lg:flex-row items-center gap-10   lg:py-20">
        {/* Left Text */}
        <div className="flex justify-center items-center  flex-col gap-10 max-w-[588px] ">
          <div className="p-2 ">
            <div className="space-y-2">
              <h1 className="font-plus-jakarta-sans font-bold text-[40px] md:text-[56px] leading-tight">
                Fast & Reliable
              </h1>
              <h1 className="font-plus-jakarta-sans font-bold text-[40px] md:text-[56px] leading-tight text-white">
                Courier Service
              </h1>
            </div>
            <p className="text-white font-dm-sans text-[16px] md:text-[18px]">
              Safe, fast, and reliable deliveries—our platform connects you to
              the fastest routes and top-tier couriers.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#EF6820] text-white px-8 py-3 rounded-[8px] text-[16px] md:text-[18px]">
                Get Started
              </button>
              <button className="px-8 py-3 rounded-[8px] border border-[#EF6820] text-[16px] md:text-[18px]">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full max-w-[550px]">
          <Image
            className="mx-auto"
            src={heroimage}
            width={550}
            height={300}
            alt="Hero"
          />
        </div>
      </div>

      {/* Info Cards */}
      <div className="bg-[#F5F5F5]">
        <div className="z-[10] max-w-[1200px] mx-auto grid gap-6 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1   -translate-y-20">
          <InfoCard icon={icon1} title="Multiple Addresses" />
          <InfoCard icon={icon2} title="Fast Delivery" />
          <InfoCard icon={icon3} title="Secure Payment" />
          <InfoCard icon={icon4} title="24/7 Support" />
        </div>
        <div className="w-full flex justify-center items-center  md:px-0">
          <div className="flex flex-col md:flex-row w-full max-w-[1200px] bg-[#FFFFFF]  rounded-[12px] p-6 md:p-[24px] gap-4 md:gap-[24px]">
            {/* Left Text */}
            <div className="my-auto w-full md:w-[426px] h-[32px] flex items-center justify-center">
              <p className="font-['DM_Sans'] font-bold text-[20px] leading-[160%] tracking-[0%] text-center w-full">
                Track your parcel to get detailed update
              </p>
            </div>

            {/* Input + Button */}
            <div className="w-full md:w-[702px] flex flex-col md:flex-row gap-4 md:gap-0">
              <input
                type="text"
                placeholder="Enter tracking Id"
                className="w-full md:w-[526px] h-[64px] pt-[16px] pr-[20px] pb-[16px] pl-[20px] rounded-tl-[8px] rounded-bl-[8px] border-t border-b"
              />
              <button className="w-full md:w-[176px] h-[64px] pt-[18px] pr-[16px] pb-[18px] pl-[16px] rounded-tr-[8px] rounded-br-[8px] bg-[#EF6820] text-white">
                Track parcel
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
