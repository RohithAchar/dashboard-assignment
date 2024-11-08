import React from "react";
import { Card } from "../ui/card";

const MyCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <Card className="flex flex-col gap-y-4 bg-white border-[#EFF0F6] rounded-[20px] p-4 sm:p-6 pb-2 custom-shadow">
      {children}
    </Card>
  );
};

export default MyCard;
