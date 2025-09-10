import AdminHeader from "@/shared/AdminHeader";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <AdminHeader />
      {children}
    </div>
  );
};

export default layout;
