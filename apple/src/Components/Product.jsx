import React from 'react';
import someimage from '../Pics/iphonetrypic.png';
import '../App.css';
import { Link } from 'react-router-dom';

function Product({ products }) {

  
  const handleClick = () => {
  };

  return (
    <div className="productListPage">
      {products.map((product) => {
        const imageUrl = product.media?.[0]?.url;
        const fullImageUrl = imageUrl ? `http://localhost:1337${imageUrl}` : someimage;

        return (
          <Link to={`/ProductView/${product.id}`} key={product.id}>
           <div className="cardCom clickable-card" onClick={handleClick}>
            <img className="card-image" src={fullImageUrl} alt="product" />
            <h1 className="card-title">{product.name}</h1>
            <p className="card-text">${product.price}</p>
          </div>
          </Link>
        );
      })}
    </div>
  );
}

export default Product;
