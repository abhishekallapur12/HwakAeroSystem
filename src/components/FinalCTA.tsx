import { Phone, Download } from "lucide-react";

export default function FinalCTA() {
  // same corner cut polygon shape used in your navbar
  const cornerCutClipPath =
    "polygon(8px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 8px) 100%, 0 100%, 0 6px)";

  return (
    <section className="py-12 bg-gradient-to-br from-gray-50 to-gray-100 font-sans">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-3 tracking-tight">
          Euler Turbo EV 1000
        </h2>

        <p className="text-xl md:text-2xl text-gray-700 mb-3 font-light">
          India's most value-driven 1 tonne EV mini truck
        </p>

        <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed font-extralight">
          Load more, spend less, and grow faster with the Euler Turbo EV 1000.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Call Us Button (with cut-corner shape) */}
          <button
            className="relative border-2 border-gray-300 text-gray-800 px-6 py-2.5 hover:bg-gray-900 hover:text-white transition-all duration-300 text-sm md:text-base font-medium tracking-wide"
            style={{
              clipPath: cornerCutClipPath,
            }}
          >
            <span className="flex items-center space-x-2 justify-center">
              <Phone className="w-4 h-4" />
              <span>Call Us 1800 1238 1238</span>
            </span>
          </button>

          {/* Download Brochure Button (with cut-corner shape) */}
          <button
            className="relative bg-blue-400 text-white px-6 py-2.5 hover:bg-blue-700 transition-all duration-300 text-sm md:text-base font-medium tracking-wide"
            style={{
              clipPath: cornerCutClipPath,
            }}
          >
            <span className="flex items-center space-x-2 justify-center">
              <Download className="w-4 h-4" />
              <span>Download Brochure</span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
