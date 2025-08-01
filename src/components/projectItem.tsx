import React, { ReactNode } from "react";

const ProjectItem = ({left, right}:{left?:ReactNode; right?:ReactNode}) => {
  return (
    <div className="flex flex-row w-48 h-48">
      <div className="bg-red-400 w-full  h-full">{left}</div>
      <div className="bg-amber-500 w-full  h-full">{right}</div>
    </div>
  );
};

export default ProjectItem;
