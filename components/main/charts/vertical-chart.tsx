"use client";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Bar, BarChart, XAxis, YAxis } from "recharts";

interface Props {
  data: Item[];
}

interface Item {
  month: string;
  value: number;
}

const VerticalChart: React.FC<Props> = ({ data }) => {
  return (
    <ChartContainer
      config={{
        value: {
          label: "Activity",
          color: "hsl(var(--primary))",
        },
      }}
      className="h-[250px]"
    >
      <BarChart
        className="custom-xl:mt-0 custom-lg:mt-12"
        data={data}
        margin={{ left: -20 }}
      >
        <XAxis
          dataKey="month"
          axisLine={false}
          tickLine={false}
          tickMargin={10}
          fontSize={9}
          stroke="hsl(var(--muted-foreground))"
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          tickMargin={10}
          fontSize={9}
          stroke="hsl(var(--muted-foreground))"
        />
        <Bar
          dataKey="value"
          className=" fill-primary"
          //   make it rounded
          background={{
            fill: "rgba(27, 89, 248, 0.1)",
            radius: 8,
          }}
          radius={[8, 8, 8, 8]}
          maxBarSize={10}
        />
        <ChartTooltip content={<ChartTooltipContent />} cursor={false} />
      </BarChart>
    </ChartContainer>
  );
};

export default VerticalChart;
