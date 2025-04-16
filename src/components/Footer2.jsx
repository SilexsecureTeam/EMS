import React from 'react'
import logo from '../assets/logo.png'
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer2 = () => {
  return (
    <div className='bg-[#F1F8F3] text-[#333333]'>
        <div className='py-16 w-full sm:px-16 px-7 flex flex-1 flex-wrap justify-between items-start text-white'>
      <div className='max-w-[250px] mb-8'>
        <img src={logo} alt="logo" className=' mb-5 w-[250px]' />
        <p className='mb-5 w-[250px] font-normal text-[14px] text-[#333333]'>Interdum velit laoreet id donec ultrices <br />
tincidunt arcu. Tincidunt tortor aliqua <br />
mfacilisi cras fermentum odio eu.</p>
<div className='flex gap-x-2'> 
    <FaInstagram className='text-white text-[14px] bg-[#193728] rounded-sm h-8 w-8 p-2 cursor-pointer' />
    <FaLinkedinIn className='text-white text-[14px] bg-[#193728] rounded-sm h-8 w-8 p-2 cursor-pointer' />
    <FaFacebookF className='text-white text-[14px] bg-[#193728] rounded-sm h-8 w-8 p-2 cursor-pointer' />
    <FaTwitter className='text-white text-[14px] bg-[#193728] rounded-sm h-8 w-8 p-2 cursor-pointer' />
</div>
      </div>
      <div className=' mb-8'>
        <h2 className='text-[16px] text-black font-bold mb-4.5'>Our Services:</h2>
        <ul className='grid gap-3.5 font-normal text-[#333333] text-[14px]'>
            <li><a href="#">Scelerisque pharetra</a></li>
            <li><a href="#">Lorem ipsum </a></li>
            <li><a href="#">Management</a></li>
            <li><a href="#">Digital Marketing</a></li>
            <li><a href="#">Blog News</a></li>
        </ul>
      </div>
      <div className=''>
        <h2 className='text-[16px] text-black font-bold mb-2'>Subscribe</h2>
        <input type="text" placeholder='Enter your mail' className='text-black font-medium text-xl py-2 px-1 mb-4 w-full outline-none bg-[#E7E7E7]'/>
        <button className='bg-[#193728] px-3 py-1.5 font-normal cursor-pointer'>SUBSCRIBE NOW</button>
      </div>
      </div>
       <h2 className='text-center pt-5 pb-1 font-normal bg-[#B0AFAF]'>Copyright &copy; 2024  <b>EMS</b>  || All Rights Reserved</h2>
    </div>
  )
}

export default Footer2
