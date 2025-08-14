import React, { ReactNode } from "react";

const  SideBySideSection= ({
  left,
  right,
}: {
  left?: ReactNode;
  right?: ReactNode;
}) => {
  return (
    <div className="flex flex-col md:flex-row w-full h-auto gap-5 justify-center items-center mb-10">
      <div className="w-full md:w-1/2 flex-1 overflow-auto">{left}</div>
      <div className="w-full md:w-1/2 flex-1 overflow-auto">{right}</div>
    </div>
  );
};

export default SideBySideSection;
