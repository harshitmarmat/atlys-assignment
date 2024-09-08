import React, { useState } from "react";
import InputField from "../common/InputField";
import { GENERIC_ERROR, PASSWORD } from "../../data";

interface PasswordFieldProps {
  passwordRef:  React.RefObject<HTMLInputElement>;
  error: null|string;
  resetError: () => void;
}

const PasswordField: React.FC<PasswordFieldProps> = ({
  passwordRef,
  error,
  resetError
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <InputField
      label_text="Password"
      input_type={showPassword ? "text" : "password"}
      input_placeholder="Choose a strong password"
      input_ref={passwordRef}
      optional_text="Forgot password?"
      error={error === PASSWORD}
      triggerHanldler={resetError}
      error_text={GENERIC_ERROR}
      show_eye={true}
      show_password={!showPassword}
      eyeToggle={() => setShowPassword(!showPassword)}
    />
  );
};

export default PasswordField;
