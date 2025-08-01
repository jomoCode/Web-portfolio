import { ReactNode } from "react";
import Heading from "./heading";

export const Header = ({
  headerContent,
}: {
  headerContent: (string | ReactNode)[];
}) => (
  <header className="border-solid border-slate-700 border-b-2 w-full flex justify-center items-center py-5">
    <ul className="md:flex md:flex-row md:flex-nowrap hidden">
      {headerContent.map((data, index) => (
        <li
          key={index}
          className="w-30 py-4 text-lg hover:text-gray-500 text-center hover:text-xl"
        >
          {data}
        </li>
      ))}
    </ul>
    <div className="block  md:hidden">
      <Heading text="JomoCode" />
    </div>
  </header>
);
