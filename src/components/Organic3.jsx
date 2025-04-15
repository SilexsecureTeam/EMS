import React from 'react'
import cake from '../assets/cake.jpg'
import woman from '../assets/womanwrite.png'
import maid from '../assets/chambermaid.jpg'

const items = [
    {
        no : '25 ',
        text : 'Business Awards',
    },
    {
        no : '15 ',
        text : 'Best Team Awards',
    },
    {
        no : '98 ',
        text : 'People Votes',
    },
]

const Organic3 = () => {
  return (
      <div>
        <section className="py-16 pt-25 md:pt-16 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Text Content */}
          <div>
            <p className="text-sm font-medium text-[#B2B2B2] uppercase tracking-wider mb-2">
            SEO Service Specialist
            </p>
            <h2 className="text-3xl md:text-[45px] max-w-[600px] font-black text-[#856149] leading-tight mb-4">
            Get Organic Traffict From Search Engine Optimization
            </h2>
            <p className="text-[#6E6E6E] max-w-[525px] text-[17px] mb-6 font-medium leading-relaxed">
            orem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo
            </p>
  
            {/* Feature List */}
            <div className="space-y-3 mb-6 flex  flex-row justify-between">
              {items.map(
                (item, index) => (
                  <div key={index} className=" w-full ">
                   <p className='mb-4 font-black text-[45px] text-[#B2B2B2]'>{item.no} <span className='text-[#856149]'>+</span></p> 
                   <h2 className='text-[#303030] text-[17px] font-medium'>{item.text}</h2>
                  </div>
                )
              )}
            </div>
          </div>
           {/* Image Section */}
           <div className="relative w-full h-[400px] md:h-full">
            {/* Background box */}
            <img
              src={cake}
              alt="Salad preparation"
              className="absolute top-0 z-30 right-0 w  w-[30%] h-[30%]  object-cover"
            />
            <img
              src={maid}
              alt="Salad preparation"
              className="absolute right-[10%] top-[10%]  w-[80%] h-[80%]  object-cover"
            />
            <img
              src={woman}
              alt="cake stand"
              className="absolute bottom-0 z-30 left-0 w-[30%] h-[30%]  object-cover"
            />
            {/* <div className="absolute bottom-6 right-6 border-1 border-[#000000] w-4/5 h-4/5 bg-[#CFBDA2] "></div> */}
          </div>
        </div>
      </section>
      </div>
    )
}

export default Organic3
