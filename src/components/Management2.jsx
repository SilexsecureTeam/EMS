import { MoveRightIcon } from 'lucide-react';
import React from 'react'
// import lecture from '../assets/lecture.png'
// import talking from '../assets/talking.png'
// import sitting from '../assets/sitting.png'
// import kid from '../assets/kids.png'
// import plate from '../assets/plate.png'
// import standinglady from '../assets/standinglady.png'


const Management2 = () => {
    const containers = [
        { id: 1,
         title: 'Adult Dining Etiquette',
        //  image: talking,
         paragraph: 'Lorem ipsum dolor sit amet consectetur. Enim duis aliquet commodo nunc nunc penatibus velit arcu.' },
        { id: 2,
         title: 'Children Etiquette',
        //  image: sitting,
         paragraph: 'Lorem ipsum dolor sit amet consectetur. Enim duis aliquet commodo nunc nunc penatibus velit arcu.' },
        { id: 3,
         title: 'Teen Dining Etiquette',
        //  image: kid,
         paragraph: 'Lorem ipsum dolor sit amet consectetur. Enim duis aliquet commodo nunc nunc penatibus velit arcu.' },
        { id: 4,
         title: 'Management Etiquette',
        //  image: plate,
         paragraph: 'Lorem ipsum dolor sit amet consectetur. Enim duis aliquet commodo nunc nunc penatibus velit arcu.' },
        { id: 5,
         title: 'Business Etiquette',
        //  image: standinglady,
         paragraph: 'Lorem ipsum dolor sit amet consectetur. Enim duis aliquet commodo nunc nunc penatibus velit arcu.' },
        { id: 6,
         title: 'Social Dining Etiquette',
        //  image: lecture,
         paragraph: 'Lorem ipsum dolor sit amet consectetur. Enim duis aliquet commodo nunc nunc penatibus velit arcu.' },
      ];

  return (
    <div className=' sm:px-20 px-8 py-30 text-center'>
     <h1 className='mb-3 text-[#333333] font-semibold text-4xl'>The Etiquette & Management Programs</h1>
     <p className='mb-8 text-lg'>Lorem ipsum dolor sit amet consectetur, sit amet sit amet</p> 
      <div className="flex flex-wrap -mx-2">
        {containers.map((container) => (
          <div 
            key={container.id}
            className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4"
          >
            <div className="relative h-64 px-3">
              <div   
                className="absolute inset-0 bg-cover bg-[#7D7D7D] object-fill bg-center"
                // style={{ backgroundImage: `url(${container.image})` }}
              >
                {/* Dark overlay */}
                {/* <div className="absolute inset-0 bg-black opacity-60"></div> */}
                
                {/* Text content */}
                <div className="absolute inset-0 flex flex-col  items-start p-5">
                  <h2 className="text-white mb-5 md:text-[24px] text-[18px] max-w-[300px] font-bold z-10">
                    {container.title}
                  </h2>
                  <h3 className="text-white text-start mb-4 text-base max-w-[300px] font-normal z-10">
                    {container.paragraph}
                  </h3>
                  <MoveRightIcon className='text-white mt-5 cursor-pointer' size={30} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Management2
