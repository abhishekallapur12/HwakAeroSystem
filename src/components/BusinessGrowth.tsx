import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "framer-motion";

export default function BusinessGrowth(): JSX.Element {
  const [openId, setOpenId] = useState<number | null>(1);

  const data = [
    {
      id: 1,
      title: "More Payload. More Range. More Earnings.",
      desc: "Designed for India’s toughest logistics needs — carry more load per trip with unmatched efficiency and reliability.",
    },
    {
      id: 2,
      title: "Faster Charging. Smarter Tech. Lower Costs.",
      desc: "Get back on the road quicker with fast-charging technology, intelligent telematics, and reduced total cost of ownership.",
    },
    {
      id: 3,
      title: "Reliable Service. All-India Support.",
      desc: "Backed by a nationwide service network ensuring uptime, reliability, and support wherever your business goes.",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="relative py-24 px-6 lg:px-12 overflow-hidden"
      style={{
        backgroundColor: "#f9f9f9",
        backgroundImage: `
          linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        {/* LEFT SIDE — TEXT SECTION */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <motion.h2
            initial={{ scale: 0.95, fontWeight: 700 }}
            whileInView={{ scale: 1.05, fontWeight: 500 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl font-semibold text-gray-900 leading-snug"
          >
            How Can Your Business Grow With{" "}
            <span className="text-blue-600">Hawk Aero?</span>
          </motion.h2>

          <p className="text-gray-500 text-base mb-8 max-w-lg leading-relaxed">
            At Hawk Aero, we design smart drone systems built to empower Indian
            businesses — increasing efficiency, reducing costs, and scaling
            possibilities.
          </p>

          <div className="space-y-5">
            {data.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, delay: item.id * 0.2 }}
                className="border border-gray-200 bg-white rounded-xl p-5 hover:shadow-md transition-all"
              >
                <button
                  onClick={() => setOpenId(openId === item.id ? null : item.id)}
                  className="flex justify-between items-center w-full text-left"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 text-blue-700 font-medium">
                      {item.id}
                    </div>
                    <span className="text-gray-800 text-lg font-medium">
                      {item.title}
                    </span>
                  </div>
                  {openId === item.id ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>

                {openId === item.id && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-500 text-sm mt-3 pl-12 leading-relaxed"
                  >
                    {item.desc}
                  </motion.p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT SIDE — IMAGE SECTION */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative flex justify-center lg:justify-end group"
        >
          <div className="relative z-10 h-[340px] flex items-center justify-center transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2">
            <img
              src="./pics/drone4.png"
              alt="Hawk Aero Drone"
              className="w-[480px] sm:w-[540px] lg:w-[620px] object-contain transition-all duration-500 group-hover:drop-shadow-[0_10px_25px_rgba(37,99,235,0.35)]"
            />

            {/* Floating Info Card */}
            <div className="absolute -bottom-16 left-10 bg-white shadow-xl border border-gray-100 rounded-xl p-5 w-56 sm:w-60 transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-1">
              <div className="flex items-center text-green-600 font-medium text-sm mb-2">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Built for India
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">100%</h3>
              <p className="text-gray-500 text-xs mt-1 leading-relaxed">
                Designed for Indian field & weather conditions
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
