import React from 'react';
import './OrderDetails.css';
import {Link} from "react-router-dom"
function OrderDetails() {
  return (
    <>
    <div className='form'>
        <br></br>
        <a><Link to="/Categories">
        <button className="img1">
        </button>
        </Link>
        </a>
        <div className='img61'></div>
        <h1 className='h47'>High Waist Skirt</h1><br></br><br></br><br></br><br></br><br></br><br></br>
        <h2 className='h48'>Rs.1200 &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;30%off</h2>
        <p className='h49'>SIZE</p><br></br><br></br><br></br><br></br><br></br><br></br>
        <div className='div66'>
        <a><Link  to=""><button className='div62'><br></br><h2 className='h51'>XS</h2></button></Link></a>
        <a><Link  to=""><button className='div62'><br></br><h2 className='h51'>S</h2></button></Link></a>
        <a><Link  to=""><button className='div62'><br></br><h2 className='h51'>M</h2></button></Link></a>
        <a><Link  to=""><button className='div62'><br></br><h2 className='h51'>L</h2></button></Link></a>
        </div>
      </div>       
    </>    
  )
}

export default OrderDetails