import React from "react";

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  text: string;
}

const Title = ({ text, className = "", ...rest }: TitleProps) => {
  return (
    <div>
      <h1 className={`text-xl ${className}`} {...rest}>
        {text}
      </h1>
    </div>
  );
};

export default Title;
