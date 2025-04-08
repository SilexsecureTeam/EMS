import React from 'react'
import seminar from '../assets/seminar.png'
import { MoveRight } from 'lucide-react';

const Misson2 = () => {
  return (
    <section className="w-full py-20 bg-[#D9D9D9]">
    <div className="container mx-auto px-4">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <img 
            src={seminar}
            alt="Featured content" 
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        </div>
        
        <div className="w-full lg:w-1/2 lg:pl-7">
          <div className="max-w-lg">
            <h2 className="text-3xl md:text-[48px] md:leading-12 font-bold text-[#333333] mb-4">
            Our mission is to prepare you for the future
            </h2>
            <p className=" mb-10 text-base font-normal text-[#333333] ">
            Lorem ipsum dolor sit amet consectetur. Pretium mattis semper massa pharetra enim. Nulla diam vitae sociis aliquam id adipiscing odio mattis.
            </p>
            <div className='flex gap-x-2 items-center justify-start '>
                   <button className="mt-1 bg-[#193728] text-[21px] font-semibold cursor-pointer text-white px-3 py-1.5">
                     Enroll Now
                   </button>
                   <div className="flex items-center">
                    <h4 className='font-semibold text-[16px] text-[#333333]'>View Programs </h4>
                    <MoveRight className='ml-1 border-1 border-[#333333] p-[3px] rounded-full ' size={26} color='#333333' />
                   </div>
                   </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Misson2
