import React from 'react';
import './HexadPremium.css';
import {Link} from "react-router-dom"
function HexadPremium() {
  return (
    <>
    <div className='form'>
        <br></br>
        <a><Link to="/LiveStreaming">
        <button className="img1">
        </button>
        </Link>
        </a>
        <h1 className="h65">Hexad Premium</h1>
        <br></br><br></br>
        <div className='div79'></div>
        <div className='div80'><p className='h66'>Direct contact with owner,
        Live experience of the product,Exciting special offers</p></div>
        <button className='b9'><h1 className='h67'>Try it FREE</h1></button>
        <br/><br/><br/><br/><br/>
        <h2 className='h68'>1 month free trial . Then $12/month</h2>
        <h2 className='h68'>we’ll remind you 7 days before your trial ends</h2>
        <a><Link to="/Payment"><button className='b10'><h1 className='h69'>Buy NOW</h1></button></Link></a>
      </div>       
    </>    
  )
}

export default HexadPremium