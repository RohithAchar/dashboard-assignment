import React from "react";

const SelectorContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      {/* <div className="flex flex-col gap-2 sm:flex-row">{children}</div> */}
      {/* Make children take 100% width */}
      <div className="relative grid gap-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 grid-rows-auto">
        {children}
      </div>
    </div>
  );
};

export default SelectorContainer;
