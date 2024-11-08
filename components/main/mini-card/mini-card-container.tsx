import React from "react";

const MiniCardContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 custom-xl:grid-cols-3  gap-4">
      {children}
    </div>
  );
};

export default MiniCardContainer;
