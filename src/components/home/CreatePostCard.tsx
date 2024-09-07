import React, { useRef } from "react";
import OuterPostCard from "./OuterPostCard";
import MessageCard from "./MessageCard";
import CircleEmoji from "../common/CircleEmoji";
import Button from "../common/Button";

interface CreatePostCardProps {
  openModal : ()=>void;
  modal_animation : boolean
}

const CreatePostCard:React.FC<CreatePostCardProps> = ({openModal,modal_animation}) => {
  const messageRef = useRef(null);

  return (
    <OuterPostCard>
      <div className=" text-DH1 flex mt-2 mb-4 justify-between text-mediumgray items-center">
        Create post
      </div>
      <MessageCard>
        <CircleEmoji emoji="👋" />
        <textarea
          className="col-span-9 resize-none border-none focus:outline-none bg-lightblack text-gray text-DT1 placeholder:text-gray"
          placeholder="How are you feeling today?"
          ref={messageRef}
          rows={3}
        />
      </MessageCard>
      <div className="w-full flex justify-end mt-4">
        <Button extra_styling={`transition-all duration-300 ease-in-out ${
          modal_animation ? " py-2 !w-[130px]" : "py-3 !w-[120px]"
        }`} triggerHanldler={openModal} button_text="Post"/>
      </div>
    </OuterPostCard>
  );
};

export default CreatePostCard;
