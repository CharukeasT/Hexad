import React from 'react';
import './Logo.css';
import {Link} from "react-router-dom"
function Logo() {
  return (
    <>
    <div className='b'>
        <a><Link to="/Home">
        <button className="logo">
        </button>
        </Link>
        </a>
      </div>       
    </>    
  )
}

export default Logo