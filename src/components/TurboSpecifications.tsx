import { useState } from "react";
import { ChevronDown, ChevronUp, ChevronsRight } from "lucide-react";

interface SpecItem {
  label: string;
  value: string;
}

interface Variant {
  id: string;
  name: string;
  img: string;
}

export default function TurboSpecifications(): JSX.Element {
  const [activeVariant, setActiveVariant] = useState<string>("fc");
  const [openSection, setOpenSection] = useState<string | null>("model");

  const variants: Variant[] = [
    {
      id: "city",
      name: "Turbo EV 1000 City",
      img: "https://www.eulermotors.com/_next/image?url=https%3A%2F%2Feuler-assets.s3.ap-south-1.amazonaws.com%2FTurbo_60_0a79644464.png&w=640&q=75",
    },
    {
      id: "maxx",
      name: "Turbo EV 1000 Maxx",
      img: "im2.webp",
    },
    {
      id: "fc",
      name: "Turbo EV 1000 FC",
      img: "im3.webp",
    },
  ];

  const specs: Record<string, SpecItem[]> = {
    model: [
      { label: "Overall Width", value: "1535 mm" },
      { label: "Overall Height", value: "2500 mm" },
      { label: "Overall Length", value: "4100 mm" },
      { label: "Gross Vehicle Weight", value: "2100 Kg" },
    ],
    motor: [
      { label: "Type", value: "Three-phase AC induction motor" },
      { label: "Max Power", value: "12 kW" },
      { label: "Max Torque", value: "88 Nm" },
    ],
    features: [
      { label: "Telematics", value: "Yes" },
      { label: "Instrument Cluster", value: "4G Xavier™" },
      { label: "VCU", value: "Vehicle Control Unit" },
    ],
    performance: [
      { label: "Top Speed", value: "80 km/h" },
      { label: "Range", value: "120 km" },
    ],
    brake: [
      { label: "Front Brake", value: "Disc" },
      { label: "Rear Brake", value: "Drum" },
    ],
    battery: [
      { label: "Battery Pack", value: "ArcReactor™ Li-ion" },
      { label: "Battery Capacity", value: "13 kWh" },
    ],
    suspension: [
      { label: "Front", value: "Leaf Spring" },
      { label: "Rear", value: "Hydraulic Shock Absorbers" },
    ],
  };

  const sectionTitles: string[] = [
    "Model",
    "Motor",
    "Features",
    "Performance",
    "Specifications",
    "Brake System",
    "Battery Powerpack",
    "Suspension Systems",
  ];

  const cornerCutClipPath =
    "polygon(8px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 8px) 100%, 0 100%, 0 6px)";

  return (
    <section className="min-h-[80vh] bg-gradient-to-b from-blue-50 via-white to-blue-100 text-black py-10 md:py-16 transition-all duration-500">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* LEFT SIDE — Title + Variants + Image + Buttons */}
          <div>
            {/* Title */}
            <div className="mb-6 text-center lg:text-left">
              <button className="px-3 md:px-4 py-1 bg-blue-100 text-blue-600 text-xs md:text-sm font-medium rounded-full mb-3">
                COMPARE VARIANTS
              </button>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900">
                Euler Turbo <span className="text-blue-600">Specifications</span>
              </h2>
            </div>

            {/* Variant Boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {variants.map((variant) => (
                <button
                  key={variant.id}
                  onClick={() => setActiveVariant(variant.id)}
                  className={`rounded-2xl border flex flex-col items-center overflow-hidden transition-all duration-300 transform ${
                    activeVariant === variant.id
                      ? "border-blue-500 shadow-lg scale-105"
                      : "border-gray-200 hover:border-blue-500 hover:scale-105 hover:shadow-[0_0_10px_rgba(37,99,235,0.25)]"
                  }`}
                >
                  <div className="bg-gray-900 w-full flex justify-center items-center h-24 sm:h-28">
                    <img
                      src={variant.img}
                      alt={variant.name}
                      className="w-20 h-12 sm:w-24 sm:h-14 object-contain"
                    />
                  </div>
                  <div className="bg-white w-full text-center py-2 sm:py-3">
                    <span
                      className={`text-xs sm:text-sm font-medium ${
                        activeVariant === variant.id
                          ? "text-blue-600"
                          : "text-gray-800"
                      }`}
                    >
                      {variant.name}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* Truck Image */}
            <div className="flex justify-center mb-8">
              <img
                src={
                  variants.find((v) => v.id === activeVariant)?.img ||
                  variants[0].img
                }
                alt="Euler Turbo Variant"
                className="w-72 sm:w-[380px] md:w-[420px] h-auto object-contain"
              />
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 sm:gap-5 mt-4">
              <button
                className="relative bg-black text-white text-xs sm:text-sm font-medium px-5 sm:px-6 py-2 tracking-wide transition-all hover:bg-gray-800 focus:outline-none"
                style={{ clipPath: cornerCutClipPath }}
              >
                <span className="flex items-center space-x-1 justify-center">
                  <span>Book a Test Ride</span>
                  <ChevronsRight className="w-4 h-4" />
                </span>
              </button>

              <button
                className="relative bg-blue-600 text-white text-xs sm:text-sm font-medium px-5 sm:px-6 py-2 tracking-wide transition-all hover:bg-blue-700 focus:outline-none"
                style={{ clipPath: cornerCutClipPath }}
              >
                <span className="flex items-center space-x-1 justify-center">
                  <span>Locate Showroom Near Me</span>
                  <ChevronsRight className="w-4 h-4" />
                </span>
              </button>
            </div>
          </div>

          {/* RIGHT SIDE — Accordion */}
          <div className="w-full">
            {sectionTitles.map((title) => {
              const key = title
                .toLowerCase()
                .replace(/\s+/g, "")
                .replace("system", "")
                .replace("systems", "")
                .replace("powerpack", "battery");
              const items = specs[key];
              const isOpen = openSection === key;

              return (
                <div
                  key={key}
                  className="border border-gray-200 bg-white rounded-xl mb-3 shadow-sm transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenSection(isOpen ? null : key)}
                    className="w-full flex justify-between items-center px-4 sm:px-6 py-3 text-sm sm:text-base font-medium text-gray-800 hover:text-blue-600 transition-colors"
                  >
                    {title}
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
                    )}
                  </button>

                  {isOpen && items && (
                    <div className="bg-gray-50 px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-700 space-y-2">
                      {items.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex justify-between border-b border-gray-200 pb-2 last:border-0"
                        >
                          <span>{item.label}</span>
                          <span className="font-medium text-gray-900">
                            {item.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
