import React from 'react';
import './Dropers.css';

const Dropers = () => {
  return (
    <div className="navbar">
      <div className="nav-item">
        Store
        <div className="mega-menu">
          <div className="mega-column">
            <p>Shop</p>
            <ul className="listOne">
              <li>Shop the Latest</li>
              <li>Mac</li>
              <li>iPad</li>
              <li>iPhone</li>
              <li>Apple Watch</li>
              <li>Apple Vision Pro</li>
              <li>Accessories</li>
            </ul>
          </div>
          <div className="mega-column">
            <p>Quick Links</p>
            <ul className="lisrTT">
              <li>Find a Store</li>
              <li>Order Status</li>
              <li>Apple Trade In</li>
              <li>Financing</li>
              <li>Personal Setup</li>
            </ul>
          </div>
          <div className="mega-column">
            <p>Shop Special Stores</p>
            <ul className="lisrTT">
              <li>Certified Refurbished</li>
              <li>Education</li>
              <li>Business</li>
              <li>Veterans and Military</li>
              <li>Government</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropers;
