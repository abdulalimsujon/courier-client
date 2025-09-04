import Image from "next/image";
import React from "react";
import heroimage from "../../assets/Home/heroImage.png";

const HeroSection = () => {
  return (
    <div className="w-full h-full  mt-[90px]  ">
      <div className="w-[1440px] h-[707px] flex gap-[20px] mx-[70px]  p-[50px]">
        <div className="flex flex-col  top-[127px] left-[120px] w-[588px] h-[413px] gap-[40px]  rotate-0 opacity-100 ">
          <div className="  h-[132px] gap-[8px] rotate-0 opacity-100">
            <h1 className="font-plus-jakarta-sans font-bold text-[56px] leading-[101%] tracking-[0%]">
              Fast & Reliable
            </h1>
            <h1 className="font-plus-jakarta-sans font-bold text-[56px] leading-[120%] tracking-[0%] text-white">
              Courier Service{" "}
            </h1>
          </div>
          <div className="w-[588px] h-[58px] text-white">
            <p className="font-dm-sans font-normal text-[18px]">
              Safe, fast, and reliable deliveries—our platform connects you to
              the fastest routes and top-tier couriers.
            </p>
          </div>
          <div className="w-[384px] h-[58px] flex gap-[24px] rotate-0 opacity-100">
            <button className=" bg-[#EF6820] w-[180px] h-[58px] gap-[10px] rotate-0 opacity-100 px-[32px] py-[16px] rounded-[8px]">
              Get Started
            </button>
            <button className="w-[180px] h-[58px] gap-[10px] rotate-0 opacity-100 px-[32px] py-[16px] rounded-[8px] border border-[1px]">
              Learn More
            </button>
          </div>
        </div>
        <div className="w-full h-full">
          <Image src={heroimage} width={500} height={250} alt="Logo" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
