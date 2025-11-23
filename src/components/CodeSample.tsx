import React from "react";
import { Text, Title } from "./text";
import { TinyTextCard } from "./card";
import { useTheme } from "@/context/theme_context";
import clxs from "clsx";
import { FaGithub } from "react-icons/fa";

type Props = {
  title: string;
  description: string;
  tech: string[];
  repoLink?: string;
};

const CodeSample = ({ title, description, tech, repoLink = "/" }: Props) => {
  const { theme } = useTheme();
  return (
    <a
      className={clxs(
        "py-2 px-3 border-2 border-background-light-1/30 w-full min-w-xs",
        theme === "dark" ? "bg-background-dark-2" : "bg-background-light-2"
      )}
      href={repoLink}
    >
      <div className="flex flex-row justify-between align-center">
        <Title text={title} className="font-bold" />
        <FaGithub
          className={`transition-colors ${
            theme === "dark"
              ? "text-gray-300 group-hover:text-white"
              : "text-gray-600 group-hover:text-black"
          }`}
        />
      </div>
      <Text className="text-left">{description}</Text>
      <div className="flex flex-wrap mt-3">
        {tech.map((techItem, id) => (
          <TinyTextCard
            key={JSON.stringify(id)}
            text={techItem}
            className="m-1 text-left md:text-center"
          />
        ))}
      </div>
    </a>
  );
};

export default CodeSample;
