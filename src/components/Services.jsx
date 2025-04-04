import React from 'react'
import image from '../assets/image.png'
import table from '../assets/tables.png'
import cake from '../assets/cake.jpg'
import mixing from '../assets/mixing.jpg'

const Services = () => {
    const services =[
        {id : 1,
         image : image,
         title : "Etiquette Training Services",
         paragraph : "Lorem ipsum dolor sit amet consectetur. Ut adipiscing venenatis auctor tristique mi. Scelerisque pharetra nunc nibh laoreet. Nibh et sed enim risus." 
        },
        {id : 2,
         image : mixing,
         title : "Etiquette Training Services",
         paragraph : "Lorem ipsum dolor sit amet consectetur. Ut adipiscing venenatis auctor tristique mi. Scelerisque pharetra nunc nibh laoreet. Nibh et sed enim risus." 
        },
        {id : 3,
         image : cake,
         title : "Etiquette Training Services",
         paragraph : "Lorem ipsum dolor sit amet consectetur. Ut adipiscing venenatis auctor tristique mi. Scelerisque pharetra nunc nibh laoreet. Nibh et sed enim risus." 
        },
        {id : 4,
         image : table,
         title : "Etiquette Training Services",
         paragraph : "Lorem ipsum dolor sit amet consectetur. Ut adipiscing venenatis auctor tristique mi. Scelerisque pharetra nunc nibh laoreet. Nibh et sed enim risus." 
        },
    ]
  return (
    <div className=' bg-[#D1D1D1] p-20 '>
      <h2 className='text-3xl text-[#193728] font-bold text-center mb-12'>Our Premium Services</h2>
      <div className="flex flex-wrap gap-5 justify-between">
        {services.map((service, index) => (
          <div 
            key={index}
            className="flex-1 min-w-[250px] max-w-full p-5"
          >
            <img src={service.image} alt={service.id} className='w-[48px] h-[38px] mb-6' />
             <h2 className='text-[#193728] font-semibold text-xl mb-6'>{service.title}</h2>
             <p className='text-lg mb-6 text-[#333333]'>{service.paragraph}</p>
             <a href="#" className='text-[#193728] font-bold'>Learn More....</a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services
