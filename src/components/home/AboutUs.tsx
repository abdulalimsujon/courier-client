import Container from "@/ReusebaleComponent/Container";
import SectionHeading from "@/ReusebaleComponent/SectionHeading";
import React from "react";
import Image from "next/image";
import image from "../../assets/Home/AboutUsImage.png";
import icon1 from "../../assets/Home/whoWeAreIcon.png";

const AboutUs = () => {
  return (
    <div>
      <Container>
        <SectionHeading title="About Us" />
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          {/* Text Section */}
          <div className="flex-1 flex flex-col gap-6">
            <div className="text-[#717680]">
              <p className="font-dm-sans font-normal text-[16px] md:text-[18px] leading-[160%] tracking-[0%]">
                At UIING we are dedicated to providing fast, reliable, and
                secure courier services across Brisbane, Australia. Our goal is
                to simplify delivery for individuals and businesses by offering
                affordable, efficient, and timely shipping solutions. We
                prioritize customer satisfaction and aim to ensure every
                delivery is handled with care and delivered on time.
              </p>
            </div>

            {/* Values Section */}
            <div>
              <h2 className="font-dm-sans font-semibold text-[18px] leading-[160%] tracking-[0%] text-[#194185]">
                Our values
              </h2>
              <div className="text-[#717680] mt-4 flex flex-wrap gap-4 md:gap-5">
                {[
                  "Reliability",
                  "Customer Satisfaction",
                  "Innovation",
                  "Integrity",
                ].map((value) => (
                  <div key={value} className="flex items-center gap-2">
                    <Image src={icon1} height={16} width={16} alt="" />
                    <p className="font-dm-sans font-normal text-[16px] md:text-[18px]">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex-1 w-full md:w-auto h-[300px] md:h-[431px] rounded-[24px] overflow-hidden">
            <Image src={image} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutUs;
