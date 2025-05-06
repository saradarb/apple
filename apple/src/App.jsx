import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Components/Home';
import Signin from './Components/Signin';
import Createaccount from './Components/Createaccount';
import Profile from './Components/Profile';
import { ToastContainer } from 'react-toastify';
import Logout from './Components/Logout';
import Protector from './Protector';



function App() {
  return ( 
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Signin" element={<Signin />} />
      <Route path="/createanaccount" element={<Createaccount />} />
      <Route path="/profile" element={<Protector> <Profile /> </Protector> }/>
      <Route path="/Logout" element={<Logout />} />
    </Routes>
    <ToastContainer />
  </Router>

  )
}

export default App