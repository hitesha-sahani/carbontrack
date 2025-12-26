import TopBar from "@/components/TopBar";

export default function Badges() {
  const badges = [
    {
      name: "Green Starter",
      desc: "Started tracking carbon emissions",
    },
    {
      name: "Conscious Company",
      desc: "Took steps to reduce emissions",
    },
    {
      name: "Climate Hero",
      desc: "Actively offset carbon footprint",
    },
  ];

  return (
    <>
      <TopBar title="Badges" />

      <div className="px-4 pt-4">
        {badges.map((badge) => (
          <div
            key={badge.name}
            className="bg-white p-4 rounded-xl shadow mb-4"
          >
            <h3 className="font-semibold text-lg">🏅 {badge.name}</h3>
            <p className="text-gray-600 text-sm mt-1">
              {badge.desc}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
