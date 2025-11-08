import { useState } from "react";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";
export default function Contact(): JSX.Element {
  const cornerCutClipPath =
    "polygon(8px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 8px) 100%, 0 100%, 0 6px)";

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    state: "",
    city: "",
    pincode: "",
    product: "",
  });

  const [status, setStatus] = useState(""); // ✅ For showing "sent" or error messages

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("📨 Sending...");
    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("✅ Message Sent Successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          state: "",
          city: "",
          pincode: "",
          product: "",
        });
      } else {
        setStatus("❌ Failed to send. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus("⚠️ Server error. Try again later.");
    }
  };

  return (
     <>
      <Helmet>
        <title>Contact | Hawk Aero System</title>
        <meta name="description" content="Reach Hawk Aero System support team for drone purchase queries, partnerships, R&D collaboration and enterprise deployment assistance." />
        <link rel="canonical" href="https://www.hawkaerosystem.co.uk/contact" />
      </Helmet>
    <div className="bg-white text-gray-900 font-light">
      {/* ===== Hero Section ===== */}
      <section
        className="relative h-[55vh] flex items-center justify-center mt-[70px]"
        style={{
          backgroundImage: `url('./public/cont.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </section>

      {/* ===== Contact Form Section ===== */}
      <section className="py-20 px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start border-t border-gray-200 pt-10">
          {/* LEFT INFO SECTION */}
          <div className="space-y-6">
            <h2 className="text-3xl font-normal leading-snug text-gray-900">
              Let’s start the conversation on{" "}
              <span className="text-blue-700 font-medium">
                clean commercial mobility.
              </span>
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              Need quick help? Call our support team for anything related to
              vehicles, servicing, or partnerships.
            </p>

            {/* Email */}
            <div className="flex items-start gap-4 mt-8">
              <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center text-white shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15A2.25 2.25 0 012.25 17.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0L12 13.5 2.25 6.75"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">Email</h3>
                <p className="text-gray-600 font-light">
                  customercare@eulermotors.com
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center text-white shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75l1.5-1.5a2.25 2.25 0 013.182 0l2.25 2.25a2.25 2.25 0 010 3.182l-.75.75a12.084 12.084 0 005.682 5.682l.75-.75a2.25 2.25 0 013.182 0l2.25 2.25a2.25 2.25 0 010 3.182l-1.5 1.5A2.25 2.25 0 0116.5 21.75 18.75 18.75 0 012.25 7.5a2.25 2.25 0 010-3.182z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                <p className="text-gray-600 font-light">180012381238</p>
              </div>
            </div>
          </div>

          {/* RIGHT FORM SECTION */}
          {/* RIGHT FORM SECTION */}
<div>
  <h3 className="text-2xl font-normal mb-6 text-gray-900">Message Us</h3>
  <p className="text-gray-600 mb-8">
    Reach Out and We’ll get back to you shortly.
  </p>

  <form
    onSubmit={handleSubmit}
    className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm space-y-5"
  >
    {/* Name & Email */}
    <div className="grid sm:grid-cols-2 gap-5">
      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-800 mb-1">
          Name <span className="text-red-500">*</span>
        </label>
        <input
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          type="text"
          placeholder="Your Name..."
          required
          className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 outline-none"
        />
      </div>

      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-800 mb-1">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          type="email"
          placeholder="Business Email..."
          required
          className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 outline-none"
        />
      </div>
    </div>

    {/* Phone & Company */}
    <div className="grid sm:grid-cols-2 gap-5">
      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-800 mb-1">
          Phone / WhatsApp
        </label>
        <input
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          type="text"
          placeholder="Phone / WhatsApp"
          className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 outline-none"
        />
      </div>

      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-800 mb-1">Company</label>
        <input
          name="company"
          value={(formData as any).company || ""}
          onChange={handleChange}
          type="text"
          placeholder="Company Name..."
          className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 outline-none"
        />
      </div>
    </div>

    {/* Country & Drone Usage */}
    <div className="grid sm:grid-cols-2 gap-5">
      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-800 mb-1">Country</label>
        <select
          name="country"
          value={(formData as any).country || ""}
          onChange={handleChange}
          className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 outline-none"
        >
          <option value="">Select Country</option>
          {[
            "India",
            "United Kingdom",
            "United States",
            "Australia",
            "Germany",
            "France",
            "Canada",
            "Japan",
            "China",
            "Brazil",
            "Italy",
            "United Arab Emirates",
            "South Korea",
            "Singapore",
            "South Africa",
            "Spain",
            "Switzerland",
            "Thailand",
            "Vietnam",
          ].map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-800 mb-1">
          Are You Using a Drone? <span className="text-red-500">*</span>
        </label>
        <select
          name="usingDrone"
          value={(formData as any).usingDrone || ""}
          onChange={handleChange}
          required
          className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 outline-none"
        >
          <option value="">Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>
    </div>

    {/* Message */}
    <div className="flex flex-col">
      <label className="text-sm font-medium text-gray-800 mb-1">
        Message <span className="text-red-500">*</span>
      </label>
      <textarea
        name="message"
        value={(formData as any).message || ""}
        onChange={handleChange}
        rows={4}
        required
        placeholder="Leave Your Message *"
        className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 outline-none resize-none"
      ></textarea>
    </div>

    {/* Polygon Button (kept same) */}
    <div className="sm:col-span-2 mt-6">
      <button
        type="submit"
        className="relative bg-black text-white text-sm sm:text-base font-medium px-6 sm:px-8 py-2.5 sm:py-3 tracking-wide hover:bg-gray-800 transition-all duration-300"
        style={{ clipPath: cornerCutClipPath }}
      >
        <span className="flex items-center justify-center space-x-2">
          <span>Submit</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </button>
    </div>
  </form>

  {/* ✅ Status Message */}
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

        </div>
      </section>
  {/* ===== Supplier & Jobs Section ===== */}
      <section className="grid md:grid-cols-2">
        {/* LEFT - Supplier/Vendor */}
        <div
          className="relative h-80 flex flex-col items-center justify-center text-center text-white px-6"
          style={{
            backgroundImage: `url('https://assets.eulermotors.com/supplier_vendor_contact_us_mobile_12_w_360_x_h_480_pix_2d3e8c4853.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative z-10 px-4">
            <h3 className="text-2xl font-normal mb-2">
              For Suppliers & Vendors / Manufacturing Relations
            </h3>
            <p className="max-w-md text-gray-200 font-light">
              If you are a supplier or vendor at Hawk Aero, contact us directly at
            </p>
            <p className="font-medium mt-2 text-white">
              customercare@eulermotors.com
            </p>
          </div>
        </div>

        {/* RIGHT - Job Opportunities */}
        <div
          className="relative h-80 flex flex-col items-center justify-center text-center text-white px-6"
          style={{
            backgroundImage: `url('https://assets.eulermotors.com/job_opportunity_contact_us_mobile_13_w_360_x_h_480_pix_64119ad0ff.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative z-10 px-4">
            <h3 className="text-2xl font-normal mb-2">For Job Opportunities</h3>
            <p className="max-w-md text-gray-200 font-light">
              If you are interested in working with Hawk Aero, please contact us at
            </p>
            <p className="font-medium mt-2 text-white">hr@eulermotors.com</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
    </>
  );
}
