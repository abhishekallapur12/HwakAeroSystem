import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Wifi,
  Dumbbell,
  ChevronsRight,
} from "lucide-react";
import { motion } from "framer-motion";

const cornerCutClipPath =
  "polygon(8px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 8px) 100%, 0 100%, 0 6px)";

interface Product {
  id: number;
  name: string;
  price: string;
  range: string;
  payload: string;
  image: string;
  link: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Agri-Hawk Drone 30",
    price: "₹-----",
    range: "10–15 km Flight Range",
    payload: "30 kg Payload",
    image: "./pics/drone1.avif",
    link: "/products/p1",
  },
  {
    id: 2,
    name: "Agri-Hawk Drone 50",
    price: "₹-----",
    range: "20 km Flight Range",
    payload: "50 kg Payload",
    image: "./pics/drone2.png",
    link: "/products/p2",
  },
  {
    id: 3,
    name: "Agri-Hawk Drone 100",
    price: "₹-----",
    range: "25 km Flight Range",
    payload: "100 kg Payload",
    image: "./pics/drone3.png",
    link: "/products/p3",
  },
];

export default function ProductSection(): JSX.Element {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % products.length);
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);

  return (
    <section
      className="relative py-20 px-6 md:px-12 overflow-hidden"
      style={{
        backgroundColor: "#f9f9f9",
        backgroundImage:
          "linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }}
    >
      {/* Header */}
      <motion.div
        className="max-w-5xl mx-auto text-center mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
          Choose Your <span className="text-blue-600">Drone</span>
        </h2>
        <p className="text-gray-500 text-base mt-3 max-w-2xl mx-auto">
          Explore the range of smart systems optimized for field size, ensuring
          maximum efficiency with tailored capacity and flight time.
        </p>
      </motion.div>

      {/* Slider */}
      <div className="relative max-w-6xl mx-auto flex items-center justify-center">
        {/* Left Button */}
        <button
          onClick={prevSlide}
          className="absolute left-0 bg-white border border-gray-300 hover:bg-blue-600 hover:text-white text-gray-700 p-3 rounded-full shadow-md transition-all z-10"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Slides */}
        <div className="overflow-hidden w-full">
          <motion.div
            className="flex"
            animate={{ x: `-${currentIndex * 100}%` }}
            transition={{
              duration: 0.4,
              ease: "easeInOut",
            }}
          >
            {products.map((product) => (
              <motion.div
                key={product.id}
                className="min-w-full sm:min-w-[50%] lg:min-w-[33.33%] flex justify-center px-4"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white border border-gray-200 rounded-3xl shadow-sm hover:shadow-md w-full max-w-sm h-[440px] flex flex-col justify-between"
                >
                  {/* Image Background Box */}
                  <div className="p-6 bg-gray-50 rounded-2xl mx-4 mt-4 flex items-center justify-center">
                    <motion.img
                      src={product.image}
                      alt={product.name}
                      className="h-36 sm:h-40 w-auto object-contain"
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>

                  {/* Content */}
                  <div className="px-6 pb-8">
                    <div className="flex justify-between items-center border-b border-gray-200 pb-2 mb-3">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {product.name}
                      </h3>
                      <span className="text-blue-600 font-medium text-sm">
                        {product.price}
                      </span>
                    </div>

                    {/* Features */}
                    <div className="flex justify-between items-center text-gray-800 text-sm font-medium mb-5">
                      <div className="flex items-center space-x-2">
                        <Wifi className="w-4 h-4 text-blue-600" />
                        <div>
                          <p>{product.range}</p>
                          <p className="text-xs text-gray-500 font-normal">
                            Flight Range
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Dumbbell className="w-4 h-4 text-blue-600" />
                        <div>
                          <p>{product.payload}</p>
                          <p className="text-xs text-gray-500 font-normal">
                            Payload
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Button */}
                    <motion.a
                      href={product.link}
                      className="relative bg-black text-white text-xs sm:text-sm font-medium px-6 py-2 tracking-wide hover:bg-gray-800 focus:outline-none inline-flex items-center justify-center w-full"
                      style={{ clipPath: cornerCutClipPath }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      Learn More{" "}
                      <ChevronsRight className="w-4 h-4 inline ml-1" />
                    </motion.a>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right Button */}
        <button
          onClick={nextSlide}
          className="absolute right-0 bg-white border border-gray-300 hover:bg-blue-600 hover:text-white text-gray-700 p-3 rounded-full shadow-md transition-all z-10"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-10 space-x-3">
        {products.map((_, index) => (
          <motion.div
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === currentIndex
                ? "bg-blue-600 scale-125"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
            whileHover={{ scale: 1.3 }}
            transition={{ type: "spring", stiffness: 300 }}
          ></motion.div>
        ))}
      </div>
    </section>
  );
}
