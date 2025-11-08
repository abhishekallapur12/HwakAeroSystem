import { Shield, Wifi, Lock, Zap, Cpu, Gauge } from "lucide-react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";

export default function Product3(): JSX.Element {
  return (
    <>
      <Helmet>
        <title>Agri-Hawk Drone 30 | Advanced Agricultural Spraying Drone | Hawk Aero System</title>
        <meta name="description" content="Agri-Hawk Drone 30 is a 30L agricultural precision spraying drone delivering high efficiency crop spraying, dual pump system, modular sensors and radar-based flight safety." />
        <link rel="canonical" href="https://www.hawkaerosystem.co.uk/products" />
      </Helmet>

      <div className="bg-white text-gray-900 font-light overflow-hidden">
      {/* ===== Hero Video Section ===== */}
      <section className="relative h-[90vh] mt-[90px] flex items-center justify-center overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/videos/dro4.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center text-white px-6"
        >
          <h1 className="text-4xl md:text-5xl font-semibold mb-2">
            Agri-Hawk Drone 80
          </h1>
          <p className="text-gray-200 text-base md:text-lg max-w-xl mx-auto">
            A powerful 80L agricultural drone built for precision spraying.
          </p>
        </motion.div>
      </section>

      {/* ===== Technical Specifications Section ===== */}
      <section className="relative py-40 px-6 md:px-16 bg-black overflow-hidden">
        {/* === Grid Background Texture === */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `
              radial-gradient(circle at center, rgba(37,99,235,0.15) 0%, transparent 60%),
              linear-gradient(to right, rgba(37,99,235,0.15) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(37,99,235,0.15) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        ></div>

        {/* Blue Gradient Overlay for Depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-white-900/20 to-transparent pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-semibold text-white mb-4 tracking-wide">
              Technical Specifications
            </h2>
            <p className="text-gray-400 text-sm uppercase tracking-widest">
              Detailed Technical Information For System Integration And Deployment
            </p>
          </motion.div>

          {/* Layout Grid */}
          <div className="grid md:grid-cols-3 gap-16 items-center">
            {/* Left Column */}
            <div className="space-y-12">
              {[
                {
                  icon: <Shield className="w-6 h-6 text-blue-400" />,
                  title: "Durable Casing",
                  desc: "Dust and tamper-resistant carbon fiber frame.",
                },
                {
                  icon: <Wifi className="w-6 h-6 text-blue-400" />,
                  title: "Multi-Mode Connectivity",
                  desc: "Wi-Fi, 4G, and Bluetooth connectivity options.",
                },
                {
                  icon: <Lock className="w-6 h-6 text-blue-400" />,
                  title: "Encrypted Communication",
                  desc: "Ensures secure data transmission over all networks.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.2 }}
                  className="flex items-start gap-5 group cursor-default transition-all"
                >
                  <div className="p-3 rounded-full border border-blue-500 bg-black group-hover:bg-blue-500 group-hover:border-blue-400 transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1 group-hover:text-blue-400 transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Center - Drone Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0. }}
              className="relative flex justify-center items-center"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut",
                }}
                className="relative group"
              >
                <img
                  src="/pics/drone1.avif"
                  alt="Drone Core Module"
                  className="w-full max-w-2xl transform transition-all duration-700 group-hover:scale-110"
                />

                {/* ✨ Hover Glow */}
                <div
                  className="absolute inset-0 rounded-full blur-3xl opacity-0 group-hover:opacity-80 transition-opacity duration-700"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(37,99,235,0.7) 0%, rgba(37,99,235,0) 70%)",
                  }}
                ></div>
              </motion.div>
            </motion.div>

            {/* Right Column */}
            <div className="space-y-12">
              {[
                {
                  icon: <Zap className="w-6 h-6 text-blue-400" />,
                  title: "Power Efficient",
                  desc: "Operates on dual battery system for extended usage.",
                },
                {
                  icon: <Cpu className="w-6 h-6 text-blue-400" />,
                  title: "Custom Access Logic",
                  desc: "Intelligent control with modular configuration options.",
                },
                {
                  icon: <Gauge className="w-6 h-6 text-blue-400" />,
                  title: "High-Precision Sensor",
                  desc: "Supports wind-resistant flight and high-accuracy mapping.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.2 }}
                  className="flex items-start gap-5 group cursor-default transition-all"
                >
                  <div className="p-3 rounded-full border border-blue-500 bg-black group-hover:bg-blue-500 group-hover:border-blue-400 transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1 group-hover:text-blue-400 transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>




{/* ===== Feature Spotlights Section ===== */}
{/* ===== Feature Spotlights Section ===== */}
<section className="bg-white py-32 px-6 md:px-16">
  <div className="max-w-7xl mx-auto text-center mb-20">
    <motion.h2
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.3 }}
      transition={{ duration: 0.8 }}
      className="text-6xl font-light text-gray-900 mb-6 tracking-tight"
    >
      Feature Spotlights
    </motion.h2>
    <motion.p
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.4 }}
      transition={{ duration: 0.8 }}
      className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed"
    >
      Experience reduced maintenance time, enhanced reliability, and precise navigation —
      all designed to simplify operations and maximize productivity.
    </motion.p>
  </div>

  <div className="space-y-28">
    {[
      {
        title: "Cross-Folding Design For Compact Storage Space",
        desc: "The drone features an innovative cross-folding mechanism that significantly reduces its size, making it easy to store and transport without compromising performance.",
        img: "/pics/motor.png",
      },
      {
        title: "Dual Water Pumps Boost Flow and Efficiency",
        desc: "Dual water pumps provide higher flow for efficient spraying and transport operations, enhancing agricultural productivity.",
        img: "/pics/waterpump.png",
      },
      {
        title: "360° Radar System For Safer Flight",
        desc: "Advanced radar technology enables obstacle detection and real-time awareness, ensuring flight safety in complex environments.",
        img: "/pics/radar.png",
      },
      {
        title: "Latch-Type Folding Arms, Easy Storage",
        desc: "Snap-fit folding arms make storage and transportation effortless while maintaining structural rigidity and performance.",
        img: "/pics/latch.png",
      },
      {
        title: "Quick-Release Landing Gear, Fast Maintenance",
        desc: "Quick-detach landing gear enables rapid maintenance and efficient operation during demanding agricultural work.",
        img: "/pics/tank.png",
      },
    ].map((feature, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
        exit={{ opacity: 0, y: -100 }}
        className={`flex flex-col md:flex-row ${
          i % 2 !== 0 ? "md:flex-row-reverse" : ""
        } items-center gap-12 md:gap-20`}
      >
        {/* Image */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative group w-full md:w-1/2"
        >
          <img
            src={feature.img}
            alt={feature.title}
            className="rounded-2xl shadow-xl transition-all duration-700 w-full object-cover"
          />
          <div
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-70 blur-3xl transition-all duration-700"
            style={{
              background:
                "radial-gradient(circle, rgba(59,130,246,0.4) 0%, rgba(59,130,246,0) 70%)",
            }}
          ></div>
        </motion.div>

        {/* Text */}
        <div className="w-full md:w-1/2 text-left">
          <h3 className="text-4xl font-light text-gray-900 mb-4">
            {feature.title}
          </h3>
          <p className="text-gray-600 leading-relaxed text-lg">
            {feature.desc}
          </p>
        </div>
      </motion.div>
    ))}
  </div>
</section>


{/* ===== Drone Dimensions Section ===== */}
<section
  className="relative py-28 overflow-hidden"
  style={{
    backgroundColor: "#ffffff",
    backgroundImage:
      "linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)",
    backgroundSize: "60px 60px",
  }}
>
  <div className="container mx-auto px-6">

    {/* === Dimensions (Unfolded) === */}
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      viewport={{ amount: 0.3 }}
      transition={{ duration: 1 }}
      className="mb-24"
    >
      <h3 className="text-5xl font-light text-gray-900 mb-14 text-center">
        Dimensions (Unfolded)
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center justify-center">
        {[
          {
            img: "/pics/dim1.png",
            text: (
              <>
                <span className="font-medium text-gray-800">Width:</span> 2919 mm <br />
                <span className="font-medium text-gray-800">Height:</span> 872 mm
              </>
            ),
          },
          {
            img: "/pics/dim2.png",
            text: (
              <>
                <span className="font-medium text-gray-800">Length:</span> 3080 mm <br />
                <span className="font-medium text-gray-800">Height:</span> 872 mm
              </>
            ),
          },
        ].map((d, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
            className="relative group flex flex-col items-center"
          >
            <img
              src={d.img}
              alt="Unfolded Dimension"
              className="w-full max-w-lg rounded-xl transition-all duration-700"
            />
            <div
              className="absolute inset-0 rounded-xl blur-3xl opacity-0 group-hover:opacity-50 transition-all duration-700"
              style={{
                background:
                  "radial-gradient(circle, rgba(59,130,246,0.25) 0%, rgba(59,130,246,0) 70%)",
              }}
            ></div>
            <p className="mt-4 text-gray-600 text-base max-w-xs text-center">
              {d.text}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>

    {/* === Dimensions (Folded) === */}
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      viewport={{ amount: 0.3 }}
      transition={{ duration: 1 }}
    >
      <h3 className="text-5xl font-light text-gray-900 mb-14 text-center">
        Dimensions (Folded)
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center justify-center">
        {[
          {
            img: "/pics/dim1.png",
            text: (
              <>
                <span className="font-medium text-gray-800">Folded Width:</span> 840 mm <br />
                <span className="font-medium text-gray-800">Height:</span> 872 mm
              </>
            ),
          },
          {
            img: "/pics/dim2.png",
            text: (
              <>
                <span className="font-medium text-gray-800">Folded Length:</span> 1240 mm <br />
                <span className="font-medium text-gray-800">Height:</span> 872 mm
              </>
            ),
          },
        ].map((d, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
            className="relative group flex flex-col items-center"
          >
            <img
              src={d.img}
              alt="Folded Dimension"
              className="w-full max-w-lg rounded-xl transition-all duration-700"
            />
            <div
              className="absolute inset-0 rounded-xl blur-3xl opacity-0 group-hover:opacity-50 transition-all duration-700"
              style={{
                background:
                  "radial-gradient(circle, rgba(59,130,246,0.25) 0%, rgba(59,130,246,0) 70%)",
              }}
            ></div>
            <p className="mt-4 text-gray-600 text-base max-w-xs text-center">
              {d.text}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </div>
</section>


{/* ===== Drone Overview Section ===== */}
<section
  className="relative py-28 overflow-hidden bg-white"
  style={{
    backgroundColor: "#ffffff",
  }}
>
  <div className="container mx-auto px-6 md:px-16">
    <motion.h2
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-6xl font-light text-gray-900 mb-20 text-center tracking-tight"
    >
      Drone Overview
    </motion.h2>

    <div className="flex flex-col items-center justify-center">
      <motion.img
        src="/pics/specification.png" // <-- replace with your labeled image filename
        alt="Drone Overview"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-6xl rounded-2xl "
      />

      {/* Optional subtitle */}
      <p className="mt-10 text-gray-700 text-lg text-center max-w-4xl">
        The Agri-Hawk Drone 30 offers modular upgradability — from obstacle avoidance radars
        to RTK precision and advanced night navigation systems. Built for performance and
        adaptability in diverse agricultural environments.
      </p>
    </div>
  </div>
</section>


{/* ===== Drone Components Section ===== */}
{/* ===== Drone Components Section ===== */}
<section
  className="relative py-28 overflow-hidden bg-white"
  style={{
    backgroundColor: "#ffffff",
  }}
>
  <div className="container mx-auto px-6 md:px-16">
    <motion.h2
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-6xl font-light text-gray-900 mb-16 text-center tracking-tight"
    >
      Drone Components & Assembly Kit
    </motion.h2>

    <div className="flex flex-col items-center justify-center">
      <motion.img
        src="/pics/image.png" // <-- replace with your new image filename
        alt="Drone Components and Parts Layout"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-5xl h-auto max-h-[480px] object-contain rounded-2xl"
      />

      <p className="mt-10 text-gray-700 text-lg text-center max-w-4xl">
        Every Agri-Hawk Drone kit includes precision-engineered components for efficient
        assembly — including the main carbon fiber frame, motor arms, propellers, pump,
        control modules, cables, and the remote control unit. Designed for easy maintenance
        and modular upgrades, ensuring long-term reliability in demanding agricultural
        operations.
      </p>
    </div>
  </div>
</section>




{/* ===== Drone Specifications Section ===== */}
<section
  className="relative py-28 overflow-hidden"
  style={{
    backgroundColor: "#000000",
    backgroundImage:
      "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
    backgroundSize: "60px 60px",
  }}
>
  <div className="container mx-auto px-6 md:px-16">
    <motion.h2
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-6xl font-light text-white mb-20 text-center tracking-tight"
    >
      Drone Specifications
    </motion.h2>

    {/* Grid Layout for 8 specification cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {[
        {
          title: "1. Aerial Platform",
          specs: [
            ["Dimensions (folded)", "1240 × 840 × 872 mm"],
            ["Dimensions (unfolded)", "2919 × 3080 × 872 mm"],
            ["Weight (excluding battery)", "34 kg"],
            ["Weight (including battery)", "49 kg"],
            ["Waterproof Grade", "IP67"],
          ],
        },
        {
          title: "2. Flight Parameters",
          specs: [
            ["Max. Take-off Weight", "111 kg"],
            ["Max. Flight Speed", "15 m/s"],
            ["Max. Flight Altitude", "≤ 20 m"],
            ["Hovering Duration", "28 mins (no-load), 7 mins (full-load)"],
          ],
        },
        {
          title: "3. Spraying System",
          specs: [
            ["Liquid Tank Capacity", "62 L"],
            ["Nozzle Type", "Centrifugal Nozzles"],
            ["Nozzle Quantity", "2"],
            ["Spray Width", "8–20 m"],
            ["Atomizing Size", "30–500 μm"],
            ["Pump Quantity", "2"],
            ["Max. System Flow Rate", "20 L/min"],
          ],
        },
        {
          title: "4. Spreading System",
          specs: [
            ["Capacity", "70 L"],
            ["Waterproof Grade", "IP67"],
            ["Applicable Granule Size", "0.5–10 mm"],
          ],
        },
        {
          title: "5. Propulsion System",
          specs: [
            ["Motor (Max Tension, single motor)", "56 kg"],
            ["Foldable Propeller Model", "5620"],
            ["Electronic Speed Controller", "180 A Continuous Current"],
          ],
        },
        {
          title: "6. Obstacle Avoidance System",
          specs: [
            ["Front & Rear Radar Quantity", "2"],
            ["Safe Obstacle Avoidance Height", "≥ 2 m"],
            ["Safe Obstacle Avoidance Speed", "≤ 8 m/s"],
            ["Terrain-following Radar Quantity", "1"],
            ["Max Gradient (≤ 2 m/s)", "45°"],
            ["360° Obstacle Radar Quantity", "1"],
            ["Obstacle Avoidance Angle (upward)", "360°"],
          ],
        },
        {
          title: "7. Camera",
          specs: [
            ["Camera Type", "HD FPV Camera"],
            ["Video Resolution", "1920 × 1080 px"],
            ["Night Navigation", "High Brightness Night Flight Lights"],
          ],
        },
        {
          title: "8. Remote Control",
          specs: [
            ["Model", "H12 (Android OS)"],
            ["Remote Controller Screen", "5.5-inch, 1920 × 1080, 1000 cd/m²"],
            ["Signal Range (no interference)", "5 km"],
            ["Operating Frequency", "2,400–2,483 MHz"],
            ["Dimensions", "190 × 152 × 94 mm"],
            ["Charging Port", "Type-C"],
            ["Duration", "6–20 H"],
            ["Compatibility", "H32X, H40X, H120, H160, Series"],
          ],
        },
      ].map((section, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
          className="bg-black/60 rounded-2xl border border-gray-700 hover:border-blue-400 transition-all duration-500 p-6 shadow-md hover:shadow-blue-900/30"
        >
          <h3 className="text-2xl font-normal text-white mb-4 border-b border-gray-700 pb-2">
            {section.title}
          </h3>
          <table className="w-full text-left border-collapse">
            <tbody>
              {section.specs.map(([label, value], i) => (
                <tr
                  key={i}
                  className={`border-t border-gray-800 ${
                    i % 2 === 0 ? "bg-gray-900/40" : ""
                  }`}
                >
                  <td className="py-3 px-3 text-gray-300 font-medium w-1/2">
                    {label}
                  </td>
                  <td className="py-3 px-3 text-gray-400">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      <Footer />
    </div>
    </>
  );
}
