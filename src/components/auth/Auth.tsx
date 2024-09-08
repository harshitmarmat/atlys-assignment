import React, { Fragment, lazy, Suspense, useState } from "react";
import Signup from "./Signup";
import shape_svg from "../../assets/icons/shape.svg";

const Login = lazy(()=>import("./Login"))

interface AuthFormProps {
  closeModal ?: ()=>void
}

export const AuthForm:React.FC<AuthFormProps> = (props) => {
  const [isLogin, setLogin] = useState(false);
  return (
    <Fragment>
      {isLogin ? (
        <Suspense fallback={<div>Loading...</div>}>
          <Login {...props} switchToSignup={() => setLogin(false)} />
        </Suspense>
      ) : (
        <Signup {...props} switchToLogin={() => setLogin(true)} />
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
