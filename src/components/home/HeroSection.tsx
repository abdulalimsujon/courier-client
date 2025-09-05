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
    <div className="w-full max-w-[282px] h-auto rounded-[16px] flex justify-center items-center bg-[#FFFFFFBF] p-6">
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
    <section className="relative w-full mt-[90px]">
      {/* Hero Top */}
      <div className="max-w-[1440px] w-full mx-auto flex flex-col lg:flex-row items-center gap-10 px-6 py-12 lg:py-20">
        {/* Left Text */}
        <div className="flex flex-col gap-10 max-w-[588px]">
          <div className="space-y-2">
            <h1 className="font-plus-jakarta-sans font-bold text-[40px] md:text-[56px] leading-tight">
              Fast & Reliable
            </h1>
            <h1 className="font-plus-jakarta-sans font-bold text-[40px] md:text-[56px] leading-tight text-white">
              Courier Service
            </h1>
          </div>
          <p className="text-white font-dm-sans text-[16px] md:text-[18px]">
            Safe, fast, and reliable deliveries—our platform connects you to the
            fastest routes and top-tier couriers.
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
      <div className="max-w-[1440px] mx-auto grid gap-6 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 px-6 pb-12 -translate-y-20">
        <InfoCard icon={icon1} title="Multiple Addresses" />
        <InfoCard icon={icon2} title="Fast Delivery" />
        <InfoCard icon={icon3} title="Secure Payment" />
        <InfoCard icon={icon4} title="24/7 Support" />
      </div>
    </section>
  );
};

export default HeroSection;
