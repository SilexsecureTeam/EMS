import React from 'react'

const Hero = () => {
  return (
    <div className="h-screen">
    <div
      className="h-full bg-cover bg-center bg-[url('./assets/tables.png')]"
    >
      <div className="h-full bg-black/50 flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold max-w-[560px] mb-4">Master the Art of Professional Excellence </h1>
          <p className="text-2xl max-w-[560px]">Join the leading Etiquette & Management School and elevate your personal & coporate persence</p>
          <button className='mt-5 hero-btn cursor-pointer text-white'>Explore Courses </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Hero
