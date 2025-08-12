"use client";

import { useTheme } from "@/context/theme_context";
import { cva } from "class-variance-authority";
import { HiSun, HiMoon } from "react-icons/hi"; // example icons

const toggleButtonStyles = cva(
  [
    "flex",
    "items-center",
    "gap-2",
    "px-4",
    "py-2",
    "rounded-md",
    "transition-colors",
    "focus:outline-none",
  ],
  {
    variants: {
      variant: {
        light: ["bg-background-light-2 text-text-light hover:bg-gray-100"],
        dark: ["bg-background-dark-2 text-text-dark hover:bg-gray-700"],
      },
    },
    defaultVariants: {
      variant: "dark",
    },
  }
);

export const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={toggleButtonStyles({ variant: theme })}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? <HiSun size={20} /> : <HiMoon size={20} />}
      <span className="sr-only">
        {theme === "dark" ? "Light Mode" : "Dark Mode"}
      </span>
    </button>
  );
};
