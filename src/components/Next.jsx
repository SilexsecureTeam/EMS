import React from 'react'
import request from '../assets/request.png'
import visit from '../assets/visit.png'
import apply from '../assets/apply.png'

const Next = () => {
  return (
    <div className='flex w-full py-20 px-16 justify-between items-center next gap-10 flex-wrap'>
      <h2 className='text-3xl font-bold text-[#333333]'>Take your next <br /> step.</h2>
      <div className='flex flex-wrap gap-x-2.5 gap-2.5'> 
        <img src={request} alt="img" className='cursor-pointer'/>
        <img src={visit} alt="img" className='cursor-pointer'/>
        <img src={apply} alt="img" className='cursor-pointer'/>
      </div>
    </div>
  )
}

export default Next
