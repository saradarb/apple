import React, { useState } from 'react';
import Header from './Header';
import '../App.css';
import axios from "axios"
import {toast} from "react-toastify"
import { Link, useNavigate } from 'react-router-dom';
import { storeUser } from '../helpers';




const intitialUser = {password: "", identifier: ""};

function Signin() {


const [user, setUser] = useState(intitialUser);
const navigate = useNavigate();

const handleChange = ({target}) => {
  const {name, value} = target;
  setUser((currentUser)=>({
    ...currentUser,
    [name] : value
  }));
};

const handleLogin = async() => {
   const url = "http://localhost:1337/api/auth/local"
  try {
    if (user.identifier && user.password) {
      const { data } = await axios.post(url, user);
      if(data.jwt) {
        storeUser(data)
        toast.success("Logged in successfully!", {
          hideProgressBar: true,
        });
        setUser(intitialUser)
        navigate("/shop")
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
      <h1 className="theh1">Sign in for faster checkout</h1>
      <div className="signinform">
        <h2>Sign in to Apple Store </h2>
        {/*email*/}
        <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
        </label>
        <input
          type="identifier"
          className="form-control"
          id="exampleFormControlInput1"
          name="identifier"
          placeholder="Entre your email address"
          value={user.identifier}
          onChange={handleChange}
        />
      </div>
      <div className="mb-32">
        <label htmlFor="inputPassword5" className="form-label">
        </label>
        {/*password*/}
        <input
          type="password"
          id="inputPassword5"
          className="form-control"
          placeholder="Password"
          name="password"
          value={user.password}
          onChange={handleChange}
          aria-describedby="passwordHelpBlock"/>
        <div id="passwordHelpBlock" className="form-text"> <br/>
        </div>

                {/*button*/}

        <div className="d-grid gap-2">
        <button 
        className="btn btn-primary" 
        type="button"
        onClick={handleLogin}
        >
        Sign in
        </button>
       </div>
       <div className="registerLinkLogin">
               <p>Dont have an acount? click <Link to='/createanaccount'>Here</Link></p>
       </div>
      </div>
</div>
  
    </>
  );
}

export default Signin;
