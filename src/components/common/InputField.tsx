import React from 'react'

interface InputFieldProps {
    label_text ?: string;
    input_type : string;
    input_value ?: string;
    input_placeholder ?: string;
    optional_text ?: string;
    input_ref :React.RefObject<HTMLInputElement>;
    triggerHanldler ?: () => void;
    optionalHandler ?: () => void;
    
}

const InputField: React.FC<InputFieldProps> = ({label_text, input_type,input_value,input_ref, input_placeholder, triggerHanldler,optionalHandler,optional_text}) => {
  return (
    <div className='my-2'>
        <div className='flex mb-2 items-center justify-between'>
            {label_text && <label className='text-DB1 text-mediumgray'>{label_text}</label>}
            {optional_text && <span className=' cursor-pointer text-[12px] text-mediumgray font-medium' onClick={optionalHandler}>{optional_text}</span>}
        </div>
        <input required ref={input_ref} className='w-full rounded-md focus:outline-none text-DT1 !bg-darkgray text-mediumgray p-[8px] border-[1px] border-bordergray placeholder:text-gray' type={input_type}  placeholder={input_placeholder} onChange={triggerHanldler} />
    </div>
  )
}

export default InputField