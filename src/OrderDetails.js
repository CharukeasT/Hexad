import React from 'react';
import './OrderDetails.css';
import {Link} from "react-router-dom"
function OrderDetails() {
  return (
    <>
    <div className='form'>
        <br></br>
        <a><Link to="/Skirts">
        <button className="img1">
        </button>
        </Link>
        </a>
        <div className='div64'>
          <p className='h52'>Give your wardrobe a classic update with this purple pencil skirt.
           This high-waisted piece comes with a buttoned front and pockets to slip in your essentials.</p>
          <p className='h52'>
          <u>Style Tip:</u> Pair the skirt with a graphic t-shirt and sneakers for an uber cool look.</p>
        </div>
        <div className='img61'></div>
        <h1 className='h47'>High Waist Skirt</h1><br></br><br></br><br></br><br></br><br></br><br></br>
        <h2 className='h48'>Rs.1200 &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;30%off</h2>
        <a><Link to="/Certificate"><button className='div65'><h2 className='h53'>Assurance Certificate</h2></button></Link></a>
        <p className='h49'>SIZE</p><br></br><br></br><br></br><br></br><br></br><br></br>
        <div className='div66'>
        <a><Link  to=""><button className='div62'><br></br><h2 className='h51'>XS</h2></button></Link></a>
        <a><Link  to=""><button className='div63'><br></br><h2 className='h51'>S</h2></button></Link></a>
        <a><Link  to=""><button className='div63'><br></br><h2 className='h51'>M</h2></button></Link></a>
        <a><Link  to=""><button className='div63'><br></br><h2 className='h51'>L</h2></button></Link></a>
        </div>
        <div className='div67'>
        <a><Link  to="/Cart"><button className='div68'><br></br><h2 className='h59'>Add to Cart</h2></button></Link></a>
        <a><Link  to="/LiveStreaming"><button className='div69'><br></br></button></Link></a>
        <a><Link  to="/Payment"><button className='div74'><br></br><h2 className='h60'>Buy NOW</h2></button></Link></a>
        </div>
        <div className='b7'></div>
        <div className='b8'></div>
        <div className='img50'></div>
        <div className='img51'></div>
        <div className='div75'><p className='h62'>Watch Graph</p></div>
        <div className='div76'><p className='h62'>Watch Price</p></div>
        <a><Link to="/PriceGraph"><button className='div77'></button></Link></a>
        <a><Link to="/PriceWatch"><button className='div78'></button></Link></a>
      </div>       
    </>    
  )
}

export default OrderDetails