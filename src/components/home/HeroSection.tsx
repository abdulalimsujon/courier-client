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
    <div className="w-[282px] h-[180px] rounded-[16px] flex justify-center items-center bg-[#FFFFFFBF]">
      <div className="w-[250px] h-[102px] flex gap-[24px] flex-col">
        <div className="mx-auto">
          <Image src={icon} height={56} width={56} alt={title} />
        </div>
        <p className="font-['Open_Sans'] font-semibold text-[20px] leading-[22px] tracking-[0] text-center">
          {title}
        </p>
      </div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <div className="">
      <div className="w-full h-full  mt-[90px] flex flex-col justify-center items-center  ">
        <div className="lg:w-[1440px] mg:max-w-[1440px] h-[707px] flex gap-[20px] mx-[70px]  p-[50px] lg:relative ">
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
          <div className="w-full h-full ">
            <Image
              className="mx-auto"
              src={heroimage}
              width={550}
              height={300}
              alt="Logo"
            />
          </div>
        </div>
      </div>
      <div className="w-full  absolute lg:mt-[-275px] z-[5] ">
        <div className="max-w-[1440px] mx-auto grid gap-6 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 p-[50px]">
          <InfoCard icon={icon1} title="Multiple Addresses" />
          <InfoCard icon={icon2} title="Fast Delivery" />
          <InfoCard icon={icon3} title="Secure Payment" />
          <InfoCard icon={icon4} title="24/7 Support" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
