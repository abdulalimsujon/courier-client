import GetStartedBanner from "@/components/home/GetStartedBanner";
import React from "react";
import bg from "../../assets/serivceImage/serviceBanner.png";
import Hero from "@/ReusebaleComponent/Hero";
import WhatWeOffer from "@/components/service/Offer";

const page = () => {
  return (
    <div>
      <Hero bgImage={bg.src} title="Our Service" subtitle="Home / service" />
      <WhatWeOffer />
      <GetStartedBanner />
    </div>
  );
};

export default page;
