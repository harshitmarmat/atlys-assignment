import React from "react";

interface ButtonProps {
  button_text: string;
  triggerHanldler: () => void;
  extra_styling ?: string
}

const Button: React.FC<ButtonProps> = ({ button_text, triggerHanldler, extra_styling }) => {
  return <button className={`w-full p-[8px] rounded-md bg-blue  text-white text-DT2 ${extra_styling}`} onClick={triggerHanldler}>{button_text}</button>;
};

export default Button;
