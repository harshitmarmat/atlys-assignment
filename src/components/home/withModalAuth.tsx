import React from 'react'
import close from "../../assets/icons/close.svg";

interface WithModalAuthProps {
  closeModal: () => void;
  isClosing: boolean;
}

type AuthFormComponent = React.ComponentType<any>;

const withModalAuth = (AuthForm:AuthFormComponent) => {
    return ({closeModal,isClosing}:WithModalAuthProps) => {
      return (
        <div
          className={`fixed inset-0 bg-black bg-opacity-60 flex px-4 justify-center items-center transition-opacity duration-300 ${
            isClosing ? "animate-fadeOut" : "animate-fadeIn"
          }`}
        >
          <div className={` w-full  lg:w-1/3 relative  rounded-lg transition-transform duration-300 `}>
            <img
              src={close}
              alt="close"
              className="cursor-pointer z-10 absolute top-4 right-4 lg:top-6 lg:right-6"
              onClick={closeModal}
            />
            <AuthForm />
          </div>
        </div>
      );
    };
  };
  
export default withModalAuth