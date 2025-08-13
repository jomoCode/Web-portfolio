"use client";
import { useTheme } from "@/context/theme_context";
import { useState, ReactNode } from "react";

type Tab = {
  title: string;
  content: ReactNode;
};

type TabsProps = {
  tabs: Tab[];
};

export const SwitchTabs = ({ tabs }: TabsProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { theme } = useTheme();

  return (
    <div className="w-full">
      <div className="flex border-b border-gray-300 w-full">
        {tabs.map((tab, index) => (
          <button
            key={tab.title}
            onClick={() => setActiveIndex(index)}
            className={`px-4 py-2 text-2xl font-bold transition-colors duration-200
              ${
                activeIndex === index
                  ? `${
                      theme === "dark"
                        ? "border-b-text-dark text-text-dark  hover:text-gray-400"
                        : "border-b-background-light-2 text-black hover:text-gray-800"
                    } border-b-2`
                  : `${
                      theme === "dark"
                        ? "border-b-text-dark text-gray-400 hover:text-gray-500"
                        : "border-b-background-light-2 text-gray-700 hover:text-gray-500"
                    } border-b-2` 
              }`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="mt-4 w-full">
        {tabs[activeIndex] && tabs[activeIndex].content}
      </div>
    </div>
  );
};
