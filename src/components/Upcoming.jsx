import React from 'react'
import waiter from '../assets/waiter.jpg'
import glassware from '../assets/glassware.jpg'

const Upcoming = () => {
  return (
    <div className='bg-[#7D7D7D] px-20 py-25 text-center'>
      <h1 className='mb-10 text-white'>Upcoming Programs</h1>
      <div className="flex gap-6 p-4">
      {/* First container */}
      <div className="flex flex-col h-72 md:flex-row border-2 border-black bg-gray-100  shadow-md overflow-hidden">
        <div className="md:w-[40%]">
          <img
            src={waiter}
            alt="Sample 1"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:w-[60%] p-4 flex text-start  flex-col justify-center">
          <h2 className='text-3xl text-black text-start mb-1'>The Art of Modern Etiquette</h2>
          <h4 className='text-xl mb-7 font-normal '>Tuesday, Febuary 18, 2025 12pm - 1pm</h4>
          <h2 className='text-xl text-black mb-1 '>PHYSICAL EVENT</h2>
           <p className='texl-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam culpa rem impedit facilis, doloremque adipisci dolorum pariatur velit praesentium nostrum.</p>
        </div>
      </div>

      {/* Second container */}
      <div className="flex bg-gray-100 border-2 md:flex-row border-black  h-72 shadow-md overflow-hidden">
        <div className="md:w-[40%]">
          <img
            src={glassware}
            alt="Sample 2"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:w-[60%] p-4 flex text-start  flex-col justify-center">
          <h2 className='text-3xl text-black text-start mb-1'>The Art of Modern Etiquette</h2>
          <h4 className='text-xl mb-7 font-normal '>Tuesday, Febuary 18, 2025 12pm - 1pm</h4>
          <h2 className='text-xl text-black mb-1 '>PHYSICAL EVENT</h2>
           <p className='texl-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam culpa rem impedit facilis, doloremque adipisci dolorum pariatur velit praesentium nostrum.</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Upcoming
