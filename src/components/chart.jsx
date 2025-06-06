"use client";
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", value: 10 },
  { day: "Tue", value: 40 },
  { day: "Wed", value: 30 },
  { day: "Thu", value: 60 },
  { day: "Fri", value: 50 },
  { day: "Sat", value: 80 },
  { day: "Sun", value: 70 },
];

export default function GradientAreaChart() {
  return (
    <div className="w-full h-[300px] bg-white rounded-md shadow p-4">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#185170" stopOpacity={0.4} />
              <stop offset="100%" stopColor="#FBFBFB" stopOpacity={0.05} />
            </linearGradient>
          </defs>
         
          <XAxis dataKey="day" />
          <YAxis domain={[0, 80]} ticks={[10, 20, 30, 40, 50, 60, 70, 80]} />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#185170"
            fill="url(#gradient)"
            strokeWidth={2}
            dot={{ r: 3 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
