import React from "react";
import { Lightbulb, Award, Handshake } from "lucide-react";

const features = [
  {
    title: "Smart Idea",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    icon: <Lightbulb className="w-11.5 h-11.5 text-[#193728]" />,
    bg: "bg-[#193728]",
    hoverBg: "hover:bg-[#12261b]",
    iconbg: "bg-white",
    text: "text-white"
  },
  {
    title: "Global Awards",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    icon: <Award className="w-11.5 h-11.5 text-[#193728]" />,
    bg: "bg-[#7D7D7D]",
    hoverBg: "hover:bg-[#5c5c5c]",
    iconbg: "bg-white",
    text: "text-white"
  },
  {
    title: "Best Partner",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    icon: <Handshake className="w-11.5 h-11.5 text-[#193728]" />,
    bg: "bg-white",
    hoverBg: "hover:bg-[#f2f2f2]",
    iconbg: "bg-[#CFBDA2]",
    text: "text-black"
  },
];

const Business3 = () => {

  return (
    <section className="px-4 md:px-8 lg:px-16 py-16 bg-white">
      {/* Header Section */}
      <div className="mb-12 grid gap-6 md:grid-cols-2 items-center">
        <div>
          <p className="text-[15px] mb-4 font-medium text-[#B2B2B2] uppercase tracking-wide">
            Grow Your Business
          </p>
          <h2 className="text-4xl md:text-[45px] font-black text-[#303030] max-w-[600px] leading-tight">
            We Are Perfect Solution For <br /> Your Business
          </h2>
        </div>
        <p className="text-[#6E6E6E] text-[17px] font-normal max-w-[600px] leading-relaxed">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium. Totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className={` shadow-md transition-all duration-300 p-8 cursor-pointer ${feature.bg} ${feature.hoverBg}`}
          >
            <div className={`mb-4 p-3 w-fit ${feature.iconbg}`}>{feature.icon}</div>
            <h3 className={`text-2xl font-black mb-2 ${feature.text}`}>
              {feature.title}
            </h3>
            <p className={` max-w-[320px] font-medium text-[17px] ${feature.text}`}>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}


export default Business3;
