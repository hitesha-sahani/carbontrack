"use client";

import { useEffect, useState } from "react";
import TopBar from "@/components/TopBar";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

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

  const pieValues = [data.electricity, data.fuel, data.transport];

  const pieLabels = ["Electricity", "Fuel", "Transport"];

  const pieData = {
    labels: pieLabels,
    datasets: [
      {
        data: pieValues,
        backgroundColor: ["#16a34a", "#22c55e", "#86efac"],
        borderWidth: 0,
      },
    ],
  };

  const sortedSources = [
    { name: "Electricity", value: data.electricity },
    { name: "Fuel", value: data.fuel },
    { name: "Transport", value: data.transport },
  ].sort((a, b) => b.value - a.value);

  const topSource = sortedSources[0].name;

  const recommendations: Record<string, string[]> = {
    Electricity: [
      "Switch to energy-efficient appliances",
      "Adopt renewable electricity sources",
      "Reduce peak-hour power usage",
    ],
    Fuel: [
      "Optimize fuel consumption",
      "Reduce unnecessary vehicle use",
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
        <div className="bg-white p-4 rounded-xl shadow">
          <p className="mb-4 font-semibold">Emission Breakdown</p>

          <div className="max-w-[260px] mx-auto">
            <Pie data={pieData} />
          </div>
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
