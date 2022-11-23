import React from 'react';
import './LiveStudio.css';
import LiveVideo from './LiveVideo.mp4'
import {Link} from "react-router-dom"
function LiveStudio() {
  return (
    <>
    <div className='form'>
        <br></br>
        <a><Link to="/Categories">
        <button className="img1">
        </button>
        </Link>
        </a>
        <h1 className="h11">Studio</h1>
        <div className='div70'></div>
        <h1 className='h55'>Olivia Mandal</h1>
        <h3 className='h56'>Few days ago</h3>
        <h2 className='h57'>Follow</h2>
        <br></br><br></br><br></br><br></br>
        <video src={LiveVideo} width="1200px" height="500px" autoplay="true" loop="true"> </video> 
        <div className='div71'></div>
      </div>
    </>    
  )
}

export default LiveStudio