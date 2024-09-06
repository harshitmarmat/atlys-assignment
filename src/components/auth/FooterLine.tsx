import React from "react";

interface FooterLineProps {
  text: string;
  redirect_text: string;
  triggerHanldler: () => void;
}

const FooterLine: React.FC<FooterLineProps> = ({
  text,
  redirect_text,
  triggerHanldler,
}) => {
  return (
    <div className="text-DB1 text-gray">
      {text} <span onClick={triggerHanldler} className=" cursor-pointer text-white">{redirect_text}</span>
    </div>
  );
};

export default FooterLine;
