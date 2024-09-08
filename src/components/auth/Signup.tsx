import React, { useRef, useState } from "react";
import InputField from "../common/InputField";
import Button from "../common/Button";
import AuthHeader from "./AuthHeader";
import GradientBorderWrapper from "../wrapper/GradientBorderWrapper";
import FooterLine from "./FooterLine";
import { useNavigate } from "react-router-dom";

interface SignupProps {
  switchToLogin : () => void;
}

const Signup:React.FC<SignupProps> = ({switchToLogin}) => {
  const [loading, setLoading] = useState(false);
  const emailRef = useRef(null);  // we can use useState for validation
  const passwordRef = useRef(null);
  const usernameRef = useRef(null);
  const navigate = useNavigate()

  const LoginHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/")
    }, 1000);
    // console.log(emailRef.current.value , passwordRef.current.value);
  };
  const button_text = loading ? "Loading..." : "Continue";

  const signup = {
    heading: "SIGN UP",
    sub_heading: "Create an account to continue",
  };

  const footer_line = {
    text : "Already have an account?",
    redirect_text : "Login →"
  }

  return (
    <GradientBorderWrapper>
      <AuthHeader {...signup} />
      <form onSubmit={LoginHandler}>
        <InputField
          label_text="Email"
          input_type="email"
          input_value={""}
          input_placeholder="Enter your email"
          triggerHanldler={() => {}}
          input_ref={emailRef}
        />
        <InputField
          label_text="Username"
          input_type="text"
          input_value={""}
          input_placeholder="Choose a preferred username"
          triggerHanldler={() => {}}
          input_ref={usernameRef}
        />
        <InputField
          label_text="Password"
          input_type="password"
          input_value={""}
          input_placeholder="Choose a strong password"
          triggerHanldler={() => {}}
          input_ref={passwordRef}
          optional_text="Forgot password?"
        />
        <Button
          extra_styling="my-2"
          button_text={button_text}
          btn_type="submit"
        />
      </form>
      <FooterLine 
        {...footer_line}
        triggerHanldler={switchToLogin}
      />
    </GradientBorderWrapper>
  );
};

export default Signup;
