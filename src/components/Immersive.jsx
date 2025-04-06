import React, { useState, useEffect, useRef } from 'react';
import bedroom from '../assets/bedroom.jpg'
import seminar from '../assets/seminar.png'
import dinner from '../assets/dining-table.jpg'
import mixing from '../assets/mixing.jpg'
import waiter from '../assets/waiter.jpg'

const Immersive = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartPosition] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);
  const [animationID, setAnimationID] = useState(null);
  const [slidesPerView, setSlidesPerView] = useState(1);
  const [maxIndex, setMaxIndex] = useState(0);
  
  const sliderRef = useRef(null);
  const containerRef = useRef(null);

  const images = [
    { id: 1, src: bedroom, alt: "Image 1" },
    { id: 2, src: seminar, alt: "Image 2" },
    { id: 3, src: dinner, alt: "Image 3" },
    { id: 4, src: mixing, alt: "Image 3" },
    { id: 5, src: waiter, alt: "Image 3" },
  ];

    // Update slides per view based on screen size
  useEffect(() => {
    const updateSlidesPerView = () => {
      let newSlidesPerView;
      
      if (window.innerWidth >= 1024) {
        newSlidesPerView = 3; // Laptop/Desktop view (3 slides)
      } else if (window.innerWidth >= 640) {
        newSlidesPerView = 2; // Tablet view (2 slides)
      } else {
        newSlidesPerView = 1; // Mobile view (1 slide)
      }
      
      setSlidesPerView(newSlidesPerView);
      
      // Calculate max index (total slides - 1)
      // We're now moving one slide at a time, so max index is images.length - 1
      const newMaxIndex = Math.max(0, images.length - 1);
      setMaxIndex(newMaxIndex);
      
      // Ensure current index is not out of bounds
      if (currentIndex > newMaxIndex) {
        setCurrentIndex(newMaxIndex);
      }
    };
    
    updateSlidesPerView();
    window.addEventListener('resize', updateSlidesPerView);
    
    return () => {
      window.removeEventListener('resize', updateSlidesPerView);
    };
  }, [images.length, currentIndex]);

  // Get position of mouse or touch event
  const getPositionX = (event) => {
    return event.type.includes('mouse') 
      ? event.pageX 
      : event.touches[0].clientX;
  };

  // Animation for smooth movement
  const animation = () => {
    setSliderPosition();
    if (isDragging) {
      const animID = requestAnimationFrame(animation);
      setAnimationID(animID);
    }
  };

  // Position the slider during dragging
  const setSliderPosition = () => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(${currentTranslate}px)`;
    }
  };

  // Handle the start of dragging
  const handleDragStart = (event) => {
    setIsDragging(true);
    setStartPosition(getPositionX(event));
    const animID = requestAnimationFrame(animation);
    setAnimationID(animID);
  };

  // Handle movement during dragging
  const handleDragMove = (event) => {
    if (isDragging) {
      const currentPosition = getPositionX(event);
      const moveDistance = currentPosition - startPosition;
      setCurrentTranslate(prevTranslate + moveDistance);
    }
  };

  // Handle the end of dragging
  const handleDragEnd = () => {
    cancelAnimationFrame(animationID);
    setIsDragging(false);
    
    const movedBy = currentTranslate - prevTranslate;
    const sliderWidth = containerRef.current?.offsetWidth || 0;
    
    // If dragged more than 100px or 1/5 of slider width, change slide
    const dragThreshold = Math.min(100, sliderWidth / 5);
    
    if (movedBy < -dragThreshold && currentIndex < maxIndex) {
      // Dragged left - go to next slide
      setCurrentIndex(currentIndex + 1);
    } else if (movedBy > dragThreshold && currentIndex > 0) {
      // Dragged right - go to previous slide
      setCurrentIndex(currentIndex - 1);
    }
    
    // Reset position to the current slide
    updateSlidePosition();
  };

  // Update slide position
  const updateSlidePosition = () => {
    if (containerRef.current && sliderRef.current) {
      const slideWidth = containerRef.current.offsetWidth / slidesPerView;
      // Move one slide at a time
      const newTranslate = -currentIndex * slideWidth;
      
      if (sliderRef.current) {
        sliderRef.current.style.transition = 'transform 0.3s ease-out';
        sliderRef.current.style.transform = `translateX(${newTranslate}px)`;
      }
      
      setCurrentTranslate(newTranslate);
      setPrevTranslate(newTranslate);
    }
  };

  // Update slider position when index changes or on window resize
  useEffect(() => {
    if (!isDragging) {
      updateSlidePosition();
    }
  }, [currentIndex, slidesPerView, isDragging]);

  // Calculate visible slides based on current position
  const getVisibleIndices = () => {
    const indices = [];
    for (let i = 0; i < slidesPerView; i++) {
      if (currentIndex + i < images.length) {
        indices.push(currentIndex + i);
      }
    }
    return indices;
  };

  return (
    <div className="w-full mx-auto lg:px-20 px-5 my-20">
        <h1 className='sm:pl-10 lg:text-5xl sm:text-3xl text-xl sm:mb-10 mb-4 sm:font-semibold font-bold text-[#333333]'>Immersive etiquette education <br /> for leaders at all levels</h1>
        <div 
                ref={containerRef}
                className="relative overflow-hidden touch-pan-y cursor-grab active:cursor-grabbing"
                onTouchStart={handleDragStart}
                onTouchMove={handleDragMove}
                onTouchEnd={handleDragEnd}
                onMouseDown={handleDragStart}
                onMouseMove={isDragging ? handleDragMove : null}
                onMouseUp={handleDragEnd}
                onMouseLeave={isDragging ? handleDragEnd : null}
              >
                {/* Slider Track */}
                <div 
                  ref={sliderRef}
                  className="flex  transition-transform duration-500 ease-in-out"
                  style={{ touchAction: 'pan-y' }}
                >
                  {images.map((image) => (
                    <div 
                      key={image.id} 
                      className={`flex-shrink-0 lg:w-1/3 sm:w-1/2 px-2 ${100 / slidesPerView}%`}
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
        
                <div className="flex justify-between w-[150px] cursor-pointer mx-auto mt-4 flex-wrap">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-4 h-4 rounded-full border-[#C3AA8C]  border-2 ${
              getVisibleIndices().includes(index) ? 'bg-[#C3AA8C]' : 'bg-white'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Immersive;

 
// </div> 