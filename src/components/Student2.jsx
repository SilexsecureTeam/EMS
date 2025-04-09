import React from 'react'
import woman from '../assets/womanwrite.png'
import { MoveRightIcon, MoveUpIcon } from 'lucide-react'

const Student2 = () => {
  return (
    <div className='md:p-10 py-10 px-5'>
            <h1 className='font-bold mx-auto block md:max-w-[990px] mb-4 w-full text-center text-2xl md:text-[40px] lg:text-[48px]'>We help every student to 
            stand out from the rest</h1>
                <p className='text-[16px] mx-auto block text-center md:max-w-[675px] w-full mb-3 font-light'>Lorem ipsum dolor sit amet consectetur in in dignissim vulputate lectus enim diam placerat praesent diam nisl eu duis hendrerit in vivamus ligula.</p>    
        <div className="relative w-full h-[600px] mt-10">
        <img src={woman} alt="img" className='w-full object-fill pl-5 h-full rounded-lg ' />
        <div className="absolute md:bottom-15 bottom-8 -right-1 bg-white rounded-sm p-5 pt-10 max-w-[510px]">
         <div className="flex justify-between mb-3.5 item-center">
            <h2 className="font-semibold text-[#333333] text-24"> World-class teachers</h2>
            <MoveUpIcon className='text-[#6C4F40]  rounded-full border-1 border-[#6C4F40] p-1  cursor-pointer' size={23} />
         </div>
         <p className='font-normal text-[16px] mb-2.5 md:max-w-[385px] max-w-[320px] text-[#333333]'>Lorem ipsum dolor sit amet consectetur in in dignissim vulputate lectus enim diam placerat praesent diam nisl eu duis hendrerit in</p>
         <hr className='w-full h-[1px] opacity-40 mb-5 bg-[#000000]'/>
         <div className="flex justify-between mb-3.5 item-center">
            <h2 className="font-semibold text-[#333333] text-24"> Well-equipped facilities</h2>
            <MoveUpIcon className='text-[#6C4F40]  rounded-full border-1 border-[#6C4F40] p-1  cursor-pointer' size={23} />
         </div>
         <p className='font-normal text-[16px] mb-2.5 md:max-w-[385px] max-w-[320px] text-[#333333]'>Lorem ipsum dolor sit amet consectetur in in dignissim vulputate lectus enim diam placerat praesent diam nisl eu duis hendrerit in.</p>
         <hr className='w-full h-[1px] opacity-40 mb-5 bg-[#000000]'/>
         <div className="flex justify-between mb-3.5 item-center">
            <h2 className="font-semibold text-[#333333] text-24"> A lifetime of connection</h2>
            <MoveUpIcon className='text-[#6C4F40]  rounded-full border-1 border-[#6C4F40] p-1  cursor-pointer' size={23} />
         </div>
         <p className='font-normal text-[16px] mb-2.5 md:max-w-[385px] max-w-[320px] text-[#333333]'>Lorem ipsum dolor sit amet consectetur in in dignissim vulputate lectus enim diam placerat praesent diam nisl eu duis hendrerit in.</p>
         {/* <hr className='w-full h-[1px] opacity-40 mb-5 bg-[#000000]'/> */}
        </div>   
        </div>
        <div className="flex justify-center gap-x-2 mt-5 items-center">
            <button className='bg-[#193728] text-white rounded-[10px] py-2 px-5'>Enroll Now</button>
            <p className='text-[#333333] font-semibold text-base items-center gap-x-2 flex'>View Program <MoveRightIcon size={20} className='text-[#6C4F40]  rounded-full border-1 border-[#6C4F40] p-1  cursor-pointer' /> </p>
        </div>
    </div>
  )
}

export default Student2
