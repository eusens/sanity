// app/manufacturers/page.tsx
import Image from "next/image";

const manufacturers = [
  {
    name: "Omron",
    image: "/omron.jpeg",
    description: "Specializes in automation components, sensors, and PLCs.",
  },
  {
    name: "Mitsubishi Electric",
    image: "/mitsubishi.jpeg",
    description: "Global leader in factory automation and drive systems.",
  },
  {
    name: "Fuji Electric",
    image: "/fuji.jpeg",
    description: "Provides inverters, HMI, and industrial control solutions.",
  },
  {
    name: "Proface HMI",
    image: "/proface.jpg",
    description: "Renowned for high-quality human-machine interfaces.",
  },
  {
    name: "Siemens",
    image: "/siemens.jpeg",
    description: "Innovative industrial automation and control products.",
  },
  {
    name: "ABB",
    image: "/abb.jpeg",
    description: "Offers robotics, automation, and electrical products.",
  },
  {
    name: "Schneider Electric",
    image: "/schneider.jpeg",
    description: "Specializes in energy management and automation.",
  },
  {
    name: "Rockwell Automation",
    image: "/rockwell.jpeg",
    description: "Leader in industrial automation and digital transformation.",
  },
  {
    name: "Panasonic",
    image: "/panasonic.jpeg",
    description: "Provides automation, sensors, and industrial components.",
  },
];

export default function ManufacturersPage() {
  return (
    <section className="px-6 py-10 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-left mb-10">The Brands We Sell</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {manufacturers.map((m, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-5 flex flex-col items-center text-center"
          >
            <Image
              src={m.image}
              alt={m.name}
              width={200}
              height={200}
              className="rounded-lg object-cover mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{m.name}</h2>
            <p className="text-gray-600">{m.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
