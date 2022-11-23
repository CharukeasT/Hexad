import React from 'react';
import './Certificate.css';
import {Link} from "react-router-dom"
function Certificate() {
  return (
    <>
    <div className='form'>
        <br></br>
        <a><Link to="/OrderDetails">
        <button className="img1">
        </button>
        </Link>
        </a>
        <h1 className='h45'>Assurance Certificate</h1>
        <div className='div60'></div>
        <div className='div61'>
        <p className='h46'>Customers will believe that the products are of top quality based 
            on the clear approval marks awarded by external companies. Therefore,
            you can ensure that your online store is trustworthy by performing
            product inspections. Make sure to add the quality assurance certificate
            if any and also try to provide all the details about your product precisely.</p>
        <p className='h46'>As a retailer, make sure you don’t compromise on product quality.
            Quality matters in every stage of the production line. If you produce higher quality
            goods, then you will eventually sell more products and earn higher profits later.
            Also, encourage customer feedback and ask them to share their detailed reviews
            along with some images or videos so that other customers can easily check their
            reviews about products and make a purchase decision.</p>
        </div>
      </div>       
    </>    
  )
}

export default Certificate