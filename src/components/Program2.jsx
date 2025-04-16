import React from 'react'
import dinning from '../assets/dining-table.jpg'
import { MoveRightIcon } from 'lucide-react';

const Program2 = () => {
  return (
    <div className='md:p-10 py-10'>
      <div className="bg-[#C3AA8C] p-9 md:px-9 px-4 rounded-sm">
        <div className="flex flex-col text-center gap-2 md:text-start md:flex-row md:justify-between justify-center item-center">
            <h1 className='font-bold md:max-w-[550px] w-full text-2xl md:text-[40px] lg:text-[48px]'>We have the best-in- 
            Etiquette programs</h1>
            <div className="md:max-w-[389px] w-full  flex flex-col justify-center">
                <p className='text-[16px] mb-3 font-normal'>Lorem ipsum dolor sit amet consectetur. Pretium mattis semper massa pharetra enim. Nulla di.</p>
                <div className="py-3 px-1 flex bg-white justify-between items-center  h-[50px]">
                    <button className='bg-[#193728] text-white rounded-[5px] py-2 px-5'>student</button>
                    <p className='text-[16px] font-semibold text-[#333333]'>Parent or Employer </p>
                </div>
            </div>
        </div>
        <div className="relative w-full h-[600px] mt-10">
        <img src={dinning} alt="img" className='w-full h-full rounded-lg ' />
        <div className="absolute bottom-5 left-5 bg-white rounded-sm p-5 pt-10 max-w-[330px]">
            <h1 className="text-[36px] font-semibold text-[#333333]">Student</h1>
            <p className="text-[16px] mb-3 font-light text-[#333333]">Lorem ipsum dolor sit amet consectetur. Pretium mattis semper massa pharetra </p>
            <hr className='w-full h-0.5 bg-[#333333]'/>
            <div className="flex justify-start gap-x-2 mt-4">
                <div>
                <div className="font-semibold text-[38px] mb-3">
                    50<span className='text-[#AD8862]'>+</span>
                </div>
                   <p className='font-light text-[#333333] text-base'>Courses</p>
                </div>
                <div>
                <div className="font-semibold text-[38px] mb-3">
                    20<span className='text-[#AD8862]'>+</span>
                </div>
                   <p className='font-light text-[#333333] text-base'>Program</p>
                </div>
            </div>
            <MoveRightIcon className='text-[#333333] absolute right-6 bottom-3  rounded-full border-1 border-[#333333] p-1  cursor-pointer' size={30} />
        </div>   
        </div>
      </div>
    </div>
  )
}

export default Program2
