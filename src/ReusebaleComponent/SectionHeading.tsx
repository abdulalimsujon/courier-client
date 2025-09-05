import React from "react";

interface SectionHeadingProps {
  title: string;
  className?: string;
  bgColor?: string;
  textSize?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  className = "",
  bgColor = " ",
  textSize = "text-[32px]",
}) => {
  return (
    <div className={`w-full ${bgColor} ${className}`}>
      <h1
        className={`w-full text-center font-['Plus_Jakarta_Sans'] font-bold ${textSize}`}
      >
        {title}
      </h1>
    </div>
  );
};

export default SectionHeading;
