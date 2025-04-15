import React from 'react'
import logo from '../assets/flogo.png'

const Footer3 = () => {
  return (
    <div className='bg-white'>
        <div className='py-16 w-full sm:px-16 px-7 bg-[#5E5E5E] flex flex-1 flex-wrap justify-between items-start text-white'>
      <div className=' mb-8'>
        <img src={logo} alt="logo" className=' mb-5' />
        <p className='mb-5 font-medium text-[17px] max-w-[498px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
         <div className="flex justify-between flex-wrap items-center">
            <input type="text" placeholder='Email Address' className='py-5 text-[17px] font-medium text-[#fff] border-b-2 border-b-white outline-0 max-w-[305px] w-full' />
            <button className="py-3 px-6 text-white font-bold text-[17px] sm:mt-0 mt-2 bg-[#193728] rounded-lg">Subcribe Now</button>
         </div>
      </div>
      <div className='max-w-[285px] mb-8'>
        <h2 className='text-[25px] font-black mb-4'>Quick Links</h2>
        <ul className='grid gap-2 font-medium text-[17px]'>
            <li><a href="#">Homepage</a></li>
            <li><a href="#">About Us </a></li>
            <li><a href="#">Our Services</a></li>
            <li><a href="#">Project</a></li>
            <li><a href="#">Portfolios</a></li>
        </ul>
      </div>
      <div className='max-w-[285px] mb-8'>
        <h2 className='text-[25px] font-black mb-4'>Our Company</h2>
        <ul className='grid gap-2 font-medium text-[17px]'>
            <li className='mb-3'><a href="#">Lumbung Hidup Street Number 123 AB Madiun City East Java</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Career</a></li>
            <li><a href="#">Legal Activity</a></li>
        </ul>
      </div>
      </div>
    </div>
  )
}

export default Footer3
