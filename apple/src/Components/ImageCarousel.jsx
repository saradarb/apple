import React from 'react'
import { useState } from 'react';
import { useProductView } from './useProductView';


function ImageCarousel() {
    
  const { product } = useProductView();

  const images = [
    `http://localhost:1337${product.media?.[0]?.url}`,
    `http://localhost:1337${product.media?.[1]?.url}`,
    `http://localhost:1337${product.media?.[2]?.url}`,
    `http://localhost:1337${product.media?.[3]?.url}`,
    `http://localhost:1337${product.media?.[4]?.url}`,
  ];


  const [currentIndex, setCurrentIndex] = useState(0);

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


  return (
    <div className="carousel-container">
      <button className="carousel-button prev" onClick={goToPrev}>←</button>
      <img 
        src={images[currentIndex]} 
        alt={`Slide ${currentIndex}`} 
        className="carousel-image"
      />
      <button className="carousel-button next" onClick={goToNext}>→</button>
    </div>
  )
}

export default ImageCarousel