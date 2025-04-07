import React from 'react'
import bedroom from '../assets/bedroom.jpg'
import chair from '../assets/chair.jpg'
import seminar from '../assets/seminar.png'
import avatar from '../assets/avatar.png'
import { Share2Icon } from 'lucide-react'

const News = () => {
    const newsItems = [
    {
        id: 1,
        title: "Integer Maecenas Eget Viverra",
        image: bedroom,
        excerpt: "Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim.",
        date: "April 2, 2025",
        name: "Joanna Wellick",
        user: avatar
      },
      {
        id: 2,
        title: "Aenean eleifend ante maecenas",
        image: chair,
        excerpt: "Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim.",
        date: "April 1, 2025",
        name: "Joanna Wellick",
        user: avatar
      },
      {
        id: 3,
        title: "Integer Maecenas Eget Viverra",
        image: seminar,
        excerpt: "Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim.",
        date: "March 30, 2025",
        name: "Joanna Wellick",
        user: avatar
      }
    ];
  return (
    <div className='w-full bg-gray-200 py-16 px-5'>
      <h2 className='text-[32px] font-medium text-black text-center mb-5'>Latest News</h2>
      <div className="flex flex-wrap md:px-4">
        {newsItems.map((item) => (
          <div 
            key={item.id} 
            className="w-full px-2 md:px-4 mb-8 
                       sm:w-full 
                       md:w-1/2 
                       lg:w-1/3"
          >
            <div className="block bg-white pb-5 overflow-hidden h-full">
              <div className="w-full">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-76 object-fill mb-4"
                />
              </div>
              <h3 className="font-semibold text-[22px] mb-5 w-[250px] pl-2 ">{item.title}</h3>
              <div className='flex justify-between items-center px-4'>
                <div className='flex gap-x-3 justify-between items-center'>
                <img src={item.user} alt={item.title} />
                <h3 className='font-medium text-[16px]'>{item.name}</h3>
                </div>
                <h3 className='text-[12.18px] text-[#6C757D] font-light'>{item.date}</h3>
                <div className='flex text-[12px] text-[#6C757D] font-light justify-between items-center'>
                <Share2Icon size={12} />
                <p>1k  shares</p>
                </div>
              </div>
                <p className="text-gray-600 p-4 text-lg mb-3">{item.excerpt}</p>
              <a href="#" className='text-[#121416] border-b-2 border-b-[#121416]  font-semibold text-[16px] mx-7'>View Post</a>
            </div>
          </div>
        ))}
      </div>
      <button className='flex mt-2 mx-auto bg-[#193728] text-white py-4 px-10 text-lg cursor-pointer'>Load More</button>
    </div>
  )
}

export default News
