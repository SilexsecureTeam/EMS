import React from 'react';
import maid from '../assets/chambermaid.jpg';
import { CalendarDaysIcon, ChevronRightIcon, MoveRight, TimerIcon } from 'lucide-react';

const New2 = () => {
  return (
    <div className="py-8 px-4 sm:px-6 md:px-10 bg-gray-100">
      <div className="w-full mx-auto">
        <h1 className="font-semibold mb-4 text-[#333333] text-center sm:text-start text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          News & Events
        </h1>
        <div className="flex flex-col sm:flex-row justify-between mb-6 items-center gap-4">
          <p className="text-[14px] sm:text-[16px] text-[#333333] font-normal text-center sm:text-start max-w-md">
            Lorem ipsum dolor sit amet consectetur in in dignissim vulputate lectus enim diam placerat praesent diam.
          </p>
          <button className="rounded-md bg-[#193728] text-[16px] sm:text-[18px] font-semibold text-white px-4 py-2 hover:bg-[#2a503e] transition duration-300">
            Browse all articles
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Featured Article */}
          <div className="w-full relative rounded-lg overflow-hidden shadow-md">
            <img
              src={maid}
              alt="Chambermaid working"
              className="w-full h-64 sm:h-80 md:h-[475px] object-cover"
            />
            <div className="absolute md:bottom-5 md:left-5 bottom-2 left-2 bg-[#CFBDA2] p-4 sm:p-6">
              <p className="max-w-[429px] mb-2 font-semibold text-[18px] sm:text-[22px] md:text-[24px] text-[#333333]">
                How to make your etiquette training application stand out
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <button className="rounded-md bg-[#193728] text-[14px] font-semibold text-white px-3 py-1.5 hover:bg-[#2a503e] transition">
                  Management
                </button>
                <div className="flex items-center gap-x-2">
                  <CalendarDaysIcon size={16} color="#333333" />
                  <p className="text-[14px] sm:text-base font-semibold text-[#333333]">
                    Mar 17, 2025
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Events Section */}
          <div className="w-full flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <p className="text-[#333333] font-semibold text-[20px] sm:text-[24px] md:text-[28px]">
                Upcoming Events
              </p>
              <a href="#" className="flex items-center gap-x-2 hover:underline">
                <span className="text-[14px] sm:text-[16px] font-semibold text-[#333333]">
                  Browse all
                </span>
                <ChevronRightIcon size={20} color="#333333" />
              </a>
            </div>
            <hr className="w-full border-[#333333] mb-6" />

            {/* Event Item */}
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="w-full mb-6">
                <h2 className="mb-2 text-[#333333] font-semibold text-[18px] sm:text-[20px] md:text-[22px]">
                  The Art of Modern Etiquette
                </h2>
                <div className="flex justify-between mb-2 items-center">
                  <p className="text-[#333333] font-light text-[13px] sm:text-[15px] max-w-xs">
                    Lorem ipsum dolor sit amet consectetur ine
                  </p>
                  <a href="#">
                    <MoveRight
                      size={22}
                      color="#333333"
                      className="p-1 rounded-full border border-[#333333] hover:bg-[#193728] hover:border-[#193728] hover:text-white transition"
                    />
                  </a>
                </div>
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  <div className="flex items-center gap-x-2">
                    <CalendarDaysIcon size={16} color="#333333" />
                    <p className="text-[14px] sm:text-base font-semibold text-[#333333]">
                      Mar 17, 2025
                    </p>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <TimerIcon size={16} color="#333333" />
                    <p className="text-[14px] sm:text-base font-normal text-[#333333]">
                      10 AM - 2 PM
                    </p>
                  </div>
                </div>
                {index < 2 && <hr className="w-full border-[#333333] mt-4" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default New2;