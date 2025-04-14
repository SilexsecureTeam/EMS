import React from "react";

const services = [
  {
    title: "Digital Marketing Service",
    bg: "bg-[#5E5E5E]",
    buttonBg: "bg-[#C3AA8C] text-white",
  },
  {
    title: "Website Development",
    bg: "bg-[#B2B2B2]",
    buttonBg: "bg-[#193728] text-white",
  },
  {
    title: "SEO Service Specialist",
    bg: "bg-[#5E5E5E]",
    buttonBg: "bg-[#C3AA8C] text-white",
  },
  {
    title: "IT Business Consultant",
    bg: "bg-[#B2B2B2]",
    buttonBg: "bg-[#193728] text-white",
  },
];

const Digital3 = () =>  {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {services.map((service, index) => (
        <div
          key={index}
          className={`p-6 sm:p-8 h-60 sm:h-64 border-b-1 border-b-[#193728] flex flex-col justify-between ${service.bg} text-white`}
        >
          <h2 className="text-3xl sm:text-[35px] font-black">
            {service.title}
          </h2>
          <button
            className={`mt-6 px-4 py-2 rounded font-bold w-fit text-[17px] ${service.buttonBg}`}
          >
            Learn More
          </button>
        </div>
      ))}
    </div>
  );
}

export default Digital3;