import React from 'react';
import someimage from '../Pics/iphonetrypic.png';
import '../App.css';

function Product({ products }) {

  
  const handleClick = () => {
  };

  return (
    <div className="productListPage">
      {products.map((product) => {
        const imageUrl = product.media?.[0]?.url;
        const fullImageUrl = imageUrl ? `http://localhost:1337${imageUrl}` : someimage;

        return (
          <div key={product.id} className="cardCom clickable-card" onClick={handleClick}>
            <img className="card-image" src={fullImageUrl} alt="product" />
            <h2 className="card-title">{product.name}</h2>
            <p className="card-text">${product.price}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Product;
