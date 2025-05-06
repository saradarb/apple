import React from 'react';
import './Dropers.css';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';




const ShoppingCart = () => {
  return (
    <div className="navbar">
      <div className="nav-item">
      <WorkOutlineIcon />
        <div className="mega-menu">
          <div className="mega-column">
            <h1>Your Bag is Empty</h1>
            <h4>Sign in to see if you have any Saved items</h4>
            <p>My Profile</p>
            <ul className="listOnly">
              <li><ViewInArIcon />  Orders</li>
              <li><BookmarkBorderIcon />   Your Saves</li>
              <li><SettingsIcon />    Account</li>
              <li><AccountBoxIcon />    Sign in</li>
            </ul>
          </div>
         
          
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;