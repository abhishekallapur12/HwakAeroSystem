import { useState } from "react";
import { Shield, Gauge, Zap, Building } from "lucide-react";

export default function SmartTech() {
  const [activeTab, setActiveTab] = useState("technology");

  const tabContent = {
    technology: {
      title: "Next-gen Control & Connectivity",
      desc: "Advanced electronics built for intelligent driving and control.",
      img: "https://www.eulermotors.com/_next/image?url=https%3A%2F%2Feuler-assets.s3.ap-south-1.amazonaws.com%2FTurbo_Web_Banner2_1080x510_copy_9d58b81ef3.jpg&w=1080&q=75",
      features: [
        "ArcReactor™ Battery Pack",
        "Xavier™ 4G Instrument Cluster",
        "Shepherd™ Telematics",
        "Vehicle Control Unit (VCU)",
      ],
    },
    safety: {
      title: "Advanced Safety Systems",
      desc: "Engineered to protect you and your cargo under all conditions.",
      img: "as.webp",
      features: [
        "Reinforced Steel Frame",
        "ABS + Traction Control",
        "Crash Protection Design",
        "Overcurrent Battery Shielding",
      ],
    },
    efficiency: {
      title: "Optimized for Efficiency",
      desc: "Delivering maximum range with minimal energy use.",
      img: "https://www.eulermotors.com/_next/image?url=https%3A%2F%2Feuler-assets.s3.ap-south-1.amazonaws.com%2FTurbo_battery_806x806_13_cc05f6e459.jpg&w=1080&q=75",
      features: [
        "Regenerative Braking",
        "Energy Recovery Drive System",
        "Smart Range AI Estimation",
        "Eco+ Performance Mode",
      ],
    },
    performance: {
      title: "Pure Electric Power",
      desc: "Powerful acceleration and smooth control with zero emissions.",
      img: "https://www.eulermotors.com/_next/image?url=https%3A%2F%2Feuler-assets.s3.ap-south-1.amazonaws.com%2FTurbo_battery_806x806_13_cc05f6e459.jpg&w=1080&q=75",
      features: [
        "High Torque Motor",
        "Instant Acceleration",
        "Advanced Cooling System",
        "Performance-Grade Battery",
      ],
    },
    build: {
      title: "Rugged Build Quality",
      desc: "Built tough to handle any terrain or payload demands.",
      img: "as.webp",
      features: [
        "High Strength Ladder Frame",
        "Durable Load Body",
        "Waterproof Electronics",
        "Long-Lasting Materials",
      ],
    },
  };

  const tabs = [
    { id: "technology", label: "Technology", icon: Zap },
    { id: "safety", label: "Safety", icon: Shield },
    { id: "efficiency", label: "Efficiency", icon: Gauge },
    { id: "performance", label: "Performance", icon: Gauge },
    { id: "build", label: "Build Quality", icon: Building },
  ];

  const displayData = tabContent[activeTab as keyof typeof tabContent];

  return (
    <section className="min-h-screen flex flex-col justify-center bg-black text-white transition-all duration-500 py-10 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* LEFT SIDE — Text Section */}
          <div className="transition-all duration-500 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-3 text-blue-400">
              {displayData.title}
            </h2>
            <p className="text-gray-400 text-sm sm:text-base mb-6 font-light max-w-md mx-auto lg:mx-0">
              {displayData.desc}
            </p>

            {/* Feature Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mb-6 transition-all duration-500 max-w-md mx-auto lg:mx-0">
              {displayData.features.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-start space-x-2 hover:text-blue-400 transition-colors"
                >
                  <span className="text-blue-400 text-base leading-none">•</span>
                  <span className="text-gray-300 text-sm sm:text-base font-light leading-snug">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE — Image */}
          <div className="relative flex justify-center transition-all duration-500">
            <div className="rounded-2xl overflow-hidden border border-gray-700 w-64 sm:w-72 md:w-80 lg:w-96">
              <img
                src={displayData.img}
                alt={`${activeTab} visual`}
                className="w-full h-56 sm:h-64 md:h-72 lg:h-80 object-cover rounded-2xl transition-all duration-500"
              />
            </div>
          </div>
        </div>

        {/* TAB SECTION */}
        <div className="mt-10 sm:mt-16">
          <div className="border border-white/30 rounded-xl px-4 sm:px-10 py-3 sm:py-4 max-w-7xl mx-auto bg-black/40 backdrop-blur-sm transition-all duration-500">
            <div className="flex flex-col sm:flex-row justify-center flex-wrap gap-x-6 sm:gap-x-10 md:gap-x-14 gap-y-3 sm:gap-y-4 relative">
              {tabs.map((tab) => (
                <div key={tab.id} className="relative">
                  {/* Hover/Active Line */}
                  <div
                    className={`absolute -top-2 left-0 right-0 h-[2px] rounded-full transition-all duration-300 ${
                      activeTab === tab.id ? "bg-blue-400" : "bg-transparent"
                    }`}
                  ></div>

                  {/* Tab Button */}
                  <button
                    onClick={() => setActiveTab(tab.id)} // tap for mobile
                    onMouseEnter={() =>
                      window.innerWidth > 1024 && setActiveTab(tab.id)
                    }
                    className={`flex items-center justify-center sm:justify-start space-x-2 px-3 sm:px-6 py-2 text-sm font-light transition-all duration-300 ${
                      activeTab === tab.id
                        ? "text-white"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    <tab.icon className="w-4 h-4" />
                    <span>{tab.label}</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
