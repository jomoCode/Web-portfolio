import { useTheme } from "@/context/theme_context";
import React, { ReactNode } from "react";

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  text: string;
}

const Title = ({ text, className = "", ...rest }: TitleProps) => {
  const {theme, toggleTheme} = useTheme();
  return (
    <div>
      <h1 className={`text-xl ${className}, ${theme === "dark"? "text-text_dark":"text-text-light" }`} {...rest}>
        {text}
      </h1>
    </div>
  );
};

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  text?: string|ReactNode;
  childen?: string|ReactNode;
}

const Text = ({ text, children, className = "", ...rest }: TextProps) => {
 const {theme, toggleTheme} = useTheme();
  return (
    <div>
      <p className={`text-xl ${className}   ${theme === "dark"? "text-text_dark":"text-text-light" }`} {...rest}>
        {children}
      </p>
    </div>
  );
};

export { Text, Title };
