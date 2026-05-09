"use client";

import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  Bar,
} from "recharts";

interface SavingsChartProps {
  currentSpend: number;
  optimizedSpend: number;
}

export default function SavingsChart({
  currentSpend,
  optimizedSpend,
}: SavingsChartProps) {
  const data = [
    {
      name: "Current",
      amount: currentSpend,
    },
    {
      name: "Optimized",
      amount: optimizedSpend,
    },
  ];

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
      <h3 className="text-2xl font-bold text-white">
        Spend Comparison
      </h3>

      <div className="mt-8 h-[350px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />

            <XAxis dataKey="name" stroke="#a1a1aa" />

            <YAxis stroke="#a1a1aa" />

            <Tooltip />

            <Bar dataKey="amount" radius={[12, 12, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}