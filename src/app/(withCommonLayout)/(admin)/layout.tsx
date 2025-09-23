import AdminHeader from "@/shared/AdminHeader";
import Footer from "@/shared/Footer";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <AdminHeader />
      {children}
      <Footer />
    </div>
  );
};

export default layout;
