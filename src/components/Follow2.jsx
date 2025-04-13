import React from "react";
import cake from '../assets/cake.jpg'
import bedroom from '../assets/businesswoman.jpg'
import decoration from '../assets/decoration.jpg'
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Follow2 = () => {
  const images = [
    {
      src: cake,
      platform: "Twitter",
      username: "@ems_school",
      icon: <FaInstagram className="text-black bg-white p-0.5" size={20} />,
    },
    {
      src: bedroom,
      platform: "Facebook",
      username: "@ems_school",
      icon: <FaLinkedinIn className="text-black bg-white p-0.5" size={20} />,
    },
    {
      src: decoration,
      platform: "Instagram",
      username: "@ems_school",
      icon: <FaFacebookF className="text-black bg-white p-0.5" size={20} />,
    },
    {
      src: bedroom,
      platform: "LinkedIn",
      username: "@ems_school",
      icon: <FaTwitter className="text-black bg-white p-0.5" size={20} />,
    },
  ];

  return (
    <section className="p-4 pb-20">
      <h1 className="font-semibold text-[40px] text-center text-[#333333] my-2">Follow us on</h1>
      <p className="text-[16px] max-w-[655px] font-normal text-[#333333] mb-4 text-center mx-auto">Lorem ipsum dolor sit amet consectetur. Viverra vivamus tempus hac ornare eget
      dolor sit amet consectedolor sit amet consectetur.</p>
    <div className="grid grid-cols-1 mb-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {images.map((item, index) => (
        <div key={index} className="relative group overflow-hidden rounded-lg ">
          {/* Top Overlay with Icon and Username */}
          <div className="absolute top-2 left-2 w-full flex items-center space-x-2  text-white text-sm p-2 rounded-t-lg z-10">
            {item.icon}
            <span>{item.username}</span>
          </div>

          {/* Image */}
          <img
            src={item.src}
            alt={`Image ${index + 1}`}
            className="w-full h-[300px] object-cover"
          />

          {/* Bottom Overlay for effect */}
          <div className="absolute inset-0 bg-black opacity-50 group-hover:bg-opacity-30 transition-all duration-300 rounded-lg" />
        </div>
      ))}
    </div>
    <button className="rounded-md bg-[#193728] text-[16px] sm:text-[18px] font-semibold text-white px-4 py-2 hover:bg-[#2a503e] transition duration-300 mx-auto block">
            Follow us
          </button>
  </section>
  );
};

export default Follow2;
