import { useState } from "react";
import { motion } from "framer-motion";
import { User, Plane, Store, LineChart, Wrench, Settings } from "lucide-react";

export default function AppsSection(): JSX.Element {
  const [activeApp, setActiveApp] = useState("customer");

  const appScreens: Record<string, string> = {
    customer: "https://placehold.co/250x500/2c523f/ffffff?text=Customer+App",
    pilot: "https://placehold.co/250x500/1d3557/ffffff?text=Pilot+Access",
    vendor: "https://placehold.co/250x500/283618/ffffff?text=Vendor+Portal",
    sales: "https://placehold.co/250x500/4b3f72/ffffff?text=Sales+Hub",
    technician: "https://placehold.co/250x500/0a9396/ffffff?text=Technician",
    admin: "https://placehold.co/250x500/001219/ffffff?text=Admin+Center",
  };

  const apps = [
    {
      id: "customer",
      title: "Customer Access",
      desc: "The Customer Portal allows you to initiate, track, and manage all your drone service needs from a single dashboard.",
      icon: User,
    },
    {
      id: "pilot",
      title: "Pilot Access",
      desc: "The Pilot Access enables task management, flight tracking, and equipment checks in one place.",
      icon: Plane,
    },
    {
      id: "vendor",
      title: "Vendor Access",
      desc: "The Vendor Platform streamlines sales, inventory, and service operations efficiently.",
      icon: Store,
    },
    {
      id: "sales",
      title: "Sales Aggregator",
      desc: "Manage leads, track conversions, and generate accurate quotes instantly.",
      icon: LineChart,
    },
    {
      id: "technician",
      title: "Technician Access",
      desc: "Monitor system diagnostics, perform repairs, and manage maintenance schedules.",
      icon: Wrench,
    },
    {
      id: "admin",
      title: "Admin Access",
      desc: "Oversee platform activity, manage users, and maintain full control across operations.",
      icon: Settings,
    },
  ];

  return (
    <motion.section
      className="py-24 relative overflow-hidden text-white"
      style={{
        backgroundColor: "#0b0b0b",
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
      }}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }} // triggers animation when scrolling both ways
    >
      {/* Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-teal-900/30 via-transparent to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-20 relative z-10">
        {/* Header Motion */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          <h2 className="text-2xl sm:text-3xl font-medium text-white">
            Explore the{" "}
            <span className="text-teal-400">Hawk AeroSystems</span> Platform
          </h2>
          <p className="text-gray-400 mt-3 max-w-2xl mx-auto text-sm leading-relaxed">
            Hawk AeroSystems provides a comprehensive, multi-role platform that powers complex
            drone operations end-to-end. We offer tailored experiences for every stakeholder,
            ensuring maximum efficiency, compliance, and control.
          </p>
        </motion.div>

        {/* Layout */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14">
          {/* iPhone Mockup Motion */}
          <motion.div
            className="relative w-[270px] h-[540px] flex-shrink-0 self-start lg:self-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            <div className="absolute -inset-10 bg-gradient-to-tr from-teal-700/40 via-transparent to-transparent blur-2xl"></div>

            <div className="absolute inset-0 bg-black rounded-[2.5rem] shadow-[0_0_40px_rgba(0,0,0,0.8)] overflow-hidden border-[6px] border-gray-800">
              {/* Camera Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-gray-900 rounded-b-2xl flex items-center justify-between px-3">
                <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                <div className="w-8 h-1 bg-gray-600 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
              </div>

              {/* Screen */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out"
                style={{
                  backgroundImage: `url(${appScreens[activeApp]})`,
                }}
              ></div>
            </div>
          </motion.div>

          {/* Apps List Motion */}
          <motion.div
            className="flex flex-col space-y-1.5 max-w-xl w-full text-left"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            {apps.map((app, index) => {
              const Icon = app.icon;
              const isActive = activeApp === app.id;
              return (
                <div
                  key={app.id}
                  onMouseEnter={() => setActiveApp(app.id)}
                  className={`group flex items-start space-x-3 cursor-pointer border-b pb-2 transition-all duration-300 ease-out hover:translate-x-[2px] ${
                    isActive
                      ? "border-teal-400 bg-[#1c1f2b] rounded-md p-2.5"
                      : "border-gray-700 hover:bg-[#121417] p-2.5"
                  }`}
                >
                  {/* Icon */}
                  <div
                    className={`w-7 h-7 flex items-center justify-center rounded-full transition-colors duration-300 ${
                      isActive
                        ? "bg-teal-500 text-white"
                        : "bg-gray-800 text-gray-400 group-hover:bg-teal-600 group-hover:text-white"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </div>

                  {/* Text */}
                  <div className="transition-all duration-300 ease-in-out text-left">
                    <h3
                      className={`text-sm sm:text-base font-normal transition-colors duration-300 ${
                        isActive
                          ? "text-teal-400"
                          : "text-gray-300 group-hover:text-teal-300"
                      }`}
                    >
                      {index + 1}. {app.title}
                    </h3>
                    <p
                      className={`text-xs mt-0.5 leading-snug transition-colors duration-300 ${
                        isActive
                          ? "text-gray-300"
                          : "text-gray-500 group-hover:text-gray-300"
                      }`}
                    >
                      {app.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
