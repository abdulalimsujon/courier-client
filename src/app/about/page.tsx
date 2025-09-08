import FrequentlyAsked from "@/components/home/AskedQuestion";
import CustomerSay from "@/components/home/CustomerSay";
import GetStartedBanner from "@/components/home/GetStartedBanner";
import React from "react";

const About = () => {
  return (
    <div className="">
      <CustomerSay />
      <FrequentlyAsked />
      <GetStartedBanner></GetStartedBanner>
    </div>
  );
};

export default About;
