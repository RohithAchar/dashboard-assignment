import React from "react";

const CardContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative grid gap-6 grid-cols-1 grid-rows-auto custom-lg:grid-cols-2">
      {children}
    </div>
  );
};

export default CardContainer;
