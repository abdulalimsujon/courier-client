import React from "react";
import Container from "./Container";

interface SectionHeadingProps {
  title: string;
  className?: string;
  bgColor?: string; // e.g., "bg-gray-100"
  textSize?: string;
  textColor?: string; // e.g., "text-3xl"
  description?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  className = "",
  bgColor = "",
  textSize = "text-[32px]",
  description = "",
  textColor = "",
}) => {
  return (
    <div
      className={`w-full max-w-[997px] ${bgColor} ${className} ${textColor} my-16`}
    >
      <div>
        <h1
          className={`w-full text-center font-['Plus_Jakarta_Sans'] font-bold ${textSize}`}
        >
          {title}
        </h1>
        {description && (
          <p className="w-full font-dm-sans font-normal not-italic text-[18px] text-center mt-2">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default SectionHeading;
