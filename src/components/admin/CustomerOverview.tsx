import React from "react";
import Container from "@/ReusebaleComponent/Container";
import ReusableHeading from "@/ReusebaleComponent/ReusableHeading";

const CustomerOverview = () => {
  const customerData = [
    { number: 1270, label: "Total Customer" },
    { number: 820, label: "Active Customer" },
    { number: 350, label: "Inactive Customer" },
    { number: 120, label: "New Customer" },
  ];

  // Reusable card component
  const InfoCard = ({ number, label }: { number: number; label: string }) => (
    <div className="w-[280px] sm:w-[260px] md:w-[282px] h-[165px] rounded-[12px] bg-white shadow-md flex flex-col justify-center items-center gap-[10px] px-[24px] py-[48px]">
      <div className="font-['Plus_Jakarta_Sans'] text-[#0A0D12] font-bold text-[24px] sm:text-[28px] md:text-[32px] leading-[28px] sm:leading-[32px] md:leading-[36px] tracking-[0] text-center">
        {number}
      </div>
      <div className="font-['DM_Sans'] text-[#717680] font-medium text-[16px] sm:text-[17px] md:text-[18px] leading-[160%] tracking-[0] text-center">
        {label}
      </div>
    </div>
  );

  return (
    <Container>
      {/* Heading */}

      <ReusableHeading text="Customer overview"></ReusableHeading>

      {/* Cards */}

      <div className="flex  flex-wrap justify-center gap-5 ">
        {customerData.map((item, index) => (
          <InfoCard key={index} number={item.number} label={item.label} />
        ))}
      </div>
    </Container>
  );
};

export default CustomerOverview;
