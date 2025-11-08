import { useEffect } from "react";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";

  const cornerCutClipPath =
    "polygon(8px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 8px) 100%, 0 100%, 0 6px)";
export default function Distributor(): JSX.Element {
  useEffect(() => {
    const loadHTML = async (id: string, file: string) => {
      try {
        const res = await fetch(file);
        const data = await res.text();
        const el = document.getElementById(id);
        if (el) el.innerHTML = data;
      } catch (err) {
        console.error(`${file} load error:`, err);
      }
    };

    loadHTML("header-placeholder", "header.html");
    loadHTML("banner-placeholder", "Banner.html");
    loadHTML("footer-placeholder", "Footer.html");
  }, []);

  return (
     <>
      <Helmet>
        <title>Become a Distributor | Hawk Aero System</title>
        <meta name="description" content="Apply to become an official Hawk Aero drone distributor or dealer globally. Submit business profile, models selection and partnership interest." />
        <link rel="canonical" href="https://www.hawkaerosystem.co.uk/distributor" />
      </Helmet>
    <div
      className="relative text-[#222] font-['Inter'] pt-28 min-h-screen"
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
      {/* ===== HEADER + BANNER ===== */}
      <div id="header-placeholder"></div>
      <div id="banner-placeholder"></div>

      {/* ===== MAIN FORM SECTION ===== */}
      <section className="py-20 px-6 md:px-10">
        <div className="form-container max-w-[1100px] mx-auto bg-white/90 rounded-2xl shadow-2xl px-10 py-14 border border-gray-200 backdrop-blur-sm">
          <h2 className="text-3xl font-semibold text-center mb-12 text-gray-900">
            Distributor / Dealer Application Form
          </h2>

          <form
             action="http://localhost:5000/api/distributor"
            method="post"
            encType="multipart/form-data"
            className="space-y-10"
          >
            {/* ===== COUNTRY / CITY ===== */}
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="block font-medium mb-2 text-gray-800">
                  Your Country <span className="text-red-500">*</span>
                </label>
                <select
                  name="country"
                  required
                  className="w-full border border-gray-300 rounded-lg p-3 bg-[#f9fafc] focus:ring-2 focus:ring-blue-600 outline-none transition"
                >
                  <option value="">Select Country</option>
                  <option>India</option>
                  <option>United States</option>
                  <option>Australia</option>
                  <option>United Kingdom</option>
                  <option>Germany</option>
                  <option>France</option>
                  <option>Japan</option>
                  <option>China</option>
                  <option>Canada</option>
                  <option>Brazil</option>
                  <option>Italy</option>
                  <option>Russia</option>
                </select>
              </div>

              <div>
                <label className="block font-medium mb-2 text-gray-800">
                  City / Region <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="city"
                  required
                  className="w-full border border-gray-300 rounded-lg p-3 bg-[#f9fafc] focus:ring-2 focus:ring-blue-600 outline-none"
                />
              </div>
            </div>

            {/* ===== DRONE MODELS ===== */}
            <div>
              <label className="block font-medium mb-3 text-gray-800">
                Choose Drone Models You Want to Sell
              </label>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {["H32X (10L)", "H60-4 (30L)", "H120 (50L)", "H200 (100L)"].map(
                  (model) => (
                    <label
                      key={model}
                      className="flex items-center gap-2 bg-[#f9fafc] p-3 rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition"
                    >
                      <input type="checkbox" name="models" value={model} />
                      {model}
                    </label>
                  )
                )}
              </div>
            </div>

            {/* ===== COMPANY INFO ===== */}
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="block font-medium mb-2 text-gray-800">
                  Company Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="companyName"
                  required
                  className="w-full border border-gray-300 rounded-lg p-3 bg-[#f9fafc] focus:ring-2 focus:ring-blue-600 outline-none"
                />
              </div>
              <div>
                <label className="block font-medium mb-2 text-gray-800">
                  Website URL
                </label>
                <input
                  type="text"
                  name="website"
                  className="w-full border border-gray-300 rounded-lg p-3 bg-[#f9fafc] focus:ring-2 focus:ring-blue-600 outline-none"
                />
              </div>
            </div>

            {/* ===== BUSINESS INFO ===== */}
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="block font-medium mb-2 text-gray-800">
                  Business Type <span className="text-red-500">*</span>
                </label>
                <select
                  name="businessType"
                  required
                  className="w-full border border-gray-300 rounded-lg p-3 bg-[#f9fafc] focus:ring-2 focus:ring-blue-600 outline-none"
                >
                  <option>Drone dealer</option>
                  <option>Agricultural machinery dealers</option>
                  <option>Farmer</option>
                  <option>Others</option>
                </select>
              </div>

              <div>
                <label className="block font-medium mb-2 text-gray-800">
                  Average Annual Turnover <span className="text-red-500">*</span>
                </label>
                <select
                  name="turnover"
                  required
                  className="w-full border border-gray-300 rounded-lg p-3 bg-[#f9fafc] focus:ring-2 focus:ring-blue-600 outline-none"
                >
                  <option>Under $1m</option>
                  <option>$1m - 5m</option>
                  <option>$5m - 10m</option>
                  <option>$10m - $50m</option>
                  <option>Above $50m</option>
                </select>
              </div>
            </div>

            {/* ===== PERSONAL INFO ===== */}
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="block font-medium mb-2 text-gray-800">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full border border-gray-300 rounded-lg p-3 bg-[#f9fafc] focus:ring-2 focus:ring-blue-600 outline-none"
                />
              </div>
              <div>
                <label className="block font-medium mb-2 text-gray-800">
                  Job Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="jobTitle"
                  required
                  className="w-full border border-gray-300 rounded-lg p-3 bg-[#f9fafc] focus:ring-2 focus:ring-blue-600 outline-none"
                />
              </div>
            </div>

            {/* ===== CONTACT INFO ===== */}
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="block font-medium mb-2 text-gray-800">
                  Business Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full border border-gray-300 rounded-lg p-3 bg-[#f9fafc] focus:ring-2 focus:ring-blue-600 outline-none"
                />
              </div>
              <div>
                <label className="block font-medium mb-2 text-gray-800">
                  Phone / WhatsApp <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="phone"
                  required
                  className="w-full border border-gray-300 rounded-lg p-3 bg-[#f9fafc] focus:ring-2 focus:ring-blue-600 outline-none"
                />
              </div>
            </div>

            {/* ===== TEXTAREAS ===== */}
            <div>
              <label className="block font-medium mb-2 text-gray-800">
                Does your company represent other drone brands?{" "}
                <span className="text-red-500">*</span>
              </label>
              <textarea
                name="brands"
                rows={3}
                required
                className="w-full border border-gray-300 rounded-lg p-3 bg-[#f9fafc] focus:ring-2 focus:ring-blue-600 outline-none"
              ></textarea>
            </div>

            <div>
              <label className="block font-medium mb-2 text-gray-800">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                rows={3}
                required
                className="w-full border border-gray-300 rounded-lg p-3 bg-[#f9fafc] focus:ring-2 focus:ring-blue-600 outline-none"
              ></textarea>
            </div>

            {/* ===== FILE UPLOAD ===== */}
            <div>
              <label className="block font-medium mb-2 text-gray-800">
                Business Proposal / Company Profile
              </label>
              <input
                type="file"
                name="file"
                className="w-full border border-gray-300 rounded-lg p-3 bg-[#f9fafc] cursor-pointer hover:bg-blue-50 focus:ring-2 focus:ring-blue-600 outline-none"
              />
            </div>

            {/* ===== SUBMIT BUTTON ===== */}
            <div className="flex justify-center">
              <button
  type="submit"
  className="relative bg-black text-white text-lg sm:text-xl font-semibold px-12 sm:px-16 py-4 sm:py-5 tracking-wide hover:bg-gray-800 transition-all duration-300 shadow-lg"
  style={{ clipPath: cornerCutClipPath }}
>
  Submit Application
</button>

            </div>
          </form>
           {status && (
              <p
                className={`text-sm mt-4 ${
                  status.includes("✅")
                    ? "text-green-600"
                    : status.includes("❌") || status.includes("⚠️")
                    ? "text-red-600"
                    : "text-gray-600"
                }`}
              >
                {status}
              </p>
            )}
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <div id="footer-placeholder"></div>
      <Footer />
    </div>
    </>
  );
}
