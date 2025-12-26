"use client";

import Image from "next/image";
import { useState } from "react";
import CO2Smoke from "@/components/CO2Smoke";

export default function Home() {
  const [active, setActive] = useState(false);

  return (
    <main className="pb-24">
      {/* ================= HERO SECTION ================= */}
      <section className="max-w-6xl mx-auto px-6 pt-24 grid md:grid-cols-2 gap-14 items-center">
        {/* LEFT: STORY */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-green-700 leading-tight">
            CarbonTrack
          </h1>

          <p className="mt-4 text-xl font-medium">Measure. Reduce. Offset.</p>

          <p className="mt-6 text-gray-600">
            Every company leaves a carbon footprint.
            <br />
            <span className="font-semibold text-gray-800">
              Most never measure it.
            </span>
          </p>

          <p className="mt-4 text-gray-600">
            CarbonTrack helps organizations understand their emissions, make
            better decisions, and take real climate action — without unnecessary
            complexity.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="/calculator"
              className="bg-green-600 text-white px-8 py-3 rounded-xl font-semibold text-center"
            >
              Start Measuring
            </a>

            <a
              href="/dashboard"
              className="border border-green-600 text-green-600 px-8 py-3 rounded-xl font-semibold text-center"
            >
              View Dashboard
            </a>
          </div>
        </div>

        {/* RIGHT: IMAGE + 3D + CO₂ */}
        <div className="relative perspective-1000">
          <div
            className="
              relative
              rounded-2xl
              overflow-hidden
              bg-white
              shadow-xl
              transform
              transition-transform
              duration-500
              md:hover:rotate-x-2
              md:hover:-rotate-y-2
              md:hover:scale-[1.02]
            "
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
            onTouchStart={() => setActive(true)}
            onTouchEnd={() => setActive(false)}
          >
            <Image
              src="/carbon-footprint-v2.jpg"
              alt="Global carbon footprint visualization"
              width={900}
              height={550}
              priority
              className="
                w-full
                h-[320px]
                md:h-[420px]
                object-contain
              "
            />

            {/* CO₂ Smoke Overlay */}
            <CO2Smoke active={active} />
          </div>
        </div>
      </section>

      {/* ================= WHY IT MATTERS ================= */}
      <section className="mt-32 max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold">Why This Matters</h2>

        <p className="mt-6 text-gray-600 text-lg">
          Climate impact isn’t abstract anymore.
        </p>

        <p className="mt-4 text-gray-600">
          Energy usage, transportation, logistics, and operations quietly add
          up. Most organizations lack visibility into their real impact.
        </p>

        <p className="mt-4 font-medium text-gray-800">
          You can’t reduce what you don’t measure.
        </p>
      </section>

      {/* ================= VALUES ================= */}
      <section className="mt-28 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          What We Care About
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Clarity",
              desc: "Carbon data should be understandable, not overwhelming.",
            },
            {
              title: "Action",
              desc: "Insights must lead to real, measurable change.",
            },
            {
              title: "Progress",
              desc: "Sustainability is a journey, not a checkbox.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-600 mt-3">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= HOW IT HELPS ================= */}
      <section className="mt-32 bg-green-50 py-24 px-6">
        <h2 className="text-3xl font-bold text-center mb-16">
          How CarbonTrack Helps
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
          {[
            "Track emissions across energy, fuel, and transport",
            "Visual dashboards for instant understanding",
            "Actionable recommendations to reduce impact",
            "Verified offset opportunities",
            "Gamified badges to motivate progress",
          ].map((text) => (
            <div
              key={text}
              className="bg-white p-6 rounded-xl shadow text-gray-700"
            >
              ✔ {text}
            </div>
          ))}
        </div>
      </section>

      {/* ================= PARTNERSHIPS ================= */}
      <section className="mt-32 max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Partnerships We Believe In</h2>

        <p className="text-gray-600">
          Real climate impact requires collaboration.
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[
            "Renewable energy providers",
            "Reforestation & climate NGOs",
            "Sustainable supply-chain partners",
          ].map((p) => (
            <div key={p} className="bg-white p-6 rounded-xl shadow">
              {p}
            </div>
          ))}
        </div>
      </section>

      {/* ================= PRICING ================= */}
      <section className="mt-32 bg-gray-50 py-24 px-6">
        <h2 className="text-3xl font-bold text-center mb-16">Simple Pricing</h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Starter",
              price: "Free",
              desc: "For individuals and small teams",
            },
            {
              title: "Growth",
              price: "₹999 / month",
              desc: "For companies serious about reduction",
            },
            {
              title: "Enterprise",
              price: "Custom",
              desc: "Advanced reporting and CSR insights",
            },
          ].map((plan) => (
            <div key={plan.title} className="bg-white p-8 rounded-2xl shadow">
              <h3 className="font-semibold text-lg">{plan.title}</h3>
              <p className="text-2xl font-bold mt-2">{plan.price}</p>
              <p className="text-gray-600 mt-3">{plan.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="mt-32 px-6 text-center">
        <h2 className="text-3xl font-bold">
          Sustainability Starts With Visibility
        </h2>

        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          CarbonTrack is built for teams that want to understand their impact
          and take responsibility — one decision at a time.
        </p>

        <div className="mt-8">
          <a
            href="/calculator"
            className="bg-green-600 text-white px-10 py-4 rounded-xl font-semibold"
          >
            Start Tracking Your Impact
          </a>
        </div>
      </section>
    </main>
  );
}
