import React, { useState } from 'react'
import Header from './Header';
import '../App.css';
import axios from "axios"
import {toast} from "react-toastify"
import { Navigate, useNavigate } from 'react-router';


const intialUser = {username:"",email:"",password:"" };

function Createaccount() {

  const [user, setUser] = useState(intialUser);
  const navigate = useNavigate();


const handleUserChange = ({target}) => {
  const {name, value} = target;
  setUser((curruntUser) => ({
    ...curruntUser,
    [name] : value
  }
  ))
};

const signingUp = async() => {
  const url = "http://localhost:1337/api/auth/local/register";
  try {
    if(user.username && user.email && user.password) {
      const res = await axios.post(url, user);
      if(res) {
        setUser(intialUser);
        navigate("/Signin");
      }
    }
  } catch (error) {
    toast.error(error.message, {
      hideProgressBar: true,
    });
  }
};




  return (
    <>
    <Header />
    <h1 className="theh1">Become a memeber of our community</h1>
    <div className="signinform">
      <h2>Fill in your information</h2>
      <div className="mb-3">
      <label htmlFor="exampleFormControlInput1" className="form-label">
      </label>
      <input
        type="text"
        className="form-control"
        id="exampleFormControlInput11"
        placeholder="What's your name?"
        name="username"
        value={user.username}
        onChange={handleUserChange}
      />
    </div>
    <div className="mb-3">
      <label htmlFor="exampleFormControlInput1" className="form-label">
      </label>
      <input
        type="email"
        className="form-control"
        id="exampleFormControlInput12"
        placeholder="What's your email adress?"
        name="email"
        value={user.email}
        onChange={handleUserChange}
      />
    </div>
    <div className="mb-3">
      <label htmlFor="exampleFormControlInput1" className="form-label">
      </label>
      <input
        type="email"
        className="form-control"
        id="exampleFormControlInput13"
        placeholder="Choose a Password"
        name="password"
        value={user.password}
        onChange={handleUserChange}
      />
    </div >
    <button className="createbutton" onClick={signingUp}>Create an account</button>
    </div>
    
  
    


  </>
  )
}

export default Createaccount