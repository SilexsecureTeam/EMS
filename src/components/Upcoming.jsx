import React from 'react'
import waiter from '../assets/waiter.jpg'
import glassware from '../assets/glassware.jpg'

const Upcoming = () => {
  return (
    <div className='bg-[#7D7D7D] text-[#333333] xl:px-20 px-4 py-10 md:py-25 text-center'>
      <h1 className='mb-10 text-white font-semibold text-3xl'>Upcoming Programs</h1>
      <div className="flex gap-6 p-4 flex-col lg:flex-row justify-between items-center">
      {/* First container */}
      <div className="md:flex md:h-86 h-fit border-2 border-black bg-gray-100  shadow-md overflow-hidden">
        <div className="md:w-[40%] relative w-full md:h-full h-50">
          <img
            src={waiter}
            alt="Sample 1"
            className="w-full h-full  object-cover"
          />
        </div>
        <div className="md:w-[60%] p-4 flex text-start  flex-col justify-center">
          <h2 className='sm:text-2xl text-xl font-semibold  text-start mb-1'>The Art of Modern Etiquette</h2>
          <h4 className=' text-[16px] mb-7 font-normal'>Tuesday, Febuary 18, 2025 12pm - 1pm</h4>
          <h2 className='sm:text-xl text-lg font-semibold  mb-1'>PHYSICAL EVENT</h2>
           <p className='sm:texl-lg text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam culpa rem impedit facilis, doloremque adipisci dolorum pariatur velit praesentium nostrum.</p>
        </div>
      </div>

      {/* Second container */}
      <div className="md:flex md:h-86 h-fit border-2 border-black bg-gray-100  shadow-md overflow-hidden">
        <div className="md:w-[40%] w-full md:h-full h-50">
          <img
            src={glassware}
            alt="Sample 2"
            className="w-full h-full  object-cover"
          />
        </div>
        <div className="md:w-[60%] p-4 flex text-start  flex-col justify-center">
          <h2 className='sm:text-2xl text-xl font-semibold text-start mb-1'>The Art of Modern Etiquette</h2>
          <h4 className=' text-[16px] mb-7 font-normal'>Tuesday, Febuary 18, 2025 12pm - 1pm</h4>
          <h2 className='sm:text-xl text-lg font-semibold  mb-1'>PHYSICAL EVENT</h2>
           <p className='sm:texl-lg text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam culpa rem impedit facilis, doloremque adipisci dolorum pariatur velit praesentium nostrum.</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Upcoming
