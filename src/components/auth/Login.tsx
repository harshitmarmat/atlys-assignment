import React, { useRef, useState } from "react";
import InputField from "../common/InputField";
import Button from "../common/Button";
import AuthHeader from "./AuthHeader";
import GradientBorderWrapper from "../wrapper/GradientBorderWrapper";
import FooterLine from "./FooterLine";




interface LoginProps {
  switchToSignup : () => void;
}



const Login:React.FC<LoginProps> = ({switchToSignup}) => {
  const [loading, setLoading] = useState(false);
  const emailOrUsernameRef = useRef(null); //TODO :
  const passwordRef = useRef(null);

  const LoginHandler = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    // console.log(emailOrUsernameRef.current.value , passwordRef.current.value);
  };
  const button_text = loading ? "Loading..." : "Login now";

  const login = {
    heading: "WELCOME BACK",
    sub_heading: "Log into your account",
  };

  const footer_line = {
    text : "Not registered yet?",
    redirect_text : "Register →"
  }

  return (
    <GradientBorderWrapper>
      <AuthHeader {...login} />
      <InputField
        label_text="Email or Username"
        input_type="text"
        input_value={""}
        input_placeholder="Enter your email or username"
        triggerHanldler={() => {}}
        input_ref={emailOrUsernameRef}
      />
      <InputField
        label_text="Password"
        input_type="password"
        input_value={""}
        input_placeholder="Enter your password"
        triggerHanldler={() => {}}
        input_ref={passwordRef}
        optional_text="Forgot password?"
      />
      <Button
        extra_styling="my-2"
        button_text={button_text}
        triggerHanldler={LoginHandler}
      />
      <FooterLine 
        {...footer_line}
        triggerHanldler={switchToSignup}
      />
    </GradientBorderWrapper>
  );
};

export default Login;
