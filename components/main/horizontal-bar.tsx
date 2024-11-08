"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface Props {
  title: string;
  percentage: number;
  url: string;
  color: "orange" | "green";
}

const HorizontalBar: React.FC<Props> = ({ title, percentage, url, color }) => {
  const [isAnimated, setIsAnimated] = React.useState(false);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setIsAnimated(true);
    }, 0);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex gap-4">
        <div className="relative w-[50px] h-[32px] ">
          <Image
            fill
            className="object-cover rounded-md"
            src={url}
            sizes="20"
            alt="image"
          />
        </div>
        <div className="w-full">
          <p className="font-semibold text-sm">{title}</p>
          <div className="flex gap-4 items-center">
            <div
              className={cn(
                "relative h-[10px] w-full rounded-full transition-all duration-300 ease-in-out",
                color === "orange" ? "orange-gradient-20" : "green-gradient-20",
                isAnimated && "animate-fade-in"
              )}
            >
              <div
                className={cn(
                  "h-[10px] rounded-full overflow-hidden transition-all duration-300 ease-in-out",
                  color === "orange" ? "orange-gradient" : "green-gradient",
                  isAnimated && "animate-bar-grow"
                )}
                style={{
                  width: `${percentage}%`,
                  transform: `scaleX(${percentage / 100})`,
                  transformOrigin: "left center",
                }}
              />
            </div>
            <p className="flex gap-1 font-medium text-sm">
              {percentage}% <span className="opacity-70">Correct</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalBar;
