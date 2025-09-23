"use client";

import Card from "./Card";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, BarChart, Bar, Legend } from "recharts";
import { ReactNode } from "react";

interface Props {
  title: ReactNode;
  subtitle?: ReactNode;
  type?: "line" | "bar";
  data: any[];
  xKey: string;
  yKeys: { key: string; color?: string; label?: string }[];
  height?: number;
}

export default function ChartCard({ title, subtitle, type = "line", data, xKey, yKeys, height = 260 }: Props) {
  return (
    <Card title={title} subtitle={subtitle}>
      <div style={{ width: "100%", height }}>
        <ResponsiveContainer>
          {type === "line" ? (
            <LineChart data={data}>
              <XAxis dataKey={xKey} tickLine={false} axisLine={false} />
              <YAxis tickLine={false} axisLine={false} />
              <Tooltip />
              <Legend />
              {yKeys.map(({ key, color = "#4f46e5" }) => (
                <Line key={key} type="monotone" dataKey={key} stroke={color} strokeWidth={2} dot={false} />
              ))}
            </LineChart>
          ) : (
            <BarChart data={data}>
              <XAxis dataKey={xKey} tickLine={false} axisLine={false} />
              <YAxis tickLine={false} axisLine={false} />
              <Tooltip />
              <Legend />
              {yKeys.map(({ key, color = "#4f46e5" }) => (
                <Bar key={key} dataKey={key} fill={color} radius={[6, 6, 0, 0]} />
              ))}
            </BarChart>
          )}
        </ResponsiveContainer>
      </div>
    </Card>
  );
}