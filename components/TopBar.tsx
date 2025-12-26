"use client";

import { useRouter } from "next/navigation";

export default function TopBar({ title }: { title: string }) {
  const router = useRouter();

  return (
    <div className="flex items-center gap-3 px-4 py-3 bg-white border-b sticky top-0 z-10">
      <button
        onClick={() => router.back()}
        className="text-green-600 text-lg font-semibold"
      >
        ←
      </button>

      <h1 className="text-lg font-bold">{title}</h1>
    </div>
  );
}
