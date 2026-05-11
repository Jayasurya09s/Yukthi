"use client";

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
} from "recharts";

interface SpendChartProps {
  data: Array<{
    name: string;
    value: number;
  }>;
}

const COLORS = [
  "#3b82f6",
  "#06b6d4",
  "#8b5cf6",
  "#ec4899",
  "#f59e0b",
  "#10b981",
  "#6366f1",
  "#14b8a6",
];

type TooltipProps = {
  active?: boolean;
  payload?: Array<{ value: number; name: string }>;
};

const CustomTooltip = ({ active, payload }: TooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border border-white/20 bg-black/90 p-3 backdrop-blur-xl">
        <p className="text-sm font-semibold text-white">{payload[0].name}</p>
        <p className="text-lg font-bold text-blue-400">
          ${(payload[0].value || 0).toLocaleString()}
        </p>
      </div>
    );
  }
  return null;
};

export default function SpendChart({ data }: SpendChartProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-8 backdrop-blur-xl">
      <h3 className="text-2xl font-bold text-white">Spend by Tool</h3>

      <div className="mt-8 h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) =>
                `${name}: ${((percent ?? 0) * 100).toFixed(0)}%`
              }
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend
              wrapperStyle={{
                paddingTop: "20px",
              }}
              formatter={(value: string) => (
                <span className="text-sm text-zinc-300">{value}</span>
              )}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
