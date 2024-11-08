import React from "react";

import { Card } from "@/components/ui/card";

const MiniCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <Card className="w-full min-w-[150px] h-full min-h-[150px] flex flex-col space-y-6 bg-white border-[#EFF0F6] rounded-[20px] p-4 custom-shadow">
      {children}
    </Card>
  );
};

export default MiniCard;
