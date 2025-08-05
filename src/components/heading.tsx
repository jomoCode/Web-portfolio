import React from "react";

type HeadingProps = {
  text: string;
  refs?: React.HtmlHTMLAttributes<HTMLHeadingElement>;
  className?: string;
};

const Heading = ({ text, refs, className }: HeadingProps) => {
  return (
    <h1 className={`text-2xl font-bold py-5 px-2 ${className}`} {...refs}>
      {text}
    </h1>
  );
};

export default Heading;
