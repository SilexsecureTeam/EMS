import React, { useState, useEffect, useRef } from 'react';
import table from '../assets/tables.png';
import bedroom from '../assets/bedroom.jpg';
import dining from '../assets/dining-table.jpg';

const Hero = () => {
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
      className="h-screen relative overflow-hidden"
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
        className="h-full bg-cover bg-center object-cover transition-all duration-500 ease-in-out"
        style={{ 
          backgroundImage: `url(${images[currentSlide]})`,
          transform: `translateX(${translateX}px)`,
          cursor: isDragging ? 'grabbing' : 'grab'
        }}
      >
        <div className="h-full bg-black/50 px-10 flex items-center justify-center text-white">
          <div className="text-center">
            <h1 className="md:text-4xl text-2xl font-bold sm:max-w-[300px] md:max-w-[560px] mb-4">
              Master the Art of Professional Excellence
            </h1>
            <p className="sm:text-lg text-sm font-normal md:text-2xl sm:max-w-[300px] md:max-w-[560px]">
              Join the leading Etiquette & Management School and elevate your personal & corporate presence
            </p>
            <button className="mt-5 border-1 border-[#C3AA8C] hero-btn cursor-pointer text-white">
              Explore Courses
            </button>
          </div>
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
  );
};

export default Hero;