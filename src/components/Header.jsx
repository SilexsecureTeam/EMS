import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png'
import { UserRound, ShoppingCart, SearchIcon } from 'lucide-react'
import vector from '../assets/Vector.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div>
        <div className='w-full xl:pr-33 md:pr-35 sm:pr-20 flex justify-end bg-[#D9D9D9] h-16 p-2'>
            <div className='relative'>
            <input className='border-2 w-[150px]  border-[#C3AA8C] mr-3.5 pl-2 py-2' type="text" placeholder='Search the site' />
            <SearchIcon className='absolute cursor-pointer bottom-4 right-6 border-l-2 pl-0.5' size={20} color="#020202" />
            </div>
            <div class="relative inline-block text-left">
             <select class="block w-full font-medium sm:px-6 px-3 md:px-12 rounded-none py-2 pr-7 leading-tight bg-[#C3AA8C] text-[17px] border-[#856149] border-2  appearance-none focus:outline-none">
             <option value="option1">Option 1</option>
             </select>
                <div class=" absolute inset-y-0 md:right-6.5 md:bottom-1 right-1 flex items-center bottom-0 px-2 ">
                  <img src={vector} alt="vector" className='cursor-pointer' />
                </div>
            </div>
        </div>
        <div>
        <div className='flex justify-between items-center px-5 mt-6 pb-14 border-b-1 '>
           <div className='pl-3 md:pl-15'>
            <img src={logo} alt="logo" className='lg:w-55 md:45 w-35' />
            </div>
            <div className=' md:items-center lg:gap-x-5 md:gap-x-2 hidden md:flex'>
                <h4 className='font-medium text-[#333333]'>I am</h4>
                <div class="relative flex items-center text-left">
             <select class="block lg:w-[220px] font-medium px-3 py-3 pr-8 leading-tight  border-[#856149] border-1 header-shadow  appearance-none focus:outline-none">
             <option value="option1">Choose an option</option>
             </select>
                <div class=" absolute inset-y-0 right-12 flex items-center bottom-0 px-2 ">
                  <img src={vector} alt="vector" className='cursor-pointer' />
                </div>
                <h2 className='bg-[#193728] p-2.5 text-center text-white'>GO</h2>
            </div>
            <button className='border-2 cursor-pointer lg:px-[40px] px-7 head-btn border-[#856149] text-[#856149] md:block hidden py-3 font-medium'>
                APPLY
            </button>
            <button className='text-white md:block hidden header-btn px-8 py-3 font-medium'>
                CONTACT
            </button>
            <UserRound className='header-user md:block hidden'/>
            <ShoppingCart size={22} className='md:block hidden'/> 
            </div>
            <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="p-2 cursor-pointer text-[#333333] bg-[#C3AA8C] focus:outline-none transition-colors duration-300"
            >
              <div className="relative w-6 h-6">
                <div className={`absolute transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}>
                  <Menu size={24} />
                </div>
                <div className={`absolute transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}>
                  <X size={24} />
                </div>
              </div>
            </button>
          </div>
        </div> 
        <div 
        className={`md:hidden mb-5 overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-fit opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-[#333333]">
          <div className='flex justify-between gap-x-3 items-center '>
          <div className='items-center gap-x-1 flex flex-wrap'>
                <h4 className='font-medium text-[14px] text-[#333333]'>I am</h4>
                <div class="relative flex items-center text-left">
             <select class="block w-[130px] font-medium px-0.5 py-2 pr-5 leading-tight  border-[#856149] border-1 header-shadow  appearance-none focus:outline-none">
             <option value="option1">Choose an option</option>
             </select>
                <div class=" absolute inset-y-0 right-9 flex items-center bottom-0 px-2 ">
                  <img src={vector} alt="vector" className='cursor-pointer' />
                </div>
                <h2 className='bg-[#193728] p-2 text-center text-white'>GO</h2>
            </div>
            </div>
            <div className='flex gap-x-2 items-center'>
          <UserRound className='header-user '/>
          <ShoppingCart size={25} /> 
          </div>
          </div>
          <a href="#" className="block px-3 text-xl font-semibold py-1 rounded hover:bg-[#C3AA8C] transition-colors">Home</a>
          <a href="#" className="block px-3 font-semibold py-1 rounded hover:bg-[#C3AA8C] transition-colors"><div class="flex items-center ">
             <select class="appearance-none text-xl">
             <option value="courses">Academics</option>
             </select>
                  <img src={vector} alt="vector" className='cursor-pointer pl-1' />
            </div></a>
          <a href="#" className="block px-3 font-semibold py-1 rounded hover:bg-[#C3AA8C] transition-colors"><div class="flex items-center ">
             <select class="appearance-none text-xl">
             <option value="courses">Courses</option>
             </select>
                  <img src={vector} alt="vector" className='cursor-pointer pl-1' />
            </div></a>
          <a href="#" className="block px-3 font-semibold py-1 rounded hover:bg-[#C3AA8C] transition-colors"><div class="flex items-center ">
             <select class="appearance-none text-xl">
             <option value="courses">About Us</option>
             </select>
                  <img src={vector} alt="vector" className='cursor-pointer pl-1' />
            </div></a>
          <a href="#" className="block px-3 text-xl font-semibold py-1 rounded hover:bg-[#C3AA8C] transition-colors">Blogs</a>
          <a href="#" className="block px-3 text-xl font-semibold py-1 rounded hover:bg-[#C3AA8C] transition-colors">Testimonials</a>
          <a href="#" className="block px-3 font-semibold py-1 rounded hover:bg-[#C3AA8C] transition-colors"><div class="flex items-center ">
             <select class="appearance-none text-xl">
             <option value="courses">Our Services</option>
             </select>
                  <img src={vector} alt="vector" className='cursor-pointer pl-1' />
            </div></a>
        </div>
        <div className="px-5 py-2 border-t border-[#C3AA8C]">
          <div className="flex flex-col space-y-2">
            <button className="w-full px-4 py-2 text-center rounded bg-[#C3AA8C] transition-colors">
              APPLY
            </button>
            <button className="w-full px-4 py-2 bg-[#C3AA8C] text-center rounded hover:bg-gray-100 transition-colors">
              CONTACT
            </button>
          </div>
        </div>
        </div>
        </div>
        <div className='md:flex w-[82%] hidden py-2 mt-5 px-10 mb-3 text-[#333333] justify-between font-semibold '>
            <h4 className='text-[#856149] text-lg'>Home</h4>
            <div class="flex items-center ">
             <select class="appearance-none text-lg">
             <option value="courses">Academics</option>
             </select>
                  <img src={vector} alt="vector" className='cursor-pointer pl-1' />
            </div>
            <div class="flex items-center ">
             <select class="appearance-none text-lg">
             <option value="courses">Courses</option>
             </select>
                  <img src={vector} alt="vector" className='cursor-pointer pl-1' />
            </div>
            <div class="flex items-center ">
             <select class="appearance-none text-lg">
             <option value="courses">About Us</option>
             </select>
                  <img src={vector} alt="vector" className='cursor-pointer pl-1' />
            </div>
            <h4 className='text-xl'>Blogs</h4>
            <h4 className='text-xl'>Testimonials</h4>
            <div class="flex items-center ">
             <select class="appearance-none text-lg">
             <option value="courses">Our Services</option>
             </select>
                  <img src={vector} alt="vector" className='cursor-pointer pl-1' />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Header
