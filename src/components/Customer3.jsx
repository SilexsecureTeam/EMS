import React from 'react'
import mixing from '../assets/mixing.jpg'
import { CheckIcon } from "lucide-react";

const Customer3 = () => {
  return (
    <div>
      <section className="py-16 px-4 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Image Section */}
        <div className="relative w-full h-[400px] md:h-full">
          {/* Background box */}
          <img
            src={mixing}
            alt="Salad preparation"
            className="absolute left-0 top-0 z-10 w-[80%] h-[80%]  object-cover"
          />
          <div className="absolute bottom-6 right-6 border-1 border-[#000000] w-4/5 h-4/5 bg-[#CFBDA2] "></div>
        </div>

        {/* Text Content */}
        <div>
          <p className="text-sm font-medium text-[#B2B2B2] uppercase tracking-wider mb-2">
            All in One Package
          </p>
          <h2 className="text-3xl md:text-[45px] font-black text-[#303030] leading-tight mb-4">
            Get More Customer Now & <br />
            Lets 24 Hours Online
          </h2>
          <p className="text-[#6E6E6E] text-[17px] mb-6 font-medium leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>

          {/* Feature List */}
          <ul className="space-y-3 mb-6">
            {["Website Ready", "All in Audience", "Digital Marketing"].map(
              (item, index) => (
                <li key={index} className="flex items-center font-medium text-[17px] text-[#6E6E6E]">
                  <CheckIcon className="w-5 h-5 font-bold text-[#193728] mr-2" />
                  {item}
                </li>
              )
            )}
          </ul>

          {/* CTA Button */}
          <button className="bg-[#193728] font-bold text-[17px] text-white px-6 py-3 rounded-md transition duration-300">
            Detail Project
          </button>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Customer3
