import React from "react";

interface AuthHeaderProps {
  heading: string;
  sub_heading: string;
}

const AuthHeader: React.FC<AuthHeaderProps> = ({ heading, sub_heading }) => {
  return (
    <div className="text-center mb-6 ">
      <div className=" text-DB1 text-lightgray">{heading}</div>
      <div className="text-DH1 mt-1 text-white">{sub_heading}</div>
    </div>
  );
};

export default AuthHeader;
