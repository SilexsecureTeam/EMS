import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import seminar from '../assets/seminar.png'

const faqs = [
  {
    question: "How To Order Services ?",
    answer:
      "You can order our services by contacting our team directly through the website or by filling out our service request form.",
  },
  {
    question: "Can I Make An Offer ?",
    answer:
      "Yes, we welcome client offers. You can submit your proposal, and we will review it and respond promptly.",
  },
  {
    question: "How Long Guarantee ?",
    answer:
      "All our services come with a standard 12-month guarantee unless otherwise specified in the agreement.",
  },
];

const Faq3 = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        {/* Video Section */}
        <div className="relative aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
          <img
            src={seminar}
            alt="FAQ video preview"
            className="w-full h-full object-cover"
          />
          <button className="absolute inset-0 flex items-center justify-center">
            <div className="text-white p-1 cursor-pointer rounded-full border-white border-2 hover:scale-110 transition-transform">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-white"
                fill="white"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.752 11.168l-4.586-2.65A1 1 0 009 9.382v5.236a1 1 0 001.166.964l4.586-1.118A1 1 0 0015 13.528v-1.056a1 1 0 00-.248-.304z"
                />
              </svg>
            </div>
          </button>
        </div>

        {/* FAQ Content */}
        <div>
          <h4 className="text-[15px] font-medium uppercase tracking-widest text-[#B2B2B2] mb-2">
            Frequently Asked Question
          </h4>
          <h2 className="text-3xl md:text-[45px] font-black text-[#303030] mb-4">
            Usually Asked Question From Our Clients & Partner
          </h2>
          <p className="text-[#6E6E6E] max-w-[525px] text-[17px] font-medium mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
            luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-[#DADADA] pb-4 cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-[17px] font-black text-[#303030]">
                    {faq.question}
                  </h3>
                  <span>
                    {openIndex === index ? (
                      <Minus className="w-[20px] h-[20px] font-black text-[#193728]" />
                    ) : (
                      <Plus className="w-[20px] h-[20px] font-black text-[#193728]" />
                    )}
                  </span>
                </div>
                {openIndex === index && (
                  <p className="text-[17px] text-[#303030] font-medium mt-2 transition-all duration-300">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq3;
