import React, { useState, useEffect, useRef } from 'react';
import table from '../assets/tables.png';
import bedroom from '../assets/bedroom.jpg';
import dining from '../assets/dining-table.jpg';
import { FacebookIcon, InstagramIcon, LinkedinIcon, MoveRight, TwitterIcon } from 'lucide-react';

const Hero2 = () => {
         const images = [
           table,
           bedroom,
           dining
         ];
       
         const [currentSlide, setCurrentSlide] = useState(0);
         const [isDragging, setIsDragging] = useState(false);
         const [startX, setStartX] = useState(0);
         const [translateX, setTranslateX] = useState(0);
         const sliderRef = useRef(null);
       
         // Auto-slide effect
         useEffect(() => {
           const timer = setInterval(() => {
             if (!isDragging) {
               setCurrentSlide((prev) => (prev + 1) % images.length);
             }
           }, 2000);
       
           return () => clearInterval(timer);
         }, [isDragging, images.length]);
       
         // Handle start of drag/swipe
         const handleDragStart = (e) => {
           setIsDragging(true);
           const x = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;
           setStartX(x);
         };
       
         // Handle drag/swipe movement
         const handleDragMove = (e) => {
           if (!isDragging) return;
           const x = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;
           const diff = x - startX;
           setTranslateX(diff);
         };
       
         // Handle end of drag/swipe
         const handleDragEnd = () => {
           if (!isDragging) return;
           setIsDragging(false);
           
           const threshold = 50; // Minimum distance to trigger slide change
           const movedBy = translateX;
       
           if (Math.abs(movedBy) > threshold) {
             if (movedBy > 0) {
               // Swipe right - previous slide
               setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
             } else {
               // Swipe left - next slide
               setCurrentSlide((prev) => (prev + 1) % images.length);
             }
           }
           
           setTranslateX(0); // Reset position
         };
       
         const goToSlide = (index) => {
           setCurrentSlide(index);
           setTranslateX(0);
         };
       
         return (
           <div 
             className="h-screen relative home-2 overflow-hidden md:px-10 px-3"
             ref={sliderRef}
             onMouseDown={handleDragStart}
             onMouseMove={handleDragMove}
             onMouseUp={handleDragEnd}
             onMouseLeave={handleDragEnd}
             onTouchStart={handleDragStart}
             onTouchMove={handleDragMove}
             onTouchEnd={handleDragEnd}
           >
             <div
               className="h-full p-8 flex md:flex-row md:justify-between flex-col bg-cover bg-center object-cover transition-all duration-500 ease-in-out"
               style={{ 
                 backgroundImage: `url(${images[currentSlide]})`,
                 transform: `translateX(${translateX}px)`,
                 cursor: isDragging ? 'grabbing' : 'grab'
               }}
             >
               <div className="h-fit  flex items-center mb-3 md:mb-0 justify-center text-white">
                 <div className="text-start">
                   <h1 className="md:text-[64px] text-2xl leading-6 md:leading-12 font-semibold sm:max-w-[300px] md:max-w-[560px] mb-4">
                     Master the Art of <br /> Professional <br /> Excellence
                   </h1>
                   <p className="sm:text-lg text-sm font-medium md:text-2xl sm:max-w-[300px] md:max-w-[560px]">
                   Join the leading Etiquette & Management School <br />
                   and elevate your personal & corporate presence
                   </p>
                   <div className='flex gap-x-2 items-center'>
                   <button className="mt-1 bg-[#193728] hero-btn cursor-pointer text-white">
                     Enroll Now
                   </button>
                   <div className="flex items-center">
                    <h4 className='font-semibold text-[16px]'>View Programs </h4>
                    <MoveRight className='ml-1 border-1 border-white p-[3px] rounded-full ' size={16} color='white' />
                   </div>
                   </div>
                 </div>
               </div>
               <div className='flex md:flex-col gap-3 gap-x-3' >
                <FacebookIcon className='text-white cursor-pointer bg-[#C3AA8C] p-2' size={35} />
                <TwitterIcon className='text-white cursor-pointer bg-[#C3AA8C] p-2' size={35} />
                <InstagramIcon className='text-white cursor-pointer bg-[#C3AA8C] p-2' size={35} />
                <LinkedinIcon className='text-white cursor-pointer bg-[#C3AA8C] p-2' size={35} />
               </div>
             </div>
       
             <div className="absolute bottom-5 left-1/2  transform -translate-x-1/2 flex space-x-2">
               {images.map((_, index) => (
                 <button
                   key={index}
                   onClick={() => goToSlide(index)}
                   className={`w-3 h-3 rounded-full border-[#C3AA8C] border-2 ${
                     currentSlide === index ? 'bg-[#C3AA8C]' : 'bg-white'
                   }`}
                 />
               ))}
             </div>
    </div>
  )
}

export default Hero2
