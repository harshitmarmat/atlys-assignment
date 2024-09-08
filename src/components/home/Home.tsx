import PostCard from "./PostCard";
import CreatePostCard from "./CreatePostCard";
import withModalAuth from "./withModalAuth";
import { AuthForm } from "../auth/Auth";
import { Fragment, useEffect, useState } from "react";
import { home_header, post_data } from "../../data";

const Home = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (isClosing) {
      const timer = setTimeout(() => setModalOpen(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isClosing]);

  const closeModal = () => {
    setIsClosing(true);
  };

  const openModal = () => {
    setIsClosing(false);
    setModalOpen(true);
  };

  const Modal = withModalAuth(AuthForm);
  const heading = "Hello " + home_header.user_name
  return (
    <Fragment>
      <div
        className={`w-full lg:w-1/2 transition-transform duration-300 ${
          isModalOpen && !isClosing ? " blur-sm " : ""
        }`}
      >
        <div>
          <div className="text-[28px] text-mediumgray font-medium">
            {heading}
          </div>
          <div className="my-4 tex-DT1 w-full lg:w-4/5 text-gray font-medium">
            {home_header.sub_heading}
          </div>
        </div>
        <div className="space-y-4">
          <CreatePostCard
            modal_animation={isModalOpen && !isClosing}
            openModal={openModal}
          />
          {post_data.map((post) => (
            <PostCard post={post} openModal={openModal}/>
          ))}
        </div>
      </div>
      {isModalOpen && <Modal isClosing={isClosing} closeModal={closeModal} />}
    </Fragment>
  );
};

export default Home;
