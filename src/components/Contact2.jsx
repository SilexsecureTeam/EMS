import location from '../assets/location.png'
import phone from '../assets/phone.png'
import mail from '../assets/mail.png'
import vertical from '../assets/vertical.png'
import React from 'react'

const Contact2 = () => {
  return (
    <div className='flex con gap-5 next flex-wrap px-7 justify-between items-center '>
       <div className='flex gap-x-2 items-center '>
        <img src={location} alt="img" className='h-[40px]'  />
        <div>
            <p>Address:</p>
            <h2 className='font-bold text-[15px]'>Plot 25 Kunle street, Abuja</h2>
        </div>
        </div> 
        <img src={vertical} alt="ing" className='hidden md:block' />     
       <div className='flex gap-x-2 items-center'>
        <img src={phone} alt="img" className='h-[40px]' />
        <div>
            <p>Phone:</p>
            <h2 className='font-bold text-[]15px'>(+234) 805 784 511</h2>
        </div>
        </div>
        <img src={vertical} alt="ing" className='hidden md:block' />      
       <div className='flex gap-x-2 items-center'>
        <img src={mail} alt="img" className='h-[40px]' />
        <div>
            <p>Email:</p>
            <h2 className='font-bold text-[15px]'>info@gmail.com</h2>
        </div>
        </div>      
    </div>
  )
}

export default Contact2
