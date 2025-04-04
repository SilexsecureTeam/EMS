import React from 'react'
import business from '../assets/businesswoman.jpg'
import { Mail } from 'lucide-react'

const Faq = () => {
  return (
    <section className="w-full py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
              <img 
                src={business}
                alt="Featured content" 
                className="w-full h-90 object-fill "
              />
            </div>
            
            <div className="w-full lg:w-1/2">
              <div className="max-w-lg">
              <h2 className="text-3xl font-semibold text-[#333333] mb-4">We're here to help</h2>
                {/* <hr className='h-1 w-50 mb-5 bg-[#6C4F40]' /> */}
                <p className=" mb-10 text-xl leading-10">
                Read through our FAQs and, if you can't find what you're looking for, our experts will be happy to answer your questions.
                </p>
                <div className="flex gap-x-9 items-center">
             <button className='bg-[#C3AA8C] cursor-pointer text-lg text-[#193728] border-2 border-[#193728] py-3 px-7'>READ FAQS</button>
             <div className='flex gap-x-2'>
                <Mail size={20} color='#193728' />
                <p className='text-[#193728] font-medium '>ASK A QUESTION</p>
             </div>
         </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Faq
