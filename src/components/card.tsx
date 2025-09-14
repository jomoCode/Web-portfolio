import React from "react";
import clsx from "clsx";
import { useTheme } from "@/context/theme_context";
import { Text } from "./text";

type Props = {
  text: string;
  className?: string;
};

const TinyTextCard = ({ text, className }: Props) => {
  const { theme } = useTheme();

  return (
    <span
      className={clsx(
        theme === "dark" ? "bg-background-dark-1" : "bg-background-light-1",
        "",
        "px-3 py-1 text-sm rounded-full text-gray-800 w-fit tex t-nowrap",
        className
      )}
    >
      <Text>{text}</Text>
    </span>
  );
};

export { TinyTextCard };
