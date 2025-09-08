import React from "react";
import Container from "@/ReusebaleComponent/Container";
import DynamicSwiper from "./DynamicSwiper";

const CustomerSay: React.FC = () => {
  return (
    <Container>
      <h2 className="text-3xl font-bold mb-6 text-center">
        What Our Customers Say
      </h2>
      <p className="text-center text-gray-600 mb-8 max-w-xl">
        Dont just take our word for it - hear from some of our satisfied
        customers!
      </p>
      <DynamicSwiper />
    </Container>
  );
};

export default CustomerSay;
