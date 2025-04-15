import React from "react";
import { Lightbulb, Award, Handshake } from "lucide-react";

const features = [
  {
    title: "Smart Idea",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    icon: <Lightbulb className="w-10 h-10 text-emerald-700" />,
    bg: "bg-emerald-100",
    hoverBg: "hover:bg-emerald-200",
  },
  {
    title: "Global Awards",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    icon: <Award className="w-10 h-10 text-gray-800" />,
    bg: "bg-gray-100",
    hoverBg: "hover:bg-gray-200",
  },
  {
    title: "Best Partner",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    icon: <Handshake className="w-10 h-10 text-yellow-700" />,
    bg: "bg-yellow-100",
    hoverBg: "hover:bg-yellow-200",
  },
];

const Business3 = () => {

  return (
    <section className="px-4 md:px-8 lg:px-16 py-16 bg-white">
      {/* Header Section */}
      <div className="mb-12 grid gap-6 md:grid-cols-2 items-center">
        <div>
          <p className="text-sm font-medium text-emerald-600 uppercase tracking-wide">
            Grow Your Business
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            We Are Perfect Solution For <br /> Your Business
          </h2>
        </div>
        <p className="text-gray-600 text-base leading-relaxed">
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
            className={`rounded-xl shadow-md transition-all duration-300 p-6 cursor-pointer ${feature.bg} ${feature.hoverBg}`}
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}


export default Business3;
