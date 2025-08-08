"use client";
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
                  ? "border-b-2 border-blue-500 text-blue-600"
                  : "text-gray-500 hover:text-gray-700"
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
