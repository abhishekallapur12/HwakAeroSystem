import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export default function FAQSection(): JSX.Element {
  const [openId, setOpenId] = useState<number | null>(null);

  const faqs: FAQ[] = [
    {
      id: 1,
      question: "What is the certified payload capacity of the Euler Turbo EV?",
      answer:
        "The Euler Turbo EV 1000 offers a certified payload capacity of up to 1700 kg, ensuring it can handle a wide range of commercial needs efficiently.",
    },
    {
      id: 2,
      question:
        "Is the Euler Turbo EV suitable for seamless cargo delivery within and across cities?",
      answer:
        "Absolutely! With its durable chassis and efficient electric drivetrain, the Turbo EV is built for both intra-city and inter-city delivery operations.",
    },
    {
      id: 3,
      question:
        "What is the certified and real-world driving range of the Euler Turbo EV?",
      answer:
        "The Euler Turbo EV 1000 offers a certified range of 120 km and a real-world range that can vary depending on load, terrain, and driving conditions.",
    },
    {
      id: 4,
      question:
        "How comfortable is the Euler Turbo EV for drivers managing long delivery hours?",
      answer:
        "The vehicle features an ergonomic cabin design with enhanced suspension and driver-friendly controls for maximum comfort during long shifts.",
    },
    {
      id: 5,
      question:
        "How long does it take to fully charge the Euler Turbo EV, and what charging options are available?",
      answer:
        "It supports both regular and fast-charging options, with full charging time ranging from 2 to 5 hours depending on the charging setup.",
    },
    {
      id: 6,
      question:
        "Which variant of the Euler Turbo EV should I choose for my business?",
      answer:
        "Euler offers multiple variants like City, Maxx, and FC to suit different cargo and delivery needs. Choose based on payload, range, and application requirements.",
    },
  ];

  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
        {/* LEFT SIDE — Title + Image */}
        <div className="flex flex-col justify-center h-full text-center lg:text-left">
          {/* Heading Section */}
          <div className="mb-6">
            <div className="relative mb-3">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900">
                FAQ<span className="text-blue-600">'s</span>
              </h2>
              <img
                src="https://www.eulermotors.com/_next/image?url=%2Fimages%2Fhome%2Fcustomer_speak%2Fheading.png&w=256&q=75"
                alt="decorative line"
                className="w-28 sm:w-36 md:w-40 mt-1 mx-auto lg:mx-0"
              />
            </div>
            <p className="text-gray-500 text-base sm:text-lg">
              Find quick answers to common questions.
            </p>
          </div>

          {/* Truck Image */}
          <div className="w-full flex justify-center lg:justify-start mt-8 sm:mt-10">
            <img
              src="https://www.eulermotors.com/_next/image?url=https%3A%2F%2Feuler-assets.s3.ap-south-1.amazonaws.com%2FTurbo_60_0a79644464.png&w=640&q=75"
              alt="Euler Turbo EV with driver"
              className="max-w-[320px] sm:max-w-[420px] md:max-w-[500px] lg:max-w-[520px] h-auto object-contain"
            />
          </div>
        </div>

        {/* RIGHT SIDE — FAQ Accordion */}
        <div className="space-y-4 h-full flex flex-col justify-center w-full">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full flex justify-between items-center px-4 sm:px-5 md:px-6 py-4 sm:py-5 text-left text-gray-800 hover:text-blue-600 transition-colors"
              >
                <div className="flex items-center gap-3 sm:gap-4 w-full text-left">
                  <span className="text-lg sm:text-xl font-semibold text-gray-400 min-w-[30px] sm:min-w-[40px]">
                    {String(faq.id).padStart(2, "0")}
                  </span>
                  <span className="text-sm sm:text-base font-medium leading-snug break-words w-full">
                    {faq.question}
                  </span>
                </div>
                {openId === faq.id ? (
                  <Minus className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 flex-shrink-0" />
                ) : (
                  <Plus className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 flex-shrink-0" />
                )}
              </button>

              {openId === faq.id && (
                <div className="px-8 sm:px-12 md:px-14 pb-4 sm:pb-5 text-sm sm:text-base text-gray-600 leading-relaxed bg-gray-50">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
