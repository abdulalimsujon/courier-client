import Container from "@/ReusebaleComponent/Container";
import SectionHeading from "@/ReusebaleComponent/SectionHeading";
import React from "react";

const OurHistory = () => {
  return (
    <div>
      <SectionHeading
        title="Our History"
        description="We started as a small, local delivery service in Brisbane with one goal: to make deliveries fast, reliable, and affordable for everyone in the city. Over the years, we’ve expanded our reach, refined our services, and built lasting relationships with businesses and residents across Brisbane."
      ></SectionHeading>
      <Container>
        <div className="w-full flex">
          {/* first part */}
          <div className=" flex flex-col bg-amber-300 ">
            <div className="w-[237px] h-[310px] mt-[201px] flex flex-col gap-[63px] opacity-100 ">
              {/* first */}
              <div className="">
                <h1 className="font-plus-jakarta-sans font-bold text-[32px] leading-[36px] text-center text-[#EF6820]">
                  2015
                </h1>
              </div>
              {/* second */}
              <div className="w-full flex justify-center items-center bg-red-500 ">
                <div className="w-full h-[2px] bg-gray-400 relative "></div>
                <div className="w-[37px] absolute h-[37px] rounded-full border-4 border-[#EF6820] m-2 flex justify-center items-center">
                  {" "}
                  <div className="w-[21px] h-[21px] rounded-full bg-[#EF6820] relative "></div>
                </div>
              </div>

              {/* third */}
              <div className="w-[237px] h-[212px] opacity-100 flex flex-col  ">
                {/* vertical line */}
                <div className="w-full flex flex-col justify-center items-center    h-[500px] ">
                  <div className="w-[1px] absolute h-[100px]  bg-[#DCDCDC] mx-5 "></div>
                </div>
                {/* small circle */}
                <div className="w-full  flex justify-center items-center mt-3 ">
                  <div className="w-[10px] h-[10px] rounded-full bg-[#DCDCDC]"></div>
                </div>
                <div className="text-[#717680] w-[236px] h-[116px] mt-2 ">
                  <p className="font-dm-sans font-normal text-[20px]  text-center align-middle">
                    UUING was founded in Brisbane, starting with a single
                    vehicle offering local courier services
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[237px] h-[310px] mt-[201px] flex flex-col gap-[63px] opacity-100">
            {/* Text Section */}
            <div className="w-[237px] h-[116px]">
              <p className="font-dm-sans font-normal text-[20px] text-center align-middle text-[#717680]">
                UUING was founded in Brisbane, starting with a single vehicle
                offering local courier services
              </p>
            </div>

            {/* Circle and Line Section */}
            <div className="w-full flex flex-col justify-center items-center">
              {/* Small Circle */}
              <div className="w-[10px] h-[10px] rounded-full bg-[#DCDCDC]"></div>
              {/* Vertical Line */}
              <div className="w-[1px] h-[100px] bg-[#DCDCDC] mt-3"></div>
              {/* Horizontal Line with Circle */}
              <div className="w-full flex justify-center items-center bg-red-500 relative">
                <div className="w-full h-[2px] bg-gray-400"></div>
                <div className="w-[37px] absolute h-[37px] rounded-full border-4 border-[#EF6820] m-2 flex justify-center items-center">
                  <div className="w-[21px] h-[21px] rounded-full bg-[#EF6820]"></div>
                </div>
              </div>
            </div>

            {/* Year Section */}
            <div className="flex justify-center ">
              <h1 className="font-plus-jakarta-sans font-bold text-[32px] leading-[36px] text-center text-[#EF6820]">
                2015
              </h1>
            </div>
          </div>
        </div>
        {/* second section */}
      </Container>
    </div>
  );
};

export default OurHistory;
