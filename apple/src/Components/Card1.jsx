import React from 'react'
import iphones from '../Pics/PicIphon.jpg'
import './Dropers.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';



function Card1() {
  return (<>
      <div className="card1">
        <div className="thewriting">
        <h1>iPhone</h1>
        <h2>Meet the iPhone 16 family</h2>
        <div className="ButtonsMainPage">
        <Stack spacing={2} direction="row">
          <Button sx={{ borderRadius: '30px', fontSize: 16,  textTransform: 'capitalize', height: '55px', width: '170px'}} variant="contained">Learn more</Button>
          <Button sx={{ borderRadius: '30px',  fontSize: 16, textTransform: 'capitalize', height: '55px', width: '170px' }} variant="outlined">Shop iPhone</Button>
        </Stack>
        </div>
        <p className="rainbow-text">Build for Apple Intelligence.</p>    
        </div>
        <img className="iphonesPics1" src={iphones} alt="pic1"></img>

    </div>
    
  </>

  )
}

export default Card1