"use client";

import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  Bar,
  Legend,
  Cell,
} from "recharts";

interface SavingsChartProps {
  currentSpend: number;
  optimizedSpend: number;
}

const COLORS = {
  current: "#ef4444",
  optimized: "#22c55e",
};

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border border-white/20 bg-black/90 p-3 backdrop-blur-xl">
        <p className="text-sm font-semibold text-white">{payload[0].payload.name}</p>
        <p className="text-lg font-bold text-blue-400">
          ${(payload[0].value || 0).toLocaleString()}
        </p>
      </div>
    );
  }
  return null;
};

export default function SavingsChart({
  currentSpend,
  optimizedSpend,
}: SavingsChartProps) {
  const data = [
    {
      name: "Current Spend",
      amount: currentSpend,
      fill: COLORS.current,
    },
    {
      name: "Optimized Spend",
      amount: optimizedSpend,
      fill: COLORS.optimized,
    },
  ];

  const savings = currentSpend - optimizedSpend;
  const savingsPercent = ((savings / currentSpend) * 100).toFixed(1);

  return (
    <div className="rounded-2xl border border-white/10 bg-linear-to-br from-white/8 to-white/2 p-8 backdrop-blur-xl">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-white">Monthly Spend Comparison</h3>
        <div className="mt-4 flex items-end gap-4">
          <div>
            <p className="text-sm font-medium text-zinc-400">Total Potential Savings</p>
            <p className="mt-1 text-3xl font-bold bg-linear-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
              ${savings.toLocaleString()}
            </p>
          </div>
          <div className="rounded-lg bg-emerald-500/10 border border-emerald-500/30 px-4 py-2">
            <p className="text-sm font-semibold text-emerald-400">{savingsPercent}% reduction</p>
          </div>
        </div>
      </div>

      <div className="h-75 -mx-2">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 0, bottom: 20 }}
          >
            <defs>
              <linearGradient id="colorCurrent" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#dc2626" stopOpacity={0.3} />
              </linearGradient>
              <linearGradient id="colorOptimized" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#22c55e" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#16a34a" stopOpacity={0.3} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
            <XAxis
              dataKey="name"
              stroke="#a1a1aa"
              tick={{ fontSize: 12, fontWeight: 500 }}
              axisLine={{ stroke: "#27272a" }}
            />
            <YAxis
              stroke="#a1a1aa"
              tick={{ fontSize: 12 }}
              axisLine={{ stroke: "#27272a" }}
              label={{ value: "Monthly Spend ($)", angle: -90, position: "insideLeft" }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar
              dataKey="amount"
              radius={[12, 12, 0, 0]}
              fill="#3b82f6"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}