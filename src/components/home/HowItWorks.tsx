import Container from "@/ReusebaleComponent/Container";
import SectionHeading from "@/ReusebaleComponent/SectionHeading";
import Image from "next/image";
import React from "react";
import icon1 from "../../assets/Home/Layer_1.png";

const HowItWorks = () => {
  return (
    <div>
      <Container>
        <div className="">
          <SectionHeading title="How it Works ?" />
          <Container>
            <p className="font-dm-sans font-normal text-[18px] leading-[160%] tracking-[0%] text-center">
              A simple, reliable process for all your delivery needs. Follow
              these easy steps to get your package delivered safely and on time.
            </p>
          </Container>
        </div>
        <div className="w-full flex ">
          {/* left */}
          <div className="w-1/2  flex justify-center items-center">
            {/* card */}
            <div className="w-[600px]  border-[#B2DDFF] p-10 ">
              <div className=" bg-[#F7F7F7] w-[549px] h-[280px] p-[32px] gap-[12px] opacity-100 rotate-0 rounded-[12px] border border-[1px]">
                <div className="w-full flex justify-end">
                  <div className=" ">
                    <Image
                      src={icon1}
                      width={26}
                      height={26}
                      alt=""
                      className=""
                    />
                  </div>
                </div>

                <div className="">
                  <p className=" text-[#717680] font-dm-sans font-normal text-[18px] leading-[160%] tracking-[0%] text-right">
                    Step 1
                  </p>
                </div>
                <div className="w-full text-[#194185]">
                  <p className="font-open-sans font-semibold text-[20px] leading-[22px] tracking-[0%] text-right">
                    Create an account
                  </p>
                </div>
                <div className="text-[#717680]">
                  <p className="font-dm-sans font-normal text-[18px]  tracking-[0%] text-right">
                    Sign up to create your account in minutes. Manage your
                    addresses and restricted accounts for employees.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* vertical line */}
          <div className="w-px bg-gray-400"></div>

          {/* right */}
          <div className="w-1/2 bg-red-300 flex justify-center items-center">
            <h1>fskh</h1>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HowItWorks;
