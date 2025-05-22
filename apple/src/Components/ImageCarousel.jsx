import React, { useState, useEffect } from 'react';
import { useProductView } from './useProductView';

function ImageCarousel() {
  const { product } = useProductView();
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    `https://ntvb.tmsimg.com/assets/p10700229_b_h10_aa.jpg?w=960&h=540`,
    'https://hips.hearstapps.com/hmg-prod/images/the-originals-season-5-1502050163.jpg?resize=1200:*',
    `https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/11/friends-feature-image.jpg?q=50&fit=crop&w=1140&h=&dpr=1.5`,
    'https://i0.wp.com/www.ttuhub.net/wp-content/uploads/2014/10/Breaking-Bad.jpg?resize=1024%2C640&ssl=1',
    'https://images.radio-canada.ca/q_auto,w_1200/v1/ici-premiere/16x9/ondira-got-game-of-thrones-daenerys-targaryen.jpg',
  ];

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Auto-advance every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 3000);
    
    return () => clearInterval(interval); // Cleanup on unmount
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div className="carousel-container1">
      <button className="carousel-button1 prev" onClick={goToPrev}>←</button>
      <img 
        src={images[currentIndex]} 
        alt={`Slide ${currentIndex}`} 
        className="carousel-image1"
        placeholder="Watch Now on Apple TV"
      />
      <button className="carousel-button1 next" onClick={goToNext}>→</button>
    </div>
  );
}

export default ImageCarousel;