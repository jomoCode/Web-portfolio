import React, { ReactNode } from "react";

const ProjectItem = ({
  left,
  right,
}: {
  left?: ReactNode;
  right?: ReactNode;
}) => {
  return (
    <div className="flex flex-col md:flex-row w-screen h-auto p-10 items-stretch">
      <div className="w-full md:w-1/2 flex-1 overflow-auto">{left}</div>
      <div className="w-full md:w-1/2 flex-1 overflow-auto">{right}</div>
    </div>
  );
};

export default ProjectItem;
