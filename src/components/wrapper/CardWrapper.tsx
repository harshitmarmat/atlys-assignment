import React, { ReactNode } from 'react'

interface CardWrapperProps {
  children: ReactNode;
  extra_styling ?: string ;
  triggerHandler?: ()=>void;
}

const CardWrapper:React.FC<CardWrapperProps> = ({children,extra_styling,triggerHandler}) => {
  return (
    <div onClick={triggerHandler} className={`w-full rounded-md p-4 ${extra_styling}`}>
      {children}
    </div>
  )
}

export default CardWrapper