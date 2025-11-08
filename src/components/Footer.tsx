import {
  MapPin,
  Mail,
  Phone,
  Instagram,
  Linkedin,
} from "lucide-react";

export default function Footer(): JSX.Element {
  return (
    <footer className="bg-[#111111] text-gray-300 py-10 px-8 lg:px-20 text-[14px]">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* LEFT SECTION — Company Info */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <img
              src="./pics/5.png"
              alt="Hawk Aero Systems Logo"
              className="w-12 h-auto"
            />
            <h2 className="text-white text-xl font-semibold">
              HAWK AERO SYSTEMS
            </h2>
          </div>

          <ul className="space-y-2 leading-relaxed">
            <li className="flex items-start gap-3">
              <MapPin className="text-blue-500 w-5 h-5 mt-0.5" />
              <span>
                71–75 Shelton Street, Covent Garden, London, WC2H 9JQ
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="text-blue-500 w-5 h-5" />
              <a
                href="tel:+44203540502"
                className="hover:text-blue-400 transition-colors"
              >
                +44 203 540 502
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="text-blue-500 w-5 h-5" />
              <a
                href="mailto:info@hawkaerosystem.co.uk"
                className="hover:text-blue-400 transition-colors"
              >
                info@hawkaerosystem.co.uk
              </a>
            </li>
          </ul>

          <div className="mt-6">
            <h3 className="text-xs text-gray-400 mb-2 uppercase tracking-wide">
              Follow us on our Socials
            </h3>
            <div className="flex items-center gap-4 text-white">
              <a href="#" aria-label="Instagram" className="hover:text-blue-400">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-blue-400">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Drones Section */}
        <div>
          <h3 className="text-blue-400 font-semibold mb-3 text-base">
            Drones
          </h3>
          <ul className="space-y-1.5">
            <li>Agri-Hawk 100</li>
            <li>Agri-Hawk 50</li>
            <li>Agri-Hawk 30</li>
            <li>Agri-Hawk 10</li>
          </ul>
        </div>

        {/* Support + Legal */}
        <div className="flex flex-col lg:flex-row lg:gap-12">
          {/* Support */}
          <div>
            <h3 className="text-blue-400 font-semibold mb-3 text-base">
              Support
            </h3>
            <ul className="space-y-1.5">
              <li>Help Center</li>
              <li>Service & Maintenance</li>
              <li>FAQs</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-blue-400 font-semibold mb-3 text-base">
              Legal
            </h3>
            <ul className="space-y-1.5">
              <li>Privacy Policy</li>
              <li>Refund Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="border-t border-gray-800 mt-8 pt-5 text-center text-[12px] text-gray-500">
        © {new Date().getFullYear()} Hawk Aero Systems. All rights reserved.
      </div>
    </footer>
  );
}
