import { useCart } from '../CartContext';
import './Basket.css';
import Header from './Header';
import { useState, useEffect } from 'react';
import { userData } from '../helpers';
import { Link } from 'react-router-dom';


function Basket() {
  const { cartItems, removeFromCart, updateQuantity, loading } = useCart();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const {username} = userData();
  
  useEffect(() => {
    // Check if user is logged in
    const user = userData();
    setIsLoggedIn(!!user.jwt);
  }, []);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  if (loading) {
    return (
      <div className="basket-container">
        <Header />
        <h1>Your Shopping Basket </h1>
        <div className="loading-spinner">Loading your basket...</div>
      </div>
    );
  }

  return (
    <div className="basket-container">
      <Header />
      <h1>Your Shopping Basket {username}</h1>
      
      {!isLoggedIn && (
        <div className="basket-login-message">
          <p>
            <Link to="/signin">Sign in</Link> to save your basket and access it on any device
          </p>
        </div>
      )}
      
      {cartItems.length === 0 ? (
        <div className="empty-basket">
          <p>Your basket is empty</p>
          <Link to="/" className="continue-shopping">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <div className="leftSideItems">
            <div className="basket-items">
              {cartItems.map((item) => (
                <div
                  key={`${item.id}-${item.selectedModel}-${item.selectedColor}`}
                  className="basket-item"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="basket-item-image"
                  />
                  <div className="basket-item-details">
                    <h3>{item.name}</h3>
                    <p>Model: {item.selectedModel}</p>
                    <div className="color-display">
                      <span>Color: </span>
                      <span
                        className="color-swatch"
                        style={{ backgroundColor: item.colorValue }}
                        title={item.selectedColor}
                      />
                    </div>
                  </div>
                  <div className="rightSideItems">
                    <div className="quantity-controls">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, Math.max(1, item.quantity - 1))
                        }
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                    <p>Price: ${(item.price * item.quantity).toFixed(2)}</p>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="remove-button"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="basket-summary">
            <h3>Order Summary</h3>
            <p>
              Total Items:{" "}
              {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
            </p>
            <p>Subtotal: ${calculateTotal().toFixed(2)}</p>
            <button className="checkout-button">
              {isLoggedIn ? "Proceed to Checkout" : "Sign In to Checkout"}
            </button>
            
            {!isLoggedIn && (
              <p className="guest-checkout-option">
                or <Link to="/checkout">continue as guest</Link>
              </p>
            )}
          </div>
        </>
      )}
        <div className="registerLinkLogin">
               <Link to='/Logout'>Logout</Link>
       </div>
    </div>
    
  );
}

export default Basket;