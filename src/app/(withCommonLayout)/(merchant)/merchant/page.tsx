import OrderHistory from "@/components/merchant/OrderHistory";
import ParcelOverview from "@/components/merchant/ParcelOverview";
import React from "react";

const page = () => {
  return (
    <div className="">
      <ParcelOverview />
      <OrderHistory />
    </div>
  );
};

export default page;
