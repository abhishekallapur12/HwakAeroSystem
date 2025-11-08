import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Droplet, Battery, Map, Layers } from "lucide-react";

export default function TechnologySection(): JSX.Element {
  const [activeTab, setActiveTab] = useState("spraying");
  const [progress, setProgress] = useState(0);

  const techData: Record<
    string,
    { title: string; desc: string; image: string }
  > = {
    spraying: {
      title: "Precision Spraying",
      desc: "Delivers pesticides and fertilizers exactly where needed, reducing chemical usage by 30–40% while ensuring healthier crops and sustainable farming practices.",
      image: "./pics/drone1.avif",
    },
    battery: {
      title: "Extended Battery Life",
      desc: "Advanced lithium battery technology enables longer flight durations and faster charging cycles, maximizing uptime and field coverage efficiency.",
      image: "./pics/drone2.png",
    },
    mapping: {
      title: "AI-Powered GPS Mapping",
      desc: "Utilizes AI-driven GPS mapping to autonomously plan optimized flight routes, ensuring comprehensive area coverage with minimal overlap or waste.",
      image: "./pics/drone3.png",
    },
    modular: {
      title: "Modular Design",
      desc: "Built with replaceable and upgradeable modules that simplify maintenance, reduce downtime, and extend overall product lifecycle.",
      image: "./pics/drone4.png",
    },
  };

  const techTabs = [
    { id: "spraying", label: "Precision Spraying", icon: Droplet },
    { id: "battery", label: "Extended Battery Life", icon: Battery },
    { id: "mapping", label: "AI-Powered GPS Mapping", icon: Map },
    { id: "modular", label: "Modular Design", icon: Layers },
  ];

  // Auto-switch every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          const currentIndex = techTabs.findIndex((tab) => tab.id === activeTab);
          const nextIndex = (currentIndex + 1) % techTabs.length;
          setActiveTab(techTabs[nextIndex].id);
          return 0;
        }
        return prev + 2;
      });
    }, 100);
    return () => clearInterval(interval);
  }, [activeTab]);

  return (
    <motion.section
      className="py-20 font-light relative min-h-[100vh]"
      style={{
        backgroundColor: "#f9f9f9",
        backgroundImage: `
          linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
        backgroundAttachment: "fixed",
      }}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="max-w-[90rem] mx-auto px-8">
        <motion.h2
          className="text-3xl sm:text-5xl font-semibold text-center text-gray-900 mb-12 tracking-tight"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          Features
        </motion.h2>

        <div className="rounded-2xl px-12 py-8 flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* LEFT SIDE — IMAGE */}
          <motion.div
            className="flex-1 flex flex-col items-center justify-center relative min-w-[45%]"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            <div className="overflow-hidden relative">
              <motion.img
                key={activeTab}
                src={techData[activeTab].image}
                alt={techData[activeTab].title}
                className="w-full max-w-[480px] object-contain mx-auto rounded-xl"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />
            </div>

            {/* Description Box */}
            <motion.div
              className="absolute -bottom-20 bg-white/95 border border-gray-200 text-gray-600 rounded-xl px-8 py-4 max-w-md shadow-md"
              key={activeTab + "-desc"}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <p className="text-sm sm:text-base leading-relaxed font-light text-center">
                {techData[activeTab].desc}
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE — BUTTONS */}
          <motion.div
            className="flex-1 flex flex-col items-start justify-center space-y-4 w-full lg:pl-8 mt-24 lg:mt-0"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0, x: 80 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { staggerChildren: 0.15, duration: 0.6 },
              },
            }}
            viewport={{ once: false }}
          >
            {techTabs.map(({ id, label, icon: Icon }) => {
              const isActive = activeTab === id;
              return (
                <motion.button
                  key={id}
                  variants={{
                    hidden: { opacity: 0, x: 40 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  onClick={() => {
                    setActiveTab(id);
                    setProgress(0);
                  }}
                  className={`w-full flex items-center gap-4 rounded-2xl px-8 py-3 transition-all duration-300 text-left
                    ${
                      isActive
                        ? "bg-blue-50 text-blue-600 border border-blue-300"
                        : "bg-white/70 text-gray-600 hover:bg-gray-100 border border-gray-200"
                    }`}
                >
                  {/* Circular Icon with Progress */}
                  <div className="relative w-10 h-10 flex items-center justify-center">
                    <svg className="absolute top-0 left-0 w-full h-full">
                      <circle
                        cx="20"
                        cy="20"
                        r="18"
                        stroke="#e5e7eb"
                        strokeWidth="3"
                        fill="none"
                      />
                      {isActive && (
                        <circle
                          cx="20"
                          cy="20"
                          r="18"
                          stroke="#2563eb"
                          strokeWidth="3"
                          fill="none"
                          strokeDasharray="113"
                          strokeDashoffset={113 - (progress / 100) * 113}
                          strokeLinecap="round"
                          className="transition-all duration-100 linear"
                        />
                      )}
                    </svg>
                    <div
                      className={`w-8 h-8 flex items-center justify-center rounded-full ${
                        isActive
                          ? "bg-blue-100 text-blue-600"
                          : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <span className="text-sm sm:text-base font-medium tracking-wide">
                    {label}
                  </span>
                </motion.button>
              );
            })}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
