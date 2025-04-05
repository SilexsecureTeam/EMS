import React from 'react'
import business from '../assets/businesswoman.jpg'

const Misson = () => {
  return (
    <section className="w-full py-20 bg-[#D9D9D9]">
    <div className="container mx-auto px-4">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <img 
            src={business}
            alt="Featured content" 
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        </div>
        
        <div className="w-full lg:w-1/2">
          <div className="max-w-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-[#6C4F40] mb-4">
              Featured Section Title
            </h2>
            <hr className='h-1 w-50 mb-5 bg-[#6C4F40]' />
            <p className=" mb-10 text-xl text-[#333333] leading-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <button className=" text-black text-lg font-medium py-5 border-4 border-[#6C4F40] px-15  transition-colors duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Misson
