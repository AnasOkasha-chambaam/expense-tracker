// src/components/ExpenseChart.tsx
"use client";

import moment from "moment-timezone";
import {
  CartesianGrid,
  LabelList,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useExpenseStore } from "@/store/expense.store";
import { useMemo } from "react";
import { Badge } from "../ui/badge";
import { InfoIcon } from "lucide-react";

export function ExpenseChart() {
  const { getFilteredExpenses } = useExpenseStore();
  const filteredExpenses = getFilteredExpenses();

  const chartData = useMemo(() => {
    return filteredExpenses
      .map((expense) => ({
        date: moment(expense.createdAt).valueOf(), // Convert to timestamp for sorting
        amount: expense.amount,
        name: expense.name,
        category: expense.category,
      }))
      .sort((a, b) => a.date - b.date); // Sort by date
  }, [filteredExpenses]);

  if (chartData.length === 0) {
    return (
      <Card>
        <CardContent className="pt-6">
          <p className="text-center text-muted-foreground flex items-center justify-center gap-2">
            <InfoIcon /> No data available for the chart.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-background">
      <CardHeader>
        <CardTitle>Expense Trend</CardTitle>
        <CardDescription>Individual expense overview</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[250px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              accessibilityLayer
              data={chartData}
              margin={{
                top: 20,
                right: 20,
                left: 20,
                bottom: 20,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis
                dataKey="date"
                tickFormatter={(value) =>
                  moment(value).format("MMM DD, HH:mm a")
                }
                type="number"
                domain={["dataMin", "dataMax"]}
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                hide
              />
              <YAxis
                tickFormatter={(value) => `$${value}`}
                tickLine={false}
                axisLine={false}
                tickMargin={8}
              />
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    const data = payload[0].payload;
                    return (
                      <Card className="bg-background rounded shadow">
                        <CardHeader>
                          <Badge>{data.category}</Badge>
                          <CardTitle>{data.name}</CardTitle>
                          <CardDescription>
                            {moment(data.date).format("MMM DD, HH:mm a")}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <Badge variant={"outline"} className="text-primary">
                            ${data.amount.toFixed(2)}
                          </Badge>
                        </CardContent>
                      </Card>
                    );
                  }
                  return null;
                }}
              />
              <Line
                type="linear"
                dataKey="amount"
                stroke="hsl(var(--primary))"
                strokeWidth={2}
                dot={{
                  fill: "hsl(var(--primary))",
                  r: 4,
                }}
                activeDot={{
                  r: 6,
                }}
              >
                <LabelList
                  position="top"
                  offset={12}
                  className="fill-foreground"
                  fontSize={12}
                  formatter={(value: string) => `$${value}`}
                />
              </Line>
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="leading-none text-muted-foreground">
          Showing each expense item over time
        </div>
      </CardFooter>
    </Card>
  );
}
