import React, { useState } from 'react';
import { useProductView } from './useProductView';
import Header from './Header';
import '../App.css';
import WritingBig from './WritingBig';
import { useCart } from '../CartContext';
import { useNavigate } from 'react-router-dom';




function ProductView() {
  const { 
    product,
    selectedColor,
    selectedModel,
    selectedQuantity,
    getImage,
    handleQuantityChange,
    setSelectedColor,
    setSelectedModel,
  } = useProductView();

  
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const divid = (product) => {
    const some = product.price;
    return Number(some) / 24;
  }

  if (!product) {
    return null;
  }

  // Carousel state
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // All available images (including color variants)
  const allImages = product.media?.map(media => `http://localhost:1337${media.url}`) || [];

  // Get current image to display
  const getCurrentImage = () => {
    // If color is selected, show corresponding color image
    if (selectedColor !== null && product.media?.[selectedColor + 1]) {
      return `http://localhost:1337${product.media[selectedColor + 1].url}`;
    }
    // Otherwise show carousel image
    return allImages[currentIndex];
  };

  const goToNext = () => {
    setCurrentIndex(prev => (prev + 1) % allImages.length);
    // Clear color selection when manually navigating
    setSelectedColor(null);
  };

  const goToPrev = () => {
    setCurrentIndex(prev => (prev - 1 + allImages.length) % allImages.length);
    // Clear color selection when manually navigating
    setSelectedColor(null);
  };


  const handleAddToCart = () => {
    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: getCurrentImage(), // Your existing image function
      selectedColor: product.colors[selectedColor]?.name || '',
      selectedModel: product.model[selectedModel]?.name || '',
      quantity: selectedQuantity,
      colorValue: product.colors[selectedColor]?.value || '', // For color display
      modelDetails: product.model[selectedModel]?.details || '' // Additional model info
    };
    
    addToCart(cartItem);
    navigate('/Basket');
  };

  return (
    <div>
      <Header />
      <div className="productTittleMain">
        <h1> Buy {product.name}</h1>
        <p> From $ {product.price} or {divid(product)}/mo. for 24 mo.* </p>
      </div>
      
      <div className="justPadding">
        <div className="ProductLayout">
          <div className="carousel-container">
            <button className="carousel-button prev" onClick={goToPrev}>←</button>
            <img 
              src={getCurrentImage()} 
              alt="No pic found"
              className="carousel-image"
            />
            <button className="carousel-button next" onClick={goToNext}>→</button>
          </div>

          <div className="leftLayout">
            {product?.model?.map((model, index) => (
              <div 
                className="ProductModelMain" 
                key={index}
                onClick={() => setSelectedModel(index)}
              >
                <div 
                  className="cardComm" 
                  style={{ 
                    cursor: 'pointer',
                    border: selectedModel === index ? '2px solid blue' : '1px solid #ddd',
                    padding: selectedModel === index ? '14px' : '15px' // Adjust padding to account for border
                  }}
                >
                  <h4 className="card-title">{model.name}</h4>
                  <p className="card-text">6.3-inch display footnote¹</p>
                </div>
              </div>
            ))}

            <div className="ProductcolorMainbox">
              {product?.colors?.map((color, index) => (
                <div key={index} className="colorItem">
                  <p className="colorLabel">
                    {selectedColor === index ? color.name : '\u00A0'}
                  </p>
                  <button
                    className="ProductcolorMain"
                    style={{
                      cursor: 'pointer',
                      backgroundColor: color.value,
                      border: selectedColor === index ? '2px solid blue' : 'none',
                    }}
                    onClick={() => {
                      setSelectedColor(index);
                      // Don't reset carousel index when color changes
                    }}
                  ></button>
                </div>
              ))}
            </div>
            <input className="ProductQuantityinput" type="number"></input>

            <button className="addProductButton" onClick={handleAddToCart}>Add to Bag</button>
          </div>
        </div>
      </div>
      <WritingBig />
    </div>
  );
}

export default ProductView;