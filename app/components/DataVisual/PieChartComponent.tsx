"use client";

import { Label, Pie, PieChart } from "recharts";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

// Data for the pie chart (as percentages for male and female)
const chartData = [
  { name: "Male", value: 40, fill: "green" },
  { name: "Female", value: 60, fill: "#fe2f63" },
];

export function PieChartComponent() {
  const monthlySalary = 12455; // Value to display in the center of the Pie chart

  return (
    <Card
      className="bg-transparent border-none relative text-white p-[52px] rounded-md"
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
        <CardTitle className="pb-[48px]">Average Salary</CardTitle>
      </CardHeader>

      <CardContent className="flex-1 pb-0">
        <div className="mx-auto aspect-square max-h-[250px]">
          <PieChart width={200} height={200}>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
              strokeWidth={0} // No stroke for smooth appearance
            >
              {/* Custom Label inside the Pie chart */}
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-white text-3xl font-bold"
                        >
                          {monthlySalary.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Monthly
                        </tspan>
                      </text>
                    );
                  }
                  return null;
                }}
              />
            </Pie>
          </PieChart>
        </div>
      </CardContent>

      {/* Card Footer with legend */}
      <CardFooter className="flex justify-between items-center gap-2 text-sm">
        <div className="flex items-center">
          <span className="inline-block w-2 h-2 rounded-full bg-pink-500 mr-2" />
          Female
        </div>
        <div className="flex items-center">
          <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2" />
          Male
        </div>
      </CardFooter>
    </Card>
  );
}
