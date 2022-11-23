import React from 'react';
import './PriceGraph.css';
import {Link} from "react-router-dom"
function PriceGraph() {
  return (
    <>
    <div className='form1'>
        <br></br>
        <a><Link to="/OrderDetails">
        <button className="img1">
        </button>
        </Link>
        </a>
        <a><Link to="/Payment"><button className='b3'>Buy it Now</button></Link></a>
      </div>       
    </>    
  )
}

export default PriceGraph