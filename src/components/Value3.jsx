import React from 'react'
import {
    Trophy,
    Award,
    Timer,
    Users,
    Star,
    ShieldCheck,
  } from "lucide-react";
  
  const businessValues = [
    {
      icon: <Trophy className="w-8 h-8 text-emerald-800" />,
      title: "10 Years Experience",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      bg: "bg-white",
    },
    {
      icon: <Award className="w-11.5 h-11.5 text-[#193728]" />,
      title: "Awards Archivement",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      bg: "bg-[#C3AA8C]",
    },
    {
      icon: <Timer className="w-11.5 h-11.5 text-[#193728]" />,
      title: "Fast & Perfect Work",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      bg: "bg-white",
    },
    {
      icon: <Users className="w-11.5 h-11.5 text-[#193728]" />,
      title: "Solid Team Work",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      bg: "bg-[#C3AA8C]",
    },
    {
      icon: <Star className="w-11.5 h-11.5 text-[#193728]" />,
      title: "Best Client Says",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      bg: "bg-white",
    },
    {
      icon: <ShieldCheck className="w-11.5 h-11.5 text-[#193728]" />,
      title: "Money Back Guarantee",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      bg: "bg-[#C3AA8C]",
    },
  ];

const Value3 = () => {
    return (
        <section className="py-16 px-8 md:px-12 bg-gray-50">
          <div className="max-w-7xl mx-auto text-center mb-12">
            <p className="text-[15px] text-[#B2B2B2] font-medium uppercase tracking-wide">
              Why Choose Us
            </p>
            <h2 className="text-3xl md:text-[45px] font-black text-[#303030] mb-4">
              Our Business Value
            </h2>
            <p className="text-[#6E6E6E] font-medium max-w-[660px] mx-auto text-[17px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
    
          {/* Grid Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessValues.map((item, index) => (
              <div
                key={index}
                className={`p-10 rounded-sm text-center text-[#333333]  shadow-md transition-all duration-300 hover:scale-[1.02] ${item.bg}`}
              >
                <div className="mb-4 mx-auto block w-fit">{item.icon}</div>
                <h3 className="text-2xl font-black mb-2">{item.title}</h3>
                <p className="text-[17px] max-w-[320px] mx-auto font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      );
}

export default Value3





  
