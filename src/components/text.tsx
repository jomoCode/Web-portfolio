"use client";

import { useTheme } from "@/context/theme_context";
import Link from "next/link";
import React, { ReactNode } from "react";

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  text: string;
}

const Title = ({ text, className = "", ...rest }: TitleProps) => {
  const {theme} = useTheme();
  return (
    <div>
      <h2 className={`text-xl ${className}, ${theme === "dark"? "text-text-dark":"text-text-light" }`} {...rest}>
        {text}
      </h2>
    </div>
  );
};

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  text?: string|ReactNode;
  childen?: string|ReactNode;
}

const Text = ({ text, children, className = "", ...rest }: TextProps) => {
 const {theme} = useTheme();
  return (
    <div>
      <p className={`text-xl ${className}   ${theme === "dark"? "text-text-dark":"text-text-light" }`} {...rest}>
        {children}
      </p>
    </div>
  );
};



type ThemedLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

const ThemedLink = ({
  href,
  children,
  className = "",
  ...rest
}: ThemedLinkProps) => {
  const { theme } = useTheme();

  return (
    <Link
      href={href}
      className={`text-xl underline-offset-4 hover:underline transition-colors duration-200 ${className} ${
        theme === "dark" ? "text-text-dark" : "text-text-light"
      }`}
      {...rest}
    >
      {children}
    </Link>
  );
};


export { Text, Title, ThemedLink };
