import React from "react";

interface Props {
  title: string;
  children: React.ReactNode;
}

const Heading: React.FC<Props> = ({ title, children }) => {
  return (
    <div className="flex justify-between items-center">
      <h1 className="font-bold text-2xl text-black">{title}</h1>
      {children}
    </div>
  );
};

export default Heading;
