import React from "react";
import bg from "../../assets/Home/getStartedBg.png";

const GetStartedBanner = () => {
  return (
    <div className="w-full h-auto mb-10">
      <div
        className="w-full h-[330px] md:h-[400px] bg-cover bg-center flex items-center justify-center px-4"
        style={{
          backgroundImage: `linear-gradient(rgba(25, 65, 133, 0.6), rgba(25, 65, 133, 0.6)), url(${bg.src})`,
        }}
      >
        <div className="max-w-[654px] text-[#FDFDFD] flex flex-col items-center gap-6">
          <h1 className="font-inter font-bold text-[28px] md:text-[40px] leading-[36px] md:leading-[44px] text-center">
            Get Ready to Start
          </h1>

          <p className="font-dm-sans font-normal text-[16px] md:text-[18px] leading-[160%] text-center px-2 md:px-0">
            Sign-up with your business from our website and become a merchant of
            UIING Courier service and ensure safe delivery of your products.
          </p>

          {/* Button */}
          <button className="w-[180px] h-[50px] md:w-[236px] md:h-[61px] border border-[#FFFFFF] rounded-lg text-white font-inter font-semibold text-[16px] md:text-[18px] flex items-center justify-center">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStartedBanner;
