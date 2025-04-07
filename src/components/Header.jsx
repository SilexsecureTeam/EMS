import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/newlogo.png'
import { UserRound, ShoppingCart, SearchIcon } from 'lucide-react'
import vector from '../assets/Vector.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [isSubaboutOpen, setIsSubaboutOpen] = useState(false);
  const [isSubacademicOpen, setIsSubacademicOpen] = useState(false);
  const [isSubcourseOpen, setIsSubcourseOpen] = useState(false);
  const [isSubserviceOpen, setIsSubserviceOpen] = useState(false);
  const [isSubchooseOpen, setIsSubchooseOpen] = useState(false);
  const [isSuboptionOpen, setIsSuboptionOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div>
        <div className='w-full  md:pr-26 sm:pr-20 flex justify-end bg-[#D9D9D9] h-16 p-2'>
            <div className='relative'>
            <input className='border-2 w-[150px]  border-[#C3AA8C] mr-3.5 pl-2 py-2' type="text" placeholder='Search the site' />
            <SearchIcon className='absolute cursor-pointer bottom-4 right-6 border-l-2 pl-0.5' size={20} color="#020202" />
            </div>
            <div class="relative inline-block text-left">
            <ul className="relative ">
          {/* Nested Dropdown Item */}
          <li className="relative" onMouseEnter={() => setIsSuboptionOpen(true)} onMouseLeave={() => setIsSuboptionOpen(false)}>
            <a href="#" className="block w-full font-medium sm:px-6 px-3 md:px-10 rounded-none py-2 pr-7 leading-tight bg-[#C3AA8C] text-[17px] border-[#856149] border-2  appearance-none focus:outline-none">
              Option 1<img src={vector} alt="vector" className='cursor-pointer absolute right-4 md:right-6 flex items-center bottom-4 ' /> </a>
            {/* Submenu */}
            {isSuboptionOpen && (
              <ul className="absolute left-0 top-full w-[160px] z-40 bg-white rounded-md shadow-lg py-1">
                <li> <a href="#" className="block px-2 py-2 text-[#333333] hover:bg-[#C3AA8C]">
                    Option 2 </a> </li>
                <li> <a href="#" className="block px-2 py-2 text-[#333333] hover:bg-[#C3AA8C]">
                    Option 3 </a> </li>
                <li> <a href="#" className="block px-2 py-2 text-[#333333] hover:bg-[#C3AA8C]">
                    Option 4 </a> </li>
              </ul>
            )}
          </li>          
                 </ul>
            </div>
        </div>
        <div>
        <div className='flex justify-between items-center px-5 mt-6 pb-14 border-b-1 '>
           <div className='pl-3 md:pl-10'>
            <img src={logo} alt="logo" className='lg:w-55 md:45 w-35' />
            </div>
            <div className=' md:items-center lg:gap-x-5 md:gap-x-2 hidden md:flex'>
                <h4 className='font-medium text-[#333333]'>I am</h4>
                <div class="relative flex items-center text-left">
                <ul className="relative ">
          {/* Nested Dropdown Item */}
          <li className="relative" onMouseEnter={() => setIsSubchooseOpen(true)} onMouseLeave={() => setIsSubchooseOpen(false)}>
            <a href="#" className="block lg:w-[200px] font-medium px-3 py-3 leading-tight  border-[#856149] border-1 header-shadow  appearance-none focus:outline-none">
              Choose an option <img src={vector} alt="vector" className='cursor-pointer absolute right-4 flex items-center bottom-4.5 ' /> </a>
            {/* Submenu */}
            {isSubchooseOpen && (
              <ul className="absolute left-0 top-full w-[180px] z-40 bg-white rounded-md shadow-lg py-1">
                <li> <a href="#" className="block px-2 py-2 text-[#333333] hover:bg-[#C3AA8C]">
                    Choose an option 1 </a> </li>
                <li> <a href="#" className="block px-2 py-2 text-[#333333] hover:bg-[#C3AA8C]">
                    Choose an option 2 </a> </li>
                <li> <a href="#" className="block px-2 py-2 text-[#333333] hover:bg-[#C3AA8C]">
                    Choose an option 3 </a> </li>
              </ul>
            )}
          </li>          
                 </ul>
                <h2 className='bg-[#193728] p-2.5 text-center text-white'>GO</h2>
            </div>
            <button className='border-2 cursor-pointer lg:px-[35px] px-7 head-btn border-[#856149] text-[#856149] md:block hidden py-2.5 font-medium'>
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
                <ul className="relative ">
          {/* Nested Dropdown Item */}
          <li className="relative" onMouseEnter={() => setIsSubchooseOpen(true)} onMouseLeave={() => setIsSubchooseOpen(false)}>
            <a href="#" className="inline-block w-[130px]  font-medium px-0.5 py-2 pr-5 leading-tight  border-[#856149] border-1 overflow-x-scroll header-shadow  appearance-none focus:outline-none">
              Choose an <img src={vector} alt="vector" className='cursor-pointer absolute right-4 flex items-center bottom-4.5 ' /> </a>
            {/* Submenu */}
            {isSubchooseOpen && (
              <ul className="absolute left-0 top-full w-[180px] z-40 bg-white rounded-md shadow-lg py-1">
                <li> <a href="#" className="block px-2 py-2 text-[#333333] hover:bg-[#C3AA8C]">
                    Choose an option 1 </a> </li>
                <li> <a href="#" className="block px-2 py-2 text-[#333333] hover:bg-[#C3AA8C]">
                    Choose an option 2 </a> </li>
                <li> <a href="#" className="block px-2 py-2 text-[#333333] hover:bg-[#C3AA8C]">
                    Choose an option 3 </a> </li>
              </ul>
            )}
          </li>          
                 </ul>
                <h2 className='bg-[#193728] p-1 text-center text-white'>GO</h2>
            </div>
            </div>
            <div className='flex gap-x-2 items-center'>
          <UserRound className='header-user '/>
          <ShoppingCart size={25} />  
          </div>
          </div>
          <ul className="relative ">
          {/* Nested Dropdown Item */}
          <li className="relative" onMouseEnter={() => setIsSubmenuOpen(true)} onMouseLeave={() => setIsSubmenuOpen(false)}>
            <a href="#" className="flex pl-3 items-center text-lg pr-2 text-[#C3AA8C]">
              Home <img src={vector} alt="vector" className='cursor-pointer pt-1 pl-1' /> </a>
            {/* Submenu */}
            {isSubmenuOpen && (
              <ul className="absolute left-0 top-full w-[80px] z-40 bg-white rounded-md shadow-lg py-1">
                <li> <a href="#" className="block px-2 py-2 text-[#333333] hover:bg-[#C3AA8C]">
                    Home 1 </a> </li>
                <li> <a href="#" className="block px-2 py-2 text-[#333333] hover:bg-[#C3AA8C]">
                    Home 2 </a> </li>
                <li> <a href="#" className="block px-2 py-2 text-[#333333] hover:bg-[#C3AA8C]">
                    Home 3 </a> </li>
              </ul>
            )}
          </li>          
        </ul>
        <ul className="relative ">
          {/* Nested Dropdown Item */}
          <li className="relative" onMouseEnter={() => setIsSubacademicOpen(true)} onMouseLeave={() => setIsSubacademicOpen(false)}>
            <a href="#" className="flex items-center text-[16px] pl-3 pr-2 text-[#333333]">
              Academics <img src={vector} alt="vector" className='cursor-pointer pt-1 pl-1' /> </a>
            {/* Submenu */}
            {isSubacademicOpen && (
              <ul className="absolute left-0 top-full w-[120px] z-40 bg-white rounded-md shadow-lg py-1">
                <li> <a href="#" className="block px-2 py-2 text-[#333333] hover:bg-[#C3AA8C]">
                    Academics 1 </a> </li>
                <li> <a href="#" className="block px-2 py-2 text-[#333333] hover:bg-[#C3AA8C]">
                    Academics 2 </a> </li>
                <li> <a href="#" className="block px-2 py-2 text-[#333333] hover:bg-[#C3AA8C]">
                    Academics 3 </a> </li>
              </ul>
            )}
          </li>          
        </ul>
        <ul className="relative ">
          {/* Nested Dropdown Item */}
          <li className="relative" onMouseEnter={() => setIsSubcourseOpen(true)} onMouseLeave={() => setIsSubcourseOpen(false)}>
            <a href="#" className="flex items-center text-[16px] pr-2 pl-3 text-[#333333]">
              Courses <img src={vector} alt="vector" className='cursor-pointer pt-1 pl-1' /> </a>
            {/* Submenu */}
            {isSubcourseOpen && (
              <ul className="absolute left-0 top-full w-[95px] z-40 bg-white rounded-md shadow-lg py-1">
                <li> <a href="#" className="block px-2 py-2 text-[#333333] hover:bg-[#C3AA8C]">
                    Courses 1 </a> </li>
                <li> <a href="#" className="block px-2 py-2 text-[#333333] hover:bg-[#C3AA8C]">
                    Courses 2 </a> </li>
                <li> <a href="#" className="block px-2 py-2 text-[#333333] hover:bg-[#C3AA8C]">
                    Courses 3 </a> </li>
              </ul>
            )}
          </li>          
        </ul>
        <ul className="relative ">
          {/* Nested Dropdown Item */}
          <li className="relative" onMouseEnter={() => setIsSubaboutOpen(true)} onMouseLeave={() => setIsSubaboutOpen(false)}>
            <a href="#" className="flex items-center text-[16px] pr-2 pl-3 text-[#333333]">
              About Us <img src={vector} alt="vector" className='cursor-pointer pt-1 pl-1' /> </a>
            {/* Submenu */}
            {isSubaboutOpen && (
              <ul className="absolute left-0 top-full w-[110px] z-40 bg-white rounded-md shadow-lg py-1">
                <li> <a href="#" className="block px-2 py-2 text-[#333333] hover:bg-[#C3AA8C]">
                    About Us 1 </a> </li>
                <li> <a href="#" className="block px-2 py-2 text-[#333333] hover:bg-[#C3AA8C]">
                    About Us 2 </a> </li>
                <li> <a href="#" className="block px-2 py-2 text-[#333333] hover:bg-[#C3AA8C]">
                    About Us 3 </a> </li>
              </ul>
            )}
          </li>          
        </ul>
          <a href="#" className="block px-3 text-[16px] py-1 rounded hover:bg-[#C3AA8C] transition-colors">Blogs</a>
          <a href="#" className="block px-3 text-[16px] py-1 rounded hover:bg-[#C3AA8C] transition-colors">Testimonials</a>
          <ul className="relative ">
          {/* Nested Dropdown Item */}
          <li className="relative" onMouseEnter={() => setIsSubserviceOpen(true)} onMouseLeave={() => setIsSubserviceOpen(false)}>
            <a href="#" className="flex items-center text-[16px] pr-2 pl-3 text-[#333333]">
              Our Services <img src={vector} alt="vector" className='cursor-pointer pt-1 pl-1' /> </a>
            {/* Submenu */}
            {isSubserviceOpen && (
              <ul className="absolute left-0 top-full w-[134px] z-40 bg-white rounded-md shadow-lg py-1">
                <li> <a href="#" className="block px-2 py-2 text-[#333333] hover:bg-[#C3AA8C]">
                    Our Services 1 </a> </li>
                <li> <a href="#" className="block px-2 py-2 text-[#333333] hover:bg-[#C3AA8C]">
                    Our Services 2 </a> </li>
                <li> <a href="#" className="block px-2 py-2 text-[#333333] hover:bg-[#C3AA8C]">
                    Our Services 3 </a> </li>
              </ul>
            )}
          </li>          
        </ul>
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
        <div className='md:flex w-[77%] hidden py-2 mt-5 pl-16 mb-3 text-[#333333] justify-between font-semibold '>
        <ul className="relative ">
          {/* Nested Dropdown Item */}
          <li className="relative" onMouseEnter={() => setIsSubmenuOpen(true)} onMouseLeave={() => setIsSubmenuOpen(false)}>
            <a href="#" className="flex items-center text-lg justify-between text-[#C3AA8C]">
              Home <img src={vector} alt="vector" className='cursor-pointer pt-1 pl-1' /> </a>
            {/* Submenu */}
            {isSubmenuOpen && (
              <ul className="absolute left-0 top-full w-[80px] z-40 bg-white rounded-md shadow-lg py-1">
                <li> <a href="#" className="block px-2 py-2 text-[#333333] hover:bg-[#C3AA8C]">
                    Home 1 </a> </li>
                <li> <a href="#" className="block px-2 py-2 text-[#333333] hover:bg-[#C3AA8C]">
                    Home 2 </a> </li>
                <li> <a href="#" className="block px-2 py-2 text-[#333333] hover:bg-[#C3AA8C]">
                    Home 3 </a> </li>
              </ul>
            )}
          </li>          
        </ul>
        <ul className="relative ">
          {/* Nested Dropdown Item */}
          <li className="relative" onMouseEnter={() => setIsSubacademicOpen(true)} onMouseLeave={() => setIsSubacademicOpen(false)}>
            <a href="#" className="flex items-center text-[16px] justify-between text-[#333333]">
              Academics <img src={vector} alt="vector" className='cursor-pointer pt-1 pl-1' /> </a>
            {/* Submenu */}
            {isSubacademicOpen && (
              <ul className="absolute left-0 top-full w-[120px] z-40 bg-white rounded-md shadow-lg py-1">
                <li> <a href="#" className="block px-2 py-2 text-[#333333] hover:bg-[#C3AA8C]">
                    Academics 1 </a> </li>
                <li> <a href="#" className="block px-2 py-2 text-[#333333] hover:bg-[#C3AA8C]">
                    Academics 2 </a> </li>
                <li> <a href="#" className="block px-2 py-2 text-[#333333] hover:bg-[#C3AA8C]">
                    Academics 3 </a> </li>
              </ul>
            )}
          </li>          
        </ul>
        <ul className="relative ">
          {/* Nested Dropdown Item */}
          <li className="relative" onMouseEnter={() => setIsSubcourseOpen(true)} onMouseLeave={() => setIsSubcourseOpen(false)}>
            <a href="#" className="flex items-center text-[16px] justify-between text-[#333333]">
              Courses <img src={vector} alt="vector" className='cursor-pointer pt-1 pl-1' /> </a>
            {/* Submenu */}
            {isSubcourseOpen && (
              <ul className="absolute left-0 top-full w-[95px] z-40 bg-white rounded-md shadow-lg py-1">
                <li> <a href="#" className="block px-2 py-2 text-[#333333] hover:bg-[#C3AA8C]">
                    Courses 1 </a> </li>
                <li> <a href="#" className="block px-2 py-2 text-[#333333] hover:bg-[#C3AA8C]">
                    Courses 2 </a> </li>
                <li> <a href="#" className="block px-2 py-2 text-[#333333] hover:bg-[#C3AA8C]">
                    Courses 3 </a> </li>
              </ul>
            )}
          </li>          
        </ul>
        <ul className="relative ">
          {/* Nested Dropdown Item */}
          <li className="relative" onMouseEnter={() => setIsSubaboutOpen(true)} onMouseLeave={() => setIsSubaboutOpen(false)}>
            <a href="#" className="flex items-center text-[16px] justify-between text-[#333333]">
              About Us <img src={vector} alt="vector" className='cursor-pointer pt-1 pl-1' /> </a>
            {/* Submenu */}
            {isSubaboutOpen && (
              <ul className="absolute left-0 top-full w-[110px] z-40 bg-white rounded-md shadow-lg py-1">
                <li> <a href="#" className="block px-2 py-2 text-[#333333] hover:bg-[#C3AA8C]">
                    About Us 1 </a> </li>
                <li> <a href="#" className="block px-2 py-2 text-[#333333] hover:bg-[#C3AA8C]">
                    About Us 2 </a> </li>
                <li> <a href="#" className="block px-2 py-2 text-[#333333] hover:bg-[#C3AA8C]">
                    About Us 3 </a> </li>
              </ul>
            )}
          </li>          
        </ul>
            <h4 className='text-[16px]'>Blogs</h4>
            <h4 className='text-[16px]'>Testimonials</h4>
            <ul className="relative ">
          {/* Nested Dropdown Item */}
          <li className="relative" onMouseEnter={() => setIsSubserviceOpen(true)} onMouseLeave={() => setIsSubserviceOpen(false)}>
            <a href="#" className="flex items-center text-[16px] justify-between text-[#333333]">
              Our Services <img src={vector} alt="vector" className='cursor-pointer pt-1 pl-1' /> </a>
            {/* Submenu */}
            {isSubserviceOpen && (
              <ul className="absolute left-0 top-full w-[134px] z-40 bg-white rounded-md shadow-lg py-1">
                <li> <a href="#" className="block px-2 py-2 text-[#333333] hover:bg-[#C3AA8C]">
                    Our Services 1 </a> </li>
                <li> <a href="#" className="block px-2 py-2 text-[#333333] hover:bg-[#C3AA8C]">
                    Our Services 2 </a> </li>
                <li> <a href="#" className="block px-2 py-2 text-[#333333] hover:bg-[#C3AA8C]">
                    Our Services 3 </a> </li>
              </ul>
            )}
          </li>          
        </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
