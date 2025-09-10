import FrequentlyAsked from "@/components/home/AskedQuestion";
import CustomerSay from "@/components/home/CustomerSay";
import GetStartedBanner from "@/components/home/GetStartedBanner";
import Hero from "@/ReusebaleComponent/Hero";
import React from "react";
import bg from "../../../assets/aboutimage/image.png";
import OurHistory from "@/components/about/OurHistory";

const About = () => {
  return (
    <div className="">
      <Hero bgImage={bg.src} title="About Us" subtitle="Home / About Us" />
      <OurHistory />
      <CustomerSay />
      <FrequentlyAsked />
      <GetStartedBanner></GetStartedBanner>
    </div>
  );
};

export default About;
