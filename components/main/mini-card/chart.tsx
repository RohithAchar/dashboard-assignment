"use client";

import { Area, AreaChart } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { startingKnowledge } from "@/model/report-data";
import React from "react";

const chartConfig = {
  desktop: {
    label: "Knowledge",
    color: "#1B59F8",
  },
} satisfies ChartConfig;

const Chart = () => {
  return (
    <ChartContainer className="h-[30px]" config={chartConfig}>
      <AreaChart accessibilityLayer data={startingKnowledge} margin={{}}>
        <defs>
          <linearGradient id="gradientFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#1B59F8" stopOpacity={0.4} />
            <stop
              offset="95%"
              stopColor="rgba(27, 89, 248, 0.1)"
              stopOpacity={0.1}
            />
          </linearGradient>
        </defs>
        <ChartTooltip
          position={{ x: 0, y: -50 }}
          cursor={false}
          content={<ChartTooltipContent />}
        />
        <Area
          dataKey="desktop"
          type="natural"
          fill="url(#gradientFill)"
          stroke="#1B59F8"
          strokeWidth={2}
        />
      </AreaChart>
    </ChartContainer>
  );
};

export default Chart;
