import TopBar from "@/components/TopBar";

export default function Offsets() {
  const items = [
    {
      title: "Tree Plantation",
      desc: "Offset emissions naturally by planting trees",
    },
    {
      title: "Solar Energy Adoption",
      desc: "Switch to clean renewable energy sources",
    },
    {
      title: "Recycling Programs",
      desc: "Reduce waste and improve material reuse",
    },
  ];

  return (
    <>
      <TopBar title="Offset Suggestions" />

      <div className="px-4 pt-4">
        {items.map((item) => (
          <div
            key={item.title}
            className="bg-white p-4 rounded-xl shadow mb-4"
          >
            <h3 className="font-semibold text-lg">{item.title}</h3>
            <p className="text-gray-600 text-sm mt-1">{item.desc}</p>

            <button className="mt-3 text-green-600 font-semibold">
              Pledge Offset →
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
