import React from "react";

interface ButtonProps {
  button_text: string;
  triggerHanldler?: () => void;
  extra_styling ?: string,
  btn_type?: "submit" | "reset" | "button" | undefined;
}

const Button: React.FC<ButtonProps> = ({ button_text, triggerHanldler,btn_type, extra_styling }) => {
  return <button type={btn_type} className={`w-full p-[12px] rounded-md bg-blue  text-white text-DT2 ${extra_styling}`} onClick={triggerHanldler}>{button_text}</button>;
};

export default Button;
