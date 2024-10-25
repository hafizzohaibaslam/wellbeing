"use client";

import { TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis, ResponsiveContainer } from "recharts";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A stacked area chart";

// Data for male/female unemployment rates
const chartData = [
  { month: "January", male: 186, female: 80 },
  { month: "February", male: 305, female: 200 },
  { month: "March", male: 237, female: 120 },
  { month: "April", male: 73, female: 190 },
  { month: "May", male: 209, female: 130 },
  { month: "June", male: 214, female: 140 },
];

// Chart config for male/female areas
const chartConfig = {
  male: {
    label: "Male",
    color: "hsl(var(--male))",
  },
  female: {
    label: "Female",
    color: "hsl(var(--female))",
  },
} satisfies ChartConfig;

export function AreaChart2() {
  return (
    <Card
      className="bg-transparent border-none relative text-white p-4 sm:p-6 rounded-md max-w-full w-full"
      style={{ boxShadow: "0px 4px 35px 0px rgba(0, 0, 0, 0.35)" }}
    >
      <CardHeader>
        <Image
          className="absolute -top-8"
          src="/assets/DataVisuals/Frame.png"
          width={64}
          height={64}
          alt="none"
        />
        <CardTitle className="pb-[48px]">Unemployment Rate</CardTitle>
      </CardHeader>

      <CardContent className="w-full">
        <ChartContainer config={chartConfig}>
          {/* Ensure responsiveness using ResponsiveContainer */}
          <div className="w-full h-full">
            <ResponsiveContainer width="100%" height="100%">
            <AreaChart
  accessibilityLayer
  data={chartData}
  margin={{ left: 12, right: 12 }}
>
  <CartesianGrid vertical={false} />
  <XAxis
    dataKey="month"
    tickLine={false}
    axisLine={false}
    tickMargin={8}
    tickFormatter={(value) => value.slice(0, 3)}
  />
  <ChartTooltip
    cursor={false}
    content={<ChartTooltipContent indicator="dot" />}
  />
  <Area
    dataKey="male"
    type="natural"
    fill="var(--male)"
    fillOpacity={0.4}
    stroke="var(--male)"
    stackId="a"
  />
  <Area
    dataKey="female"
    type="natural"
    fill="var(--female)"
    fillOpacity={0.4}
    stroke="var(--female)"
    stackId="a"
  />
</AreaChart>

            </ResponsiveContainer>
          </div>
        </ChartContainer>
      </CardContent>

      <CardFooter className="w-full">
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              January - June 2024
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
