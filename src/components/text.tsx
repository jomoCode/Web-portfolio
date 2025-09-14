"use client";

import { useTheme } from "@/context/theme_context";
import Link from "next/link";
import React, { HTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  text: string;
}

const Title = ({ text, className = "", ...rest }: TitleProps) => {
  const { theme } = useTheme();
  return (
    <h2
      className={clsx(
        "text-xl",
        className,
        theme === "dark" ? "text-text-dark" : "text-text-light"
      )}
      {...rest}
    >
      {text}
    </h2>
  );
};

type TextVariant = "sm" | "md" | "lg" | "xl" | "2xl";

type TextProps = HTMLAttributes<HTMLParagraphElement> & {
  className?: string;
  variant?: TextVariant;
};

const Text = ({
  children,
  className = "",
  variant = "md",
  ...rest
}: TextProps) => {
  const { theme } = useTheme();

  const variantClasses: Record<TextVariant, string> = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl font-semibold",
    "2xl": "text-2xl font-bold",
  };

  return (
    <p
      className={clsx(
        "w-full",
        variantClasses[variant],
        theme === "dark" ? "text-text-dark" : "text-text-light",
        className
      )}
      {...rest}
    >
      {children}
    </p>
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

interface TextContainerProps extends React.HTMLAttributes<HTMLSpanElement> {
  text?: string | ReactNode;
  childen?: string | ReactNode;
}

const TextContainer = ({
  children,
  className = "",
  ...rest
}: TextContainerProps) => {
  const { theme } = useTheme();
  return (
    <span
      className={`text-xl w-full ${className}   ${
        theme === "dark" ? "text-text-dark" : "text-text-light"
      }`}
      {...rest}
    >
      {children}
    </span>
  );
};

export { Text, Title, ThemedLink, TextContainer };
