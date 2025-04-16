import React from 'react'
import woman from '../assets/womanwrite.png'
import { MoveRightIcon, MoveUpIcon } from 'lucide-react'

const Student2 = () => {
  return (
    <div className='md:p-10 md:py-10 py-4 px-5'>
      <h1 className='font-bold mx-auto block md:max-w-[990px] mb-4 w-full text-center text-2xl md:text-[40px] lg:text-[48px]'>
        We help every student to stand out from the rest
      </h1>
      <p className='text-[16px] mx-auto block text-center md:max-w-[675px] w-full mb-3 font-light text-[#555]'>
        Lorem ipsum dolor sit amet consectetur in in dignissim vulputate lectus enim diam placerat praesent diam nisl eu duis hendrerit in vivamus ligula.
      </p>

      {/* Responsive layout */}
      <div className="flex flex-col md:flex-row justify-evenly items-center gap-10 mt-10">
        <img
          src={woman}
          alt="Student writing"
          className='object-contain w-full md:w-1/2 md:h-[380px] rounded-lg'
        />

        <div className="bg-white rounded-lg shadow-md p-5 w-full  md:w-[40%]">
          {/* Feature 1 */}
          <div className="flex justify-between items-center mb-3.5">
            <h2 className="font-semibold text-[#333333] text-lg md:text-xl">World-class teachers</h2>
            <MoveUpIcon className='text-[#6C4F40] border border-[#6C4F40] rounded-full p-1 cursor-pointer hover:bg-[#6C4F40]/10 transition' size={24} />
          </div>
          <p className='font-normal text-sm md:text-base text-[#333333] mb-2.5'>
            Lorem ipsum dolor sit amet consectetur in in dignissim vulputate lectus enim diam placerat praesent diam nisl eu duis hendrerit in
          </p>
          <hr className='w-full h-[1px] opacity-40 mb-5 bg-[#000000]' />

          {/* Feature 2 */}
          <div className="flex justify-between items-center mb-3.5">
            <h2 className="font-semibold text-[#333333] text-lg md:text-xl">Well-equipped facilities</h2>
            <MoveUpIcon className='text-[#6C4F40] border border-[#6C4F40] rounded-full p-1 cursor-pointer hover:bg-[#6C4F40]/10 transition' size={24} />
          </div>
          <p className='font-normal text-sm md:text-base text-[#333333] mb-2.5'>
            Lorem ipsum dolor sit amet consectetur in in dignissim vulputate lectus enim diam placerat praesent diam nisl eu duis hendrerit in.
          </p>
          <hr className='w-full h-[1px] opacity-40 mb-5 bg-[#000000]' />

          {/* Feature 3 */}
          <div className="flex justify-between items-center mb-3.5">
            <h2 className="font-semibold text-[#333333] text-lg md:text-xl">A lifetime of connection</h2>
            <MoveUpIcon className='text-[#6C4F40] border border-[#6C4F40] rounded-full p-1 cursor-pointer hover:bg-[#6C4F40]/10 transition' size={24} />
          </div>
          <p className='font-normal text-sm md:text-base text-[#333333] mb-2.5'>
            Lorem ipsum dolor sit amet consectetur in in dignissim vulputate lectus enim diam placerat praesent diam nisl eu duis hendrerit in.
          </p>
        </div>
      </div>

      {/* Call to action */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-3 mt-10">
        <button className='bg-[#193728] hover:bg-[#154b33] transition text-white font-medium rounded-[10px] py-2 px-6'>
          Enroll Now
        </button>
        <p className='text-[#333333] font-semibold text-base flex items-center gap-x-2 cursor-pointer hover:underline'>
          View Program 
          <MoveRightIcon size={20} className='text-[#6C4F40] border border-[#6C4F40] rounded-full p-1' />
        </p>
      </div>
    </div>
  )
}

export default Student2
