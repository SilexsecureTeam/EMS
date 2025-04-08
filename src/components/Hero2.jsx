import React, { useState, useEffect, useRef } from 'react';
import table from '../assets/tables.png';
import bedroom from '../assets/bedroom.jpg';
import dining from '../assets/chair.jpg';
import vertical from '../assets/vertical.png'
import { Book, FacebookIcon, FolderOpenDotIcon, GraduationCapIcon, InstagramIcon, LinkedinIcon, MoveRight, TwitterIcon } from 'lucide-react';

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
       
        //  const goToSlide = (index) => {
        //    setCurrentSlide(index);
        //    setTranslateX(0);
        //  };
       
         return (
           <div 
             className="h-screen  relative home-2 overflow-hidden md:px-10 px-0 "
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
               className="h-full pt-5.5 p-8 flex md:flex-row md:justify-between  flex-col bg-cover bg-center object-cover transition-all duration-500 ease-in-out"
               style={{ 
                 backgroundImage: `url(${images[currentSlide]})`,
                 transform: `translateX(${translateX}px)`,
                 cursor: isDragging ? 'grabbing' : 'grab'
               }}
             >
               <div className="h-fit  flex items-center mb-3 md:mb-0 justify-center text-white">
                 <div className="md:text-start text-center">
                   <h1 className="md:text-[64px] text-2xl leading-6 md:leading-12 font-semibold sm:max-w-[300px] md:max-w-[560px] md:mb-4 mb-2">
                     Master the Art of Professional Excellence
                   </h1>
                   <p className="sm:text-lg text-base font-medium md:text-2xl sm:max-w-[300px] md:max-w-[560px] mb-3 md:mb-0">
                   Join the leading Etiquette & Management School <br />
                   and elevate your personal & corporate presence
                   </p>
                   <div className='flex gap-x-2 items-center justify-center md:justify-start '>
                   <button className="mt-1 bg-[#193728] hero-btn cursor-pointer text-white">
                     Enroll Now
                   </button>
                   <div className="flex items-center">
                    <h4 className='font-semibold text-[16px] text-white'>View Programs </h4>
                    <MoveRight className='ml-1 border-1 border-white p-[3px] rounded-full ' size={16} color='white' />
                   </div>
                   </div>
                 </div>
               </div>
               <div className='flex md:flex-col justify-center md:justify-start gap-3 gap-x-3' >
                <FacebookIcon className='text-white cursor-pointer bg-[#C3AA8C] p-2' size={35} />
                <TwitterIcon className='text-white cursor-pointer bg-[#C3AA8C] p-2' size={35} />
                <InstagramIcon className='text-white cursor-pointer bg-[#C3AA8C] p-2' size={35} />
                <LinkedinIcon className='text-white cursor-pointer bg-[#C3AA8C] p-2' size={35} />
               </div>
             </div>
       
             <div className="absolute block w-full bottom-0 md:bottom-6 left-0  z-10 ">
               <div className='flex  w-[100%] md:w-[92%] mx-auto gap-5 bg-[#F1ECE3] flex-wrap md:px-7 px-4 md:py-5 py-2 justify-between items-center '>
                      <div className='flex w-full md:border-b-0 border-b-2 border-b-[#333333] gap-3 gap-x-2 items-center pb-2  md:w-fit '>
                       <div>
                           <Book size={30} color='#193728' className=' mb-1'/>
                           <p className='md:text-2xl text-lg  text-[#333333] font-bold'>Explore Courses</p>
                           <p className='text-[#333333] font-normal text-[14px] md:text-[16px]'>Lorem ipsum dolor sit amet consectetur.</p>
                           <a href="# " className='text-[#333333] text-[14px] font-normal' > Learn More</a>
                       </div>
                       </div> 
                       <img src={vertical} alt="ing" className='hidden md:block' />     
                      <div className='flex md:border-b-0 w-full md:w-fit border-b-2 border-b-[#333333] gap-3 pb-2  gap-x-2 items-center'>
                       <div>
                           <FolderOpenDotIcon  size={30} color='#193728' className=' mb-1'/>
                           <p className='md:text-2xl text-lg  text-[#333333] font-bold'>Browse Resources</p>
                           <p className='text-[#333333] font-normal text-[14px] md:text-[16px]'>Lorem ipsum dolor sit amet consectetur.</p>
                           <a href="# " className='text-[#333333] text-[14px] font-normal' > Learn More</a>
                       </div>
                       </div>
                       <img src={vertical} alt="ing" className='hidden md:block' />      
                      <div className='flex md:border-b-0 w-full md:w-fit border-b-2 border-b-[#333333] gap-3 pb-2 gap-x-2 items-center'>
                       <div>
                           <GraduationCapIcon size={30} color='#193728' className=' mb-1'/>
                           <p className='md:text-2xl text-lg  text-[#333333] font-bold'>Explore Events</p>
                           <p className='text-[#333333] font-normal text-[14px] md:text-[16px]'>Lorem ipsum dolor sit amet consectetur.</p>
                           <a href="# " className='text-[#333333] text-[14px] font-normal' > Learn More</a>
                       </div>
                       </div>      
                   </div>
             </div>
    </div>
  )
}

export default Hero2
