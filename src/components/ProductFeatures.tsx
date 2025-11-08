import {
  Package,
  Navigation,
  Zap,
  Truck,
  HardHat,
  Battery,
  ChevronsRight,
} from "lucide-react";

export default function ProductFeatures() {
  const features = [
    {
      icon: Package,
      title: "1 Ton",
      subtitle: "Payload Capacity",
      bgColor: "bg-blue-50",
    },
    {
      icon: Navigation,
      title: "180 Km",
      subtitle: "Real Range*",
      bgColor: "bg-blue-50",
    },
    {
      icon: Zap,
      title: "Fast Charging",
      subtitle: "50 km in 15 minutes",
      bgColor: "bg-blue-50",
    },
    {
      icon: Truck,
      title: "Load Body",
      subtitle: "up to 8.3 ft / 220 cu ft",
      bgColor: "bg-blue-50",
    },
    {
      icon: HardHat,
      title: "Rugged Build",
      subtitle: "2.5 mm Ladder Frame",
      bgColor: "bg-blue-50",
    },
    {
      icon: Battery,
      title: "IP67 Battery",
      subtitle: "Battery & Electronics",
      bgColor: "bg-blue-50",
    },
  ];

  const cornerCutClipPath =
    "polygon(8px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 8px) 100%, 0 100%, 0 6px)";

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* LEFT SECTION */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3 leading-snug">
              World's First 1 Tonne EV Truck
              <br />
              <span className="text-blue-600">Starting at ₹5.99 Lakhs</span>
            </h2>
            <p className="text-gray-600 text-sm mb-5 leading-relaxed">
              With up to 200 km real range (ARAI Certified), CCS fast charging,
              and annual savings of up to ₹1.5 lakh, Turbo 1000 EV delivers more
              value every mile.
            </p>

            {/* Book Button */}
            <button
              className="relative bg-black text-white text-xs font-medium px-5 py-2 tracking-wide transition-all hover:bg-gray-800 focus:outline-none"
              style={{
                clipPath: cornerCutClipPath,
              }}
            >
              <span className="flex items-center space-x-1">
                <span>Book a Test Ride</span>
                <ChevronsRight className="w-4 h-4" />
              </span>
            </button>
          </div>

          {/* RIGHT SECTION - Compact Feature Boxes */}
          <div className="grid grid-cols-2 gap-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`${feature.bgColor} flex items-center p-3 rounded-md hover:shadow-md transition-all duration-200 hover:-translate-y-1`}
              >
                <feature.icon className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                <div className="flex flex-col leading-tight">
                  <h3 className="text-sm font-bold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-xs">{feature.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
