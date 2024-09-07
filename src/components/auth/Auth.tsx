import React, { Fragment, useState } from "react";
import Signup from "./Signup";
import Login from "./Login";
import shape_svg from "../../assets/icons/shape.svg";

export const AuthForm = () => {
  const [isLogin, setLogin] = useState(false);
  return (
    <Fragment>
      {isLogin ? (
        <Login switchToSignup={() => setLogin(false)} />
      ) : (
        <Signup switchToLogin={() => setLogin(true)} />
      )}
    </Fragment>
  );
};

const Auth = () => {
  return (
    <div className="w-full lg:w-1/3 my-auto ">
      <img className="mx-auto mb-4 lg:mb-8" src={shape_svg} alt="logo" />
      <AuthForm/>
    </div>
  );
};

export default Auth;
