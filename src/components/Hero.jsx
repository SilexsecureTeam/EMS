import React from 'react'

const Hero = () => {
  return (
    <div className="h-screen ">
    <div
      className="h-full bg-cover bg-center bg-[url('./assets/tables.png')]"
    >
      <div className="h-full bg-black/50 px-10 flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="md:text-4xl text-2xl font-bold sm:max-w-[300px]  md:max-w-[560px] mb-4">Master the Art of Professional Excellence </h1>
          <p className="sm:text-lg text-sm font-normal md:text-2xl sm:max-w-[300px] md:max-w-[560px]">Join the leading Etiquette & Management School and elevate your personal & coporate persence</p>
          <button className='mt-5 border-1 border-[#C3AA8C] hero-btn cursor-pointer text-white'>Explore Courses </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Hero
