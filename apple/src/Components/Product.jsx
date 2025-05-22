import React from 'react';
import someimage from '../Pics/iphonetrypic.png';
import '../App.css';
import { Link } from 'react-router-dom';

function Product({ products }) {
  return (
    <div className="productListPage">
      {products.map((product) => {
        const imageUrl = product.media?.[0]?.url;
        const fullImageUrl = imageUrl ? `http://localhost:1337${imageUrl}` : someimage;

        return (
          <div className="cardCom" key={product.id} >
            <Link to={`/ProductView/${product.id}`} className="clickable-card">
              <img className="card-image" src={fullImageUrl} alt="product" />
              <h1 className="card-title">{product.name} </h1>
              <p className="card-text">${product.price}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Product;
