import React, { useRef, useState } from "react";
import InputField from "../common/InputField";
import Button from "../common/Button";
import AuthHeader from "./AuthHeader";
import GradientBorderWrapper from "../wrapper/GradientBorderWrapper";
import FooterLine from "./FooterLine";
import { useNavigate } from "react-router-dom";
import { EMAIL, EMAIL_ERROR, emailRegex, footer_line_signup, GENERIC_ERROR, PASSWORD, signup, USERNAME } from "../../data";
import PasswordField from "./PasswordField";

interface SignupProps {
  switchToLogin : () => void;
  closeModal ?: () => void;
}

const Signup:React.FC<SignupProps> = ({switchToLogin,closeModal}) => {
  const [loading, setLoading] = useState(false);
  const [error,setError] = useState<null|string>(null)

  const emailRef = useRef<HTMLInputElement>(null);  
  const passwordRef = useRef<HTMLInputElement>(null);
  const usernameRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate()


  const validate = () => {
    const email = emailRef?.current?.value || "";
    const password = passwordRef?.current?.value;
    const username = usernameRef?.current?.value;
    if(!emailRegex.test(email)){
      setError(EMAIL)
      return false
    }
    if(username?.trim().length===0){
      setError(USERNAME)
      return false
    }
    if(password?.trim().length===0){
      setError(PASSWORD)
      return false
    }
    return true
  }


  const signupHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(validate()){
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        (typeof closeModal ==='function' )? closeModal():navigate("/")
      }, 1000);
    }
  };
  const button_text = loading ? "Loading..." : "Continue";


  return (
    <GradientBorderWrapper>
      <AuthHeader {...signup} />
      <form onSubmit={signupHandler} noValidate>
        <InputField
          label_text="Email"
          input_type="email"
          input_placeholder="Enter your email"
          input_ref={emailRef}
          error={error===EMAIL}
          triggerHanldler={()=>setError(null)}
          error_text={EMAIL_ERROR}
        />
        <InputField
          label_text="Username"
          input_type="text"
          input_placeholder="Choose a preferred username"
          input_ref={usernameRef}
          error={error===USERNAME}
          triggerHanldler={()=>setError(null)}
          error_text={GENERIC_ERROR}
        />
        <PasswordField
          resetError={()=>setError(null)}
          passwordRef={passwordRef}
          error={error}
        />
        <Button
          extra_styling="my-2"
          button_text={button_text}
          btn_type="submit"
        />
      </form>
      <FooterLine 
        {...footer_line_signup}
        triggerHanldler={switchToLogin}
      />
    </GradientBorderWrapper>
  );
};

export default Signup;
