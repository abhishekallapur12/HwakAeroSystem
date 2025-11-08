import { MapPin, Phone, Edit, User, Download } from "lucide-react";
import React from "react";

const BottomBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black/90 backdrop-blur-md border-t border-gray-700 z-50 m-0 p-3">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm">
          <button className="flex items-center space-x-2 text-white hover:text-blue-400 transition-colors">
            <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Our Location</span>
          </button>

          <button className="flex items-center space-x-2 text-white hover:text-blue-400 transition-colors">
            <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Call Us 1800 123 81238</span>
          </button>

          <button className="flex items-center space-x-2 text-white hover:text-blue-400 transition-colors">
            <Edit className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Enquire Now</span>
          </button>

          <button className="flex items-center space-x-2 text-white hover:text-blue-400 transition-colors">
            <User className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Get Demo</span>
          </button>

          <button className="flex items-center space-x-2 text-white hover:text-blue-400 transition-colors">
            <Download className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Download Brochure</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BottomBar;
