import React from 'react'
import mixing from '../assets/mixing.jpg'

const Management = () => {
    const containers = [
        { id: 1,
         title: 'Etiquette & Business Protocol',
         image: mixing,
         paragraph: 'lorem udjdj jehijec eijiex  exji efe ec9 efihff c hf hf4f ei fh f ' },
        { id: 2,
         title: 'Social & Business Courses',
         image: mixing,
         paragraph: 'lorem udjdj jehijec eijiex  exji efe ec9 efihff c hf hf4f ei fh f ' },
        { id: 3,
         title: 'Etiquette For Kids Courses',
         image: mixing,
         paragraph: 'lorem udjdj jehijec eijiex  exji efe ec9 efihff c hf hf4f ei fh f ' },
        { id: 4,
         title: 'Etiquette & Business Protocol',
         image: mixing,
         paragraph: 'lorem udjdj jehijec eijiex  exji efe ec9 efihff c hf hf4f ei fh f ' },
        { id: 5,
         title: 'Mangement & Business Protocol',
         image: mixing,
         paragraph: 'lorem udjdj jehijec eijiex  exji efe ec9 efihff c hf hf4f ei fh f ' },
        { id: 6,
         title: 'Etiquette & Business Protocol',
         image: mixing,
         paragraph: 'lorem udjdj jehijec eijiex  exji efe ec9 efihff c hf hf4f ei fh f ' },
      ];

  return (
    <div className='bg-[#CFBDA2] px-20 py-30 text-center'>
     <h1 className='mb-3 text-[#333333] font-semibold text-4xl'>The Etiquette & Management Programs</h1>
     <p className='mb-8 text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, repudiandae?</p> 
      <div className="flex flex-wrap -mx-2">
        {containers.map((container) => (
          <div 
            key={container.id}
            className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4"
          >
            <div className="relative h-64">
              <div 
                className="absolute inset-0 bg-cover object-fill bg-center"
                style={{ backgroundImage: `url(${container.image})` }}
              >
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black opacity-60"></div>
                
                {/* Text content */}
                <div className="absolute inset-0 flex flex-col  items-center justify-center">
                  <h2 className="text-white mb-2 text-3xl max-w-[300px] font-bold z-10">
                    {container.title}
                  </h2>
                  <h3 className="text-white text-xl max-w-[300px] font-normal z-10">
                    {container.paragraph}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Management
