import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const CustomButton: React.FC<ButtonProps> = (props) => {
  return (
    <button {...props} className="p-2">
      {props.children}
    </button>
  );
};
