import React, { useState } from 'react';
import newlogo from '../assets/newlogo.png'
import vec from '../assets/vec.png'
import vector from '../assets/Vector.png'
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react'

const Header3 = () => {
 const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
 const [isSubprojectOpen, setIsSubprojectOpen] = useState(false);
 const [isSubpageOpen, setIsSubpageOpen] = useState(false);
 const [isSubserviceOpen, setIsSubserviceOpen] = useState(false);
 const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
 const [isMobileHomeOpen, setIsMobileHomeOpen] = useState(false);
 const [isMobileProjectOpen, setIsMobileProjectOpen] = useState(false);
 const [isMobilePageOpen, setIsMobilePageOpen] = useState(false);
 const [isMobileServiceOpen, setIsMobileServiceOpen] = useState(false);

 return (
   <div className='flex items-center home-2 md:px-5 justify-between bg-[#5E5E5E] w-full h-[100px] '>
     <img src={newlogo} className='lg:h-12 h-9 pl-5' alt="logo" />
     
     {/* Desktop Menu */}
     <div className='md:flex hidden items-center lg:gap-x-6 gap-x-4.5 text-[#333333] justify-between font-semibold '>
       <ul className="relative h-[100px] ">
         <li className="relative h-[100px]" onMouseEnter={() => setIsSubmenuOpen(true)} onMouseLeave={() => setIsSubmenuOpen(false)}>
           <a href="#" className="flex px-3 items-center gap-x-1 font-semibold lg:text-[16px] text-[14px] bg-[#C3AA8C] h-full justify-between text-white">
             Home <img src={vec} alt="vector" className='cursor-pointer pl-1' /> </a>
           {isSubmenuOpen && (
             <ul className="absolute left-0 top-full w-[80px] z-40 bg-white rounded-md shadow-lg py-1">
               <li> <a href="/" className="block px-2 py-2 text-[#333333] hover:bg-[#C3AA8C]">Home 1 </a> </li> 
               <li> <NavLink to='/home2' className="block px-2 py-2 text-[#333333] hover:bg-[#C3AA8C]">Home 2 </NavLink> </li>
               <li> <a href="/home3" className="block px-2 py-2 text-[#333333] hover:bg-[#C3AA8C]">Home 3 </a> </li>
             </ul>
           )}
         </li>          
       </ul>
       <h4 className='lg:text-[16px] text-[14px] font-semibold text-white'>About Us</h4>
       <h4 className='lg:text-[16px] text-[14px] font-semibold text-white'>Portfolio</h4>
       <ul className="relative ">
         <li className="relative" onMouseEnter={() => setIsSubserviceOpen(true)} onMouseLeave={() => setIsSubserviceOpen(false)}>
           <a href="#" className="flex items-center gap-x-1 font-semibold lg:text-[16px] text-[14px] justify-between text-white">
             Services <img src={vec} alt="vector" className='cursor-pointer pl-1' /> </a>
           {isSubserviceOpen && (
             <ul className="absolute left-0 top-full w-[105px] z-40 bg-white rounded-md shadow-lg py-1">
               <li> <a href="#" className="block px-2 py-2 text-[#333333] hover:bg-[#C3AA8C]">Services 1 </a> </li>
               <li> <a href="#" className="block px-2 py-2 text-[#333333] hover:bg-[#C3AA8C]">Services 2 </a> </li>
               <li> <a href="#" className="block px-2 py-2 text-[#333333] hover:bg-[#C3AA8C]">Services 3 </a> </li>
             </ul>
           )}
         </li>          
       </ul>
       <ul className="relative font-medium">
         <li className="relative" onMouseEnter={() => setIsSubprojectOpen(true)} onMouseLeave={() => setIsSubprojectOpen(false)}>
           <a href="#" className="flex items-center gap-x-1 font-semibold lg:text-[16px] text-[14px] justify-between text-white">
             Projects <img src={vec} alt="vector" className='cursor-pointer pl-1' /> </a>
           {isSubprojectOpen && (
             <ul className="absolute left-0 top-full w-[80px] z-40 bg-white rounded-md shadow-lg py-1">
               <li> <a href="#" className="block px-2 py-2 text-[#333333] hover:bg-[#C3AA8C]">Projects 1 </a> </li>
               <li> <a href="#" className="block px-2 py-2 text-[#333333] hover:bg-[#C3AA8C]">Projects 2 </a> </li>
               <li> <a href="#" className="block px-2 py-2 text-[#333333] hover:bg-[#C3AA8C]">Projects 3 </a> </li>
             </ul>
           )}
         </li>          
       </ul>
       <ul className="relative ">
         <li className="relative" onMouseEnter={() => setIsSubpageOpen(true)} onMouseLeave={() => setIsSubpageOpen(false)}>
           <a href="#" className="flex items-center gap-x-1 font-semibold lg:text-[16px] text-[14px] justify-between text-white">
             Pages <img src={vec} alt="vector" className='cursor-pointer pl-1' /> </a>
           {isSubpageOpen && (
             <ul className="absolute left-0 top-full w-[110px] z-40 bg-white rounded-md shadow-lg py-1">
               <li> <a href="#" className="block px-2 py-2 text-[#333333] hover:bg-[#C3AA8C]">Pages 1 </a> </li>
               <li> <a href="#" className="block px-2 py-2 text-[#333333] hover:bg-[#C3AA8C]">Pages 2 </a> </li>
               <li> <a href="#" className="block px-2 py-2 text-[#333333] hover:bg-[#C3AA8C]">Pages 3 </a> </li>
             </ul>
           )}
         </li>          
       </ul>
     </div>
     
     {/* Mobile Menu Button */}
     <div className='md:hidden flex items-center mr-4 p-2 cursor-pointer text-[#333333] bg-[#C3AA8C] focus:outline-none transition-colors duration-300'>
       <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
         {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
       </button>
     </div>

     {/* Mobile Menu */}
     {isMobileMenuOpen && (
       <div className='absolute top-[100px] left-0 w-full bg-white shadow-lg md:hidden z-50'>
         <ul className='flex flex-col text-[#333333] font-semibold'>
           <li className=''>
             <button 
               className='w-full text-left px-4 py-2 flex items-center justify-between'
               onClick={() => setIsMobileHomeOpen(!isMobileHomeOpen)}
             >
               Home <img src={vector} alt="arrow" className="ml-2 w-3" />
             </button>
             {isMobileHomeOpen && (
               <ul className='pl-4 bg-gray-50'>
                 <li><NavLink to='/' className='block px-4 py-2 hover:bg-[#C3AA8C]'>Home 1</NavLink></li>
                 <li><NavLink to='/home2' className='block px-4 py-2 hover:bg-[#C3AA8C]'>Home 2</NavLink></li>
                 <li><a href='/home3' className='block px-4 py-2 hover:bg-[#C3AA8C]'>Home 3</a></li>
               </ul>
             )}
           </li>
           <li className=''>
             <button 
               className='w-full text-left px-4 py-2 flex items-center justify-between'
               onClick={() => setIsMobileProjectOpen(!isMobileProjectOpen)}
             >
               Projects <img src={vector} alt="arrow" className="ml-2 w-3" />
             </button>
             {isMobileProjectOpen && (
               <ul className='pl-4 bg-gray-50'>
                 <li><a href='#' className='block px-4 py-2 hover:bg-[#C3AA8C]'>Projects 1</a></li>
                 <li><a href='#' className='block px-4 py-2 hover:bg-[#C3AA8C]'>Projects 2</a></li>
                 <li><a href='#' className='block px-4 py-2 hover:bg-[#C3AA8C]'>Projects 3</a></li>
               </ul>
             )}
           </li>
           <li className=''>
             <button 
               className='w-full text-left px-4 py-2 flex items-center justify-between'
               onClick={() => setIsMobilePageOpen(!isMobilePageOpen)}
             >
               Pages <img src={vector} alt="arrow" className="ml-2 w-3" />
             </button>
             {isMobilePageOpen && (
               <ul className='pl-4 bg-gray-50'>
                 <li><a href='#' className='block px-4 py-2 hover:bg-[#C3AA8C]'>Pages 1</a></li>
                 <li><a href='#' className='block px-4 py-2 hover:bg-[#C3AA8C]'>Pages 2</a></li>
                 <li><a href='#' className='block px-4 py-2 hover:bg-[#C3AA8C]'>Pages 3</a></li>
               </ul>
             )}
           </li>
           <li className=''>
             <button 
               className='w-full text-left px-4 py-2 flex items-center justify-between'
               onClick={() => setIsMobileServiceOpen(!isMobileServiceOpen)}
             >
               Services <img src={vector} alt="arrow" className="ml-2 w-3" />
             </button>
             {isMobileServiceOpen && (
               <ul className='pl-4 bg-gray-50'>
                 <li><a href='#' className='block px-4 py-2 hover:bg-[#C3AA8C]'>Service 1</a></li>
                 <li><a href='#' className='block px-4 py-2 hover:bg-[#C3AA8C]'>Service 2</a></li>
                 <li><a href='#' className='block px-4 py-2 hover:bg-[#C3AA8C]'>Service 3</a></li>
               </ul>
             )}
           </li>
           <li className='px-4 py-2'>Testimonials</li>
           <li className='px-4 py-2'>News</li>
           <li className='px-4 py-2'>My Account</li>
           <li className='px-4 py-2'>
             <button className='w-full text-center cursor-pointer text-[14px] font-semibold px-2.5 py-2 text-white bg-[#193728]'>
               Enroll Now
             </button>
           </li>
         </ul>
       </div>
     )}

     {/* Desktop Account/Enroll */}
       <button className='cursor-pointer md:block hidden lg:text-[16px] text-[14px] font-semibold lg:px-4 px-2.5 py-2 text-white bg-[#C3AA8C]'>Get Started</button>
   </div>
 )
}

export default Header3