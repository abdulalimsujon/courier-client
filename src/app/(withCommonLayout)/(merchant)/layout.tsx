import Footer from "@/shared/Footer";
import MerchantHeader from "@/shared/MerchantHeader";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <MerchantHeader />
      {children}
      <Footer />
    </div>
  );
};

export default layout;
