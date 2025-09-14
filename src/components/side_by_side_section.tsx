import React, { ReactNode } from "react";
import clsx from "clsx";

const SideBySideSection = ({
  left,
  right,
  containerClassNames,
}: {
  left?: ReactNode;
  right?: ReactNode;
  containerClassNames?: string;
}) => {
  return (
    <div
      className={clsx(
        "flex flex-col md:flex-row w-fit h-auto gap-5 justify-center items-end",
        containerClassNames
      )}
    >
      <div className="w-full md:w-1/2 flex-1 overflow-auto">{left}</div>
      <div className="w-full md:w-1/2 flex-1 overflow-auto">{right}</div>
    </div>
  );
};

export default SideBySideSection;
