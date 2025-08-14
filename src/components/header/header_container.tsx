"use client";

import { useTheme } from "@/context/theme_context";
import { cva } from "class-variance-authority";
import React, { ReactNode, forwardRef } from "react";

const headerStyles = cva(
  "hidden w-[80%] min-h-16 lg:block lg:absolute lg:top-3 p-8 rounded-lg drop-shadow-lg shadow-white relative",
  {
    variants: {
      theme: {
        light: "bg-background-light-2 text-light",
        dark: "bg-background-dark-2 text-dark",
      },
    },
    defaultVariants: {
      theme: "dark",
    },
  }
);

type HeaderContainerProps = { children: ReactNode };

const HeaderContainer = forwardRef<HTMLElement, HeaderContainerProps>(
  ({ children }, ref) => {
    const { theme } = useTheme();
    return (
      <header ref={ref} className={headerStyles({ theme})}>
        {children}
      </header>
    );
  }
);

HeaderContainer.displayName = "HeaderContainer";

export { HeaderContainer };
