import React from 'react'
import { MailOpen, MoveRightIcon, Smartphone } from 'lucide-react'
import seminar from '../assets/seminar.png'
import play from '../assets/play.png'

const College2 = () => {
  return (
    <div className='py-10 px-0 md:px-10 '>
      <div className='flex md:flex-row flex-col gap-5 justify-between p-8 md:px-8 px-4 pb-15 bg-[#E2D8C6]'>
        <div className="flex flex-col gap-10 justify-end md:max-w-[550px] w-full mx-auto">
        <h1 className='font-semibold md:text-start flex items-center text-center md:max-w-[550px] w-full text-2xl md:text-[36px] lg:text-[48px]'>Watch what a day in our college look like</h1>
        <div className="block md:max-w-[550px] w-full">
            <p className='text-[16px] md:max-w-[550px] md:text-start text-center w-full mb-3 font-light'>Lorem ipsum dolor sit amet consectetur. Tortor elit magna etiam in facilisi ultrices ut in. Tortor elit magna Tortor elit magna</p>
            <div className="flex md:justify-start justify-center gap-x-2 mt-5 items-center">
            <button className='bg-[#193728] text-white rounded-[10px] py-2 px-5'>Enroll Now</button>
            <p className='text-[#333333] font-semibold text-base items-center gap-x-2 flex'>View Program <MoveRightIcon size={20} className='text-[#6C4F40]  rounded-full border-1 border-[#6C4F40] p-1  cursor-pointer' /> </p>
        </div>
        </div>
        </div>
        <div className="flex flex-col gap-10 justify-end ">
            <div className="relative md:max-w-[515px] max-w-full">
            <img src={seminar} alt="a" className='h-[266px]  max-w-full mx-auto' />
            <div className="absolute bottom-5 right-3 z-50 bg-white rounded-sm p-5 pt-10">
                <div className="flex gap-x-2 items-center">
                   <img src={play} alt="i" className='w-fit '/>
                   <div className="flex flex-col gap-x-3">
                        <h1 className="text-[12px] font-semibold text-[#333333]">Watch video</h1>
                        <p className="text-[12px] mb-3 font-light text-[#333333]">How’s a day in training like </p>
                        </div>
                    </div>   
                </div>
            </div>
            <div className="">
                <div className="flex flex-col gap-5 items-center">
                    <div className="flex gap-x-3">
                        <MailOpen size={20} color='#333333' className=''/>
                        <div className="flex flex-col gap-1">
                            <h3 className='font-normal text-[16px]'>Send us an email</h3>
                           <h3 className='font-semibold text-[16px]'> contact@emshub.com</h3>
                        </div>
                    </div>
                    <div className="flex gap-x-3">
                        <Smartphone size={20} color='#333333' />
                        <div className="flex flex-col gap-1">
                            <h3 className='font-normal text-[16px]'>Give us a call</h3>
                           <h3 className='font-semibold text-[16px]'>(+234) 7012-244-633</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default College2
