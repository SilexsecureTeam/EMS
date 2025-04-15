import React, { useState, useEffect, useRef } from 'react';
import avatar from '../assets/avatar.png';
// import quote from '../assets/quote.png';
import { QuoteIcon } from 'lucide-react';

const Testimonial3 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartPosition] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);
  
  const trackRef = useRef(null);
  const containerRef = useRef(null);
  const animationRef = useRef(null);
    
  const testimonials = [
    { id: 1, src: avatar, alt: "Image 1", name: "Sarah T.", work: "CEO, Eat well", paragraph: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo." },
    { id: 2, src: avatar, alt: "Image 2", name: "Larry B.", work: "Entrepreneur", paragraph: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo." },
    { id: 3, src: avatar, alt: "Image 3", name: "Smart T.", work: "Student", paragraph: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo." },
    { id: 4, src: avatar, alt: "Image 4", name: "Jane D.", work: "Designer", paragraph: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo." },
    { id: 5, src: avatar, alt: "Image 5", name: "Mike S.", work: "Developer", paragraph: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo." },
  ];
  
  // Calculate cards per view based on screen width
  useEffect(() => {
    const calculateCardsPerView = () => {
      return window.innerWidth >= 1024 ? 2 : 1;
    };
    
    const updateDimensions = () => {
      const newCardsPerView = calculateCardsPerView();
      setCardsPerView(newCardsPerView);
      setCurrentIndex(0); // Reset to start on resize
    };
    
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    
    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);
  
  // Animation function for smooth dragging
  const animation = () => {
    if (trackRef.current) {
      setSliderPosition();
    }
    if (isDragging) {
      animationRef.current = requestAnimationFrame(animation);
    }
  };
  
  // Set the slider position
  const setSliderPosition = () => {
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(${currentTranslate}px)`;
    }
  };
  
  // Get position for mouse or touch event
  const getPositionX = (event) => {
    return event.type.includes('mouse') 
      ? event.pageX 
      : event.touches[0].clientX;
  };
  
  // Handle touch/mouse start
  const handleStart = (event) => {
    event.preventDefault();
    setIsDragging(true);
    setStartPosition(getPositionX(event));
    animationRef.current = requestAnimationFrame(animation);
  };
  
  // Handle touch/mouse move
  const handleMove = (event) => {
    if (isDragging) {
      const currentPosition = getPositionX(event);
      setCurrentTranslate(prevTranslate + currentPosition - startPosition);
    }
  };
  
  // Handle touch/mouse end
  const handleEnd = () => {
    setIsDragging(false);
    cancelAnimationFrame(animationRef.current);
    
    // const cardWidth = containerRef.current ? containerRef.current.offsetWidth / cardsPerView : 0;
    const movedBy = currentTranslate - prevTranslate;
    
    let newIndex = currentIndex;
    if (movedBy < -50) {
      newIndex = currentIndex + 1;
    } else if (movedBy > 50) {
      newIndex = currentIndex - 1;
    }
    
    // Infinite scroll logic
    if (newIndex >= testimonials.length) {
      newIndex = 0;
    } else if (newIndex < 0) {
      newIndex = testimonials.length - 1;
    }
    
    setCurrentIndex(newIndex);
    finishDrag(newIndex);
  };
  
  // Finalize drag and update position
  const finishDrag = (index) => {
    const cardWidth = containerRef.current ? containerRef.current.offsetWidth / cardsPerView : 0;
    const newTranslate = -index * cardWidth;
    
    setCurrentTranslate(newTranslate);
    setPrevTranslate(newTranslate);
    
    if (trackRef.current) {
      trackRef.current.style.transition = 'transform 0.5s ease';
      trackRef.current.style.transform = `translateX(${newTranslate}px)`;
    }
  };
  
  // Update slider when current index changes
  useEffect(() => {
    if (!isDragging) {
      finishDrag(currentIndex);
    }
  }, [currentIndex, cardsPerView]);
  
  // Render dots
  const renderDots = () => {
    return testimonials.map((_, index) => (
      <button
        key={index}
        onClick={() => setCurrentIndex(index)}
        className={`w-4 h-4 rounded-full mx-1 transition-colors bg-white border-2 border-[#E2D8C6] cursor-pointer duration-300 ${
          currentIndex === index ? 'bg-[#E2D8C6]' : 'bg-white'
        }`}
        aria-label={`Go to slide ${index + 1}`}
      />
    ));
  };

  return (
    <div className='w-full bg-gray-100 py-16 px-5'>
        <p className='text-center text-[15px] font-medium text-[#B2B2B2] mb-5'>The BEst Feedback</p>
      <h2 className='md:text-[45px] text-2xl text-center text-[#303030] font-black'>Our Clients Testimonial</h2>
      <h3 className='text-center text-[#6E6E6E] mt-4 mb-8 text-[17px] font-normal max-w-[660px] mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</h3>

      <div 
        ref={containerRef}
        className="relative overflow-hidden touch-pan-x cursor-grab active:cursor-grabbing select-none"
        onTouchStart={handleStart}
        onTouchMove={handleMove}
        onTouchEnd={handleEnd}
        onMouseDown={handleStart}
        onMouseMove={isDragging ? handleMove : null}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
      >
        <div 
          ref={trackRef}
          className="flex transition-transform duration-500 ease-in-out"
        >
          {[...testimonials, ...testimonials.slice(0, cardsPerView)].map((testimonial, index) => (
            <div 
              key={`${testimonial.id}-${index}`}
              className={`flex-shrink-0 px-2 ${cardsPerView === 1 ? 'w-full' : 'w-1/2'}`}
            > 
              <div className='flex justify-center items-center max-w-[1600px] mx-auto'>
                <div className="border-2 w-fit shadow-lg border-[#B2B2B2] p-8 rounded-lg bg-white flex gap-x-2 justify-between">
                  <div className='grid'>
                    <QuoteIcon size={45} className='text-[#E2D8C6] mb-3 rotate-180' />
                    <div className='relative '>
                      {/* <img src={quote} alt="quote" className='absolute left-[-20px]' /> */}
                      <p className='text-[#6E6E6E] font-medium max-w-[520px] mb-3 text-[20px]'>{testimonial.paragraph}</p>
                    </div>
                    <div className='flex gap-x-2'>
                      <img 
                        src={testimonial.src}  
                        alt={testimonial.alt} 
                        className="w-14 h-14 mr-3 object-fill rounded-full shadow-md"
                      />
                      <div>
                        <h2 className='font-black text-[#303030] text-[25px]'>{testimonial.name}</h2>
                        <h4 className='text-[#B2B2B2] font-medium text-[15px]'>{testimonial.work}</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-6">
        {renderDots()}
      </div>
      
      {/* <div className="flex items-center justify-center mt-4 text-gray-500 text-sm">
        <span>Swipe or drag to see more</span>
      </div> */}
    </div>
  );
};

export default Testimonial3;