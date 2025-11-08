import { Menu, X, ChevronsRight, ChevronRight } from "lucide-react";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Header(): JSX.Element {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [language, setLanguage] = useState("EN");
  const [showForm, setShowForm] = useState(false);
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);
  const navigate = useNavigate();

  const cornerCutClipPath =
    "polygon(8px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 8px) 100%, 0 100%, 0 6px)";

  const menuData: Record<string, { name: string; img: string; path?: string }[]> = {
  product: [
    {
      name: "Agri-Hawk Drone 10",
      img: "./pics/drone4.png",
      path: "/products", // ✅ redirect to Drone 10 details
    },
      { name: "Agri-Hawk Drone 30", img: "./pics/drone1.avif",  path: "/products1", },
      { name: "Agri-Hawk Drone 80", img: "./pics/drone2.png",  path: "/products2", },
      { name: "Agri-Hawk Drone 100", img: "./pics/drone3.png",  path: "/products3", },
    ],
    network: [
      { name: "Showroom", img: "ser.webp" },
      { name: "Service", img: "show.webp" },
      { name: "Charging", img: "charge.webp" },
    ],
  };

  const handleMouseEnter = (key: string) => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setActiveMenu(key);
  };

  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => setActiveMenu(null), 200);
  };

  const handleNavigation = (path: string) => {
    setMobileOpen(false);
    navigate(path);
  };

  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 bg-white text-black z-50 shadow-sm">
        {/* Top Black Bar */}
        <div className="bg-black flex justify-center py-1">
          <img
            src="header.png"
            alt="NEO by EULER"
            className="h-4"
          />
        </div>

        {/* Main Header */}
        <div className="container mx-auto px-4 sm:px-6 relative">
          <div className="flex items-center justify-between h-12 md:h-14">
            {/* ✅ Brand Logo */}
            <div
              className="flex items-center space-x-3 cursor-pointer"
              onClick={() => handleNavigation("/")}
            >
              
             <img
  src="4.png"     // ✅ make sure your logo is in the "public" folder
  alt="Hawk Aero Logo"
  className="h-8 sm:h-7 w-auto object-contain"
/>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8 text-sm text-gray-800 relative">
              {[
                { key: "product", label: "Product" },
                { key: "network", label: "Network" },
                { key: "distributor", label: "Become a Distributor", path: "/distributor" },
                { key: "contact", label: "Contact Us", path: "/contact" },
              ].map((menu) => (
                <div
                  key={menu.key}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(menu.key)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className="flex items-center hover:text-blue-500 transition-colors"
                    onClick={() => menu.path && handleNavigation(menu.path)}
                  >
                    {menu.label}
                    {menu.key !== "contact" && (
                      <ChevronRight className="w-3 h-3 ml-1" />
                    )}
                  </button>

                  {activeMenu === menu.key && menuData[menu.key] && (
                    <div
                      className={`absolute left-0 top-full mt-2 ${
                        menu.key === "network"
                          ? "w-[450px] grid-cols-3"
                          : "w-[520px] grid-cols-2"
                      } bg-white border border-gray-100 rounded-xl shadow-2xl p-3 grid gap-3`}
                      onMouseEnter={() => handleMouseEnter(menu.key)}
                      onMouseLeave={handleMouseLeave}
                    >
                      {menuData[menu.key].map((item, idx) => (
                        <div
                          key={idx}
                         onClick={() => {
  if (item.path) {
    navigate(item.path);
    setActiveMenu(null);
  }
}}

                          className="rounded-lg border border-gray-200 hover:border-blue-400 hover:shadow-[0_0_8px_rgba(37,99,235,0.25)] p-2 flex flex-col items-center text-center cursor-pointer transition-all duration-300 group"
                        >
                          <img
                            src={item.img}
                            alt={item.name}
                            className={`object-cover rounded-md ${
                              menu.key === "network"
                                ? "w-[90px] h-[65px]"
                                : "w-16 h-12 md:w-20 md:h-16"
                            } mb-2 transition-transform duration-300 group-hover:scale-105`}
                          />
                          <span className="text-gray-800 text-[12px] sm:text-[13px] font-medium group-hover:text-blue-600">
                            {item.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Buttons */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              {/* ✅ OPEN MODAL BUTTON */}
              <button
                onClick={() => setShowForm(true)}
                className="relative bg-black text-white text-[10px] sm:text-xs font-medium px-4 sm:px-5 py-1.5 sm:py-2 tracking-wide hover:bg-gray-800"
                style={{ clipPath: cornerCutClipPath }}
              >
                <span className="flex items-center space-x-1">
                  <span>Get Demo</span>
                  <ChevronsRight className="w-3 h-3 sm:w-4 sm:h-4" />
                </span>
              </button>

              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="bg-gray-900 text-white text-[10px] sm:text-xs px-2 py-1 rounded-sm border border-gray-700"
              >
                <option value="EN">EN [English]</option>
                <option value="HI">HI [Hindi]</option>
                <option value="KA">KA [Kannada]</option>
                <option value="TE">TE [Telugu]</option>
                <option value="TA">TA [Tamil]</option>
              </select>

              <button
                className="lg:hidden ml-1 sm:ml-2"
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                {mobileOpen ? (
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                ) : (
                  <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ✅ MODAL POPUP FORM */}
      {showForm && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[999]">
          <div className="bg-white rounded-xl shadow-2xl w-[90%] md:w-[600px] max-h-[90vh] overflow-y-auto p-8 relative">
            {/* Close button */}
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-5 text-gray-600 hover:text-black text-2xl font-bold"
            >
              ×
            </button>

            <h2 className="text-2xl font-semibold text-gray-900 mb-1">
              Get Demo
            </h2>
            <p className="text-gray-500 text-sm mb-6">
              Fill in your details and schedule a test drive.
            </p>

            <form
              action="http://localhost:5000/api/enquiry"
              method="post"
              className="grid grid-cols-2 gap-4 text-sm"
            >
              <input type="text" name="firstName" placeholder="First Name*" required className="border p-2 rounded" />
              <input type="text" name="lastName" placeholder="Last Name*" required className="border p-2 rounded" />
              <input type="tel" name="mobileNumber" placeholder="Mobile Number*" required className="border p-2 rounded" />
              <input type="email" name="email" placeholder="Email*" required className="border p-2 rounded" />
              <select name="country" required className="col-span-2 border p-2 rounded">
                <option value="">Select Country</option>
                <option value="India">India</option>
                <option value="United States">United States</option>
                <option value="Germany">Germany</option>
                <option value="France">France</option>
                <option value="Australia">Australia</option>
              </select>
              <input type="text" name="city" placeholder="City*" required className="border p-2 rounded col-span-2" />
              <input type="text" name="address" placeholder="Address" required className="border p-2 rounded col-span-2" />
              <input type="text" name="postalCode" placeholder="Postal Code*" required className="border p-2 rounded col-span-2" />
              <select name="product" required className="border p-2 rounded col-span-2">
                <option value="">Select a Product*</option>
                <option>H32X (10L)</option>
                <option>H60-4 (30L)</option>
                <option>H120 (50L)</option>
                <option>H200 (100L)</option>
              </select>

              <button
                type="submit"
                className="col-span-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md text-sm font-medium"
              >
                Enquire Now →
              </button>
            </form>

            <p className="text-xs text-gray-500 text-center mt-3">
              By clicking on "Get Demo" you agree to our{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Privacy Policy
              </a>{" "}
              and allow us to contact you.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
