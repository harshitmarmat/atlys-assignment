import React from "react";

interface AuthHeaderProps {
  heading: string;
  sub_heading: string;
}

const AuthHeader: React.FC<AuthHeaderProps> = ({ heading, sub_heading }) => {
  return (
    <div className="text-center mb-6 ">
      <div className=" text-DB1 my-2 text-lightgray">{heading}</div>
      <div className="text-DH1 my-2 text-white">{sub_heading}</div>
    </div>
  );
};

export default AuthHeader;
