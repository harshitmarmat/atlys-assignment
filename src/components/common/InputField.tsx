import React, { Fragment } from "react";
import eye_open from "../../assets/icons/eye_open.svg";
import eye_close from "../../assets/icons/eye_close.svg";
export interface InputFieldProps {
  label_text?: string;
  input_type: string;
  input_value?: string;
  input_placeholder?: string;
  optional_text?: string;
  input_ref: React.RefObject<HTMLInputElement>;
  triggerHanldler?: () => void;
  optionalHandler?: () => void;
  error_text?: string | null;
  error?: boolean;
  show_eye?: boolean;
  show_password?: boolean;
  eyeToggle?:()=>void;
}

const InputField: React.FC<InputFieldProps> = ({
  label_text,
  input_type,
  input_ref,
  input_placeholder,
  triggerHanldler,
  optionalHandler,
  optional_text,
  error = false,
  error_text,
  show_password,
  eyeToggle,
  show_eye =false
}) => {
  return (
    <Fragment>
      <div className="my-2">
        <div className="flex mb-2 items-center justify-between">
          {label_text && (
            <label className="text-DB1 text-mediumgray">{label_text}</label>
          )}
          {optional_text && (
            <span
              className=" cursor-pointer text-[12px] text-mediumgray font-medium"
              onClick={optionalHandler}
            >
              {optional_text}
            </span>
          )}
        </div>
        <div className="relative">
          <input
            formNoValidate={false}
            ref={input_ref}
            className={`w-full rounded-md focus:outline-none text-DT1 !bg-darkgray text-mediumgray p-[8px] border-[1px] border-bordergray placeholder:text-gray ${
              error && "border-red-400"
            }`}
            type={input_type}
            placeholder={input_placeholder}
            onChange={triggerHanldler}
          />
          {show_eye && (
            <img
              className="absolute right-3 top-3 cursor-pointer"
              src={!show_password ? eye_open : eye_close}
              alt="eye"
              onClick={eyeToggle}
            />
          )}
        </div>
      </div>
      {error && <p className="text-xs text-red-400">{error_text}</p>}
    </Fragment>
  );
};

export default InputField;
