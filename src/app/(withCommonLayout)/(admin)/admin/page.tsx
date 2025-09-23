import Customerlist from "@/components/admin/Customerlist";
import CustomerOverview from "@/components/admin/CustomerOverview";
import RecentOrder from "@/components/admin/RecentOrder";

import React from "react";

const page = () => {
  return (
    <div className="mt-15">
      <div className=" my-3 w-full max-w-full font-['Plus_Jakarta_Sans'] text-[#194185] font-bold text-[32px] text-center">
        Customer management
      </div>
      <CustomerOverview />
      <Customerlist />
      <RecentOrder />
    </div>
  );
};

export default page;
