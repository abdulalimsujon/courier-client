import Footer from "@/shared/Footer";

import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      {children}
    </div>
  );
};

export default layout;
