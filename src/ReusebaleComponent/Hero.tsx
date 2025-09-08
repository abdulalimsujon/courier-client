import React from "react";

interface HeroProps {
  bgImage: string;
  title: string;
  subtitle: string;
  height?: string; // optional, default height
}

const Hero: React.FC<HeroProps> = ({
  bgImage,
  title,
  subtitle,
  height = "md:h-[541px]",
}) => {
  return (
    <div>
      <div
        className={`w-full ${height} bg-cover bg-center flex flex-col items-center justify-center px-4`}
        style={{
          backgroundImage: `linear-gradient(rgba(25, 65, 133, 0.6), rgba(25, 65, 133, 0.6)), url(${bgImage})`,
        }}
      >
        <div className="flex flex-col items-center justify-center text-center gap-2">
          <h1 className="font-inter font-bold text-[40px] leading-[44px] text-white">
            {title}
          </h1>
          <p className="text-white text-sm md:text-base">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
