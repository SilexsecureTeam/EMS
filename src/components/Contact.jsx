import location from '../assets/location.png'
import phone from '../assets/phone.png'
import mail from '../assets/mail.png'
import vertical from '../assets/vertical.png'
import React from 'react'

const Contact = () => {
  return (
    <div className='flex next px-16 justify-between items-center '>
       <div className='flex gap-x-5'>
        <img src={location} alt="img" />
        <div>
            <p>Address:</p>
            <h2 className='font-bold text-lg'>Plot 25 Kunle street, Abuja</h2>
        </div>
        </div> 
        <img src={vertical} alt="ing" />     
       <div className='flex gap-x-5'>
        <img src={phone} alt="img" />
        <div>
            <p>Phone:</p>
            <h2 className='font-bold text-lg'>(+234) 805 784 511</h2>
        </div>
        </div>
        <img src={vertical} alt="ing" />      
       <div className='flex gap-x-5'>
        <img src={mail} alt="img" />
        <div>
            <p>Email:</p>
            <h2 className='font-bold text-lg'>info@gmail.com</h2>
        </div>
        </div>      
    </div>
  )
}

export default Contact
