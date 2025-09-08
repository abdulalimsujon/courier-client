import React from "react";

interface SectionHeadingProps {
  title: string;
  className?: string;
  bgColor?: string; // e.g., "bg-gray-100"
  textSize?: string; // e.g., "text-3xl"
  description?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  className = "",
  bgColor = "",
  textSize = "text-[32px]",
  description = "",
}) => {
  return (
    <div className={`w-full ${bgColor} ${className}`}>
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
  );
};

export default SectionHeading;
