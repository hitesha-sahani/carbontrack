"use client";

import { useEffect, useState } from "react";
import TopBar from "@/components/TopBar";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

type CarbonData = {
  electricity: number;
  fuel: number;
  transport: number;
  total: number;
};

export default function Dashboard() {
  const [data, setData] = useState<CarbonData | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("carbontrack:data");
    if (stored) {
      setData(JSON.parse(stored));
    }
  }, []);

  if (!data) {
    return (
      <>
        <TopBar title="Dashboard" />
        <div className="px-6 pt-16 text-center text-gray-600">
          <p>No calculation found.</p>
          <p className="mt-2">Use the calculator to see your impact.</p>
        </div>
      </>
    );
  }

  const pieData = [
    { name: "Electricity", value: data.electricity },
    { name: "Fuel", value: data.fuel },
    { name: "Transport", value: data.transport },
  ];

  const sorted = [...pieData].sort((a, b) => b.value - a.value);

  const topSource = sorted[0].name;

  const recommendations: Record<string, string[]> = {
    Electricity: [
      "Switch to energy-efficient appliances",
      "Adopt renewable electricity where possible",
      "Reduce peak-hour energy usage",
    ],
    Fuel: [
      "Optimize fuel consumption",
      "Reduce unnecessary travel",
      "Switch to cleaner fuel alternatives",
    ],
    Transport: [
      "Encourage public or shared transport",
      "Adopt remote or hybrid work",
      "Transition to electric vehicles",
    ],
  };

  return (
    <>
      <TopBar title="Dashboard" />

      <div className="px-4 pt-4 pb-24 space-y-6">
        {/* SUMMARY */}
        <div className="bg-white p-5 rounded-xl shadow">
          <p className="text-gray-600">Estimated Monthly Emissions</p>
          <p className="text-3xl font-bold text-green-700">
            {Math.round(data.total)} kg CO₂
          </p>
        </div>

        {/* BREAKDOWN */}
        <div className="bg-white p-4 rounded-xl shadow h-[260px]">
          <p className="mb-2 font-semibold">Emission Breakdown</p>

          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                cx="50%"
                cy="50%"
                outerRadius={80}
              >
                {pieData.map((_, i) => (
                  <Cell key={i} fill={["#16a34a", "#22c55e", "#86efac"][i]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* HIGH IMPACT AREAS */}
        <div className="bg-white p-5 rounded-xl shadow">
          <h3 className="font-semibold mb-3">High-impact areas to reduce</h3>

          <p className="text-sm text-gray-600 mb-4">
            Your largest emission source is{" "}
            <span className="font-medium">{topSource}</span>. Focusing here can
            lead to the biggest reductions.
          </p>

          <ul className="space-y-3">
            {recommendations[topSource].map((rec) => (
              <li
                key={rec}
                className="flex items-start gap-2 text-sm text-gray-700"
              >
                <span className="text-green-600 mt-1">✔</span>
                {rec}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
