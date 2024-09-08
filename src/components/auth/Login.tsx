import React, { useMemo, useRef, useState } from "react";
import InputField from "../common/InputField";
import Button from "../common/Button";
import AuthHeader from "./AuthHeader";
import GradientBorderWrapper from "../wrapper/GradientBorderWrapper";
import FooterLine from "./FooterLine";
import { useNavigate } from "react-router-dom";
import { EMAILORUSERNAME, footer_line, GENERIC_ERROR, login, PASSWORD } from "../../data";
import PasswordField from "./PasswordField";

interface LoginProps {
  switchToSignup : () => void;
  closeModal ?: ()=>void
}

const Login:React.FC<LoginProps> = ({switchToSignup,closeModal}) => {
  const [loading, setLoading] = useState(false);

  const emailOrUsernameRef = useRef<HTMLInputElement>(null); 
  const passwordRef = useRef<HTMLInputElement>(null);
  const [error,setError] = useState<null|string>(null)

  const navigate = useNavigate();


  const validate = () => {
    const emailOrUsername = emailOrUsernameRef?.current?.value
    const password = passwordRef?.current?.value
    if(emailOrUsername?.trim().length===0){
      setError(EMAILORUSERNAME)
      return;
    }
    if(password?.trim().length===0){
      setError(PASSWORD)
      return
    }
    return true;
  }

  const loginHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(validate()){
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        (typeof closeModal ==='function' )? closeModal():navigate("/")
      }, 1000);
    }
  };
  
  const button_text = useMemo(()=>loading ? "Loading..." : "Login now",[loading]) ;

  return (
    <GradientBorderWrapper>
      <AuthHeader {...login} />
      <form onSubmit={loginHandler} noValidate>
        <InputField
          label_text="Email or Username"
          input_type="text"
          input_placeholder="Enter your email or username"
          input_ref={emailOrUsernameRef}
          error={error===EMAILORUSERNAME}
          error_text={GENERIC_ERROR}
          triggerHanldler={()=>setError(null)}
        /> 
        <PasswordField
          resetError={()=>setError(null)}
          passwordRef={passwordRef}
          error={error}
        />
        <Button
          extra_styling="my-2"
          button_text={button_text}
        />
      </form>
      <FooterLine 
        {...footer_line}
        triggerHanldler={switchToSignup}
      />
    </GradientBorderWrapper>
  );
};

export default Login;
