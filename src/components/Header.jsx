import React from 'react'
import logo from '../assets/logo.png'
import { UserRound, ShoppingCart, SearchIcon } from 'lucide-react'
import vector from '../assets/Vector.png'

const Header = () => {
  return (
    <div>
      <div>
        <div className='w-full pr-72 flex justify-end bg-[#D9D9D9] h-16 p-2'>
            <div className='relative'>
            <input className='border-2 border-[#C3AA8C] mr-3.5 pl-4 py-2' type="text" placeholder='Search the site' />
            <SearchIcon className='absolute cursor-pointer bottom-4 right-6 border-l-2 pl-0.5' size={20} color="#020202" />
            </div>
            <div class="relative inline-block text-left">
             <select class="block w-full font-medium px-6 rounded-none py-3 pr-8 leading-tight bg-[#C3AA8C] border-[#856149] border-2  appearance-none focus:outline-none">
             <option value="option1">Option 1</option>
             </select>
                <div class=" absolute inset-y-0 right-2 flex items-center bottom-0 px-2 ">
                  <img src={vector} alt="vector" className='cursor-pointer' />
                </div>
            </div>
        </div>
        <div className='flex justify-between px-35  mt-6 pb-14 border-b-1 '>
           <div className='pl-5'>
            <img src={logo} alt="logo" />
            </div>
            <div className='flex items-center gap-x-5'>
                <h4 className='font-medium header-am'>I am</h4>
                <div class="relative flex items-center text-left">
             <select class="block w-[220px] font-medium px-3 py-3 pr-8 leading-tight  border-[#856149] border-1 header-shadow  appearance-none focus:outline-none">
             <option value="option1">Choose an option</option>
             </select>
                <div class=" absolute inset-y-0 right-12 flex items-center bottom-0 px-2 ">
                  <img src={vector} alt="vector" className='cursor-pointer' />
                </div>
                <h2 className='bg-[#193728] p-2.5 text-center text-white'>GO</h2>
            </div>
            <button className='border-2 head-btn border-[#856149] text-[#856149] py-3 font-medium'>
                APPLY
            </button>
            <button className='text-white header-btn px-8 py-3 font-medium'>
                CONTACT
            </button>
            <UserRound className='header-user'/>
            <ShoppingCart size={40} /> 
            </div>
        </div>
        <div className='flex header-size gap-x-20 mt-5 mb-3 pl-50 font-sm font-bold '>
            <h4 className='text-[#856149] '>Home</h4>
            <div class="flex items-center ">
             <select class="appearance-none ">
             <option value="courses">Academics</option>
             </select>
                  <img src={vector} alt="vector" className='cursor-pointer pl-1' />
            </div>
            <div class="flex items-center ">
             <select class="appearance-none ">
             <option value="courses">Courses</option>
             </select>
                  <img src={vector} alt="vector" className='cursor-pointer pl-1' />
            </div>
            <div class="flex items-center ">
             <select class="appearance-none ">
             <option value="courses">About Us</option>
             </select>
                  <img src={vector} alt="vector" className='cursor-pointer pl-1' />
            </div>
            <h4>Blogs</h4>
            <h4>Testimonials</h4>
            <div class="flex items-center ">
             <select class="appearance-none ">
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
