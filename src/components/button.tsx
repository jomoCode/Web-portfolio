import React from "react";

const CustomButton = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { children, className = "", ...rest } = props;

  return (
    <button
      {...rest}
      className={`
        flex items-center justify-center
        border border-gray-800
        px-4 py-4
        hover:bg-gray-100
        active:scale-95
        transition-transform duration-200
        shadow-md
        focus:outline-none focus:ring-2 focus:ring-blue-400
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export { CustomButton };
