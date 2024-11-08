"use client";

import React from "react";

const MiniCardDescription = ({ children }: { children: React.ReactNode }) => {
  const [isMounted, setIsMounted] = React.useState(false);
  React.useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) return null;
  return (
    <div className="flex text-nowrap justify-between items-center opacity-70 font-medium text-sm">
      {children}
    </div>
  );
};

export default MiniCardDescription;
