import React, { ReactNode } from "react";

interface GradientBorderWrapperProps {
  children: ReactNode;
}

const GradientBorderWrapper: React.FC<GradientBorderWrapperProps> = ({
  children
}) => {
  return (
    <div className="rounded-md p-[2px] bg-gradient-to-r from-gradient_from_gray to-gradient_to_gray ">
      <div className="w-full flex flex-col h-full p-4 lg:p-8 rounded-md bg-darkgray">
        {children}
      </div>
    </div>
  );
};

export default GradientBorderWrapper;
