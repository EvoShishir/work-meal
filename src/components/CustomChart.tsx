import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "January", users: 186 },
  { month: "February", users: 305 },
  { month: "March", users: 237 },
  { month: "April", users: 73 },
  { month: "May", users: 209 },
  { month: "June", users: 214 },
  { month: "July", users: 186 },
  { month: "August", users: 305 },
  { month: "September", users: 237 },
  { month: "October", users: 73 },
  { month: "November", users: 209 },
  { month: "December", users: 214 },
];

const chartConfig = {
  users: {
    label: "Users",
    color: "#3b82f6",
  },
} satisfies ChartConfig;

export function CustomChart() {
  return (
    <ChartContainer
      config={chartConfig}
      className="min-h-[200px] w-full card shadow-xl flex justify-center items-center p-3 h-full"
    >
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="users" fill="var(--color-users)" radius={4} />
      </BarChart>
    </ChartContainer>
  );
}
