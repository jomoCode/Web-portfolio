import { ReactNode, use } from "react";
import { Bars4Icon } from "@heroicons/react/24/solid";
import { cva } from "class-variance-authority";
import { HeaderContainer } from "./header/header_container";
import { useTheme } from "@/context/theme_context";

export const headerVariants = cva(
  "w-[7.5rem] py-2 text-lg   text-center hover:text-xl  transition-all duration-300 ease-in-out",
  {
    variants: {
      theme: {
        light: "bg-white text-slate-800 hover:text-gray-500 ",
        dark: "text-white hover:text-slate-400",
      },
    },
    defaultVariants: {
      theme: "dark",
    },
  }
);

export const Header = ({
  headerContent,
}: {
  headerContent: (string | ReactNode)[];
}) => {
  const {theme, toggleTheme} = useTheme();
  return(
  <HeaderContainer>
    <ul className="hidden md:flex md:flex-row gap-4">
      {headerContent.map((data, index) => (
        <li
          key={index}
          className={headerVariants({ theme })}
        >
          {data}
        </li>
      ))}
    </ul>

    <div className="flex items-center gap-2 md:hidden">
      <Bars4Icon className="h-6 w-6 text-gray-800 dark:text-white" />
      <p className="text-xl font-bold text-gray-900 dark:text-white">
        JomoCode
      </p>
    </div>
  </HeaderContainer>
)};
