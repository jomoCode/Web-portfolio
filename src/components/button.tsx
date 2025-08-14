import { useTheme } from "@/context/theme_context";
import { cva } from "class-variance-authority";
import React from "react";

const customButtonStyles = cva(
  " flex items-center justify-center px-4 py-4  transition-transform duration-300 ease-in-out hover:scale-95 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 w-full",
  {
    variants: {
      theme: {
        dark: "bg-background-dark-2 text-text-dark hover:text-gray-300 ",
        light: "bg-background-light-2 text-text-light hover:text-gray-500",
      },
    },
    defaultVariants: {
      theme: "dark",
    },
  }
);
const CustomButton = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { children, className = "", ...rest } = props;
  const { theme } = useTheme();

  return (
    <button {...rest} className={customButtonStyles({ theme, className })}>
      {children}
    </button>
  );
};

export { CustomButton };
