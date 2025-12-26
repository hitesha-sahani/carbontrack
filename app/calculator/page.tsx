"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import TopBar from "@/components/TopBar";

export default function Calculator() {
  const router = useRouter();

  // ✅ ALL HOOKS INSIDE THE COMPONENT
  const [electricity, setElectricity] = useState("");
  const [fuel, setFuel] = useState("");
  const [transport, setTransport] = useState("");
  const [loading, setLoading] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const calculateEmissions = () => {
    setLoading(true);

    const electricityEmission = Number(electricity) * 0.82;
    const fuelEmission = Number(fuel) * 2.31;
    const transportEmission = Number(transport) * 0.21;

    const total = electricityEmission + fuelEmission + transportEmission;

    const data = {
      electricity: electricityEmission,
      fuel: fuelEmission,
      transport: transportEmission,
      total,
      date: new Date().toISOString(),
    };

    localStorage.setItem("carbontrack:data", JSON.stringify(data));

    setTimeout(() => {
      router.push("/dashboard");
    }, 600);
  };

  return (
    <>
      <TopBar title="Carbon Calculator" />

      <div className="px-4 pt-4 max-w-md mx-auto">
        <div className="space-y-4">
          <input
            type="number"
            placeholder="Electricity (kWh / month)"
            className="w-full p-3 border rounded-lg"
            value={electricity}
            onChange={(e) => setElectricity(e.target.value)}
          />

          <input
            type="number"
            placeholder="Fuel (liters / month)"
            className="w-full p-3 border rounded-lg"
            value={fuel}
            onChange={(e) => setFuel(e.target.value)}
          />

          <input
            type="number"
            placeholder="Transport (km / month)"
            className="w-full p-3 border rounded-lg"
            value={transport}
            onChange={(e) => setTransport(e.target.value)}
          />

          <button
            onClick={calculateEmissions}
            disabled={loading}
            className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold disabled:opacity-70"
          >
            {loading ? "Calculating..." : "Calculate Emissions"}
          </button>

          {/* ✅ KNOW MORE BUTTON (CORRECT PLACE) */}
          <button
            onClick={() => setShowInfo(true)}
            className="text-sm text-green-700 underline underline-offset-4"
          >
            Know how we calculate emissions →
          </button>
        </div>
      </div>

      {/* ✅ INFO MODAL (INSIDE RETURN) */}
      {showInfo && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-end sm:items-center justify-center">
          <div className="bg-white w-full sm:max-w-lg rounded-t-2xl sm:rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-bold mb-4">
              How CarbonTrack Calculates Emissions
            </h3>

            <p className="text-gray-600 text-sm mb-4">
              CarbonTrack estimates emissions using widely accepted average
              emission factors. These values are commonly used in sustainability
              reporting and carbon accounting.
            </p>

            <div className="space-y-3 text-sm">
              <div>
                <p className="font-semibold">⚡ Electricity</p>
                <p className="text-gray-600">
                  Average grid emission factor:
                  <span className="font-medium"> 0.82 kg CO₂ per kWh</span>
                </p>
              </div>

              <div>
                <p className="font-semibold">⛽ Fuel (Petrol)</p>
                <p className="text-gray-600">
                  Emission factor:
                  <span className="font-medium"> 2.31 kg CO₂ per liter</span>
                </p>
              </div>

              <div>
                <p className="font-semibold">🚗 Transport</p>
                <p className="text-gray-600">
                  Average car travel:
                  <span className="font-medium"> 0.21 kg CO₂ per km</span>
                </p>
              </div>
            </div>

            <p className="mt-4 text-xs text-gray-500">
              Note: These are estimates intended for awareness and
              decision-making. Actual emissions vary by region and efficiency.
            </p>

            <button
              onClick={() => setShowInfo(false)}
              className="mt-6 w-full bg-green-600 text-white py-3 rounded-lg font-semibold"
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </>
  );
}
