import React from 'react'
import close from "../../assets/icons/close.svg";

// Interface for the props passed to the HOC
interface WithModalAuthProps {
  closeModal: () => void;
  isClosing: boolean;
}

// Type definition for the AuthForm component
type AuthFormComponent = React.ComponentType<any>;

const withModalAuth = (AuthForm:AuthFormComponent) => {
    return ({closeModal,isClosing}:WithModalAuthProps) => {
      return (
        <div
          className={`fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center transition-opacity duration-300 ${
            isClosing ? "animate-fadeOut" : "animate-fadeIn"
          }`}
        >
          <div className={` w-full  lg:w-1/3 relative  rounded-lg max-w-sm transition-transform duration-300 `}>
            <img
              src={close}
              alt="close"
              className="cursor-pointer z-10 absolute top-6 right-6"
              onClick={closeModal}
            />
            <AuthForm />
          </div>
        </div>
      );
    };
  };
  
export default withModalAuth