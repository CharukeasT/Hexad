import React from 'react';
import './PriceWatch.css';
import {Link} from "react-router-dom"
function PriceWatch() {
  return (
    <>
    <div className='form'>
        <br></br>
        <a><Link to="/OrderDetails">
        <button className="img1">
        </button>
        </Link>
        </a>
        <div>
          <div className='img30'></div>
          <h3 className='h35'>Added to Price Watch List !</h3>
          <p className='h36'>You will be alerted when the price falls</p>
          <h2 className='h37'>______________________________________________________________________________________________________________</h2>
          <p className='h38'>Price watch set at: Rs.1200</p>
          <p className='h39'>Current price is : Rs.1200</p>
          <p className='h40'>Rs.0 </p><p className='h41'>(&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; difference)</p>
          <p className='h42'>Alert when price is less than : __________________________________</p>
          <p className='h43'>Enter your Email ID to sync your alerts:</p>
          <input className='in1' type="text" placeholder='xyz@gmail.com'></input><br></br><br></br><br></br><br></br>
          <button className='b4'>Remove from WatchList</button>
          <button className='b5'>Submit</button><br></br><br></br>
          <h2 className='h44'>View your Price Alerts>>>></h2>
        </div>
      </div>       
    </>    
  )
}

export default PriceWatch