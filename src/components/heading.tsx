import { useTheme } from "@/context/theme_context";
import React from "react";

type HeadingProps = {
  text: string;
  refs?: React.HtmlHTMLAttributes<HTMLHeadingElement>;
  className?: string;
};

const Heading = ({ text, refs, className }: HeadingProps) => {
  const {theme}= useTheme();
  return (
    <h1 className={`text-2xl font-bold py-5 px-2 ${className} ${theme === "dark"? "text-text-dark":"text-text-light"}`} {...refs}>
      {text}
    </h1>
  );
};

export default Heading;
