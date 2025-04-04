import React, { useState, useEffect } from 'react';
import bedroom from '../assets/bedroom.jpg'
import seminar from '../assets/seminar.png'
import dinner from '../assets/dining-table.jpg'

const Immersive = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(3);

  const images = [
    { id: 1, src: bedroom, alt: "Image 1" },
    { id: 2, src: seminar, alt: "Image 2" },
    { id: 3, src: dinner, alt: "Image 3" },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleSlides(1); // Phone view
      } else if (window.innerWidth < 1024) {
        setVisibleSlides(2); // Tablet view
      } else {
        setVisibleSlides(3); // Laptop view
      }
    };

    // Set initial value
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getVisibleImages = () => {
    const totalImages = images.length;
    let visibleImages = [...images]; 
    
    for (let i = 0; i < visibleSlides; i++) {
      visibleImages.push({...images[i], id: `${images[i].id}-clone`});
    }
    
    for (let i = totalImages - 1; i >= totalImages - visibleSlides && i >= 0; i--) {
      visibleImages.unshift({...images[i], id: `${images[i].id}-clone-start`});
    }
    
    return visibleImages;
  };

  const visibleImages = getVisibleImages();
  const offset = visibleSlides;

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full mx-auto px-20 my-20">
        <h1 className='pl-10 text-5xl mb-10 font-semibold text-black'>Immersive etiquette education <br /> for leaders at all levels</h1>
        <div className="overflow-hidden relative">
          <div 
            className="flex transition-transform duration-300 ease-in-out"
            style={{ 
              transform: `translateX(-${(currentIndex + offset) * (100 / visibleSlides)}%)` 
            }}
          >
            {visibleImages.map((image) => (
              <div 
                key={image.id} 
                className="flex-shrink-0"
                style={{ width: `${100 / visibleSlides}%` }}
              >
                <div className="p-2">
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

      {/* Dots navigation */}
      <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`mx-1 w-3 h-3 rounded-full cursor-pointer border-2 border-black ${
              index === currentIndex ? 'current' : 'bg-gray-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Immersive;