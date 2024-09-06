import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const LayoutWrapper: React.FC<LayoutProps> = ({ children }) => {
  return <div className="w-full h-[100vh] px-8 flex flex-col items-center">{children}</div>;
};

export default LayoutWrapper;
