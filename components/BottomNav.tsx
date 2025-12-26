import Link from "next/link";

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 w-full bg-white border-t flex justify-around py-3 text-sm">
      <Link href="/calculator">Calculator</Link>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/offsets">Offsets</Link>
      <Link href="/badges">Badges</Link>
    </nav>
  );
}
