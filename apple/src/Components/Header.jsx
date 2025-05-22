import React from 'react'
import AppleIcon from '@mui/icons-material/Apple';
import SearchIcon from '@mui/icons-material/Search';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import Dropers from './Dropers';
import ShoppingCart from './ShoppingCart';
import { Link } from 'react-router-dom'; 
import '../index.css'




function Header() {
  return (
    <div className="header">
        <AppleIcon />
        <Link to="/Shop" aria-label="View shopping basket" style={{textDecoration: "none"}}>
        <Dropers />
        </Link>
        <div>Mac</div> 
        <div>IPad</div>
        <div>IPhone</div>
        <div>Watch</div>
        <div>Vision</div>
        <div>AirPods</div>
        <div>TV & Home</div>
        <div>Entertainment</div>
        <div>Accessories</div>
        <div>Support</div>
        <SearchIcon />
        <Link to="/Basket" aria-label="View shopping basket">
        <ShoppingCart />
      </Link>
    </div>

    
  )
}
export default  Header
