import React from "react";

const MainContent = ({ children }: { children: React.ReactNode }) => {
  return <h3 className="font-bold text-2xl text-black">{children}</h3>;
};

export default MainContent;
