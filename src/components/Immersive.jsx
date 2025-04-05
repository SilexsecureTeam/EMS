import React, { useState, useEffect, useRef } from 'react';
import bedroom from '../assets/bedroom.jpg'
import seminar from '../assets/seminar.png'
import dinner from '../assets/dining-table.jpg'

const Immersive = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);
  const [maxIndex, setMaxIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartPosition] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);
  
  const trackRef = useRef(null);
  const containerRef = useRef(null);
  const animationRef = useRef(null);

  const images = [
    { id: 1, src: bedroom, alt: "Image 1" },
    { id: 2, src: seminar, alt: "Image 2" },
    { id: 3, src: dinner, alt: "Image 3" },
  ];

       // Calculate cards per view based on screen width
        useEffect(() => {
          const calculateCardsPerView = () => {
            if (window.innerWidth >= 1024) {
              return 3; // Desktop
            } else if (window.innerWidth >= 640) {
              return 2; // Tablet
            } else {
              return 1; // Mobile
            }
          };
          
          const updateDimensions = () => {
            const newCardsPerView = calculateCardsPerView();
            setCardsPerView(newCardsPerView);
            setMaxIndex(Math.max(0, images.length - newCardsPerView));
            
            // Ensure current index is within bounds after resize
            setCurrentIndex(prev => Math.min(prev, Math.max(0, images.length - newCardsPerView)));
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
          setIsDragging(true);
          setStartPosition(getPositionX(event));
          animationRef.current = requestAnimationFrame(animation);
        };
        
        // Handle touch/mouse move
        const handleMove = (event) => {
          if (isDragging) {
            const currentPosition = getPositionX(event);
            // const cardWidth = containerRef.current ? containerRef.current.offsetWidth / cardsPerView : 0;
            setCurrentTranslate(prevTranslate + currentPosition - startPosition);
          }
        };
        
        // Handle touch/mouse end
        const handleEnd = () => {
          setIsDragging(false);
          cancelAnimationFrame(animationRef.current);
          
          // const cardWidth = containerRef.current ? containerRef.current.offsetWidth / cardsPerView : 0;
          const movedBy = currentTranslate - prevTranslate;
          
          // Determine if slide should move to next/prev
          if (movedBy < -50 && currentIndex < maxIndex) {
            setCurrentIndex(prev => prev + 1);
          } else if (movedBy > 50 && currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
          }
          
          finishDrag();
        };
        
        // Finalize drag and update position
        const finishDrag = () => {
          const cardWidth = containerRef.current ? containerRef.current.offsetWidth / cardsPerView : 0;
          const newTranslate = -currentIndex * cardWidth;
          
          setCurrentTranslate(newTranslate);
          setPrevTranslate(newTranslate);
          
          if (trackRef.current) {
            trackRef.current.style.transition = 'transform 0.5s ease';
            trackRef.current.style.transform = `translateX(${newTranslate}px)`;
          }
        };
        
        // Go to a specific dot/index
        const goToIndex = (index) => {
          setCurrentIndex(index);
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
            finishDrag();
          }
        }, [currentIndex, cardsPerView]);
        
        // Create dots based on cards per view
        const renderDots = () => {
          const dotsCount = Math.ceil(images.length / cardsPerView);
          const dots = [];
          
          for (let i = 0; i < dotsCount; i++) {
            const isActive = Math.floor(currentIndex / cardsPerView) === i;
            dots.push(
              <button
                key={i}
                onClick={() => goToIndex(i * cardsPerView)}
                className={`w-2 h-2 rounded-full mx-1 transition-colors bg-white border-2 border-[#193728] duration-300 ${
                  isActive ? 'bg-[#193728]' : 'bg-white'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            );
          }
          
          return dots;
        };

  return (
    <div className="w-full mx-auto lg:px-20 px-5 my-20">
        <h1 className='sm:pl-10 lg:text-5xl sm:text-3xl text-xl sm:mb-10 mb-4 sm:font-semibold font-bold text-[#333333]'>Immersive etiquette education <br /> for leaders at all levels</h1>
        <div 
                ref={containerRef}
                className="relative overflow-hidden touch-pan-y cursor-grab active:cursor-grabbing"
                onTouchStart={handleStart}
                onTouchMove={handleMove}
                onTouchEnd={handleEnd}
                onMouseDown={handleStart}
                onMouseMove={isDragging ? handleMove : null}
                onMouseUp={handleEnd}
                onMouseLeave={handleEnd}
              >
                {/* Slider Track */}
                <div 
                  ref={trackRef}
                  className="flex  transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(${-currentIndex * (containerRef.current ? containerRef.current.offsetWidth / cardsPerView : 0)}px)` }}
                >
                  {images.map((image) => (
                    <div 
                      key={image.id} 
                      className={`flex-shrink-0 px-2 ${
                        cardsPerView === 1 ? 'w-full' : 
                        cardsPerView === 2 ? 'w-1/2' : 'w-1/3'
                      }`}
                    > 
                      <div className="">
                         <img 
                           src={image.src} 
                           alt={image.alt} 
                           className="w-full h-72 object-fill rounded-lg shadow-md"
                          />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
        
                {/* Dots Indicator */}
                <div className="flex justify-center mt-6">
                {renderDots()}
              </div>
    </div>
  );
};

export default Immersive;

 
// </div> 