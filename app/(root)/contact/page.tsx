import Image from "next/image";

export default function ContactPage() {
  const features = [
    {
      icon: "/shipping.svg",
      title: "Fast SHIPPING",
      subtitle: "From All around the world",
    },
    {
      icon: "/cart.svg",
      title: "Order Online",
      subtitle: "From any where",
    },
    {
      icon: "/support.svg",
      title: "24/7 SUPPORT",
      subtitle: "Unlimited Support",
    },
    {
      icon: "/success.svg",
      title: "100% SAFE",
      subtitle: "View our benefits",
    },
    {
      icon: "/purchases.svg",
      title: "FREE RETURNS",
      subtitle: "Track or off orders",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 font-sans">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center mb-4">Contact Us</h1>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
        We are here to answer any questions you may have about our products and
        services. Reach out to us and we&apos;ll respond as soon as we can.
      </p>

      {/* Contact Info Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-gray-100 p-6 rounded-lg text-center shadow">
          <h2 className="font-semibold text-lg mb-2">Call Us</h2>
          <p className="text-gray-700">+86 4 123 4567</p>
          <p className="text-gray-700">Mon - Fri, 9am - 6pm</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg text-center shadow">
          <h2 className="font-semibold text-lg mb-2">Email Us</h2>
          <p className="text-gray-700">info@xx.com</p>
          <p className="text-gray-700">support@xx.com</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg text-center shadow">
          <h2 className="font-semibold text-lg mb-2">Visit Us</h2>
          <p className="text-gray-700">Office 123, Business Bay</p>
          <p className="text-gray-700">Guangzhou, China</p>
        </div>
      </div>

      {/* Map Image */}
      <div className="relative w-full h-64 rounded-lg overflow-hidden">
        <Image
          src="/map-placeholder.jpg" // Replace with your static map image
          alt="Map location"
          fill
          className="object-cover"
        />
      </div>

      {/* Bottom Section */}
      <div className="bg-gray-100 py-10 mt-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
          {features.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <Image
                src={item.icon}
                alt={item.title}
                width={64}
                height={64}
                className="mb-3"
              />
              <h3 className="font-bold text-lg">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
