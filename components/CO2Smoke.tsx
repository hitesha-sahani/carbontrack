"use client";
import { useEffect, useState } from "react";

type Particle = {
  id: number;
  xOffset: number;
  size: number;
  delay: number;
};

export default function CO2Smoke({ active }: { active: boolean }) {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    if (!active) return;

    const interval = setInterval(() => {
      setParticles((prev) => [
        ...prev,
        {
          id: Date.now(),
          xOffset: Math.random() * 60 - 30,
          size: Math.random() * 16 + 18,
          delay: Math.random() * 0.5,
        },
      ]);
    }, 350);

    return () => clearInterval(interval);
  }, [active]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full animate-smoke-heavy"
          style={{
            left: "50%",
            top: "50%",
            width: p.size,
            height: p.size,
            marginLeft: p.xOffset,
            background:
              "radial-gradient(circle at 30% 30%, rgba(180,180,180,0.8), rgba(80,80,80,0.45))",
            filter: "blur(6px)",
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
