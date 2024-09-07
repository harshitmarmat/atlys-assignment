import React, { ReactNode } from "react";

interface CircleEmojiProps {
  emoji : string;
}

const CircleEmoji:React.FC<CircleEmojiProps> = ({emoji}) => {
  return (
    <div className="!w-[50px] h-[50px] col-span-1 flex items-center bg-darkgray justify-center rounded-full">
      {emoji}
    </div>
  );
};

export default CircleEmoji;
