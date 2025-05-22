import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Components/Home';
import Signin from './Components/Signin';
import Createaccount from './Components/Createaccount';
import Profile from './Components/Profile';
import { ToastContainer } from 'react-toastify';
import Logout from './Components/Logout';
import Protector from './Protector';
import Shop from './Components/Shop';
import ProductView from './Components/ProductView';
import 'bootstrap/dist/css/bootstrap.min.css';
import Basket from './Components/Basket';
import { CartProvider } from "./CartContext";

function App() {
  return ( 
    <Router>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/createanaccount" element={<Createaccount />} />
          <Route path="/profile" element={<Protector><Profile /></Protector>}/>
          <Route path="/Logout" element={<Logout />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/ProductView/:id" element={<ProductView />} />
          <Route path="/Basket" element={<Basket />} />
        </Routes>
        <ToastContainer />
      </CartProvider>
    </Router>
  )
}

export default App