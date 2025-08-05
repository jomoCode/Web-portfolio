import { ReactNode } from "react";
import { Bars4Icon } from "@heroicons/react/24/solid";

export const Header = ({
  headerContent,
}: {
  headerContent: (string | ReactNode)[];
}) => (
  <header className="w-full border-b-2 border-slate-700 dark:border-slate-300 flex items-center justify-between md:justify-center px-4 md:px-0 py-4 md:py-5 shadow-md dark:shadow-slate-900 bg-white dark:bg-gray-900">
    <ul className="hidden md:flex md:flex-row gap-4">
      {headerContent.map((data, index) => (
        <li
          key={index}
          className="w-[7.5rem] py-4 text-lg text-slate-800 dark:text-slate-200 text-center hover:text-xl hover:text-gray-500 dark:hover:text-slate-400 transition-all duration-300 ease-in-out"
        >
          {data}
        </li>
      ))}
    </ul>

    <div className="flex items-center gap-2 md:hidden">
      <Bars4Icon className="h-6 w-6 text-gray-800 dark:text-white" />
      <p className="text-xl font-bold text-gray-900 dark:text-white">JomoCode</p>
    </div>
  </header>
);
