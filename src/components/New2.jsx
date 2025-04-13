import React from 'react'
import maid from '../assets/chambermaid.jpg'
import { CalendarDaysIcon, ChevronRightIcon, MoveRight, TimerIcon } from 'lucide-react'

const New2 = () => {
  return (
    <div className='py-10 px-4 md:px-10'>
      <h1 className='font-semibold mb-3 text-[#333333] md:text-start text-center  w-full text-2xl md:text-[36px] lg:text-[48px]'>News & events</h1>
      <div className="flex justify-between mb-5">
        <p className='text-[16px] text-[#333333] font-normal md:text-start text-center max-w-[461px]'>Lorem ipsum dolor sit amet consectetur in in dignissim vulputate lectus enim diam placerat praesent diam.</p>
       <button className=" md:block hidden rounded-sm bg-[#193728] text-[21px] font-semibold cursor-pointer text-white px-3 py-1.5">
                     Browse all articles
                   </button> 
      </div>
      <div className="flex md:flex-row gap-4 gap-x-4 flex-col">
        <div className='w-full  relative max-h-[515px]'>
         <img src={maid} alt="i" className=' w-full h-full' />
         <div className=" absolute bottom-2 left-2 bg-[#CFBDA2] pl-10 py-3">
          <p className="max-w-[429px] mb-2 font-semibold text-[26px]">How to make your etiquette training application stand out</p>
          <div className="flex gap-x-5 mb-4 w-full items-center">
          <button className="block rounded-sm bg-[#193728] text-[14px] font-semibold cursor-pointer text-white px-3 py-1.5">
                     Managment
                   </button>
                   <div className="flex  items-center gap-x-2">
              <CalendarDaysIcon size={16} color='#333333' />
                <p className='text-base font-semibold text-[#333333]'>Mar 17, 2025 </p>
               </div>
            </div>
         </div>
         </div>
         <div className="flex flex-col items-center w-full justify-between">
          <div className='w-full'>
            <div className="flex justify-between mb-4 w-full items-center">
               <p className='text-[#333333] font-semibold text-[28px]'>Upcoming Events</p>
               <div className="flex gap-x-2">
                <p className='text-base font-semibold text-[16px]'>Browse all</p>
                <ChevronRightIcon size={25} color='#333333' />
               </div>
            </div>
            <hr className='w-full border-1 border-[#333333]'/>
            </div>
          <div className='w-full mt-6'>
            <h2 className='mb-3 text-[#333333] font-semibold text-[22px]'>The Art of Modern Etiquette </h2>
            <div className="flex justify-between mb-2 w-full items-center">
               <p className='text-[#333333] font-light text-[16px]'>Lorem ipsum dolor sit amet consectetur ine </p>
               <MoveRight  size={24} color='#333333' className='p-1 rounded-full border-1 border-[#333333]'/>
            </div>
            <div className="flex mb-6 items-center gap-x-8">
            <div className="flex  items-center gap-x-2">
              <CalendarDaysIcon size={16} color='#333333' />
                <p className='text-base font-semibold text-[#333333]'>Mar 17, 2025 </p>
               </div>
            <div className="flex items-center gap-x-2">
              <TimerIcon size={16} color='#333333' />
                <p className='text-base font-nomal text-[#333333]'>10pm - 2pm </p>
               </div>
               </div>
            <hr className='w-full border-1 border-[#333333]'/>
            </div>
          <div className='w-full mt-6'>
            <h2 className='mb-3 text-[#333333] font-semibold text-[22px]'>The Art of Modern Etiquette </h2>
            <div className="flex justify-between mb-2 w-full items-center">
               <p className='text-[#333333] font-light text-[16px]'>Lorem ipsum dolor sit amet consectetur ine </p>
               <MoveRight  size={24} color='#333333' className='p-1 rounded-full border-1 border-[#333333]'/>
            </div>
            <div className="flex mb-6 items-center gap-x-8">
            <div className="flex  items-center gap-x-2">
              <CalendarDaysIcon size={16} color='#333333' />
                <p className='text-base font-semibold text-[#333333]'>Mar 17, 2025 </p>
               </div>
            <div className="flex items-center gap-x-2">
              <TimerIcon size={16} color='#333333' />
                <p className='text-base font-nomal text-[#333333]'>10pm - 2pm </p>
               </div>
               </div>
            <hr className='w-full border-1 border-[#333333]'/>
            </div>
          <div className='w-full mt-6'>
            <h2 className='mb-3 text-[#333333] font-semibold text-[22px]'>The Art of Modern Etiquette </h2>
            <div className="flex justify-between mb-2 w-full items-center">
               <p className='text-[#333333] font-light text-[16px]'>Lorem ipsum dolor sit amet consectetur ine </p>
               <MoveRight  size={24} color='#333333' className='p-1 rounded-full border-1 border-[#333333]'/>
            </div>
            <div className="flex mb-6 items-center gap-x-8">
            <div className="flex  items-center gap-x-2">
              <CalendarDaysIcon size={16} color='#333333' />
                <p className='text-base font-semibold text-[#333333]'>Mar 17, 2025 </p>
               </div>
            <div className="flex items-center gap-x-2">
              <TimerIcon size={16} color='#333333' />
                <p className='text-base font-nomal text-[#333333]'>10pm - 2pm </p>
               </div>
               </div>
            <hr className='w-full border-1 border-[#333333]'/>
            </div>
         </div>
      </div>
    </div>
  )
}

export default New2
