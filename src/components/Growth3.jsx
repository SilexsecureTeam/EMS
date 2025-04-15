// App.jsx
import React from 'react';
import decoration from '../assets/decoration.jpg'
import { Play } from "lucide-react";

// Main component
const Growth3 = () => {
  return (
    <div className=" flex items-center justify-center bg-white py-10">
      <div className="relative w-full h-[400px] ">
                {/* Background box */}
     <div className='relative sm:w-[52%] h-[60%] w-[80%] sm:h-[80%]'>
      {/* Background Image */}
      <img
        src={decoration}
        alt="Video Thumbnail"
        className="absolute left-0 top-0 z-10 w-full h-full object-cover"
      />

      {/* Overlay with Play Icon */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/70">
        <div className="w-16 h-16 z-40 p-2 border-2 cursor-pointer border-white rounded-full flex items-center justify-center">
          <Play className="text-white m-1 w-8 h-8" />
        </div>
      </div>
         </div>
                <div className="absolute flex items-center sm:-bottom-4 right-0 lg:bottom-0 border-1 border-[#000000] sm:w-[52%] w-[80%] sm:h-[80%] h-[69%] bg-[#B2B2B2] -bottom-28 ">
                    <div className="w-fit m-auto">
                    <h1 className='lg:text-[45px] text-2xl font-black mb-4 text-[#193728]'>Are Your Ready To <br /> Grow Business ? </h1>
                    <p className='font-medium lg:max-w-[460px] max-w-[280px] text-[17px] text-white mb-6 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    <button className='font-bold px-6 py-2.5 text-[19px] bg-transparent text-[#193728] border-2 border-[#193728]'>Get Started</button>
                    </div>
                </div>
              </div>
    </div>
  );
};

export default Growth3;