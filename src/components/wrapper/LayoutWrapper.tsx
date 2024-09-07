import React, { ReactNode } from "react";

export interface ChildProps {
  children: ReactNode;
  triggerHandler?: ()=>void;
}

const LayoutWrapper: React.FC<ChildProps> = ({ children }) => {
  return <div className="w-full h-[100vh] px-8 flex flex-col items-center">{children}</div>;
};

export default LayoutWrapper;
