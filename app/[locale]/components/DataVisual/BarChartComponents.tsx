"use client";

import { TrendingUp } from "lucide-react";
import Image from "next/image";
import { Bar, BarChart, CartesianGrid, XAxis, ResponsiveContainer } from "recharts";
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

// Chart data for multiple bars (Desktop & Mobile visitors)
const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

// Chart configuration for theme consistency
const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))", // Theme color
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))", // Theme color
  },
} satisfies ChartConfig;

export function BarChartComponent() {
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
        <CardTitle className="pb-[48px]">Monthly Income</CardTitle>
      </CardHeader>

      <CardContent>
        <ChartContainer config={chartConfig}>
          {/* Responsive container to ensure chart resizes */}
          <div className="w-full h-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid
                  vertical={false}
                  strokeDasharray="3 3"
                  stroke="rgba(255, 255, 255, 0.1)" // Light grid for dark background
                />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  tickFormatter={(value) => value.slice(0, 3)} // Abbreviate months
                  tick={{ fill: "white" }} // White text for dark background
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent indicator="dashed" />}
                />
                {/* Bars for Desktop and Mobile data */}
                <Bar dataKey="desktop" fill="var(--female)" radius={4} /> {/* Desktop */}
                <Bar dataKey="mobile" fill="var(--male)" radius={4} /> {/* Mobile */}
              </BarChart>
            </ResponsiveContainer>
          </div>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month
          <TrendingUp className="h-4 w-4 text-customPink" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
}
