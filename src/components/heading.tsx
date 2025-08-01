import React from "react";

const Heading = ({ text }: { text: string }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold p-5">{text}</h1>
    </div>
  );
};

export default Heading;
