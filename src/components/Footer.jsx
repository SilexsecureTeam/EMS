import React from 'react'
import logo from '../assets/logo.png'
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <div className='bg-white'>
        <div className='py-16 w-full sm:px-16 px-7 bg-[#9F7757] flex flex-1 flex-wrap justify-between items-start text-white'>
      <div className='max-w-[250px] mb-8'>
        <img src={logo} alt="logo" className='bg-white mb-5 w-[200px]' />
        <p className='mb-5 text-lg'>Interdum velit laoreet id donec ultrices
tincidunt arcu. Tincidunt tortor aliqua
mfacilisi cras fermentum odio eu.</p>
<div className='flex gap-x-2'> 
    <Facebook className='text-black bg-white rounded-full h-8 w-8 p-2 cursor-pointer' />
    <Instagram className='text-black bg-white rounded-full h-8 w-8 p-2 cursor-pointer' />
    <Twitter className='text-black bg-white rounded-full h-8 w-8 p-2 cursor-pointer' />
    <Linkedin className='text-black bg-white rounded-full h-8 w-8 p-2 cursor-pointer' />  
</div>
      </div>
      <div className='max-w-[180px] mb-8'>
        <h2 className='text-2xl font-bold mb-2'>Our Services:</h2>
        <ul className='grid gap-2 text-lg'>
            <li><a href="#">Scelerisque pharetra</a></li>
            <li><a href="#">Lorem ipsum </a></li>
            <li><a href="#">Management</a></li>
            <li><a href="#">Digital Marketing</a></li>
            <li><a href="#">Blog News</a></li>
        </ul>
      </div>
      <div className='max-w-[180px] mb-8'>
        <h2 className='text-2xl font-bold mb-2'>Our Company</h2>
        <ul className='grid gap-2 text-lg'>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
      </div>
      <div className='max-w-[180px]'>
        <h2 className='text-2xl font-bold mb-2'>Subscribe</h2>
        <input type="text" placeholder='Enter your mail' className='text-black text-xl py-2 px-1 mb-4 w-[180px] outline-none bg-white border-2 border-[#444040]'/>
        <button className='bg-[#444040] px-3 py-1.5 cursor-pointer'>SUBSCRIBE NOW</button>
      </div>
      </div>
       <h2 className='text-center pt-5 pb-1'>Copyright &copy; 2024  <b>EMS</b>  || All Rights Reserved</h2>
    </div>
  )
}

export default Footer
