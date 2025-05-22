import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const CartContext = createContext();

export function CartProvider({ children }) {
  // Load initial cart from localStorage (for guests) or Strapi (for logged-in users)
  const [cartItems, setCartItems] = useState(() => {
    const localCart = localStorage.getItem('guestCart');
    return localCart ? JSON.parse(localCart) : [];
  });
  
  const [currentUser, setCurrentUser] = useState(null);

  // 1. Save to localStorage whenever cart changes (guest users)
 useEffect(() => {
 if (!currentUser) {
 localStorage.setItem('guestCart', JSON.stringify(cartItems));
    }
  }, [cartItems, currentUser]);

  // 2. Strapi Cart Functions
  const fetchUserCart = async (userId) => {
    try {
      const { data } = await axios.get(
        `http://localhost:1337/api/carts?filters[user][id][$eq]=${userId}&populate=*`
      );
      return data[0]?.attributes.items || [];
    } catch (error) {
      console.error("Failed to fetch cart:", error);
      return [];
    }
  };

  const saveCartToStrapi = async (userId, items) => {
    try {
      const { data: existingCarts } = await axios.get(
        `http://localhost:1337/api/carts?filters[user][id][$eq]=${userId}`
      );

      if (existingCarts.length > 0) {
        await axios.put(
          `http://localhost:1337/api/carts/${existingCarts[0].id}`,
          { data: { items } }
        );
      } else {
        await axios.post('http://localhost:1337/api/carts', {
          data: { items, user: userId }
        });
      }
    } catch (error) {
      console.error("Failed to save cart:", error);
    }
  };

  // 3. Cart Operations
  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => 
        item.id === product.id && 
        item.selectedColor === product.selectedColor &&
        item.selectedModel === product.selectedModel
      );

      const newItems = existingItem
        ? prevItems.map(item =>
            item.id === product.id &&
            item.selectedColor === product.selectedColor &&
            item.selectedModel === product.selectedModel
              ? { ...item, quantity: item.quantity + product.quantity }
              : item
          )
        : [...prevItems, product];

      // Auto-save for logged-in users
      if (currentUser) saveCartToStrapi(currentUser.id, newItems);
      return newItems;
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems(prevItems => {
      const newItems = prevItems.filter(item => item.id !== itemId);
      if (currentUser) saveCartToStrapi(currentUser.id, newItems);
      return newItems;
    });
  };

  const updateQuantity = (itemId, newQuantity) => {
    setCartItems(prevItems => {
      const newItems = prevItems.map(item => 
        item.id === itemId ? { ...item, quantity: Math.max(1, newQuantity) } : item
      );
      if (currentUser) saveCartToStrapi(currentUser.id, newItems);
      return newItems;
    });
  };

  // 4. Auth Handlers
  const loginUser = async (user) => {
    const strapiCart = await fetchUserCart(user.id);
    setCartItems(strapiCart.length > 0 ? strapiCart : JSON.parse(localStorage.getItem('guestCart') || '[]'));
    setCurrentUser(user);
    localStorage.removeItem('guestCart');
  };

  const logoutUser = () => {
    // Save cart to localStorage before clearing
    localStorage.setItem('guestCart', JSON.stringify(cartItems));
    setCurrentUser(null);
    setCartItems([]); // Clear the cart in context
  };

  return (
    <CartContext.Provider 
      value={{ 
        cartItems, 
        addToCart, 
        removeFromCart, 
        updateQuantity,
        loginUser,
        logoutUser 
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}