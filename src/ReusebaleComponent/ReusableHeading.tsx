import React from "react";
import Container from "./Container";

const ReusableHeading = ({ text = "", mdSize = "32px", description = "" }) => {
  return (
    <Container>
      {/* Heading */}
      <div
        className={`text-[#194185] w-full max-w-full font-['Plus_Jakarta_Sans'] font-bold text-[${mdSize}]`}
      >
        <h1 className="text-center lg:text-left">{text}</h1>
      </div>

      {/* Optional Description */}
      {description && (
        <div className="w-full max-w-full mt-2">
          <h3 className="font-['DM_Sans'] font-normal text-[18px] text-[#717680] text-center lg:text-left">
            {description}
          </h3>
        </div>
      )}
    </Container>
  );
};

export default ReusableHeading;
