"use client";

import React from "react";

const CardDescription = ({ children }: { children: React.ReactNode }) => {
  const [isMounted, setIsMounted] = React.useState(false);
  React.useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) return null;
  return (
    <div className="flex text-nowrap justify-between items-center font-semibold text-sm opacity-50">
      {children}
    </div>
  );
};

export default CardDescription;
