import React from "react";
import avatar from "../../assets/icons/avatar.svg";
import dots from "../../assets/icons/dots.svg";
import chat from "../../assets/icons/chat.svg";
import OuterPostCard from "./OuterPostCard";
import MessageCard from "./MessageCard";
import CircleEmoji from "../common/CircleEmoji";

interface PostProps {
  post: {
    author_name: string;
    time: string;
    author_image: string;
    post_message: {
      emoji: string;
      text: string;
    };
    comments_count: number;
  };
  openModal:()=>void
}

const PostCard: React.FC<PostProps> = ({ post , openModal }) => {
  const { author_image, author_name, time, comments_count, post_message } =
    post;
  return (
    <OuterPostCard triggerHandler={openModal} >
      <div className="flex mt-2 mb-4 justify-between items-center">
        <div className="flex cursor-pointer gap-4">
          <img src={author_image} alt="avatar" />
          <div className=" space-y-1">
            <div className="text-DT2 text-mediumgray">{author_name}</div>
            <div className="text-DB1 text-gray">{time}</div>
          </div>
        </div>
        <img className="cursor-pointer" src={dots} alt="dots" />
      </div>

      <MessageCard>
        <CircleEmoji emoji={post_message.emoji} />
        <div className="col-span-8 lg:col-span-9 text-gray text-DT1">{post_message.text}</div>
      </MessageCard>

      <div className="mt-4 flex items-center gap-2">
        <img src={chat} alt="chat-icon" />
        <p className="text-DB1 text-gray">{comments_count} comments</p>
      </div>
    </OuterPostCard>
  );
};

export default PostCard;
