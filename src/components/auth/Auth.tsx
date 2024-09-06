import React, { useState } from "react";
import Signup from "./Signup";
import Login from "./Login";
import shape_svg from "../../assets/icons/shape.svg";

const Auth = () => {
  const [isLogin, setLogin] = useState(true);

  return (
    <div className="w-full lg:w-1/3 my-auto ">
      <img className="mx-auto mb-4 lg:mb-8" src={shape_svg} alt="logo" />
      {isLogin ? (
        <Login switchToSignup={() => setLogin(false)} />
      ) : (
        <Signup switchToLogin={() => setLogin(true)} />
      )}
    </div>
  );
};

export default Auth;
