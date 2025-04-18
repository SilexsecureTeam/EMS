import React from 'react'
import cake from '../assets/cake.jpg'
import dinnng from '../assets/dining-table.jpg'
import { CheckIcon } from "lucide-react";

const Traffic3 = () => {
  return (
      <div>
        <section className="py-16 px-4 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Text Content */}
          <div>
            <p className="text-sm font-medium text-[#B2B2B2] uppercase tracking-wider mb-2">
            SEO Service Specialist
            </p>
            <h2 className="text-3xl md:text-[45px] max-w-[600px] font-black text-[#303030] leading-tight mb-4">
            Get Organic Traffict From Search Engine Optimization
            </h2>
            <p className="text-[#6E6E6E] max-w-[525px] text-[17px] mb-6 font-medium leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
  
            {/* Feature List */}
            <ul className="space-y-3 mb-6">
              {["Google Search", "Bing Search", "And Many More"].map(
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
           {/* Image Section */}
<div className="relative w-full h-[400px] md:h-full">
  {/* Dining Image with Overlay */}
  <div className="absolute right-0 top-0 w-[80%] h-[80%]">
    <img
      src={dinnng}
      alt="Salad preparation"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black/50"></div>
  </div>

  {/* Cake Image with Overlay */}
  <div className="absolute bottom-0 left-0 w-[50%] h-[50%] z-30">
    <img
      src={cake}
      alt="cake stand"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black/50"></div>
  </div>
</div>

        </div>
      </section>
      </div>
    )
}

export default Traffic3
