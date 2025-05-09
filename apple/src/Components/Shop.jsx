import React, { useState } from 'react';
import { useProducts } from './useProducts';
import Header from './Header';
import '../App.css';
import maclogo from '../Pics/maclogo.png';
import Product from './Product';
import Categories from './Categories';
import Airpodslogo from '../Pics/airpodscat.png';
import airtaglogo from '../Pics/airtagcat.png';
import watchlogo from '../Pics/watchcat.png';
import ipadlogo from '../Pics/ipadcat.png';
import iphonelogo from '../Pics/iphonecat.png';
import accslogo from '../Pics/accessoriescat.png';

function Shop() {
  const { categories, products } = useProducts();

  
  const [selectedCategory, setSelectedCategory] = useState(null); 

  const callCategory = (categoryName) => {
    setSelectedCategory(categoryName); 
  };

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category.name === selectedCategory)
    : products;

  return (
    <>
      <Header />
      <div className="shopwriting">
        <p>
          <span className="highlight">Store.</span>{' '}
          <span className="normal-text">The best way to buy the products you love.</span>
        </p>
      </div>

      <div className="categoriesDisplay">
        <Categories image={maclogo} title="Mac" onClick={callCategory} />
        <Categories image={Airpodslogo} title="AirPods" onClick={callCategory} />
        <Categories image={airtaglogo} title="AirTag" onClick={callCategory} />
        <Categories image={watchlogo} title="Apple Watch" onClick={callCategory} />
        <Categories image={ipadlogo} title="Ipad" onClick={callCategory} />
        <Categories image={iphonelogo} title="Iphone" onClick={callCategory} />
        <Categories image={accslogo} title="accessories" onClick={callCategory} />
      </div>

      <Product products={filteredProducts} />
    </>
  );
}

export default Shop;
