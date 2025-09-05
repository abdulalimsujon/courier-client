import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className = "" }) => {
  return (
    <div
      className={`max-w-[1200px] w-full mx-auto flex flex-col  items-center my-20 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
