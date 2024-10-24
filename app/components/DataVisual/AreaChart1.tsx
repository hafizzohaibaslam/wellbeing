"use client";

import { CartesianGrid, Line, LineChart, XAxis, YAxis, ResponsiveContainer } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
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
import Image from "next/image";

// Unemployment data for Male and Female
const chartData = [
  { month: "January", male: 8, female: 12 },
  { month: "February", male: 10, female: 18 },
  { month: "March", male: 15, female: 20 },
  { month: "April", male: 12, female: 25 },
  { month: "May", male: 9, female: 22 },
  { month: "June", male: 15, female: 24 },
];

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

export function AreaChart1() {
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
          {/* Make sure the container is responsive */}
          <div className="w-full h-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <YAxis
                  domain={[0, 40]}
                  tickFormatter={(value) => `${value}%`}
                  axisLine={false}
                  tickLine={false}
                />
                <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                <Line
                  dataKey="male"
                  type="monotone"
                  stroke="green"
                  strokeWidth={2}
                  dot={false}
                />
                <Line
                  dataKey="female"
                  type="monotone"
                  stroke="#fe2f63"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </ChartContainer>
      </CardContent>
      <CardFooter className="w-full ">
        <div className="flex justify-between w-full text-sm">
          <div className="flex items-center gap-2">
            <span className="text-green-500">● Male</span> 15%
          </div>
          <div className="flex items-center gap-2">
            <span className="text-pink-500">● Female</span> 24%
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
