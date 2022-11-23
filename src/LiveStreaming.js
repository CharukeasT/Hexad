import React from 'react';
import './LiveStreaming.css';
import LiveStream from './LiveStreaming.mp4'
import {Link} from "react-router-dom"
function LiveStreaming() {
  return (
    <>
    <div className='form'>
        <br></br>
        <a><Link to="/Home">
        <button className="img1">
        </button>
        </Link>
        </a>
        <h1 className="h11">Streaming</h1>
        <video className='vid1' src={LiveStream} autoplay="true" loop="true"> </video> 
        <div><h2 className='h61'>
        High Waist Skirt </h2>
        <h2 className='h54'>
          Rs.1500 &ensp;&ensp;&ensp;20%off</h2>
        <a><Link to="/HexadPremium"><button className='b6'><h3 className='h58'>HEXAD PREMIUM</h3></button></Link></a>
        <div className='div73'></div>
        </div>
        <div className='div72'></div>
      </div>
    </>    
  )
}

export default LiveStreaming